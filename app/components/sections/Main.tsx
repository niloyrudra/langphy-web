import clsx from "clsx";
import { ReactNode } from "react";
import { twMerge } from "tailwind-merge";
const Main = ({children, className}: {children: ReactNode, className?: string}) => (
    <main className={twMerge(clsx(`flex flex-1 w-full flex-col items-center bg-white`, className))}>
        {children}
    </main>
);
export default Main;