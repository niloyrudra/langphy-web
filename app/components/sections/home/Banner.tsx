"use client";
import { useEffect, useState } from 'react';
import Image from 'next/image';
import BrandSlogan from './_partials/BrandSlogan';
import BannerOverlay from '../BannerOverlay';
import BannerWave from '../BannerWave';

const Banner = () => (
    <section className="flex w-full relative flex-col py-16 md:py-20 px-4 bg-[#D5F6FF] overflow-hidden ">
        {/* Background brand watermark – hidden on very small screens */}
        <div className="absolute inset-0 flex items-start justify-start px-5 pointer-events-none z-0">
            <Image
                src="/webp/banner/langphy-brand.webp"
                alt="Langphy"
                width={1270}
                height={315}
                loading="eager"
                // className="w-full h-auto object-cover opacity-80"
                className="w-full h-auto object-cover max-w-[1440px] mx-auto"
            />
        </div>

        <div className="flex flex-col max-w-6xl w-full mx-auto md:mt-10 sm:mt-3 items-center text-center z-1">
            {/* Dolphin */}
            <div className="w-full flex justify-center" style={{marginBottom:-100}}>
                <Image
                    src="/webp/banner/dolphin-banner.webp"
                    alt="Langphy Banner"
                    width={482}
                    height={545}
                    loading="eager"
                    className="w-[280px] md:w-[380px] lg:w-[420px] h-auto"
                    // className="w-[200px] sm:w-[280px] md:w-[380px] lg:w-[420px] h-auto"
                />
            </div>

            {/* Overlay */}
            <BannerOverlay />
            
            {/* Radio Gradient Overlay */}
            {/* <div
                className="
                    flex
                    absolute
                    inset-0
                    w-full
                    h-full
                    bg-radial-[at_50%_30%] from-transparent vai-[#D5F6FF] to-[#D5F6FF] to-100%
                    z-3
                "
            /> */}
            {/* bg-radial-[at_50%_30%] from-transparent via-[#D5F6FF] to-[#D5F6FF] to-0% */}

            {/* Slogan */}
            <BrandSlogan />
        </div>

        {/* Wave bottom */}
        <BannerWave />
    </section>
);
export default Banner;
