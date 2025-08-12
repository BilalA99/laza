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
           <MenuItemDialog imageSrc={imageSrc} title={title} description={description} price={price} modifiers={modifiers}>
                <div className="w-full max-w-xs h-110 self-center bg-transparent rounded-[40px] overflow-hidden hover:cursor-pointer shadow-none drop-shadow-sm hover:drop-shadow-lg flex flex-col transition-all duration-200 hover:scale-105 will-change-transform isolate">
                    {/* Image */}
                    <div className="relative w-full h-56 bg-[#1B3A6B]" style={{ borderTopLeftRadius: 40, borderTopRightRadius: 40 }}>
                        <Image
                            src={imageSrc}
                            alt={title}
                            fill
                            className="object-cover"
                            style={{ borderTopLeftRadius: 40, borderTopRightRadius: 40 }}
                        />
                    </div>
                    {/* Info Section */}
                    <div
                        className="flex flex-col justify-between flex-1 px-8 pt-8 pb-6"
                        style={{
                            borderRadius: "0px 0px 50px 50px",
                            background: "rgba(255, 255, 255, 0.10)",
                            boxShadow: "0px 2px 8px 2px rgba(0, 0, 0, 0.10) inset",
                        }}
                    >
                        <div>
                            <h3 className="text-2xl font-bold mb-2">{title}</h3>
                            <p className="text-base text-black mb-6">{description}</p>
                        </div>
                        <div className="flex items-center justify-between mt-auto">
                            <span className="text-xl font-bold text-[#2C4B7E]">${price}</span>
                            <button className="text-[#2C4B7E] text-2xl font-bold rounded-full w-8 h-8 flex items-center justify-center hover:bg-[#e6ecfa] transition">
                                +
                            </button>
                        </div>
                    </div>
                </div>
           </MenuItemDialog>
       </Link>
    );
};

export default MenuItemCard; 