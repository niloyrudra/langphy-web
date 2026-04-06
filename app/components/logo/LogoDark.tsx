import Image from "next/image";
const LogoDark = () => (
    <div className="flex items-center gap-2 shrink-0">
        <a href="/">
            <Image
                src="/svg/logo/logo-dark.svg"
                alt="Langphy Logo"
                width={160}
                height={37}
                loading="eager"
                className="w-[140px] md:w-[200px] h-auto"
            />
        </a>
    </div>
);


export default LogoDark;