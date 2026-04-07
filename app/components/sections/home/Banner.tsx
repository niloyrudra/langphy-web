"use client";

import BrandSlogan from './_partials/BrandSlogan';
import BannerOverlay from '../BannerOverlay';
import BannerWave from '../BannerWave';
import BrandWatermark from './_partials/BrandWatermark';
import LangphyMaskcot from './_partials/LangphyMaskcot';

const Banner = () => (
    <section className="flex w-full relative flex-col py-16 md:py-20 px-4 bg-[#D5F6FF] overflow-hidden ">
        {/* Background brand watermark – hidden on very small screens */}
        <BrandWatermark />

        <div className="flex flex-col max-w-6xl w-full mx-auto md:mt-10 sm:mt-3 items-center text-center z-1">
            {/* Dolphin Maskcot */}
            <LangphyMaskcot />

            {/* Overlay */}
            <BannerOverlay />
            
            {/* Slogan */}
            <BrandSlogan />
        </div>

        {/* Wave bottom */}
        <BannerWave />
    </section>
);
export default Banner;
