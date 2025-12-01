"use client";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [nav, setNav] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const links = [
    { id: 0, link: "/", Name: "หน้าแรก" },
    { id: 1, link: "/history", Name: "ประวัติ" },
    { id: 2, link: "/news", Name: "กิจกรรม" },
    { id: 10, link: "/reward", Name: "เกียรติรางวัล" },
    { id: 3, link: "/course", Name: "คอร์สเรียน" },
    { id: 4, link: "/product", Name: "วัตถุมงคล" },
    { id: 5, link: "/horoscope", Name: "พิธีกรรม" },
    { id: 6, link: "/fengshui", Name: "ฮวงจุ้ย" },
    { id: 7, link: "/rite", Name: "งานพิธี" },
    { id: 8, link: "/applyMembership", Name: "สมัครศิษย์" },
    { id: 9, link: "/contact", Name: "ติดต่อ" },
  ];

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-black/90 backdrop-blur-md shadow-lg py-2"
          : "bg-transparent py-4"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0 cursor-pointer">
            <Link href="/">
              <h1 className="text-2xl md:text-3xl font-bold text-white tracking-wider hover:text-gold transition-colors duration-300 font-signature">
                สายมูสร้างเงินล้าน
              </h1>
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {links.slice(0, 6).map(({ id, link, Name }) => (
                <Link
                  key={id}
                  href={link}
                  className="text-gray-300 hover:text-gold px-3 py-2 rounded-md text-sm font-medium transition-all duration-300 hover:scale-105"
                >
                  {Name}
                </Link>
              ))}
              {/* Dropdown or More for extra items could go here, for now just listing important ones or all if space permits. 
                  Given the number of links, a "More" dropdown might be better, but let's keep it simple for now or hide less critical ones on smaller desktops.
                  Let's show all for now but maybe reduce font size or spacing if needed.
              */}
            </div>
          </div>
          
           {/* Mobile Menu Button */}
          <div className="-mr-2 flex md:hidden">
            <button
              onClick={() => setNav(!nav)}
              type="button"
              className="bg-gray-900 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
              aria-controls="mobile-menu"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              {nav ? <FaTimes size={24} /> : <FaBars size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {nav && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "100vh" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden fixed top-0 left-0 w-full bg-black/95 backdrop-blur-xl z-40 overflow-y-auto"
          >
            <div className="flex flex-col items-center justify-center min-h-screen space-y-6">
               <button
                onClick={() => setNav(false)}
                className="absolute top-5 right-5 text-gray-400 hover:text-white"
              >
                <FaTimes size={30} />
              </button>
              {links.map(({ id, link, Name }) => (
                <Link
                  key={id}
                  href={link}
                  onClick={() => setNav(false)}
                  className="text-2xl text-gray-300 hover:text-gold font-medium transition-colors duration-300"
                >
                  {Name}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
