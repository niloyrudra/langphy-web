import { ReactNode } from 'react'
interface HeroBannerProps {
    title: string;
    children: ReactNode;
    infoMessage: string;
}

const HeroBanner = ({title, children, infoMessage}: HeroBannerProps) => (
    <section className="relative w-full bg-[#D5F6FF] overflow-hidden py-20 md:py-28 px-4">
        {/* Decorative blobs */}
        <div className="absolute -top-20 -right-20 w-72 h-72 rounded-full bg-[#1B7CF5]/10 blur-3xl pointer-events-none" />
        <div className="absolute -bottom-10 -left-10 w-56 h-56 rounded-full bg-[#0A9AB0]/15 blur-2xl pointer-events-none" />

        <div className="relative max-w-6xl mx-auto flex flex-col items-center text-center gap-5 z-10">
            <span className="bg-white text-sm font-semibold text-[#142C57] px-4 py-2 rounded-2xl border border-[#EDEDED]">
                {title}
            </span>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold leading-tight tracking-tight text-[#142C57]">
                {children}
            </h1>
            <p className="max-w-xl text-base leading-7 text-zinc-600">
                {infoMessage}
            </p>
        </div>
    </section>
);

export default HeroBanner;