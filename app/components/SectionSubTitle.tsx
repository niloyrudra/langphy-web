import clsx from "clsx";
import { ReactNode } from "react";
import { twMerge } from "tailwind-merge";

const SectionTitle = ({children, invert=false, className}: {children: ReactNode, invert?: boolean, className?: string }) => (
    <h3 className={twMerge(clsx(`font-poppins text-2xl sm:text-2xl font-semibold leading-snug tracking-tight ${ invert ? "text-white" : "text-[#061E3E]"} text-center`, className))}>
        {children}
    </h3>
);
export default SectionTitle;