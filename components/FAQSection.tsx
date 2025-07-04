'use client'
import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

const faqs = [
    {
        question: "What are your hours of operation?",
        answer:
            "We're open 7 days a week from 2 PM to 2 AM. Perfect for late-night cravings or sweet daytime escapes.",
    },
    {
        question: "Where are you located?",
        answer: "We have locations in Brooklyn and Long Island City, NY.",
    },
    {
        question: "Do you offer vegan or gluten-free desserts?",
        answer: "Yes, we offer a selection of vegan and gluten-free desserts. Please ask our staff for today's options!",
    },
    {
        question: "Do you offer catering?",
        answer: "Absolutely! We offer catering for events of all sizes. Contact us for more details.",
    },
    {
        question: "Can I customize a dessert or order a custom cake?",
        answer: "Yes, we love custom orders! Reach out to us to discuss your ideas.",
    },
    {
        question: "Do you have seating available?",
        answer: "Yes, we have comfortable seating for you to enjoy your desserts in-store.",
    },
];

export default function FAQSection() {
    const [open, setOpen] = useState(0);

    return (
        <section className="flex flex-col md:flex-row w-full items-stretch justify-center py-24 gap-8 relative">
            {/* Left: Title and image */}
            <div className="flex flex-col items-start justify-center w-full md:w-[40%] relative z-10">
                <h2 className="text-5xl md:text-6xl font-[--font-playfair] mb-12 leading-tight">Frequently<br />Asked<br />Questions</h2>
                <div className="relative w-140 h-140 [mask-composite:intersect] [mask-image:linear-gradient(to_right,transparent,black_6rem),linear-gradient(to_left,transparent,black_6rem),linear-gradient(to_top,transparent,black_6rem)]">
                    <Image src="/desserts/oreocrepe.png" alt="Dessert" fill className="object-cover w-full h-full " />
                    <div className="absolute -top-0 left-1/4  rounded-full overflow-hidden w-40 h-40 border-4 border-white bg-white flex items-center justify-center shadow-lg">
                        <Image src="/lazabluelogo.png" alt="Laza Logo" fill className="object-cover" />
                    </div>
                </div>
            </div>
            {/* Right: Accordion */}
            <div className="flex-1 flex flex-col gap-4 w-full md:w-1/2 z-10">
                {faqs.map((faq, idx) => (
                    <div key={idx} className="rounded-xl shadow border border-gray-200 overflow-hidden">
                        <button
                            className={`w-full text-left px-8 py-6 text-lg font-semibold flex items-center justify-between transition-colors duration-200 ${open === idx ? 'bg-[#2C4B7E] text-white' : 'bg-[rgba(255,255,255,0.10)] text-black'}`}
                            style={{
                                boxShadow: open === idx ? '0px 2px 4px 2px rgba(0, 0, 0, 0.10) inset' : 'none',
                            }}
                            onClick={() => setOpen(open === idx ? -1 : idx)}
                        >
                            {faq.question}
                            <span className="ml-4 text-2xl font-bold">{open === idx ? '−' : '+'}</span>
                        </button>
                        <AnimatePresence initial={false}>
                            {open === idx && (
                                <motion.div
                                    initial={{ height: 0, opacity: 0 }}
                                    animate={{ height: "auto", opacity: 1 }}
                                    exit={{ height: 0, opacity: 0 }}
                                    transition={{ duration: 0.3, ease: "easeInOut" }}
                                    className="px-8 pb-6 py-4 text-base bg-[rgba(255,255,255,0.10)] text-black"
                                    style={{
                                        boxShadow: open === idx ? '0px 2px 4px 2px rgba(0, 0, 0, 0.10) inset' : 'none',
                                    }}
                                >
                                    {faq.answer}
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>
                ))}
            </div>
        </section>
    );
} 