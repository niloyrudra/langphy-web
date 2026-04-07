"use client";

import Image from 'next/image';
import { useEffect, useState } from 'react';

const FeatureBgImage = () => {
    const [width, setWidth] = useState<number>(0);
    useEffect(() => {
        setWidth(window.innerWidth);
        const handleResize = () => setWidth(window.innerWidth);
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);
    return (
        <>
            <Image
                src="/svg/bg/features-bg.svg"
                alt="Langphy Features Background"
                width={width || 1440}
                height={(width || 1440) * 0.6}
                loading="eager"
                className="hidden lg:flex absolute top-0 left-0 right-0 w-full h-auto z-0 pointer-events-none sm:hidden"
            />
            <Image
                src="/svg/bg/features-bg-sm.svg"
                alt="Langphy Features Background"
                width={width || 1440}
                height={1984}
                loading="eager"
                className="lg:hidden md:flex absolute inset-0 h-full object-cover z-0 pointer-events-none"
            />
        </>
    );
}
export default FeatureBgImage