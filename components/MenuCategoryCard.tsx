import React from "react";
import Image from "next/image";

interface MenuCategoryCardProps {
    title: string;
    imageSrc?: string;
    hoverBlue?: boolean;
    onClick?: () => void;
}

const MenuCategoryCard: React.FC<MenuCategoryCardProps> = ({ title, imageSrc, hoverBlue, onClick }) => {
    return (
        <div
            className={`flex items-center bg-white border border-gray-200 rounded-3xl hover:scale-105 overflow-hidden min-h-[120px] shadow-sm transition-all duration-200
                ${hoverBlue ? "hover:bg-[#2C4B7E] hover:text-white group cursor-pointer" : ""}
            `}
            onClick={onClick}
        >
            <div className="relative w-40 h-full flex-shrink-0">
                <Image
                    src={imageSrc || "/desserts/kunafa.jpg"}
                    alt={title}
                    fill
                    className="object-cover"
                />
            </div>
            <div className={`flex-1 flex items-center px-8 h-full transition-all duration-200 ${hoverBlue ? "group-hover:text-white" : ""}`}>
                <span className="text-xl font-medium">{title}</span>
            </div>
        </div>
    );
};

export default MenuCategoryCard; 