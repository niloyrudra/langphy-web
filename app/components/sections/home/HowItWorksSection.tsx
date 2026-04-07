import { useMemo } from 'react';
import Image from 'next/image'
import InfoTag from '../../InfoTag';
import SectionTitle from '../../SectionTitle';
import Section from '../Section';
import Paragraph from '../../Paragraph';
import ContentTitle from '../../ContentTitle';

export default function HowItWorksSection() {
    const howItWorksSteps = useMemo(() => ([
        { n: 1, title: "Choose a category", desc: "Start with topics like alphabet, greetings, or everyday conversations." },
        { n: 2, title: "Understand the concept", desc: "Read clear explanations and grammar notes before practising." },
        { n: 3, title: "Learn with examples", desc: "See how words and phrases are used in real context." },
        { n: 4, title: "Practice actively", desc: "Engage with quizzes and exercises across Writing, Speaking, Listening and Reading." },
        { n: 5, title: "Build confidence", desc: "Use German naturally in real-life situations." },
    ]), []);

    return (
        <Section className="bg-[#F9FAFB]" id="how-works">
            <div className="flex flex-col max-w-6xl w-full mx-auto items-center gap-6">
    
                <InfoTag info="HOW LANGPHY WORKS" />

                <SectionTitle>
                    Short lessons, real practice, and clear<br className="lg:hidden sm:flex" />progress — all in one app
                </SectionTitle>
                    
                {/* ── Mobile: vertical numbered list ── */}
                <ol className="flex md:hidden flex-col gap-4 w-full max-w-md mt-5">
                    {howItWorksSteps.map(({ n, title, desc }) => (
                        <li key={n} className="flex gap-4 items-start bg-white rounded-2xl p-5 shadow-sm">
                            <span className="flex shrink-0 w-9 h-9 rounded-full bg-[#EEF8FF] text-[#142C57] font-bold text-sm items-center justify-center">
                                {n}
                            </span>
                            <div>
                                <ContentTitle title={title} />
                                <Paragraph className="mt-0.5" content={desc} />
                            </div>
                        </li>
                    ))}
                </ol>
    
                {/* ── Desktop: original zigzag layout ── */}
                <div className="hidden md:flex flex-col w-full gap-4 mt-10">
                    {howItWorksSteps.map(({ n, title, desc }, i) => {
                        const isLeft = i % 2 === 0;
                        return (
                            <div key={n} className={`flex flex-row w-full ${isLeft ? "justify-start" : "justify-end"}`}>
                                <div className="flex w-[calc(50%+30px)]">
                                {isLeft ? (
                                    <>
                                        <div className="inline-flex flex-col w-full bg-white rounded-2xl p-6 gap-1 items-start text-left">
                                            <ContentTitle title={title} />
                                            <Paragraph content={desc} />
                                        </div>
                                        <div className="inline-flex items-center shrink-0">
                                            <Image src="/svg/line.svg" alt="" width={40} height={2} />
                                            <div className="relative flex items-center justify-center">
                                                <Image src="/svg/ball.svg" alt="" width={60} height={60} />
                                                <span className="absolute text-xl font-medium text-[#545454]">{n}</span>
                                            </div>
                                        </div>
                                    </>
                                ) : (
                                    <>
                                        <div className="inline-flex items-center shrink-0">
                                            <div className="relative flex items-center justify-center">
                                                <Image src="/svg/ball.svg" alt="" width={60} height={60} />
                                                <span className="absolute text-xl font-medium text-[#545454]">{n}</span>
                                            </div>
                                            <Image src="/svg/line.svg" alt="" width={40} height={2} />
                                        </div>
                                        <div className="inline-flex flex-col w-full bg-white rounded-2xl p-6 gap-1 items-start text-left">
                                            <ContentTitle title={title} />
                                            <Paragraph content={desc} />
                                        </div>
                                    </>
                                )}
                                </div>
                            </div>
                        );
                    })}
                </div>
    
            </div>
        </Section>
    );
}
