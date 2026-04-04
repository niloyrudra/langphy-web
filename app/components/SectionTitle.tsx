import clsx from "clsx";
import { ReactNode } from "react";
import { twMerge } from "tailwind-merge";

const SectionTitle = ({children, invert=false, className}: {children: ReactNode, invert?: boolean, className?: string }) => (
    <h2 className={twMerge(clsx(`font-poppins text-3xl sm:text-3xl font-semibold leading-snug tracking-tight ${ invert ? "text-white" : "text-[#061E3E]"} text-center`, className))}>
        {children}
    </h2>
);
export default SectionTitle;