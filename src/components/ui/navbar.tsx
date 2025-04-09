import Link from "next/link";
import React, { useState } from "react";

export function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleToggle = () => setMenuOpen(!menuOpen);
  const closeMenu = () => setMenuOpen(false);

  return (
    <nav className="nav fixed top-0 left-0 w-full z-50 pt-4 bg-black">
      <div className="container mx-auto px-6 flex items-center justify-between relative">
        {/* Logo (toggle button) */}
        <div
          className={`logo w-[52px] h-[52px] block cursor-pointer transition-transform duration-300 ${
            menuOpen ? "rotate-180" : ""
          }`}
          onClick={handleToggle}
        >
          <div className="logo_svg">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="100%"
              height="100%"
              viewBox="0 0 163.314 158.055"
            >
              <path
                id="Path_659"
                data-name="Path 659"
                d="M-973.552,2522.567s71.327-2.934,81.657,79.012c10.329-81.946,81.657-79.012,81.657-79.012v-.023s-71.328,2.924-81.657-79.021c-10.33,81.945-81.657,79.021-81.657,79.021"
                transform="translate(973.552 -2443.523)"
                fill="currentColor"
              ></path>
            </svg>
          </div>
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center space-x-6 text-white">
          <Link href="/" className="hover:opacity-70 transition-opacity">Home</Link>
          <Link href="/work" className="hover:opacity-70 transition-opacity">Work</Link>
          <Link href="/projects" className="hover:opacity-70 transition-opacity">Projects</Link>
          <Link href="/contact" className="hover:opacity-70 transition-opacity">Contact</Link>
        </div>

        {/* Mobile Horizontal Menu */}
        {menuOpen && (
          <div className="absolute left-[75px] top-1/2 -translate-y-1/2 flex flex-row items-center space-x-4 md:hidden bg-black px-4 py-2 rounded-lg shadow-md text-white z-40">
            <Link href="/" className="hover:opacity-70" onClick={closeMenu}>Home</Link>
            <Link href="/work" className="hover:opacity-70" onClick={closeMenu}>Work</Link>
            <Link href="/projects" className="hover:opacity-70" onClick={closeMenu}>Projects</Link>
            <Link href="/contact" className="hover:opacity-70" onClick={closeMenu}>Contact</Link>
          </div>
        )}
      </div>
    </nav>
  );
}
