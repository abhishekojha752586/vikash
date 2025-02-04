"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";


const menuItems = [
  { name: "Courses", href: "#courses", isExternal: "false" },
  { name: "Admission", href: "https://forms.gle/bqKuCQ9H4AKjZEce9", isExternal: "true" },
  { name: "About Us", href: "#aboutus", isExternal: "false"  },
  { name: "Result", href: "/result", isExternal: "false"  },
  { name: "Franchise", href: "https://forms.gle/VF8vPBbi6RYLtwLG9",  isExternal: "true"  },
  { name: "Contact Us", href: "#footer", isExternal: "false"  },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full bg-slate-800 shadow-md z-50">
      <div className="container mx-auto px-6 py-4 flex items-center justify-between">
        {/* Brand Logo */}
        <Link href="/" className="flex items-center gap-2 ">
          <img
            src="https://ik.imagekit.io/abhishekojha/vikashCyber/WhatsApp%20Image%202024-12-20%20at%2010.47.16.jpeg?updatedAt=1737220461105" // Ensure this is your correct logo path
            alt="RS Computer Classes Logo"
            width={60}
            height={60}
            className="w-10 h-10 sm:w-12 sm:h-12 rounded-full"
          />
          
        </Link>

        {/* Desktop Menu */}
        <div className="hidden sm:flex gap-6">
          {menuItems.map((item, index) => (
            <Link key={index} href={item.href} className="text-white hover:text-gray-300 transition no-underline">
              {item.name}
            </Link>
          ))}
        </div>

        {/* Mobile Toggle Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="sm:hidden flex flex-col justify-center items-center w-8 h-8 relative"
        >
          <motion.div
            initial={false}
            animate={isOpen ? { rotate: 45, y: 1 } : { rotate: 0, y: -7 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="w-6 h-0.5 bg-white absolute transition-all"
            style={{ originX: 0.5, originY: 0.5 }}
          />
          <motion.div
            initial={false}
            animate={isOpen ? { rotate: -45, y: 0 } : { rotate: 0, y: 6 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="w-6 h-0.5 bg-white absolute transition-all "
            style={{ originX: 0.5, originY: 0.5 }}
          />
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          className="sm:hidden bg-slate-900 px-6 py-4"
        >
          {menuItems.map((item, index) => (
            <Link
              key={index}
              href={item.href}
              className="block py-2 text-white hover:text-gray-300 transition no-underline"
              onClick={() => setIsOpen(false)} // Close menu on click
            >
              {item.name}
            </Link>
          ))}
        </motion.div>
      )}
    </nav>
  );
}
