import Link from "next/link";
import React from "react";

export function Navbar() {
  return (
    <nav className="nav fixed top-0 left-0 w-full z-50 pt-4">
      <div className="container mx-auto px-6 flex items-center justify-between">
        <Link href="/" className="logo w-[52px] h-[52px] block">
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
        </Link>
        <div className="hidden md:flex items-center space-x-6 text-white">
          <Link href="/" className="hover:opacity-70 transition-opacity">
            Home
          </Link>
          <Link
            href="/work"
            className="hover:opacity-70 transition-opacity"
          >
            Work
          </Link>
          <Link
            href="/projects"
            className="hover:opacity-70 transition-opacity"
          >
            Projects
          </Link>
          <Link href="/contact" className="hover:opacity-70 transition-opacity">
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
}
