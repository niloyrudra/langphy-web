import Image from 'next/image';
const BrandWatermark = () => (
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
);

export default BrandWatermark