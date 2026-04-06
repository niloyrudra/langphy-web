"use client";
import { useEffect, useState } from 'react';
import Image from 'next/image';
import BrandSlogan from './_partials/BrandSlogan';

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
            <div className="absolute inset-0 hidden sm:flex items-start justify-start pointer-events-none z-0">
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
    
            <div className="flex flex-col max-w-6xl w-full mx-auto mt-10 items-center text-center z-1">
    
                {/* Dolphin */}
                <div className="w-full flex justify-center" style={{marginBottom:-100}}>
                    <Image
                        src="/webp/banner/dolphin-banner.webp"
                        alt="Langphy Banner"
                        width={482}
                        height={545}
                        loading="eager"
                        className="w-[200px] sm:w-[280px] md:w-[380px] lg:w-[420px] h-auto"
                    />
                </div>
    
                {/* Radio Gradient Overlay */}
                <Image
                    src="/svg/overlay.svg"
                    alt="Banner Overlay"
                    width={1440}
                    height={753}
                    className="absolute object-fit-cover w-full h-[75%] opacity-90 bottom-0 left-0 right-0 z-3"
                />
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

                {/* Copy */}
                <BrandSlogan />
            </div>
    
            {/* Wave bottom */}
            <Image
                src="/svg/banner/banner-bottom.svg"
                alt=""
                width={width || 1440}
                height={218}
                loading="eager"
                className="absolute bottom-0 left-0 right-0 w-full z-5 pointer-events-none"
            />
        </section>
    )
}
