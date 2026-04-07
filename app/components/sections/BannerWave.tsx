import Image from 'next/image';
import { useEffect, useState } from 'react';

const BannerWave = () => {
    const [width, setWidth] = useState<number>(0);
    useEffect(() => {
        setWidth(window.innerWidth);
        const handleResize = () => setWidth(window.innerWidth);
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);
    
    return (
        <Image
            src="/svg/banner/banner-bottom.svg"
            alt=""
            width={width || 1440}
            height={218}
            loading="eager"
            className="absolute bottom-0 left-0 right-0 w-full z-5 pointer-events-none"
        />
    );
}
export default BannerWave