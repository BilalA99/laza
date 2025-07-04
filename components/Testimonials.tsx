'use client'
import { useState } from "react";
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
    // Add more testimonials if needed
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
      <div className="rounded-xl shadow p-6 w-90 h-70 flex flex-col border border-gray-200 transition-all duration-300"
      style={{
        background : 'rgba(241, 241, 241, 0.10)',
        boxShadow : ' 0px -2px 6px 0px rgba(0, 0, 0, 0.25) inset',
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
    const visible = 3;
    const maxIndex = testimonials.length - visible;
    const canPrev = index > 0;
    const canNext = index < maxIndex;
  
    return (
      <div className="w-full flex flex-col items-center relative">
        <div className="flex flex-row gap-8 justify-center items-stretch w-full">
          {testimonials.slice(index, index + visible).map((t, i) => (
            <TestimonialCard testimonial={t} key={i} />
          ))}
        </div>
        {/* Dots */}
        <div className="flex flex-row gap-2 mt-8">
          {Array.from({ length: maxIndex + 1 }).map((_, i) => (
            <button
              key={i}
              className={`w-3 h-3 rounded-full ${i === index ? 'bg-[#2C4B7E]' : 'bg-gray-300'}`}
              onClick={() => setIndex(i)}
              aria-label={`Go to testimonials page ${i + 1}`}
            />
          ))}
        </div>
      </div>
    );
  }