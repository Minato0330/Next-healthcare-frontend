"use client";
import Link from "next/link";
import { FiAlignRight } from "react-icons/fi";
import { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div>
      <nav className="bg-white shadow-md sticky top-0 z-50">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <h1 className="text-2xl font-bold">HelthCare</h1>
            </div>
            <div className="hidden lg:flex space-x-4">
              <Link href="/" className="px-3 py-2 rounded-lg hover:bg-gray-100">
                Home
              </Link>
              <Link
                href="/about"
                className="px-3 py-2 rounded-lg hover:bg-gray-100"
              >
                About
              </Link>
              <Link
                href="/services"
                className="px-3 py-2 rounded-lg hover:bg-gray-100"
              >
                Services
              </Link>
              <Link
                href="/contact"
                className="px-3 py-2 rounded-lg hover:bg-gray-100"
              >
                Contact
              </Link>
              <Link
                href="/login"
                className="px-3 border  py-2 rounded-lg hover:bg-gray-100"
              >
                Login
              </Link>
            </div>
            <div className="lg:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="p-2 rounded-md hover:bg-gray-100"
              >
                <FiAlignRight />
              </button>
            </div>
          </div>
        </div>
        {isOpen && (
          <div className="lg:hidden bg-white shadow-md">
            <Link href="/" className="block px-4 py-2 hover:bg-gray-100">
              Home
            </Link>
            <Link href="/about" className="block px-4 py-2 hover:bg-gray-100">
              About
            </Link>
            <Link
              href="/services"
              className="block px-4 py-2 hover:bg-gray-100"
            >
              Services
            </Link>
            <Link href="/contact" className="block px-4 py-2 hover:bg-gray-100">
              Contact
            </Link>
          </div>
        )}
      </nav>
    </div>
  );
};

export default Navbar;
