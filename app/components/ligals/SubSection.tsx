import { ReactNode } from "react";
const SubSection = ({ title, children }: {title: string, children: ReactNode}) => (
    <div className="mt-4">
        <h3 className="font-poppins text-2xl sm:text-2xl font-semibold leading-snug tracking-tight text-[#061E3E]">{title}</h3>
        <div className="mt-4">{children}</div>
    </div>
);
export default SubSection;