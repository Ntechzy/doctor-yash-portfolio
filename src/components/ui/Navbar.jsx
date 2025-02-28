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

  // Scroll to section function
  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 flex justify-between items-center px-4 lg:px-24 mb-10 text-lg w-full p-2 transition-all ease-in z-[999] bg-white`}
      style={{ color: isScrolled ? "#000" : "var(--primary-color)" }}
    >
      {/* Logo and Name */}
      <div className="h-[50px] flex items-center gap-4">
        <img className="h-full w-[80px]" src="next.svg" alt="Logo" />
        <div className="md:text-3xl text-xlc text-primary_dark font-semibold">
          Yash Pandey
        </div>
      </div>

      {/* Desktop Menu */}
      <div className="hidden lg:flex flex-grow justify-center">
        <ul className="flex gap-5">
          {navData.map((data, key) => (
            <li key={key}>
              <button
                onClick={() => scrollToSection(data.link.substring(1))}
                className={`hover:bg-primary_dark text-primary_dark rounded-md hover:text-[#ffffff]  p-1 transition-all`}
              >
                {data.name}
              </button>
            </li>
          ))}
        </ul>
      </div>

      {/* Book Appointment Button */}
      <div className="hidden lg:flex">
        <Link href="/book-appointment"
          className="bg-[#16ab97] text-white p-2 rounded-md hover:bg-primary-dark transition-all"
        >
          Book Appointment
        </Link>
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
                <button
                  onClick={() => {
                    scrollToSection(data.link.substring(1));
                    setIsMenuOpen(false);
                  }}
                  className={`${
                    isMenuOpen ? "shadow-md text-primary_dark" : "text-primary_dark"
                  } hover:bg-gray-200 rounded-md hover:text-primary_dark font-semibold p-2 transition-all`}
                >
                  {data.name}
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
