import clsx from "clsx";
import { twMerge } from "tailwind-merge";

const InfoTag = ({info, invert=false, className}: {info: string, invert?: boolean, className?: string}) => invert ?
    (
        <span className="bg-[#3FA1FF] text-base font-semibold text-white border-1 border-[#1B7BF5] px-4 py-2 rounded-2xl">
            {info}
        </span>
    )
    : (
        <span className={twMerge( clsx(`bg-[#F9FAFB] text-base font-semibold text-[#142C57] border-1 border-[#EDEDED] px-5 py-2 rounded-3xl`, className) )}>
            {info}
        </span>
    );
export default InfoTag;