import clsx from 'clsx';
import { twMerge } from 'tailwind-merge';
const ContentTitle = ({title, invert=false, className}: {title: string, invert?: boolean, className?: string}) => (
    <h3 className={twMerge(clsx(`font-poppins font-semibold ${ invert ? "text-white" : "text-[#142C57]"} text-xl`, className))}>{title}</h3>
);
export default ContentTitle;