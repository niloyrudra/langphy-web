import { twMerge } from "tailwind-merge";
import clsx from "clsx";
import Link from "next/link";

const CtaButton = ({
    title,
    href,
    className,
}: {
    title: string;
    href: string;
    className?: string;
}) => (
    <Link
        href={href}
        className={twMerge(
            clsx(
                "mt-4 inline-flex items-center rounded-full bg-gradient-to-br from-[#48E4EF] to-[#1B7CF5] px-6 py-3 text-white font-medium text-sm transition-all hover:opacity-90",
                className
            )
        )}
    >
        {title}
    </Link>
);

export default CtaButton;