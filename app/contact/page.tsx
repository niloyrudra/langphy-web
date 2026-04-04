"use client";

import ProblemSection from "../components/sections/home/ProblemSection";
import SolutionsSection from "../components/sections/home/SolutionsSection";
import Main from "../components/sections/Main";

const Contact = () => (
  <Main>
    {/* ── Banner ─────────────────────────────────────────────────────────── */}
    {/* <Banner /> */}

    {/* ── Problem ────────────────────────────────────────────────────────── */}
    <ProblemSection />
    
    {/* ── Solution ───────────────────────────────────────────────────────── */}
    <SolutionsSection />


  </Main>
);

export default Contact;