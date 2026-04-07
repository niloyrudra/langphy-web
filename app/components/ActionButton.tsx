import clsx from "clsx";
import { twMerge } from "tailwind-merge";
import Link from "next/link";

const ActionButton = ({title, href, onClick, className}: {
    title: string,
    href: string,
    onClick?: () => void,
    className?: string
}) => (
    <Link
        href={href}
        onClick={onClick}
        className={twMerge( clsx(`font-poppins inline-flex items-center rounded-full bg-[#142C57] px-6 py-3 text-white font-medium text-sm transition-colors hover:bg-[#000000]`, className))}
    >
        {title}
    </Link>
);
export default ActionButton;
