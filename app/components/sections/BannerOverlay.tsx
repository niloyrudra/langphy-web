import Image from 'next/image';
const BannerOverlay = () => (
    <Image
        src="/svg/overlay.svg"
        alt="Banner Overlay"
        width={1440}
        height={753}
        className="
            absolute
            object-fit-cover
            w-full
            h-[75%]
            opacity-90
            bottom-0
            left-0
            right-0
            z-3
        "
    />
);

export default BannerOverlay;