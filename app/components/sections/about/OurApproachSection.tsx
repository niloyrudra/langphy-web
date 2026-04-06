import { useMemo } from 'react'
import Image from 'next/image';
import InfoTag from '../../InfoTag';
import SectionTitle from '../../SectionTitle';
import Paragraph from '../../Paragraph';
import SectionBlock from '../SectionBlock';

const OurApproachSection = () => {
    const bulletPoints = useMemo(() => ([
        "Clear, not overwhelming",
        "Structured, not scattered",
        "Practical, not theoretical"
    ]), []);
    return (
        <SectionBlock id="solutions">
            {/* Blob – shown second on mobile (after copy), first on desktop */}
            <div className="flex shrink-0 items-center justify-center order-2 md:order-1 w-full md:w-auto">
                <Image
                    src="/webp/section/our-approach-blob.webp"
                    alt="Our Approach illustration"
                    width={480.71}
                    height={500}
                    loading="lazy"
                    className="w-[260px] sm:w-[340px] md:w-[400px] lg:w-[460px] h-auto"
                />
            </div>
    
            {/* Copy */}
            <div className="flex flex-col gap-4 items-center text-center md:items-start md:text-left order-1 md:order-2">
                
                <InfoTag info="OUR APPROACH" />

                <SectionTitle className="text-left">From understanding to confident communication.</SectionTitle>

                <Paragraph
                    content="Langphy organizes German learning into 62 carefully designed categories, each covering essential topics used in everyday communication."
                />

                <Paragraph content="We believe language learning should feel:" />
    
                <ul className="flex flex-col gap-2 list-none w-full max-w-lg">
                    {bulletPoints.map((item) => (
                        <li key={item} className="flex flex-row gap-4 items-center">
                            <Image
                                src="/svg/pointers/bullet-point.svg"
                                alt=""
                                width={16}
                                height={16}
                                className="shrink-0"
                            />
                            <Paragraph className="font-semibold" content={item} />
                        </li>
                    ))}
                </ul>
    
                <Paragraph
                    content="That’s why Langphy focuses on combining explanation, structure, and practice into one seamless experience."
                />
            </div>
        </SectionBlock>
    );
}

export default OurApproachSection;