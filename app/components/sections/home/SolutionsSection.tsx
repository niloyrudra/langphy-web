import { useMemo } from 'react'
import Section from '../Section';
import Image from 'next/image';
import InfoTag from '../../InfoTag';
import SectionTitle from '../../SectionTitle';
import Paragraph from '../../Paragraph';

const SolutionsSection = () => {
    const bulletPoints = useMemo(() => ([
        "Clear grammar explanations",
        "Real-life examples",
        "Vocabulary with context",
        "Interactive quizzes",
        "Speaking, listening, reading, and writing practice",
    ]), []);
    return (
        <Section id="solutions">
            <div className="flex flex-col md:flex-row max-w-6xl w-full mx-auto items-center gap-12 md:gap-16">
                {/* Blob – shown second on mobile (after copy), first on desktop */}
                <div className="flex shrink-0 items-center justify-center order-2 md:order-1 w-full md:w-auto">
                    <Image
                        src="/svg/home-section-blobs/section-solution-blob.svg"
                        alt="Solution illustration"
                        width={500}
                        height={576}
                        loading="lazy"
                        className="w-[260px] sm:w-[340px] md:w-[400px] lg:w-[460px] h-auto"
                    />
                </div>
        
                {/* Copy */}
                <div className="flex flex-col gap-4 items-center text-center md:items-start md:text-left order-1 md:order-2">
                    
                    <InfoTag info="The Solutions" />

                    <SectionTitle className="lg:text-left">A Structured Way to Learn German"</SectionTitle>

                    <Paragraph
                        content="Langphy organises German learning into 62 carefully designed categories, each covering essential topics used in everyday communication."
                    />

                    <Paragraph content="Every lesson includes:" />
        
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
                        content="Instead of jumping between different tools, learners can follow a structured path designed to build real confidence in German."
                    />
                </div>
            </div>
        </Section>
    );
}

export default SolutionsSection;