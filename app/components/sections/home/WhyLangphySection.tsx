import { useMemo } from 'react';
import Image from 'next/image'
import SectionTitle from '../../SectionTitle';
import InfoTag from '../../InfoTag';
import Paragraph from '../../Paragraph';
import ContentTitle from '../../ContentTitle';
import Section from '../Section';

export default function HowItWorksSection() {
    const whyReasons = useMemo(() => ([
        { color: "#EEF8FF", title: "Understand, Don't Memorize",       desc: "Langphy helps you understand how German actually works, going beyond simple memorisation." },
        { color: "#ECFFFF", title: "Structured German Learning",       desc: "Learn through organised categories with clear explanations, grammar, and real-life usage." },
        { color: "#EEF8FF", title: "Visual Color-Coded System",        desc: "Easily understand cases, genders, and parts of speech with intuitive colour-coded guidance." },
        { color: "#ECFFFF", title: "All Skills in One Place",          desc: "Practice speaking • listening • reading • writing within a single, focused learning experience." },
        { color: "#EEF8FF", title: "Real-Life Communication Focus",    desc: "Move from recognising words to confidently using German in everyday situations." },
    ]), []);

    const whyReasonsDesktop = useMemo(() => (
        [
            { pl: "pl-[510px]",  color: "#EEF8FF" },
            { pl: "pl-[580px]",  color: "#ECFFFF" },
            { pl: "pl-[600px]",  color: "#EEF8FF" },
            { pl: "pl-[580px]",  color: "#ECFFFF" },
            { pl: "pl-[510px]",  color: "#EEF8FF" },
        ]
    ), []);

    return (
        <Section id="why-different">
            <div className="flex flex-col max-w-6xl w-full mx-auto items-center gap-6">

                <InfoTag info="WHY LANGPHY IS DIFFERENT"/>

                <SectionTitle>Designed for Real Language Use</SectionTitle>

                {/* ── Mobile: stacked cards ── */}
                <div className="flex lg:hidden max-w-4xl border-2 border-[#EEF8FF] bg-white items-center justify-center rounded-full my-8">
                    <Image
                        src="/webp/section/multitasking-dolphin.webp"
                        alt="Multitasking Dolphin"
                        width={400}
                        height={400}
                        loading="lazy"
                    />
                </div>

                <div className="flex lg:hidden flex-col gap-4 w-full max-w-lg">
                    {whyReasons.map(({ color, title, desc }) => (
                        <div
                            key={title}
                            className="flex gap-4 items-start p-5 rounded-2xl"
                            style={{ backgroundColor: color }}
                        >
                            <div className="flex shrink-0 w-2.5 h-2.5 mt-1.5 rounded-full bg-[#142C57]" />
                            <div>
                                <ContentTitle title={title} />
                                <Paragraph content={desc} className="mt-0.5" />
                            </div>
                        </div>
                    ))}
                </div>

                {/* ── Desktop: original circle + staggered rows ── */}
                <div className="hidden lg:flex flex-row w-full relative mt-10">

                    <div className="flex flex-col w-full gap-[15.8px] h-[564px] overflow-hidden relative lg:rounded-tl-full lg:rounded-bl-full">

                    {/* Circle with dolphin */}
                    <div className="flex absolute top-0 left-0 w-[564px] h-[564px] border-2 border-[#EEF8FF] border-r-transparent z-20 bg-white items-center justify-center rounded-full">
                        <Image
                            src="/webp/section/multitasking-dolphin.webp"
                            alt="Multitasking Dolphin"
                            width={400}
                            height={400}
                            loading="lazy"
                        />
                    </div>

                    {/* Reason rows */}
                    {whyReasonsDesktop.map(({ pl, color }, i) => (
                        <div key={i} className="inline-flex h-[100px]">
                            <div
                                className={`inline-flex flex-col relative gap-1 items-start text-left ${pl} py-4 pr-10`}
                                style={{ backgroundColor: color }}
                            >
                                <ContentTitle title={whyReasons[i].title} />
                                <Paragraph content={whyReasons[i].desc} />
                                <span className={`absolute border-[25px] border-r-white border-t-white top-0 right-0`} style={{ borderLeftColor: color, borderBottomColor: color }} />
                                <span className={`absolute border-[25px] border-r-white border-b-white bottom-0 right-0`} style={{ borderLeftColor: color, borderTopColor: color }} />
                            </div>
                        </div>
                    ))}
                    </div>
                </div>

            </div>
        </Section>
    );
}
