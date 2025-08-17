import React from "react";
import Image from "next/image";

const MenuHeader: React.FC = () => {
    return (
        <section className="w-full relative min-h-[380px] pt-10 md:min-h-100 flex items-center justify-center px-4  overflow-hidden">
            {/* Centered Text */}
            <div className="flex flex-col items-center justify-center w-full z-10 text-center">
                <h1 className="text-5xl md:text-7xl  font-500"
                style={{
                    fontFamily: "var(--font-bebas)",
                }}
                >Explore Our Menu</h1>
                <p className="text-lg md:text-xl max-w-2xl mx-auto text-black/80 mt-8"
                style={{
                    fontFamily: "var(--font-raleway)",
                }}
                >
                    Handcrafted indulgences that captured the spotlight, each bite<br />
                    a testament to dessert artistry at Laza.
                </p>
            </div>
            {/* Absolutely Positioned Image on the Right */}
            <div className="hidden md:block absolute right-0 top-60 -translate-y-1/2 w-[60%] h-full z-0">
                <Image
                    src="/lazablack1.png"
                    alt="Laza Logo"
                    fill
                    className="object-cover w-full h-full "
                    priority
                />
                {/* <div
                    className="absolute inset-0 pointer-events-none h-full w-full"
                    style={{
                        background:
                            "linear-gradient(180deg, rgba(255, 255, 255, 0.00) 35.41%, #FFF 74.53%)",
                    }}
                /> */}
            </div>
        </section>
    );
};

export default MenuHeader; 