"use client";
import { memo, useEffect, useMemo, useState } from 'react';
import Image from 'next/image'
import SectionTitle from '../../SectionTitle';
import InfoTag from '../../InfoTag';
import Paragraph from '../../Paragraph';
import ContentTitle from '../../ContentTitle';
import FeatureBgImage from './_partials/FeatureBgImage';

const FeaturesSection = () => {
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
            
            <FeatureBgImage />

            <div className="flex flex-col max-w-6xl w-full mx-auto items-center gap-6 z-10">
    
                <InfoTag info="FEATURES" invert />

                <SectionTitle invert>
                    Everything You Need to Learn<br className="lg:hidden sm:flex" /> German in One App
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