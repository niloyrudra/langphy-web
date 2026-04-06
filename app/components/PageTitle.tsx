import clsx from "clsx";
import { twMerge } from "tailwind-merge";

const PageTitle = ({title, className}: {title: string, className?: string}) => (
    <div className={twMerge(clsx("flex w-full justify-center align-center py-10 bg-[#D9EFFF]", className))}>
      <h1 className="text-4xl text-[#142C57] uppercase">{title}</h1>
    </div>
);

export default PageTitle;