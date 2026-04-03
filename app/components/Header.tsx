"use client";
import Image from "next/image";
import { useState } from "react";
import ActionButton from "./ActionButton";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

    return (
        <header className="flex w-full max-w-full px-4 h-20 items-center gap-6 font-poppins bg-[#D5F6FF] relative z-50">
            
            <div className="flex flex-row mx-auto max-w-6xl w-full items-center justify-between gap-6">

                {/* Logo */}
                <div className="flex items-center gap-2 shrink-0">
                    <Image
                        src="/svg/logo/logo-dark.svg"
                        alt="Langphy Logo"
                        width={160}
                        height={37}
                        loading="eager"
                        className="w-[140px] md:w-[200px] h-auto"
                    />
                </div>

                {/* Desktop Nav */}
                <ul className="hidden md:flex flex-row flex-1 justify-center space-x-4 text-sm font-medium">
                    <li>
                        <a href="#how-works" className="text-zinc-900 hover:underline">How Langphy Works</a>
                    </li>
                    <li>
                        <a href="#features" className="text-zinc-900 hover:underline">Features</a>
                    </li>
                    <li>
                        <a href="/about" className="text-zinc-900 hover:underline">About Us</a>
                    </li>
                    <li>
                        <a href="/contact" className="text-zinc-900 hover:underline">Contact Us</a>
                    </li>
                </ul>

                {/* Desktop CTA */}
                {/* <a
                    href="#download"
                    className="hidden md:flex items-center rounded-full bg-zinc-900 px-5 py-2 text-white font-medium text-sm transition-colors hover:bg-zinc-700"
                >
                    Download The App Now
                </a> */}
                <ActionButton title="Download The App Now" href="#download" classes="hidden md:flex items-center rounded-full bg-[#142C57] px-5 py-2 text-white font-medium text-sm transition-colors hover:bg-zinc-700" />

                {/* Mobile Hamburger */}
                <button
                    className="md:hidden flex flex-col justify-center items-center w-10 h-10 gap-1.5"
                    onClick={() => setMenuOpen(!menuOpen)}
                    aria-label="Toggle menu"
                >
                    <span className={`block w-6 h-0.5 bg-zinc-900 transition-all duration-300 ${menuOpen ? "rotate-45 translate-y-2" : ""}`} />
                    <span className={`block w-6 h-0.5 bg-zinc-900 transition-all duration-300 ${menuOpen ? "opacity-0" : ""}`} />
                    <span className={`block w-6 h-0.5 bg-zinc-900 transition-all duration-300 ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`} />
                </button>
            </div>

            {/* Mobile Menu Dropdown */}
            {menuOpen && (
                <div className="md:hidden absolute top-20 left-0 right-0 bg-[#D5F6FF] border-t border-[#a8e8f8] px-6 py-6 flex flex-col gap-4 shadow-md">
                    <a href="#how-works" onClick={() => setMenuOpen(false)} className="text-zinc-900 font-medium text-sm">How Langphy Works</a>
                    <a href="#features" onClick={() => setMenuOpen(false)} className="text-zinc-900 font-medium text-sm">Features</a>
                    <a href="/about" onClick={() => setMenuOpen(false)} className="text-zinc-900 font-medium text-sm">About Us</a>
                    <a href="/contact" onClick={() => setMenuOpen(false)} className="text-zinc-900 font-medium text-sm">Contact Us</a>
                    <a
                        href="#download"
                        onClick={() => setMenuOpen(false)}
                        className="mt-2 inline-flex items-center justify-center rounded-full bg-zinc-900 px-5 py-2.5 text-white font-medium text-sm"
                    >
                        Download The App Now
                    </a>
                </div>
            )}
        </header>
    );
}