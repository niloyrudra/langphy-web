import InfoTag from '../../InfoTag';
import Paragraph from '../../Paragraph';
import SectionTitle from '../../SectionTitle';
import Section from '../Section';
import Image from 'next/image';

const Branding = () => {
    return (
        <Section id="branding">
            <div className="flex flex-col md:flex-row max-w-6xl w-full mx-auto items-center gap-12 md:gap-16">
                {/* Copy – shown first on mobile */}
                <div className="flex flex-col gap-4 items-center text-center md:items-start md:text-left order-1">
                    
                    <InfoTag info="OCEAN BRANDING" />

                    <SectionTitle className="text-left">
                        A Calm, Guided Learning<br className="hidden sm:block" />Experience.
                    </SectionTitle>
                    
                    <Paragraph
                        content="Langphy’s ocean-inspired design reflects a calm and structured approach to learning. Language learning has depth — but with the right guidance, it becomes clear and manageable."
                    />
                    <Paragraph
                        content="Our dolphin mascot represents intelligence, communication, and friendly support — guiding you through your German learning journey."
                    />
                </div>
        
                {/* Blob illustration */}
                <div className="flex shrink-0 items-center justify-center order-2 w-full md:w-auto">
                    <Image
                        src="/svg/about-section-blobs/ocean-branding.svg"
                        alt="Ocean Branding illustration"
                        width={489}
                        height={165}
                        loading="lazy"
                        className="w-[280px] sm:w-[380px] md:w-[460px] lg:w-[520px] h-auto"
                    />
                </div>
            </div>
        </Section>
    );
}

export default Branding;