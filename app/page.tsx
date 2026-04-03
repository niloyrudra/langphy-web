"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import CTAButton from "./components/CTAButton";
import ActionButton from "./components/ActionButton";

export default function Home() {
  const [width, setWidth] = useState(0);
  useEffect(() => {
    setWidth(window.innerWidth);
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const howItWorksSteps = [
    { n: 1, title: "Choose a category", desc: "Start with topics like alphabet, greetings, or everyday conversations." },
    { n: 2, title: "Understand the concept", desc: "Read clear explanations and grammar notes before practising." },
    { n: 3, title: "Learn with examples", desc: "See how words and phrases are used in real context." },
    { n: 4, title: "Practice actively", desc: "Engage with quizzes and exercises across Writing, Speaking, Listening and Reading." },
    { n: 5, title: "Build confidence", desc: "Use German naturally in real-life situations." },
  ];

  const features = [
    { icon: "/svg/icons/category-icon.svg",        title: "62 Structured Categories",  desc: "Cover everyday German with clear organisation." },
    { icon: "/svg/icons/grammar-note-icon.svg",     title: "Grammar Notes",             desc: "Clear, and concise grammar explanations." },
    { icon: "/svg/icons/sticky-note-icon.svg",      title: "Real-Life Examples",        desc: "Additional context for practical usage." },
    { icon: "/svg/icons/proficiency-level-icon.svg",title: "Proficiency Levels",        desc: "Align with German language standards." },
    { icon: "/svg/icons/quiz-icon.svg",             title: "Interactive Quizzes",       desc: "Test your knowledge and track progress." },
    { icon: "/svg/icons/mic-icon.svg",              title: "Speaking Practice",         desc: "Improve your pronunciation skills." },
    { icon: "/svg/icons/book-open-icon.svg",        title: "Reading Practice",          desc: "Expand comprehension with engaging texts." },
    { icon: "/svg/icons/headphones-icon.svg",       title: "Listening Exercises",       desc: "Train your ears with native audio content." },
    { icon: "/svg/icons/pencil-edit-icon.svg",      title: "Writing Exercises",         desc: "Build vocabulary & sentence structure skills." },
  ];

  const whyReasons = [
    { color: "#EEF8FF", title: "Understand, Don't Memorize",      desc: "Langphy helps you understand how German actually works, going beyond simple memorisation." },
    { color: "#ECFFFF", title: "Structured German Learning",       desc: "Learn through organised categories with clear explanations, grammar, and real-life usage." },
    { color: "#EEF8FF", title: "Visual Color-Coded System",        desc: "Easily understand cases, genders, and parts of speech with intuitive colour-coded guidance." },
    { color: "#ECFFFF", title: "All Skills in One Place",          desc: "Practice speaking • listening • reading • writing within a single, focused learning experience." },
    { color: "#EEF8FF", title: "Real-Life Communication Focus",    desc: "Move from recognising words to confidently using German in everyday situations." },
  ];

  return (
    <main className="flex flex-1 w-full flex-col items-center bg-white">

      {/* ── Banner ─────────────────────────────────────────────────────────── */}
      <section className="flex w-full relative flex-col py-16 md:py-20 px-4 bg-[#D5F6FF] overflow-hidden ">

        {/* Background brand watermark – hidden on very small screens */}
        <div className="absolute inset-0 hidden sm:flex items-start justify-start pointer-events-none">
          <Image
            src="/webp/banner/langphy-brand.webp"
            alt=""
            width={1270}
            height={315}
            loading="eager"
            // className="w-full h-auto object-cover opacity-80"
            className="w-full h-auto object-cover max-w-[1440px] mx-auto"
          />
        </div>

        <div className="relative flex flex-col max-w-6xl w-full mx-auto items-center gap-10 text-center z-10">

          {/* Dolphin */}
          <div className="w-full flex justify-center">
            <Image
              src="/webp/banner/dolphin-banner.webp"
              alt="Langphy Banner"
              width={482}
              height={545}
              loading="eager"
              className="w-[200px] sm:w-[280px] md:w-[380px] lg:w-[420px] h-auto"
            />
          </div>

          {/* Copy */}
          <div className="flex flex-col gap-4 items-center text-center">
            <h1 className="text-3xl sm:text-4xl font-semibold leading-tight tracking-tight text-zinc-900">
              Learn German the<br />smart way
            </h1>
            <p className="max-w-lg text-base sm:text-lg leading-8 text-zinc-600">
              Langphy is a mobile-first German language learning app designed to help you understand, practice, and confidently use German in real life.
            </p>
            
            <CTAButton title="Download on Google Playstore" href="#download" />

          </div>
        </div>

        {/* Wave bottom */}
        <Image
          src="/svg/banner/banner-bottom.svg"
          alt=""
          width={width || 1440}
          height={218}
          loading="eager"
          className="absolute bottom-0 left-0 right-0 w-full z-0 pointer-events-none"
        />
      </section>

      {/* ── Problem ────────────────────────────────────────────────────────── */}
      <section className="flex w-full relative flex-col py-20 md:py-28 px-4 bg-white" id="problems">
        <div className="flex flex-col md:flex-row max-w-6xl w-full mx-auto items-center gap-12 md:gap-16">

          {/* Copy – shown first on mobile */}
          <div className="flex flex-col gap-4 items-center text-center md:items-start md:text-left order-1">
            <span className="bg-zinc-100 text-sm font-semibold text-zinc-700 px-4 py-2 rounded-2xl">
              The Problem
            </span>
            <h2 className="text-2xl sm:text-3xl font-semibold leading-snug tracking-tight text-zinc-900">
              Learning German Shouldn't Feel<br className="hidden sm:block" />Overwhelming.
            </h2>
            <p className="max-w-lg text-sm leading-6 text-zinc-600">
              Many learners struggle with German because learning resources are scattered. Grammar notes, vocabulary lists, and practice exercises often live in different apps, books, and videos. Without a clear structure, it becomes difficult to know what to learn next or how to apply it in real conversations.
            </p>
            <p className="max-w-lg text-sm leading-6 text-zinc-600">
              Langphy solves this problem by bringing structured lessons, explanations, and practice into one focused mobile experience.
            </p>
          </div>

          {/* Blob illustration */}
          <div className="flex shrink-0 items-center justify-center order-2 w-full md:w-auto">
            <Image
              src="/svg/home-section-blobs/section-problem-blob.svg"
              alt="Problem illustration"
              width={600}
              height={447}
              loading="lazy"
              className="w-[280px] sm:w-[380px] md:w-[460px] lg:w-[520px] h-auto"
            />
          </div>
        </div>
      </section>

      {/* ── Solution ───────────────────────────────────────────────────────── */}
      <section className="flex w-full relative flex-col py-20 md:py-28 px-4 bg-white" id="solutions">
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
            <span className="bg-zinc-100 text-sm font-semibold text-zinc-700 px-4 py-2 rounded-2xl">
              The Solution
            </span>
            <h2 className="text-2xl sm:text-3xl font-semibold leading-snug tracking-tight text-zinc-900">
              A Structured Way to Learn German
            </h2>
            <p className="max-w-lg text-sm leading-6 text-zinc-600">
              Langphy organises German learning into 62 carefully designed categories, each covering essential topics used in everyday communication.
            </p>
            <p className="max-w-lg text-sm leading-6 text-zinc-600">Every lesson includes:</p>

            <ul className="flex flex-col gap-2 list-none w-full max-w-lg">
              {[
                "Clear grammar explanations",
                "Real-life examples",
                "Vocabulary with context",
                "Interactive quizzes",
                "Speaking, listening, reading, and writing practice",
              ].map((item) => (
                <li key={item} className="flex flex-row gap-4 items-center">
                  <Image
                    src="/svg/pointers/bullet-point.svg"
                    alt=""
                    width={16}
                    height={16}
                    className="shrink-0"
                  />
                  <p className="text-sm font-semibold text-[#545454]">{item}</p>
                </li>
              ))}
            </ul>

            <p className="max-w-lg text-sm leading-6 text-zinc-600">
              Instead of jumping between different tools, learners can follow a structured path designed to build real confidence in German.
            </p>
          </div>
        </div>
      </section>

      {/* ── How It Works ───────────────────────────────────────────────────── */}
      <section className="flex w-full relative flex-col py-20 md:py-28 px-4 bg-[#F9FAFB]" id="how-works">
        <div className="flex flex-col max-w-6xl w-full mx-auto items-center gap-6">

          <span className="bg-white text-sm font-semibold text-[#142C57] px-4 py-2 rounded-2xl border border-[#EDEDED] text-center">
            HOW LANGPHY WORKS
          </span>
          <h2 className="text-2xl sm:text-3xl font-semibold leading-snug tracking-tight text-zinc-900 text-center mb-6 md:mb-12">
            Short lessons, real practice, and clear<br className="hidden sm:block" />progress — all in one app
          </h2>

          {/* ── Mobile: vertical numbered list ── */}
          <ol className="flex md:hidden flex-col gap-4 w-full max-w-md">
            {howItWorksSteps.map(({ n, title, desc }) => (
              <li key={n} className="flex gap-4 items-start bg-white rounded-2xl p-5 shadow-sm">
                <span className="flex shrink-0 w-9 h-9 rounded-full bg-[#EEF8FF] text-[#142C57] font-bold text-sm items-center justify-center">
                  {n}
                </span>
                <div>
                  <h3 className="font-semibold text-zinc-900 text-sm">{title}</h3>
                  <p className="text-sm leading-6 text-zinc-600 mt-0.5">{desc}</p>
                </div>
              </li>
            ))}
          </ol>

          {/* ── Desktop: original zigzag layout ── */}
          <div className="hidden md:flex flex-col w-full gap-4">

            {howItWorksSteps.map(({ n, title, desc }, i) => {
              const isLeft = i % 2 === 0;
              return (
                <div key={n} className={`flex flex-row w-full ${isLeft ? "justify-start" : "justify-end"}`}>
                  <div className="flex w-[calc(50%+30px)]">
                    {isLeft ? (
                      <>
                        <div className="inline-flex flex-col w-full bg-white rounded-2xl p-6 gap-1 items-start text-left">
                          <h3 className="font-semibold">{title}</h3>
                          <p className="max-w-lg text-sm leading-6 text-zinc-600">{desc}</p>
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
                          <h3 className="font-semibold">{title}</h3>
                          <p className="max-w-lg text-sm leading-6 text-zinc-600">{desc}</p>
                        </div>
                      </>
                    )}
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* ── Features ───────────────────────────────────────────────────────── */}
      <section className="flex w-full relative overflow-hidden flex-col py-20 md:py-28 px-4 bg-gradient-to-tl from-[#1B7CF5] to-[#0A9AB0]" id="features">

        <Image
          src="/svg/bg/features-bg.svg"
          alt=""
          width={width || 1440}
          height={(width || 1440) * 0.6}
          loading="eager"
          className="absolute top-0 left-0 right-0 w-full h-auto z-0 pointer-events-none"
        />

        <div className="flex flex-col max-w-6xl w-full mx-auto items-center gap-6 z-10">

          <span className="bg-[#3FA1FF] text-sm font-semibold text-white px-4 py-2 rounded-2xl border border-[#1B7BF5] text-center">
            FEATURES
          </span>
          <h2 className="text-2xl sm:text-3xl text-white font-semibold leading-snug tracking-tight text-center mb-6 md:mb-12">
            Everything You Need to Learn German<br className="hidden sm:block" />in One App
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 w-full">
            {features.map(({ icon, title, desc }) => (
              <div
                key={title}
                className="flex flex-col bg-white/10 backdrop-blur-sm border border-white/20 p-5 rounded-2xl gap-3 items-start text-left"
              >
                <div className="flex w-[60px] h-[60px] shrink-0 items-center justify-center bg-[#EEF8FF] rounded-2xl">
                  <Image src={icon} alt="" width={32} height={32} />
                </div>
                <div className="flex flex-col gap-1">
                  <h3 className="font-semibold text-white">{title}</h3>
                  <p className="text-sm leading-6 text-white/90">{desc}</p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ── Why Langphy is Different ────────────────────────────────────────── */}
      <section className="flex w-full relative flex-col py-20 md:py-28 px-4 bg-white" id="why-different">
        <div className="flex flex-col max-w-6xl w-full mx-auto items-center gap-6">

          <span className="bg-[#EDEDED] text-sm font-semibold text-[#142C57] px-4 py-2 rounded-2xl border border-[#EDEDED] text-center">
            WHY LANGPHY IS DIFFERENT
          </span>
          <h2 className="text-2xl sm:text-3xl font-semibold leading-snug tracking-tight text-zinc-900 text-center mb-6 md:mb-12">
            Designed for Real Language Use
          </h2>

          {/* ── Mobile: stacked cards ── */}
          <div className="flex lg:hidden max-w-4xl border-2 border-[#EEF8FF] bg-white items-center justify-center rounded-full">
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
                  <h4 className="font-semibold text-zinc-900 text-sm">{title}</h4>
                  <p className="text-sm leading-6 text-zinc-600 mt-0.5">{desc}</p>
                </div>
              </div>
            ))}
          </div>

          {/* ── Desktop: original circle + staggered rows ── */}
          <div className="hidden lg:flex flex-row w-full relative">

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
              {[
                { pl: "pl-[510px]",  color: "#EEF8FF" },
                { pl: "pl-[580px]",  color: "#ECFFFF" },
                { pl: "pl-[600px]",  color: "#EEF8FF" },
                { pl: "pl-[580px]",  color: "#ECFFFF" },
                { pl: "pl-[510px]",  color: "#EEF8FF" },
              ].map(({ pl, color }, i) => (
                <div key={i} className="inline-flex h-[100px]">
                  <div
                    className={`inline-flex flex-col relative gap-1 items-start text-left ${pl} py-4 pr-10`}
                    style={{ backgroundColor: color }}
                  >
                    <h4 className="font-semibold text-left">{whyReasons[i].title}</h4>
                    <p className="max-w-lg text-sm leading-6 text-zinc-600">{whyReasons[i].desc}</p>
                    <span className={`absolute border-[25px] border-r-white border-t-white top-0 right-0`} style={{ borderLeftColor: color, borderBottomColor: color }} />
                    <span className={`absolute border-[25px] border-r-white border-b-white bottom-0 right-0`} style={{ borderLeftColor: color, borderTopColor: color }} />
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* ── Download ───────────────────────────────────────────────────────── */}
      <section className="flex w-full relative flex-col pt-20 md:pt-28 px-4 pb-0 bg-[#EEF8FF] overflow-hidden" id="download">

        <h2 className="text-2xl sm:text-3xl font-semibold leading-tight tracking-tight text-zinc-900 text-center">
          Download Our App
        </h2>
        <p className="text-sm font-semibold text-zinc-700 text-center mt-1">
          Available for Android devices
        </p>

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
            <h2 className="text-xl leading-tight text-[#1B7CF5] font-semibold tracking-tight">
              Start Learning German Today
            </h2>
            <p className="max-w-sm text-sm leading-6 text-[#142C57]">
              Langphy is now available. Take the first step toward learning German with clarity and confidence.
            </p>

            <ActionButton title="Download on Google Playstore" href="#download" />
            
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
      </section>

    </main>
  );
}