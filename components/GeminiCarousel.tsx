"use client"
import React, { useState, useRef, useEffect } from 'react';

// Sample data for the carousel items
const products = [
    {
        id: 1,
        title: 'Dubai Strawberry Cup',
        description: 'Comes with Strawberry, Milk chocolate pistachio kunafa mix & Drizzled with White.',
        price: '$12.99',
        image: 'https://placehold.co/400x400/3B82F6/FFFFFF?text=Dessert+1',
    },
    {
        id: 2,
        title: 'Pistachio Delight',
        description: 'A rich and creamy pistachio-flavored dessert, topped with crushed nuts.',
        price: '$10.50',
        image: 'https://placehold.co/400x400/10B981/FFFFFF?text=Dessert+2',
    },
    {
        id: 3,
        title: 'Chocolate Lava Cake',
        description: 'Warm chocolate cake with a gooey molten center, served with a scoop of vanilla ice cream.',
        price: '$8.75',
        image: 'https://placehold.co/400x400/F59E0B/FFFFFF?text=Dessert+3',
    },
    {
        id: 4,
        title: 'Classic Tiramisu',
        description: 'Coffee-flavoured Italian dessert. Ladyfingers dipped in coffee, layered with a whipped mixture.',
        price: '$9.99',
        image: 'https://placehold.co/400x400/EF4444/FFFFFF?text=Dessert+4',
    },
    {
        id: 5,
        title: 'Blueberry Cheesecake',
        description: 'A creamy cheesecake on a graham cracker crust, topped with a sweet blueberry sauce.',
        price: '$11.25',
        image: 'https://placehold.co/400x400/8B5CF6/FFFFFF?text=Dessert+5',
    },
];

// Main App Component
export default function GeminiCarousel({ products }: { products: any[] }) {
    const [activeIndex, setActiveIndex] = useState(Math.floor(products.length / 2));
    const carouselRef = useRef(null);

    // Function to handle changing the active slide
    const handleSelect = (index) => {
        setActiveIndex(index);
    };

    // Function for the next button
    const handleNext = () => {
        setActiveIndex((prevIndex) => (prevIndex + 1) % products.length);
    };

    // Function for the previous button
    const handlePrev = () => {
        setActiveIndex((prevIndex) => (prevIndex - 1 + products.length) % products.length);
    };

    // Effect to center the active slide using scrollIntoView for better accuracy
    useEffect(() => {
        if (carouselRef.current) {
            const activeItem = carouselRef.current.children[activeIndex];
            if (activeItem) {
                // This is a more robust way to center the item, especially with animations.
                activeItem.scrollIntoView({
                    behavior: 'smooth',
                    inline: 'center',
                    block: 'nearest'
                });
            }
        }
    }, [activeIndex]);


    return (
        <div className="flex flex-col items-center justify-center font-sans p-4 overflow-hidden ">
            <div className="w-full max-w-8xl relative [mask-composite:intersect] [mask-image:linear-gradient(to_right,transparent,black_6rem),linear-gradient(to_left,transparent,black_6rem)]">
                {/* Carousel Container */}
                <div
                    ref={carouselRef}
                    className="flex items-center justify-start space-x-6 md:space-x-10 overflow-x-auto w-full px-4 no-scrollbar "
                >
                    {products.map((product: any, index: number) => {
                        const isActive = index === activeIndex;
                        return (
                            // Wrapper for each carousel item for spacing and transformations opacity-60 hover:opacity-80
                            <div 
                                key={product.id}
                                className={`flex-shrink-0 transition-opacity duration-500 ease-in-out cursor-pointer ${isActive ? 'opacity-100' : 'opacity-100'
                                    }`}
                                onClick={() => handleSelect(index)}
                            >
                                {/* The actual card element with layout and content */}
                                <div
                                    className={`flex items-center transition-all duration-500 ease-in-out rounded-2xl overflow-hidden ${isActive ? ' p-4' : 'bg-transparent'
                                        }`}
                                >
                                    <img
                                        src={product.imageSrc}
                                        alt={product.title}
                                        draggable={false}
                                        className={`object-cover rounded-xl transition-all duration-500 ease-in-out flex-shrink-0 
                                            ${isActive ? 'w-40 h-40 md:w-70 md:h-70' : 'w-28 h-28 md:w-40 md:h-40'
                                            }`}
                                        onError={(e) => { e.target.onerror = null; e.target.src = 'https://placehold.co/400x400/CCCCCC/FFFFFF?text=Image+Not+Found'; }}
                                    />
                                    {/* Details section - animates width and opacity */}
                                    <div className={`transition-all duration-500 ease-in-out flex-1 ml-4 md:ml-6 flex flex-col justify-center text-left overflow-hidden ${isActive ? 'max-w-xs opacity-100' : 'max-w-0 opacity-0'
                                        }`}>
                                        <h3 className="text-xl md:text-2xl font-bold text-gray-800 whitespace-nowrap">{product.title}</h3>
                                        <p className="text-xs md:text-sm mt-2 text-gray-600">{product.description}</p>
                                        <div className="flex flex-col justify-between items-start space-y-4 mt-4">
                                            <span className="font-bold text-base md:text-lg text-gray-800 whitespace-nowrap">{product.price}</span>
                                            <button className="bg-blue-600 text-white font-semibold px-3 py-1.5 md:px-4 md:py-2 rounded-full text-xs md:text-sm hover:bg-blue-700 transition-colors whitespace-nowrap">
                                                Add to cart +
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>

                {/* Navigation Buttons */}
                <div className="flex justify-center mt-4 space-x-4">
                    <button
                        onClick={handlePrev}
                        className=" rounded-full p-3"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" width="50" height="67" viewBox="0 0 63 67" fill="none">
                            <circle cx="31.5" cy="35.5" r="30.5" stroke="#2C4B7E" stroke-width="2" />
                            <path d="M15.2929 35.2929C14.9024 35.6834 14.9024 36.3166 15.2929 36.7071L21.6569 43.0711C22.0474 43.4616 22.6805 43.4616 23.0711 43.0711C23.4616 42.6805 23.4616 42.0474 23.0711 41.6569L17.4142 36L23.0711 30.3431C23.4616 29.9526 23.4616 29.3195 23.0711 28.9289C22.6805 28.5384 22.0474 28.5384 21.6569 28.9289L15.2929 35.2929ZM48 36L48 35L16 35L16 36L16 37L48 37L48 36Z" fill="#2C4B7E" />
                        </svg>
                    </button>
                    <button
                        onClick={handleNext}
                        className=" rounded-full p-3"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" width="50" height="67" viewBox="0 0 63 67" fill="none">
                            <rect width="63" height="67" fill="white" />
                            <circle cx="31.5" cy="35.5" r="30.5" fill="#2C4B7E" stroke="#2C4B7E" stroke-width="2" />
                            <path d="M48.7071 36.7071C49.0976 36.3166 49.0976 35.6834 48.7071 35.2929L42.3431 28.9289C41.9526 28.5384 41.3195 28.5384 40.9289 28.9289C40.5384 29.3195 40.5384 29.9526 40.9289 30.3431L46.5858 36L40.9289 41.6569C40.5384 42.0474 40.5384 42.6805 40.9289 43.0711C41.3195 43.4616 41.9526 43.4616 42.3431 43.0711L48.7071 36.7071ZM15 36V37H48V36V35H15V36Z" fill="white" />
                        </svg>
                    </button>
                </div>
            </div>

            <style jsx global>{`
        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .no-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
        </div>
    );
}
