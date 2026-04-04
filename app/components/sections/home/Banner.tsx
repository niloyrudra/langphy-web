"use client";
import { useEffect, useState } from 'react';
import Image from 'next/image';
import CTAButton from '../../ActionButton';
import Paragraph from '../../Paragraph';
import CTA from '../../CTAButton';

export default function Banner() {
    const [width, setWidth] = useState<number>(0);
    useEffect(() => {
        setWidth(window.innerWidth);
        const handleResize = () => setWidth(window.innerWidth);
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);
    return (
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
                    <h1 className="fonr-poppins text-6xl sm:text-4xl font-semibold leading-tight tracking-tight text-[#1751B6]">
                        Learn German the<br />smart way
                    </h1>
                    <Paragraph
                        className="text-base"
                        content="Langphy is a mobile-first German language learning app designed to help you understand, practice, and confidently use German in real life."
                    />
                    
                    <CTA title="Download on Google Playstore" href="#download" />
    
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
    )
}
