"use client";
import React, { useState, useEffect } from "react";
import { navData } from "@/data/NavData";
import AppointmentForm from "@/components/home/AppointmentForm";
import Modal from "@/components/ui/Modal"; 

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) section.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <>
      <nav
        className={`sticky top-0 left-0 flex justify-between items-center px-4 lg:px-24  text-lg w-full p-2 transition-all ease-in z-[999] bg-white`}
        style={{ color: isScrolled ? "#000" : "var(--primary-color)" }}
      >
        <div className="h-[50px] flex items-center gap-4">
          <div className="md:text-3xl text-xlc text-primary_dark font-semibold">
            Yash Pandey
          </div>
        </div>

        <div className="hidden lg:flex flex-grow justify-center">
          <ul className="flex gap-5">
            {navData.map((data, key) => (
              key != (navData.length-1) &&
              <li key={key}>
                <button
                  onClick={() => scrollToSection(data.link.substring(1))}
                  className="hover:underline text-primary_dark rounded-md p-1 transition-all"
                >
                  {data.name}
                </button>
              </li>
            ))}
          </ul>
        </div>

        <button
          onClick={() => scrollToSection("contact")}
          className="bg-primary text-white rounded-full px-5 py-1 hidden xl:block "
        >
          Contact
        </button>

        <div className="fixed top-[30%] -right-[4.5rem] -rotate-90 z-[9999]">
          <button
            onClick={() => setShowModal(true)}
            className="bg-primary text-white p-2 rounded-md hover:bg-primary-dark transition-all"
          >
            Book Appointment
          </button>
        </div>

        <div className="lg:hidden">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-primary_dark text-2xl"
          >
            ☰
          </button>
        </div>

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
                    className="hover:bg-gray-200 rounded-md text-primary_dark font-semibold p-2 transition-all"
                  >
                    {data.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        )}
      </nav>

      <Modal isOpen={showModal} onClose={() => setShowModal(false)}>
        <AppointmentForm />
      </Modal>
    </>
  );
};

export default Navbar;
