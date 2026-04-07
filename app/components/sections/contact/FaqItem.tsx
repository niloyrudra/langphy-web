import { useCallback, useState } from "react";
import Paragraph from "../../Paragraph";

const FaqItem = ({ question, answer }: { question: string; answer: string }) => {
    const [open, setOpen] = useState(false);
    const detailToggleHandler = useCallback(() => setOpen(!open), [open]);
    return (
        <div className="border border-zinc-100 rounded-xl overflow-hidden bg-white">
            <button
                onClick={detailToggleHandler}
                className="w-full cursor-pointer flex items-center justify-between gap-4 px-5 py-4 text-left"
            >
                <span className="text-sm font-semibold text-[#142C57]">{question}</span>
                <span
                    className={`flex shrink-0 w-6 h-6 rounded-full border border-zinc-200 items-center justify-center text-zinc-500 transition-transform duration-300 ${open ? "rotate-180 bg-[#D5F6FF] border-[#D5F6FF] text-[#1B7CF5]" : ""}`}
                >
                    <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                    </svg>
                </span>
            </button>
            
            <div
                className={`overflow-hidden transition-all duration-300 ease-in-out ${open ? "max-h-40 opacity-100" : "max-h-0 opacity-0"}`}
            >
                <Paragraph className="px-5" content={answer} />
            </div>
        </div>
    );
}
export default FaqItem;