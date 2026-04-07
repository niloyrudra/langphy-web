"use client";

import { useEffect, useState } from "react";

const BackToTopButton = () => {
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const toggleVisibility = () => {
            setVisible(window.scrollY > 300); // show after scrolling 300px
        };

        window.addEventListener("scroll", toggleVisibility);
        return () => window.removeEventListener("scroll", toggleVisibility);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth", // 🔥 smooth scroll
        });
    };

    return (
        <button
            onClick={scrollToTop}
            className={`fixed cursor-pointer bottom-6 right-6 z-50 rounded-full bg-[#142C57] p-3 text-white shadow-lg transition-all duration-300 hover:bg-[#1B7CF5] ${
                visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4 pointer-events-none"
            }`}
        >
            ↑
        </button>
    );
};

export default BackToTopButton;