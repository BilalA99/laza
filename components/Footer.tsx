import React from "react";
import Image from "next/image";

const navLinks = [
    ["About Us", "Our story", "Join Us", "Testimonials"],
    ["Catering", "Order Online", "Contact Us", "Featured"],
];

const locations = [
    {
        name: "Brooklyn",
        address: ["6740 5th Ave,", "Brooklyn, NY 11220"],
    },
    {
        name: "Long Island City",
        address: ["25-33 Steinway St,", "Long Island City, NY 11220"],
    },
];

const socialLinks = [
    { href: "https://tiktok.com", icon: "/tiktok.svg", label: "TikTok" },
    { href: "https://instagram.com", icon: "/instagram.svg", label: "Instagram" },
];

export default function Footer() {
    return (
        <footer className="w-full bg-white border-t border-gray-200 pt-12 pb-4 px-4 md:px-0 transition-all duration-300">
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row md:items-start md:justify-between gap-8 md:gap-0">
                {/* Logo */}
                <div className="flex flex-col items-center md:items-start w-full md:w-auto mb-8 md:mb-0">
                    <Image src="/lazabluelogo.png" alt="Laza Logo" width={140} height={140} className="mb-2" />
                </div>
                {/* Navigation */}
                <div className="flex flex-row flex-wrap gap-16 w-full md:w-auto justify-center md:justify-start">
                    {navLinks.map((col, i) => (
                        <div key={i} className="flex flex-col gap-4 min-w-[140px]">
                            {col.map((link) => (
                                <a key={link} href="#" className="text-lg font-semibold text-black hover:text-[#2C4B7E] transition-colors duration-200">{link}</a>
                            ))}
                        </div>
                    ))}
                    {/* Locations */}
                    <div className="flex flex-col gap-2 min-w-[200px]">
                        <span className="text-lg font-bold mb-2">Locations</span>
                        {locations.map((loc) => (
                            <div key={loc.name} className="mb-2">
                                <span className="font-bold">{loc.name}</span><br />
                                {loc.address.map((line, idx) => (
                                    <span key={idx}>{line}<br /></span>
                                ))}
                            </div>
                        ))}
                    </div>
                    {/* Hours */}
                    <div className="flex flex-col gap-2 min-w-[180px]">
                        <span className="text-lg font-bold mb-2">Opening Hours</span>
                        <span>Open 7 Days a Week</span>
                        <span>Daily Hours | 2:00 AM – 2:00 PM</span>
                    </div>
                </div>
            </div>
            {/* Divider */}
            <div className="w-full border-t border-[#2C4B7E] my-8" />
            {/* Bottom Row */}
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 text-center text-black text-lg">
                <div className="flex items-center gap-4">
                    <span>Follow us</span>
                    {socialLinks.map((s) => (
                        <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer" className="hover:scale-110 transition-transform duration-200">
                            <Image src={s.icon} alt={s.label} width={36} height={36} />
                        </a>
                    ))}
                </div>
                <span className="text-[#2C4B7E]">© 2025 Laza Cafe inc.</span>
                <div className="flex gap-12">
                    <a href="#" className="hover:underline">Privacy Policy</a>
                    <a href="#" className="hover:underline">Terms & Conditions</a>
                </div>
            </div>
        </footer>
    );
} 