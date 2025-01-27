import React, { useState, useEffect } from "react";
import { navData } from "@/data/NavData";
import Link from "next/link";

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);


    return (
        <nav
            className={`flex justify-between items-center px-4 lg:px-24 text-lg  z-[999] w-full p-2 transition-all ease-in ${isScrolled ? "bg-white" : "bg-transparent"
                }`}
            style={{ color: isScrolled ? "#000" : "var(--primary-color)" }}
        >
            <div className="h-[50px] flex items-center gap-4">
                <img className="h-full w-[80px]" src="next.svg" alt="Logo" />
                <div className="text-lg text-primary_dark font-semibold">
                    Yash
                    <br />
                    Pandey
                </div>
            </div>


            <div className="hidden lg:flex">
                <ul className="flex gap-5">
                    {navData.map((data, key) => (
                        <Link
                            key={key}
                            href={data.link}
                            className={`hover:bg-gray-200 text-primary_dark rounded-mdhover:text-primary font-semibold p-2`}
                        >
                            {data.name}
                        </Link>
                    ))}
                </ul>
            </div>


            {/* Mobile Menu Icon */}
            <div className="lg:hidden">
                <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-primary">
                    ☰
                </button>
            </div>

            {/* Mobile Menu */}
            {
                isMenuOpen && (
                    <div className="absolute top-full left-0 w-full bg-white lg:hidden">
                        <ul className="flex flex-col gap-4 p-4">
                            {navData.map((data, key) => (
                                <Link
                                    key={key}
                                    href={data.link}
                                    className={`${isActive(data.link)
                                        ? "bg-gray-200 text-primary rounded-md"
                                        : "hover:bg-gray-200 text-primary_dark rounded-md"
                                        } hover:text-primary font-semibold p-2`}
                                    onClick={() => setIsMenuOpen(false)}
                                >
                                    {data.name}
                                </Link>
                            ))}

                        </ul>
                    </div>
                )
            }
        </nav >
    );
};

export default Navbar;
