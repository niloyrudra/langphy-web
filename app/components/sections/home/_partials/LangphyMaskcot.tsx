import Image from 'next/image';

const LangphyMaskcot = () => (
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
);

export default LangphyMaskcot;