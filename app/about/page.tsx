"use client";

import InfoTag from "../components/InfoTag";
import Paragraph from "../components/Paragraph";
import ProblemSection from "../components/sections/home/ProblemSection";
import SolutionsSection from "../components/sections/home/SolutionsSection";
import Main from "../components/sections/Main";
import Section from "../components/sections/about/Section";
import SectionTitle from "../components/SectionTitle";
import OurApproachSection from "../components/sections/about/OurApproachSection";
import Branding from "../components/sections/about/Branding";
import OurTeam from "../components/sections/about/OurTeam";

const About = () => (
  <Main>
    {/* ── Banner ───────────────────────────────────────────────────────── */}
    {/* <Banner /> */}


    {/* ── About Langphy ────────────────────────────────────────────────── */}
    <Section id="about-langphy">
      <div className="flex flex-col gap-4 items-center text-center md:items-start md:text-left order-1">
        <InfoTag info="ABOUT LANGPHY" />

        <SectionTitle className="text-left">
          Learn German the Smart Way
        </SectionTitle>
        
        <Paragraph
          className="max-w-full"
          content="Langphy is a modern German language learning app designed to make learning clear, structured, and practical. Our goal is simple — to help learners understand German, not just memorize it."
        />
        <Paragraph
          className="max-w-full"
          content="Built as a mobile-first learning experience, Langphy combines grammar explanations, real-life examples, and interactive practice to help users develop real confidence in using German in everyday situations."
        />
      </div>
    </Section>

    {/* ── Our Mission ──────────────────────────────────────────────────── */}
    <Section id="our-mission">
      <div className="flex flex-col gap-4 items-center text-center md:items-start md:text-left order-1">
        <InfoTag info="OUR MISSION" />

        <SectionTitle className="text-left">
          Help you learn German with clarity and confidence.
        </SectionTitle>
        
        <Paragraph
          className="max-w-full"
          content="Our mission is to make learning German simple, structured, and accessible for everyone."
        />
        <Paragraph
          className="max-w-full"
          content="Many learners struggle because resources are scattered and unstructured. Langphy brings everything together into one focused platform, helping users follow a clear path from basic understanding to real-life communication."
        />
      </div>
    </Section>
      
    {/* ── Our Approach ─────────────────────────────────────────────────── */}
    <OurApproachSection />

    {/* ── Ocean Branding ───────────────────────────────────────────────── */}
    <Branding />

    {/* ── Our Team ─────────────────────────────────────────────────────── */}
    <OurTeam />

  </Main>
);

export default About;