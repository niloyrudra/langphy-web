import React from "react";
import clsx from "clsx";
import { twMerge } from "tailwind-merge";

interface SubmitButtonProps {
    children: React.ReactNode;
    onClick: (e: React.MouseEvent<HTMLButtonElement>) => void | Promise<void>;
    disabled?: boolean;
    className?: string;
    type?: "button" | "submit";
}

const SubmitButton = ({
    children,
    onClick,
    disabled,
    className,
    type = "button",
}: SubmitButtonProps) => (
    <button
        type={type}
        onClick={onClick}
        disabled={disabled}
        className={twMerge(
            clsx(
                "font-poppins inline-flex items-center rounded-full bg-[#142C57] px-6 py-3 text-white font-medium text-sm transition-colors hover:bg-[#000000] disabled:opacity-50 disabled:cursor-not-allowed",
                className
            )
        )}
    >
        {children}
    </button>
);

export default SubmitButton;