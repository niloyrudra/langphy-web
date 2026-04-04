"use client";
import FeaturesSection from "./components/sections/home/FeaturesSection";
import HowItWorksSection from "./components/sections/home/HowItWorksSection";
import WhyLangphySection from "./components/sections/home/WhyLangphySection";
import Banner from "./components/sections/home/Banner";
import ProblemSection from "./components/sections/home/ProblemSection";
import SolutionsSection from "./components/sections/home/SolutionsSection";
import DownloadAppSection from "./components/sections/home/DownloadAppSection";
import Main from "./components/sections/Main";

const Home = () => (
  <Main>
    {/* ── Banner ─────────────────────────────────────────────────────────── */}
    <Banner />
    
    {/* ── Problem ────────────────────────────────────────────────────────── */}
    <ProblemSection />
    
    {/* ── Solution ───────────────────────────────────────────────────────── */}
    <SolutionsSection />

    {/* ── How It Works ───────────────────────────────────────────────────── */}
    <HowItWorksSection />

    {/* ── Features ───────────────────────────────────────────────────────── */}
    <FeaturesSection />

    {/* ── Why Langphy is Different ────────────────────────────────────────── */}
    <WhyLangphySection />

    {/* ── Download ───────────────────────────────────────────────────────── */}
    <DownloadAppSection />
  </Main>
);

export default Home;