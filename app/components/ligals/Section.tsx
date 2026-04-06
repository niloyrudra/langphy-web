import clsx from "clsx";
import { ReactNode } from "react";
import { twMerge } from "tailwind-merge";
import SectionTitle from "../SectionTitle";

const Section = ({ title, children, className }: {title?: string, children: ReactNode, className?: string}) => (
    <section className={twMerge( clsx("max-w-lg mb-10", className))}>
        {
            title && (<SectionTitle className="border-b-1 border-b-[#142C57] text-left mb-3">
                {title}
            </SectionTitle>)
        }
        
        <div className="max-w-lg space-y-2 leading-relaxed">{children}</div>
    </section>
);
export default Section;