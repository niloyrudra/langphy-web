"use client";
import { memo, useEffect, useMemo, useState } from 'react';
import Image from 'next/image'
import SectionTitle from '../../SectionTitle';
import InfoTag from '../../InfoTag';
import Paragraph from '../../Paragraph';
import ContentTitle from '../../ContentTitle';

const FeaturesSection = () => {
    const [width, setWidth] = useState<number>(0);
    useEffect(() => {
        setWidth(window.innerWidth);
        const handleResize = () => setWidth(window.innerWidth);
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    const features = useMemo(() => ([
        { icon: "/svg/icons/category-icon.svg",         title: "62 Structured Categories",  desc: "Cover everyday German with clear organisation." },
        { icon: "/svg/icons/grammar-note-icon.svg",     title: "Grammar Notes",             desc: "Clear, and concise grammar explanations." },
        { icon: "/svg/icons/sticky-note-icon.svg",      title: "Real-Life Examples",        desc: "Additional context for practical usage." },
        { icon: "/svg/icons/proficiency-level-icon.svg",title: "Proficiency Levels",        desc: "Align with German language standards." },
        { icon: "/svg/icons/quiz-icon.svg",             title: "Interactive Quizzes",       desc: "Test your knowledge and track progress." },
        { icon: "/svg/icons/mic-icon.svg",              title: "Speaking Practice",         desc: "Improve your pronunciation skills." },
        { icon: "/svg/icons/book-open-icon.svg",        title: "Reading Practice",          desc: "Expand comprehension with engaging texts." },
        { icon: "/svg/icons/headphones-icon.svg",       title: "Listening Exercises",       desc: "Train your ears with native audio content." },
        { icon: "/svg/icons/pencil-edit-icon.svg",      title: "Writing Exercises",         desc: "Build vocabulary & sentence structure skills." },
    ]), []);

    return (
        <section className="flex w-full relative overflow-hidden flex-col py-20 md:py-28 px-4 bg-gradient-to-tl from-[#1B7CF5] to-[#0A9AB0]" id="features">
        
            <Image
                src="/svg/bg/features-bg.svg"
                alt="Langphy Features Background"
                width={width || 1440}
                height={(width || 1440) * 0.6}
                loading="eager"
                className="hidden lg:flex absolute top-0 left-0 right-0 w-full h-auto z-0 pointer-events-none sm:hidden"
            />
            <Image
                src="/svg/bg/features-bg-sm.svg"
                alt="Langphy Features Background"
                width={width || 1440}
                height={1984}
                loading="eager"
                className="lg:hidden md:flex absolute inset-0 h-full object-cover z-0 pointer-events-none"
            />
        
            <div className="flex flex-col max-w-6xl w-full mx-auto items-center gap-6 z-10">
    
                <InfoTag info="FEATURES" invert />

                <SectionTitle invert>
                    Everything You Need to Learn German<br className="lg:hidden sm:flex" />in One App
                </SectionTitle>
    
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 w-full mt-10">
                    {features.map(({ icon, title, desc }) => (
                        <div
                            key={title}
                            className="flex flex-col bg-white/10 backdrop-blur-sm border border-white/20 p-5 rounded-2xl gap-3 items-start text-left"
                        >
                            <div className="flex w-[60px] h-[60px] shrink-0 items-center justify-center bg-[#EEF8FF] rounded-2xl">
                                <Image src={icon} alt="" width={32} height={32} />
                            </div>
                            <div className="flex flex-col gap-1">
                                <ContentTitle title={title} invert />
                                <Paragraph content={desc} className="text-white" />
                            </div>
                        </div>
                    ))}
                </div>
    
            </div>

        </section>
    );
}

export default memo(FeaturesSection);