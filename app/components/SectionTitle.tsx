import clsx from "clsx";
import { ReactNode } from "react";
import { twMerge } from "tailwind-merge";

interface SectionTitleProps {
    children: ReactNode;
    invert?: boolean;
    className?: string;
};

const SectionTitle = ( {children, invert=false, className}: SectionTitleProps ) => (
    <h2 className={twMerge(clsx(`font-poppins capitalize text-3xl sm:text-2xl font-semibold leading-snug tracking-tight ${ invert ? "text-white" : "text-[#061E3E]"} text-center`, className))}>
        {children}
    </h2>
);
export default SectionTitle;