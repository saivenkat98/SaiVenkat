import Link from "next/link";
import React, { useState } from "react";
import { Menu } from 'lucide-react';

export function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleToggle = () => setMenuOpen(!menuOpen);
  const closeMenu = () => setMenuOpen(false);

  return (
    <nav className="nav fixed top-0 left-0 w-full z-50 pt-4 bg-black">
      <div className="container mx-auto px-6 flex items-center justify-between relative">
        {/* Logo (toggle button) */}
        <div onClick={handleToggle}>
          <div className="logo_svg">
          <Menu />
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
