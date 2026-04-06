import clsx from "clsx";
import { ReactNode } from "react";
import { twMerge } from "tailwind-merge";
const Section = ({id, children, className}: {id?:string, children: ReactNode, className?: string}) => (
    <section className={twMerge(clsx(`flex w-full relative flex-col py-20 md:py-28 px-4 bg-white`, className))} id={id}>
        <div className="flex flex-col md:flex-row max-w-6xl w-full mx-auto items-center gap-12 md:gap-16">
            {children}
        </div>
    </section>
);
export default Section;