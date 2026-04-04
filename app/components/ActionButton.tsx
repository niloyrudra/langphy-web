import clsx from "clsx";
import { twMerge } from "tailwind-merge";

export default function CTAButton({title, href, onClick, className}: {title: string, href: string, onClick?: () => void, className?: string}) {
    return (
        <a
            href={href}
            onClick={onClick}
            className={twMerge( clsx(`font-poppins mt-4 inline-flex items-center rounded-full bg-[#142C57] px-6 py-3 text-white font-medium text-sm transition-colors hover:bg-[#000000]`, className))}
        >
            {title}
        </a>
    )
}