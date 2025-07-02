"use client"
import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
const navLinks = [
    { label: "Menu", href: "#" },
    { label: "About", href: "#" },
    { label: "Catering", href: "#" },
    { label: "Locations", href: "#" },
    { label: "Join Us", href: "#" },
];

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 10);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <nav
            className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${scrolled ? "bg-white shadow text-[#2C4B7E]" : "bg-transparent text-white"
                }`}
        >
            <div className="mx-auto flex items-center justify-between px-20 py-4">
                {/* Logo */}
                <div className="flex items-center">
                    <Image src="/lazanavbarlogo.png" alt="Laza Logo" width={80} height={60} />
                </div>
                {/* Nav Links */}
                <div className="flex-1 flex justify-center gap-12">
                    {navLinks.slice(0, 4).map((link) => (
                        <a
                            key={link.label}
                            href={link.href}
                            className="text-lg font-medium transition-colors duration-300 hover:opacity-80"
                        >
                            {link.label}
                        </a>
                    ))}
                </div>
                {/* Right Side */}
                <div className="flex items-center gap-10">
                    <a href="#" className="flex items-center gap-2 text-lg font-medium">
                    <Image src="/icons/phone.png" alt="Laza Logo" width={20} height={20} />
                    +1 (347) 560-6080
                    </a>
                    <a href="#" className="flex items-center gap-2 text-lg font-medium">
                        <Image src="/icons/bag.png" alt="Laza Logo" width={15} height={15} />
                        (2)
                    </a>
                </div>
            </div>
        </nav>
    );
} 