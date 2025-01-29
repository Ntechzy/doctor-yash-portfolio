import React, { useState, useEffect } from "react";
import { navData } from "@/data/NavData";
import Link from "next/link";

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    // Handle scroll event to change navbar style
    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 10) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener("scroll", handleScroll);

        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <nav
            className={`fixed top-0 left-0 flex justify-between items-center px-4 lg:px-24 text-lg w-full p-2 transition-all ease-in z-[999] bg-white`}
            style={{ color: isScrolled ? "#000" : "var(--primary-color)" }}
        >
            {/* Logo */}
            <div className="h-[50px] flex items-center gap-4">
                <img className="h-full w-[80px]" src="next.svg" alt="Logo" />
                <div className="text-lg text-primary_dark font-semibold">
                    Yash
                    <br />
                    Pandey
                </div>
            </div>

            {/* Desktop Menu */}
            <div className="hidden lg:flex">
                <ul className="flex gap-5">
                    {navData.map((data, key) => (
                        <li key={key}>
                            <Link
                                href={data.link}
                                className={`hover:bg-gray-200 text-primary_dark rounded-md hover:text-primary font-semibold p-2 transition-all`}
                            >
                                {data.name}
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>

            {/* Mobile Menu Icon */}
            <div className="lg:hidden">
                <button
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                    className="text-primary_dark text-2xl"
                >
                    ☰
                </button>
            </div>

            {/* Mobile Menu */}
            {isMenuOpen && (
                <div className="absolute top-full left-0 w-full bg-white lg:hidden shadow-lg">
                    <ul className="flex flex-col gap-4 p-4">
                        {navData.map((data, key) => (
                            <li key={key}>
                                <Link
                                    href={data.link}
                                    className={`${
                                        isMenuOpen ? "shadow-md text-primary_dark" : "text-primary_dark"
                                    } hover:bg-gray-200 rounded-md hover:text-primary_dark font-semibold p-2 transition-all`}
                                    onClick={() => setIsMenuOpen(false)}
                                >
                                    {data.name}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
