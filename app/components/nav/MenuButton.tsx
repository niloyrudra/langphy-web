import React from 'react'

const MenuButton = ({isMenuOpen, onClick}: {isMenuOpen: boolean, onClick: () => void}) => (
    <button
        className="md:hidden flex flex-col justify-center cursor-pointer items-center w-10 h-10 gap-1.5"
        onClick={onClick}
        aria-label="Toggle menu"
    >
        <span className={`block w-6 h-0.5 bg-[#142C57] transition-all duration-300 ${isMenuOpen ? "rotate-45 translate-y-2" : ""}`} />
        <span className={`block w-6 h-0.5 bg-[#142C57] transition-all duration-300 ${isMenuOpen ? "opacity-0" : ""}`} />
        <span className={`block w-6 h-0.5 bg-[#142C57] transition-all duration-300 ${isMenuOpen ? "-rotate-45 -translate-y-2" : ""}`} />
    </button>
);

export default MenuButton;