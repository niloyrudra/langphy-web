import Image from "next/image";
const DownloadSection = () => {
    return (
        <section className="w-full px-4 py-16 bg-[#F9FAFB]">
            <div className="max-w-2xl mx-auto flex flex-col items-center text-center gap-5">
                <h2 className="text-2xl sm:text-3xl font-semibold text-[#142C57] leading-snug">
                    Ready to start learning?
                </h2>
                <p className="text-sm text-zinc-600 leading-7 max-w-md">
                    Download Langphy on Android and begin your structured German learning journey today.
                </p>
                <a
                    href="#download"
                    className="inline-flex items-center"
                >
                    <Image
                        src="/svg/download-button.svg"
                        alt="Google Play Store App Download Button"
                        width={130.67}
                        height={38.44}
                    />
                    {/* <svg className="w-6 h-6 text-white" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M3.18 23.76c.3.17.64.24.98.24.37 0 .75-.1 1.08-.3l12.45-7.19-2.89-2.89-11.62 10.14zM.24 1.5C.09 1.82 0 2.18 0 2.57v18.86c0 .39.09.75.24 1.07l.12.11 10.57-10.57v-.25L.36 1.39.24 1.5zm18.3 10.12L15.69 9.77l-2.89 2.89 2.89 2.89 2.89-1.67c.82-.48.82-1.26-.04-1.76zM4.14.54L16.59 7.73l-2.89 2.89-2.89-2.89L4.14.54z" />
                    </svg>
                    <div className="text-left">
                        <div className="text-[10px] text-zinc-400 uppercase tracking-widest">GET IT ON</div>
                        <div className="text-sm font-semibold text-white leading-tight">Google Play</div>
                    </div> */}
                </a>
            </div>
        </section>
    )
}

export default DownloadSection;