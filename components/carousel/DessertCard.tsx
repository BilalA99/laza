import React from "react";
import Image from "next/image";

export type Dessert = {
    image: string;
    title: string;
    description: string;
};

interface DessertCardProps extends Dessert {
    active?: boolean;
}

const DessertCard: React.FC<DessertCardProps> = ({ image, title, description, active }) => {
    return (
        <div
            className={`relative flex flex-row items-center justify-center bg-white rounded-3xl transition-all duration-300 shadow-none drop-shadow-md overflow-hidden ${active ? "w-[50rem] h-[25rem] px-8 py-8" : "w-[22rem] h-[22rem]"}
      `}
        >
            <Image
                src={image}
                alt={title}
                fill
                className={`object-cover rounded-3xl ${active ? "w-[50rem] h-[25rem]" : "w-[220px] h-[220px]"}`}
                style={{ zIndex: 1 }}
            />

            {active && (
                <div className="h-full w-[260px] bg-white rounded-3xl flex flex-col justify-center px-6 py-8 shadow-none drop-shadow-md overflow-hidden" style={{ left: "60%" }}>
                    <h2 className="text-2xl font-bold mb-2 text-black">{title}</h2>
                    <p className="text-base text-black mb-4">{description}</p>
                    <button className="text-[#2C4B7E] font-semibold text-lg flex items-center gap-1 hover:underline">
                        Add to cart <span className="text-xl">+</span>
                    </button>
                </div>
            )}
        </div>
    );
};

export default DessertCard; 