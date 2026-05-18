import Section from '../Section';
import Image from 'next/image';
import ActionButton from '../../ActionButton';
import SectionTitle from '../../SectionTitle';
import Paragraph from '../../Paragraph';
import Link from 'next/link';

const DownloadAppSection = () => {
    return (
        <Section className="pb-0 bg-[#EEF8FF] overflow-hidden lg:pb-0 md:pb-0" id="download">

            <SectionTitle>Download Our App</SectionTitle>
            
            <Paragraph
                className="max-w-full mt-1 text-center"
                content="Available for Android devices"
            />

            <div className="relative flex flex-col md:flex-row max-w-6xl w-full mx-auto mt-12 md:mt-20 items-center gap-10">

                {/* Background illustration – visible on md+ */}
                <div className="hidden md:flex shrink-0 relative w-[340px] lg:w-[420px] xl:w-[520px]">
                    <Image
                        src="/webp/bg/download-bg.webp"
                        alt="Download illustration"
                        width={700}
                        height={400}
                        loading="lazy"
                        className="w-full h-auto"
                    />
                </div>

                {/* Copy */}
                <div className="flex flex-col gap-3 items-center text-center md:items-start md:text-left z-10 pb-12">
                    <SectionTitle className="text-[#1B7CF5] lg:text-left">
                        Start Learning German Today
                    </SectionTitle>
                    <Paragraph
                        className="text-base"
                        content="Langphy is now available. Take the first step toward learning German with clarity and confidence."
                    />

                    {/* <ActionButton
                        title="Download on Google Playstore" href="#download" className='mt-4'
                        // eslint-disable-next-line react/jsx-no-duplicate-props
                        href={new URL("https://play.google.com/store/apps/details?id=com.langphy.app&pcampaignid=web_share")}
                        // target="_blank"
                        // rel="noopener noreferrer"
                    /> */}
                    <Link
                        href="https://play.google.com/store/apps/details?id=com.langphy.app&pcampaignid=web_share"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-poppins inline-flex items-center rounded-full bg-[#142C57] px-6 py-3 text-white font-medium text-sm transition-colors hover:bg-[#000000] mt-4"
                    >
                        Download on Google Playstore
                    </Link>
                
                </div>

                {/* Mobile-only illustration shown below text */}
                <div className="flex md:hidden w-full justify-center mt-4">
                    <Image
                        src="/webp/bg/download-bg.webp"
                        alt="Download illustration"
                        width={700}
                        height={400}
                        loading="lazy"
                        className="w-full max-w-sm h-auto"
                    />
                </div>

            </div>
        </Section>
    );
}

export default DownloadAppSection;