'use client'
import { useState, useEffect, useRef } from "react";
import Google from "./icons/google";

const testimonials = [
  {
    name: "Deepika",
    initial: "D",
    time: "1 month ago",
    text: "Everything here is so addictive. The vibes are cute and give such a luxe aesthetic. I came for the Dubai chocolate and ended up trying like five things. The desserts look gorgeous.",
    stars: 5,
  },
  {
    name: "AB",
    initial: "A",
    time: "1 month ago",
    text: "This spot is actually fire. Vibe was clean, everything came out fresh. I got the Kunafa and it was amazing. Highly recommend for people looking for high quality desserts.",
    stars: 5,
  },
  {
    name: "Yassin",
    initial: "Y",
    time: "1 month ago",
    text: "Staff was amazing. Really cool spot to hangout with friends and enjoy great desserts. Easily one of the best Kunafa I've tried so far. Worth the hype.",
    stars: 5,
  },
  {
    name: "Sarah",
    initial: "S",
    time: "2 weeks ago",
    text: "Absolutely loved the ambiance and the desserts! The staff was super friendly and the Kunafa was out of this world. Will definitely come back!",
    stars: 5,
  },
  {
    name: "Michael",
    initial: "M",
    time: "3 weeks ago",
    text: "A hidden gem! The Dubai chocolate is a must-try. The place is clean, modern, and the desserts are delicious.",
    stars: 5,
  },
  {
    name: "Fatima",
    initial: "F",
    time: "5 days ago",
    text: "Best dessert cafe in town! The variety is amazing and everything tastes fresh. Highly recommend the shakes and Kunafa.",
    stars: 5,
  },
];

function StarRow({ count = 5 }) {
  return (
    <div className="flex flex-row gap-1 mb-2">
      {Array.from({ length: count }).map((_, i) => (
        <svg key={i} width="20" height="20" fill="#FFD700" viewBox="0 0 20 20"><polygon points="10,1 12.59,7.36 19.51,7.64 14,12.14 15.82,18.99 10,15.27 4.18,18.99 6,12.14 0.49,7.64 7.41,7.36" /></svg>
      ))}
    </div>
  );
}

function TestimonialCard({ testimonial }: { testimonial: any }) {
  return (
    <div className="rounded-xl shadow p-6 xl:w-90 xl:h-70 w-80 h-70 flex flex-col border border-gray-200 transition-all duration-300"
      style={{
        background: 'rgba(241, 241, 241, 0.10)',
        boxShadow: ' 0px -2px 6px 0px rgba(0, 0, 0, 0.25) inset',
      }}
    >
      <div className="flex items-center gap-3 mb-2">
        <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-lg font-bold text-[#2C4B7E] border border-gray-300">{testimonial.initial}</div>
        <div className="flex flex-col">
          <div className="flex items-center gap-2">
            <span className="font-bold text-[#2C4B7E]">{testimonial.name}</span>
            <Google />
          </div>
          <span className="text-xs text-gray-500">{testimonial.time}</span>
        </div>
      </div>
      <StarRow count={testimonial.stars} />
      <p className="text-black text-lg leading-snug mt-1">{testimonial.text}</p>
    </div>
  );
}

export default function TestimonialsCarousel() {
  const [index, setIndex] = useState(0);
  const [visible, setVisible] = useState(3);
  const containerRef = useRef<HTMLDivElement>(null);
  const touchStartX = useRef<number | null>(null);
  const touchEndX = useRef<number | null>(null);

  // Responsive visible count
  useEffect(() => {
    function handleResize() {
      if (window.innerWidth >= 1280) {
        setVisible(3);
      } else {
        setVisible(1);
      }
    }
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const maxIndex = testimonials.length - visible;
  const canPrev = index > 0;
  const canNext = index < maxIndex;

  // Touch/swipe handlers
  function onTouchStart(e: React.TouchEvent) {
    touchStartX.current = e.touches[0].clientX;
  }
  function onTouchMove(e: React.TouchEvent) {
    touchEndX.current = e.touches[0].clientX;
  }
  function onTouchEnd() {
    if (touchStartX.current !== null && touchEndX.current !== null) {
      const diff = touchStartX.current - touchEndX.current;
      if (diff > 50 && canNext) {
        setIndex(index + 1);
      } else if (diff < -50 && canPrev) {
        setIndex(index - 1);
      }
    }
    touchStartX.current = null;
    touchEndX.current = null;
  }

  // Arrow navigation
  function goPrev() {
    if (canPrev) setIndex(index - 1);
  }
  function goNext() {
    if (canNext) setIndex(index + 1);
  }

  // Pagination dots
  const pageCount = testimonials.length - visible + 1;

  return (
    <div className="w-full flex flex-col items-center relative">
      <div className="flex flex-row gap-8 justify-center items-stretch w-full xl:px-0 px-4 relative"
        ref={containerRef}
        onTouchStart={onTouchStart}
        onTouchMove={onTouchMove}
        onTouchEnd={onTouchEnd}
      >
        {/* Left Arrow */}
        {/* {visible === 1 && (
          <button
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white/80 rounded-full p-2 shadow hover:bg-[#2C4B7E]/10 transition xl:hidden"
            onClick={goPrev}
            disabled={!canPrev}
            aria-label="Previous review"
            style={{ opacity: canPrev ? 1 : 0.3 }}
          >
            <svg width="28" height="28" fill="none" viewBox="0 0 24 24"><path d="M15 19l-7-7 7-7" stroke="#2C4B7E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>
          </button>
        )} */}
        {testimonials.slice(index, index + visible).map((t, i) => (
          <TestimonialCard testimonial={t} key={i + index} />
        ))}
        {/* Right Arrow */}
        {/* {visible === 1 && (
          <button
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white/80 rounded-full p-2 shadow hover:bg-[#2C4B7E]/10 transition xl:hidden"
            onClick={goNext}
            disabled={!canNext}
            aria-label="Next review"
            style={{ opacity: canNext ? 1 : 0.3 }}
          >
            <svg width="28" height="28" fill="none" viewBox="0 0 24 24"><path d="M9 5l7 7-7 7" stroke="#2C4B7E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>
          </button>
        )} */}
      </div>
      {/* Dots */}
      <div className="flex flex-row gap-2 mt-8 items-center justify-center">
        {Array.from({ length: pageCount }).map((_, i) => (
          i === index ? (
            <button
              key={i}
              className="relative w-4 h-4 flex items-center justify-center"
              aria-label={`Go to testimonials page ${i + 1}`}
              onClick={() => setIndex(i)}
            >
              <span className="absolute inset-0 rounded-full border-1 border-[#2C4B7E] bg-white"></span>
              <span className="absolute inset-1 rounded-full bg-white"></span>
              <span className="absolute inset-2 w-3 h-3 left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 rounded-full bg-[#2C4B7E]"></span>
            </button>
          ) : (
            <button
              key={i}
              className="w-4 h-4 rounded-full bg-[#2C4B7E]"
              aria-label={`Go to testimonials page ${i + 1}`}
              onClick={() => setIndex(i)}
            />
          )
        ))}
      </div>
    </div>
  );
}

