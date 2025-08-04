import React from "react";
import Image from "next/image";
import Link from "next/link";

const navLinks = [
    { label: "Home", href: "/" },
    { label: "Menu", href: "/menu" },
    { label: "About", href: "/about" },
    { label: "Catering", href: "/catering" },
    // { label: "Locations", href: "#" },
    { label: "Join Us", href: "/join-us" },
];

const locations = [
    {
        name: "Brooklyn",
        address: ["6740 5th Ave,", "Brooklyn, NY 11220"],
    },
    {
        name: "Astoria",
        address: ["25-33 Steinway St,", "Astoria, NY 11220"],
    },
];

const socialLinks = [
    { href: "https://tiktok.com", icon: "/tiktok.png", label: "TikTok" },
    { href: "https://instagram.com", icon: "/insta.png", label: "Instagram" },
];

export default function Footer() {
    return (
        <footer className="w-full bg-white border-t border-gray-200 px-4 mt-1 pb-4 flex flex-col  md:px-0 transition-all duration-300"
            style={{
                boxShadow: '0px -2px 4px 0px rgba(0, 0, 0, 0.25)'
            }}
        >
            <div className="max-w-7xl w-full mx-auto flex flex-col py-12  md:flex-row md:items-start md:justify-between gap-8 md:gap-0">
                {/* Logo */}
                <div className="md:flex hidden flex-col items-center md:items-start h-34 w-34 rounded-full overflow-hidden border relative aspect-square">
                    <Image src="/lazabluelogo.png" alt="Laza Logo" fill className=" object-cover h-full w-full" />
                </div>
                {/* Navigation */}
                <div className="flex flex-row md:flex-nowrap flex-wrap gap-16 w-full md:w-auto justify-start">

                    <div className="flex flex-col w-full flex-wrap gap-4">
                        {navLinks.map((col, i) => (
                            <Link href={`${col.href}`} key={i} className="flex flex-col gap-4 min-w-[140px]">
                                <p className="text-lg font-semibold text-black hover:text-[#2C4B7E] transition-colors duration-200">{col.label}</p>
                            </Link>
                        ))}
                    </div>

                    {/* Locations */}
                    <div className="flex flex-col gap-2 min-w-[200px] sm:w-auto w-full self-start">
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
                    <div className="flex flex-col gap-2 min-w-[180px] sm:w-auto w-full self-start">
                        <span className="text-lg font-bold mb-2">Opening Hours</span>
                        <span>Open 7 Days a Week</span>
                        <span>Daily Hours | 2:00 PM – 2:00 AM</span>
                    </div>
                </div>
            </div>
            {/* Divider */}
            <div className="w-[90%] self-center flex  border-t border-[#2C4B7E] my-8" />
            {/* Bottom Row */}
            <div className="max-w-7xl mx-auto w-full flex flex-col md:flex-row items-center justify-between gap-4 text-center text-black text-lg">
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