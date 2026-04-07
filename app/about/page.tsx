"use client";

import Main from "../components/sections/Main";
import OurApproachSection from "../components/sections/about/OurApproachSection";
import BrandingSection from "../components/sections/about/BrandingSection";
import OurTeamSection from "../components/sections/about/OurTeamSection";
import HeroBanner from "../components/sections/HeroBanner";
import TopSection from "../components/sections/about/TopSection";

const About = () => (
  <Main>
    {/* ── Hero Banner ──────────────────────────────────────────────────── */}
    <HeroBanner
      title="ABOUT US"
      infoMessage="Langphy blends technology, consistency, and real-life language usage to create a learning experience that actually sticks — whether you're starting from A1 or aiming for fluency."
    >
      Built for Learners,<br className="hidden sm:block" /> Driven by Passion
    </HeroBanner>

    {/* ── About Langphy & Our Mission ──────────────────────────────────── */}
    <TopSection />

    {/* ── Our Mission ──────────────────────────────────────────────────── */}
    {/* <MissionSection /> */}
      
    {/* ── Our Approach ─────────────────────────────────────────────────── */}
    <OurApproachSection />

    {/* ── Ocean Branding ───────────────────────────────────────────────── */}
    <BrandingSection />

    {/* ── Our Team ─────────────────────────────────────────────────────── */}
    <OurTeamSection />
  </Main>
);

export default About;