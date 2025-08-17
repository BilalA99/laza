"use client"
import React, { useState } from "react";
import Image from "next/image";
import MenuItemDialog from "./MenuItemDialog";
import Link from "next/link";

interface MenuItemCardProps {
    imageSrc: string;
    title: string;
    description: string;
    price: string | number;
    modifiers: {
        name: string;
        options: string[]
    }[];
}
const link = `https://order.toasttab.com/online/locations/e4e3218e-7ad2-411f-a156-ec157a00652f/default`

const MenuItemCard: React.FC<MenuItemCardProps> = ({ imageSrc, title, description, price, modifiers }) => {
    
    return (
       <Link href={link} className="w-full flex items-center justify-center">
                <div className="w-full max-w-xs h-110 self-center bg-transparent rounded-[40px] overflow-hidden hover:cursor-pointer shadow-none flex flex-col transition-all duration-200 hover:scale-105 hover:shadow-lg">
                    {/* Image */}
                    <div className="relative w-full sm:h-56 h-90 bg-[#1B3A6B]" style={{ borderTopLeftRadius: 40, borderTopRightRadius: 40 }}>
                        <Image
                            src={imageSrc || '/lazabluelogo.png'}
                            alt={title}
                            fill
                            className="object-cover"
                            style={{ borderTopLeftRadius: 40, borderTopRightRadius: 40 }}
                        />
                    </div>
                    {/* Info Section */}
                    <div
                        className="flex flex-col justify-between flex-1 sm:px-8 px-6 sm:pt-8 pt-4 sm:pb-6 pb-4"
                        style={{
                            borderRadius: "0px 0px 50px 50px",
                            background: "rgba(255, 255, 255, 0.10)",
                            boxShadow: "0px 2px 8px 2px rgba(0, 0, 0, 0.10) inset",
                        }}
                    >
                        <div>
                            <h3 className="sm:text-2xl text-xl font-bold mb-2">{title}</h3>
                            <p className="sm:text-base text-sm text-black mb-6">{description}</p>
                        </div>
                        <div className="flex items-center justify-between mt-auto">
                            <span className="sm:text-xl text-lg font-bold text-[#2C4B7E]">${price}</span>
                            <button className="text-[#2C4B7E] sm:text-2xl text-xl font-bold rounded-full w-8 h-8 flex items-center justify-center transition">
                                +
                            </button>
                        </div>
                    </div>
                </div>
       </Link>
    );
};

export default MenuItemCard; 