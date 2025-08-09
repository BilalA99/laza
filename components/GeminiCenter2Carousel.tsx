'use client'
import React, { useState, useRef, useEffect, useCallback } from 'react';
import MenuItemDialog from './MenuItemDialog';
import Link from 'next/link';


// Main App Component
export default function GeminiCenter2Carousel({ products }: { products: any[] }) {
    const [activeIndex, setActiveIndex] = useState(Math.floor(products.length / 2));
    const carouselRef = useRef<HTMLDivElement | null>(null); // Ref for the sliding container
    const viewportRef = useRef<HTMLDivElement | null>(null); // Ref for the visible area
    const [offset, setOffset] = useState(0); // State for the CSS transform offset

    const [dragStart, setDragStart] = useState<number | null>(null);
    const [isPaused, setIsPaused] = useState(false);
    const SWIPE_THRESHOLD = 50;

    // Add at the top, after other useState hooks
    const [openDialogIndex, setOpenDialogIndex] = useState<number | null>(null);
    const [dragging, setDragging] = useState(false);

    // Memoize navigation functions
    const handleNext = useCallback(() => {
        setActiveIndex((prevIndex) => (prevIndex + 1) % products.length);
    }, []);

    const handlePrev = useCallback(() => {
        setActiveIndex((prevIndex) => (prevIndex - 1 + products.length) % products.length);
    }, []);

    // Effect to calculate and set the transform offset for centering.
    useEffect(() => {
        const calculateOffset = () => {
            if (carouselRef.current && viewportRef.current) {
                const viewport = viewportRef.current as HTMLDivElement;
                const children = carouselRef.current.children as HTMLCollectionOf<HTMLElement>;
                const activeItem = children[activeIndex];
                if (activeItem) {
                    const viewportCenter = viewport.offsetWidth / 2;
                    const itemCenter = activeItem.offsetLeft + activeItem.offsetWidth / 2;
                    setOffset(viewportCenter - itemCenter);
                }
            }
        };

        // Delay calculation to allow CSS transition on card size to complete.
        // The card's transition is now 300ms.
        const timer = setTimeout(calculateOffset, 300);

        // Also recalculate on resize, but without a delay.
        window.addEventListener('resize', calculateOffset);

        // Cleanup function to clear the timer and remove the event listener
        return () => {
            clearTimeout(timer);
            window.removeEventListener('resize', calculateOffset);
        };
    }, [activeIndex]);

    // Effect for keyboard navigation
    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            setIsPaused(true);
            if (e.key === 'ArrowLeft') handlePrev();
            if (e.key === 'ArrowRight') handleNext();
        };
        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [handlePrev, handleNext]);

    // Effect for auto-play loop
    useEffect(() => {
        if (!isPaused) {
            const interval = setInterval(() => handleNext(), 3000);
            return () => clearInterval(interval);
        }
    }, [isPaused, handleNext]);

    // --- Mouse Swipe Handlers ---
    const handleMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
        setIsPaused(true);
        setDragStart(e.clientX);
        setDragging(false);
    };

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        if (dragStart !== null) {
            const x = e.clientX;
            if (Math.abs(x - dragStart) > 10) {
                setDragging(true);
            }
        }
    };
    const link = `https://order.toasttab.com/online/locations/e4e3218e-7ad2-411f-a156-ec157a00652f/default`

    const handleMouseUp = (e: React.MouseEvent<HTMLDivElement>) => {
        if (dragStart === null) return;
        const dragEnd = e.clientX;
        const dragDistance = dragStart - dragEnd;

        if (Math.abs(dragDistance) > SWIPE_THRESHOLD) {
            if (dragDistance > 0) handleNext();
            else handlePrev();
        } else {
            const clickedItem = (e.target as HTMLElement).closest('[data-index]');
            if (clickedItem) {
                setActiveIndex(parseInt((clickedItem as HTMLElement).dataset.index || '0', 10));
            }
        }
        setDragStart(null);
        setDragging(false);
    };

    const handleMouseLeave = () => {
        setDragStart(null);
        setIsPaused(false);
    };

    return (
        <div className="flex flex-col items-center justify-center overflow-hidden">
            <div
                className="w-full max-w-8xl relative select-none [mask-composite:intersect] sm:[mask-image:linear-gradient(to_right,transparent,black_6rem),linear-gradient(to_left,transparent,black_6rem)]"
                onMouseEnter={() => setIsPaused(true)}
                onMouseLeave={handleMouseLeave}
            >
                {/* Viewport container - this creates the visible window */}
                <div ref={viewportRef} className="overflow-hidden cursor-grab select-none"
                >
                    {/* Carousel container - this is the element that moves */}
                    <div
                        ref={carouselRef}
                        className="flex items-center justify-start space-x-8 md:space-x-12 px-4 transition-transform duration-500 ease-out select-none"
                        style={{ transform: `translateX(${offset}px)` }}
                    >
                        {products.map((product, index) => {
                            const isActive = index === activeIndex;
                            return (
                                <div
                                    onMouseDown={handleMouseDown}
                                    onMouseMove={handleMouseMove}
                                    onMouseUp={handleMouseUp}
                                    key={product.id}
                                    data-index={index}
                                    className={`flex-shrink-0 sm:w-auto w-screen transition-opacity duration-500 ease-in-out select-none ${isActive ? 'opacity-100' : 'opacity-100'}`}
                                >
                                    {/* The actual card element with layout and content */}
                                    <div
                                        className={`flex items-center transition-all duration-500 ease-in-out rounded-2xl overflow-hidden pointer-events-none select-none ${isActive ? 'p-6' : 'bg-transparent'}`}
                                    >
                                        <img
                                            src={product.imageSrc}
                                            alt={product.title}
                                            draggable={false}
                                            className={`object-cover rounded-xl transition-all duration-500 ease-in-out flex-shrink-0 ${isActive ? 'w-40 h-40 md:w-70 md:h-70' : 'w-28 h-28 md:w-40 md:h-40'}`}
                                            onError={(e) => {
                                                const target = e.target as HTMLImageElement;
                                                target.onerror = null;
                                                target.src = 'https://placehold.co/400x400/CCCCCC/FFFFFF?text=Image+Not+Found';
                                            }}
                                        />
                                        {/* Details section - animates width and opacity */}
                                        <div className={`transition-all duration-500 ease-in-out flex-1 ml-6 md:ml-8 flex flex-col justify-center text-left overflow-hidden ${isActive ? 'max-w-md opacity-100' : 'max-w-0 opacity-0'}`}>
                                            <h3 className="text-2xl md:text-3xl font-bold text-gray-800 whitespace-nowrap">{product.title}</h3>
                                            <p className="text-sm md:text-base mt-3 text-gray-600">{product.description}</p>
                                            <div className="flex flex-col space-y-4 justify-between items-start mt-6">
                                                <span className="font-bold text-lg md:text-xl text-gray-800 whitespace-nowrap">${product.price}</span>
                                                <Link
                                                    href={link}
                                                    className="bg-blue-600  text-white font-semibold px-4 py-2 md:px-5 md:py-2.5 rounded-full text-sm md:text-base hover:bg-blue-700 transition-colors whitespace-nowrap pointer-events-auto"
                                                    // onClick={(e) => {
                                                    //     e.stopPropagation();
                                                    //     if (!dragging && isActive) {
                                                    //         setOpenDialogIndex(index);
                                                    //     }
                                                    // }}
                                                    tabIndex={isActive ? 0 : -1}
                                                >
                                                    Add to cart +
                                                </Link>
                                                {/* <MenuItemDialog
                                                    imageSrc={product.imageSrc}
                                                    title={product.title}
                                                    description={product.description}
                                                    price={product.price}
                                                    modifiers={product.modifiers}
                                                    externalOpen={openDialogIndex === index}
                                                    setExternalOpen={(open) => setOpenDialogIndex(open ? index : null)}
                                                >
                                                    <button
                                                        className="bg-blue-600  text-white font-semibold px-4 py-2 md:px-5 md:py-2.5 rounded-full text-sm md:text-base hover:bg-blue-700 transition-colors whitespace-nowrap pointer-events-auto"
                                                        onClick={(e) => {
                                                            e.stopPropagation();
                                                            if (!dragging && isActive) {
                                                                setOpenDialogIndex(index);
                                                            }
                                                        }}
                                                        tabIndex={isActive ? 0 : -1}
                                                        disabled={!isActive}
                                                    >
                                                        Add to cart +
                                                    </button>
                                                </MenuItemDialog> */}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>

                {/* Navigation Buttons */}
                <div className="flex justify-center space-x-4">
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
        .cursor-grab {
          cursor: grab;
        }
        .cursor-grab:active {
          cursor: grabbing;
        }
        .select-none {
          user-select: none;
          -webkit-user-select: none;
          -ms-user-select: none;
          -moz-user-select: none;
        }
      `}</style>
        </div>
    );
}
