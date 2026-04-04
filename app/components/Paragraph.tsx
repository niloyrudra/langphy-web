import clsx from "clsx";
import { twMerge } from "tailwind-merge";

const Paragraph = ({content, className}: {content: string, className?: string}) => (
    <p className={twMerge( clsx("fonr-poppins max-w-lg text-sm leading-6 text-[#545454]", className) )}>
        {content}
    </p>
);
export default Paragraph