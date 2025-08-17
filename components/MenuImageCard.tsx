import React from "react";
import Image from "next/image";
import AutoPlayVideo from "@/components/AutoPlayVideo";

interface MenuImageCardProps {
    imageSrc: string;
    alt: string;
    label: string;
}

const MenuImageCard: React.FC<MenuImageCardProps> = ({ imageSrc, alt, label }) => {
    return (
        <div className="relative w-full aspect-[1/1.1] overflow-hidden shadow-lg">
            {/* Video */}
            <AutoPlayVideo
                src={imageSrc}
                className="w-full h-full object-cover sm:object-center object-left"
                showPlayButton={false}
            />
            {/* Gradient Overlay */}
            <div
                className="absolute inset-0"
                style={{
                    background:
                        "linear-gradient(180deg, rgba(102, 102, 102, 0.00) 0%, rgba(0, 0, 0, 0.90) 100%)",
                }}
            />
            {/* Text */}
            <div className="absolute left-0 bottom-0 p-6">
                <span className="text-white text-5xl md:text-6xl drop-shadow-lg"
                    style={{
                        fontFamily: "var(--font-bebas)",
                    }}
                >
                    {label}
                </span>
            </div>
        </div>
    );
};

export default MenuImageCard; 