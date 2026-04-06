"use client";
import Image from "next/image";
import { useCallback, useState } from "react";
import ActionButton from "./ActionButton";
import DesktopNavList from "./nav/DesktopNavList";
import MobileNavList from "./nav/MobileNavList";
import MenuButton from "./nav/MenuButton";
// import { useRouter } from "next/router";
import { usePathname } from "next/navigation";
import LogoDark from "./logo/LogoDark";

const Header = () => {
    // const pathName = usePathname()
    const [ menuOpen, setMenuOpen ] = useState<boolean>(false);
    const menuHandler = useCallback(() => setMenuOpen(false), []);
    const menuToggleHandler = useCallback(() => setMenuOpen(!menuOpen), [menuOpen]);
    
    // console.log(pathName);
    return (
        <header className="flex w-full max-w-full sticky top-0 px-4 h-20 items-center gap-6 font-poppins bg-[#D5F6FF] relative z-50">
            
            <div className="flex flex-row mx-auto max-w-6xl w-full items-center justify-between gap-6">

                {/* Logo */}
                <LogoDark />

                {/* Desktop Nav */}
                <DesktopNavList />

                {/* Desktop CTA */}
                <ActionButton title="Download The App Now" href="/#download" className="hidden md:flex" />

                {/* Mobile Hamburger */}
                <MenuButton isMenuOpen={menuOpen} onClick={menuToggleHandler} />
            </div>

            {/* Mobile Menu Dropdown */}
            {menuOpen && (<MobileNavList onClick={menuHandler} />)}
        </header>
    );
}
export default Header;