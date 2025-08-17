import React from "react";
import Image from "next/image";
import FadeIn from "@/components/FadeIn";

interface MenuCardProps {
    product: {
        id: number;
        name: string;
        price: string;
        image: string;
    }
}

const MenuCard: React.FC<MenuCardProps> = ({ product }) => {
    return (
        <FadeIn className="w-full h-full">
            <div
                className="bg-white rounded-[48px] overflow-hidden flex flex-col transition-transform duration-300 hover:-translate-y-2 cursor-pointer w-[350px] h-[450px] shadow-none drop-shadow-sm hover:drop-shadow-xl will-change-transform isolate"
                style={{ minWidth: 320, minHeight: 420 }}
            >
                <div className="relative w-full h-[55%]">
                    <Image
                        src={product.image}
                        alt={product.name}
                        fill
                        className="object-cover object-center rounded-t-[48px]"
                        sizes="(max-width: 600px) 100vw, 350px"
                    />
                </div>
                <div className="flex flex-col justify-between flex-1 p-8">
                    <h3 className="text-2xl font-bold text-black mb-4 leading-tight">{product.name}</h3>
                    <div className="flex flex-row items-center justify-between mt-auto">
                        <span className="text-[#2C4B7E] text-2xl font-bold">{product.price}</span>
                        <span className="text-[#2C4B7E] text-3xl font-bold">+</span>
                    </div>
                </div>
            </div>
        </FadeIn>
    );
};

export default MenuCard; 