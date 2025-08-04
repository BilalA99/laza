"use client";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import Image from "next/image";
import { SendFranchiseInquiryEmail } from "@/email";

const joinUsSchema = z.object({
    // 1. Contact & Basics
    fullName: z.string().min(2, "Full name is required"),
    email: z.string().email("Valid email required"),
    phone: z.string().min(7, "Mobile number required"),
    cityState: z.string().min(2, "City & state required"),
    // 2. Motivation & Alignment
    whyDessertCafe: z.string().min(5, "Required"),
    brandValue: z.string().min(2, "Required"),
    menuFamiliarity: z.enum([
        "Never visited",
        "Visited once",
        "Occasional customer",
        "Frequent customer / fan",
    ]),
    // 3. Experience & Skill Set
    foodServiceExp: z.enum([
        "Yes – full ownership",
        "Yes – management only",
        "No, but relevant retail experience",
        "None",
    ]),
    foodServiceExpDesc: z.string().optional(),
    frontOfHouse: z.string().min(2, "Required"),
    foodCert: z.enum(["Yes", "No"]),
    // 4. Financial Readiness
    liquidCapital: z.enum([
        "<$50k",
        "$50–$100k",
        "$100–$250k",
        "$250k+",
    ]),
    netWorth: z.enum([
        "<$250k",
        "$250–$500k",
        "$500k–$1M",
        "$1M+",
    ]),
    fundingSource: z.string().min(2, "Required"),
    preQualified: z.enum(["Yes", "No", "In progress"]),
    // 5. Timeframe & Commitment
    timeline: z.enum([
        "< 6 months",
        "6–12 months",
        "12–18 months",
        "Just researching",
    ]),
    fullTime: z.enum(["Yes", "No"]),
    locationsHoped: z.string().min(1, "Required"),
    relocate: z.enum(["Yes", "No"]),
    // 6. Due-Diligence Indicators
    fddReviewed: z.string().min(2, "Required"),
    questions: z.string().min(2, "Required"),
    howHeard: z.string().min(2, "Required"),
    // 7. Final Check
    commitment: z.string().min(1, "Required"),
    anythingElse: z.string().optional(),
});

export type JoinUsForm = z.infer<typeof joinUsSchema>;

// Confirmation Popup Component
const FranchiseConfirmationPopup: React.FC<{ isVisible: boolean; onClose: () => void; fullName: string }> = ({ isVisible, onClose, fullName }) => {
    if (!isVisible) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
            {/* Backdrop */}
            <div
                className="absolute inset-0 backdrop-blur-sm animate-in fade-in duration-300"
                onClick={onClose}
            />

            {/* Popup */}
            <div className="relative bg-white rounded-3xl p-8 max-w-lg w-full mx-4 shadow-2xl animate-in zoom-in-95 duration-500">
                {/* Decorative elements */}
                <div className="absolute -top-4 -right-4 w-16 h-16 bg-gradient-to-br from-[#2C4B7E] to-[#1B3A6B] rounded-full flex items-center justify-center ">
                    <span className="text-white text-2xl">🚀</span>
                </div>



                {/* Content */}
                <div className="text-center relative z-10">
                    {/* Success Icon */}
                    <div className="w-20 h-20 bg-gradient-to-br from-green-400 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-6 animate-in zoom-in-95 duration-700 delay-200">
                        <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                        </svg>
                    </div>

                    {/* Title */}
                    <h2 className="text-2xl font-bold text-[#1B3A6B] mb-4 animate-in slide-in-from-bottom-4 duration-700 delay-300">
                        Welcome to the Laza Family! 🎊
                    </h2>

                    {/* Message */}
                    <p className="text-[#2C4B7E] text-lg leading-relaxed mb-6 animate-in slide-in-from-bottom-4 duration-700 delay-400">
                        Thank you, <span className="font-semibold">{fullName}</span>! Your franchise inquiry has been received and we're excited to explore this opportunity with you.
                    </p>

                    {/* Additional Info */}
                    <div className="bg-gradient-to-r from-[#2C4B7E]/10 to-[#1B3A6B]/10 rounded-2xl p-4 mb-6 animate-in slide-in-from-bottom-4 duration-700 delay-500">
                        <p className="text-[#1B3A6B] font-semibold mb-2">What's Next?</p>
                        <p className="text-[#2C4B7E] text-sm">
                            Our franchise development team will carefully review your information and reach out within 48 hours to discuss next steps and answer your questions.
                        </p>
                    </div>

                    {/* Email Confirmation */}
                    <div className="bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-200 rounded-xl p-3 mb-6 animate-in slide-in-from-bottom-4 duration-700 delay-600">
                        <p className="text-blue-700 text-sm font-medium">
                            📧 Check your email for confirmation details
                        </p>
                    </div>

                    {/* Franchise Benefits Preview */}
                    <div className="grid grid-cols-1 gap-3 mb-6 animate-in slide-in-from-bottom-4 duration-700 delay-700">
                        <div className="flex items-center justify-center space-x-2 bg-gradient-to-r from-amber-50 to-orange-50 rounded-lg p-2">
                            <span className="text-amber-600">🏆</span>
                            <span className="text-amber-700 text-sm font-medium">Proven Business Model</span>
                        </div>
                        <div className="flex items-center justify-center space-x-2 bg-gradient-to-r from-green-50 to-emerald-50 rounded-lg p-2">
                            <span className="text-green-600">📚</span>
                            <span className="text-green-700 text-sm font-medium">Comprehensive Training</span>
                        </div>
                        <div className="flex items-center justify-center space-x-2 bg-gradient-to-r from-purple-50 to-violet-50 rounded-lg p-2">
                            <span className="text-purple-600">📈</span>
                            <span className="text-purple-700 text-sm font-medium">Growing Market</span>
                        </div>
                    </div>

                    {/* Close Button */}
                    <button
                        onClick={onClose}
                        className="bg-gradient-to-r from-[#2C4B7E] to-[#1B3A6B] text-white font-semibold py-3 px-8 rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 animate-in slide-in-from-bottom-4 duration-700 delay-800"
                    >
                        Got it! ✨
                    </button>
                </div>

                {/* Floating franchise icons */}
                {/* <div className="absolute top-4 left-4 text-2xl animate-bounce delay-1000">🏪</div>
                <div className="absolute top-8 right-8 text-xl animate-bounce delay-1200">💼</div>
                <div className="absolute bottom-8 left-8 text-xl animate-bounce delay-1400">📊</div>
                <div className="absolute bottom-4 right-4 text-lg animate-bounce delay-1600">🎯</div> */}
            </div>
        </div>
    );
};

export default function JoinUsPage() {
    const [submitted, setSubmitted] = useState(false);
    const [showConfirmation, setShowConfirmation] = useState(false);
    const [submittedName, setSubmittedName] = useState("");
    const [isSubmitting, setIsSubmitting] = useState(false);
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
        reset,
    } = useForm<JoinUsForm>({
        resolver: zodResolver(joinUsSchema),
    });

    const onSubmit = async (data: JoinUsForm) => {
        setIsSubmitting(true);
        setSubmitted(true);
        setSubmittedName(data.fullName);
        try {
            const result = await SendFranchiseInquiryEmail(data);
            console.log(result);
            setShowConfirmation(true);
            reset();
        } catch (error) {
            console.error('Error sending email:', error);
        }

        setIsSubmitting(false);
    };

    const handleCloseConfirmation = () => {
        setShowConfirmation(false);
        setSubmitted(false);
    };

    const foodServiceExp = watch("foodServiceExp");

    return (
        <>
            <main className="flex flex-col items-center justify-center relative min-h-screen w-full bg-white py-16 px-2 mt-20">

                <div className=" absolute top-1/2 inset-0 w-full h-100 [mask-composite:intersect] [mask-image:linear-gradient(to_right,transparent,black_6rem),linear-gradient(to_left,transparent,black_6rem),linear-gradient(to_top,transparent,black_6rem)]  "
                    style={{
                    }}
                >
                    <Image src={'/bgwave.jpg'} alt="bg wave" fill className="" />
                </div>

                <div className=" absolute top-1/3 -rotate-180 inset-0 w-full h-100 [mask-composite:intersect] [mask-image:linear-gradient(to_right,transparent,black_6rem),linear-gradient(to_left,transparent,black_6rem),linear-gradient(to_top,transparent,black_6rem)]  "
                    style={{
                    }}
                >
                    <Image src={'/bgwave.jpg'} alt="bg wave" fill className="" />
                </div>

                <div className=" absolute top-0 rotate-180 inset-0 w-full h-100 [mask-composite:intersect] [mask-image:linear-gradient(to_right,transparent,black_6rem),linear-gradient(to_left,transparent,black_6rem),linear-gradient(to_top,transparent,black_6rem)]  "
                    style={{
                    }}
                >
                    <Image src={'/bgwave.jpg'} alt="bg wave" fill className="" />
                </div>

                <div className="max-w-7xl z-10 w-full bg-white rounded-3xl shadow-xl p-8 md:p-12 border border-[#2C4B7E]/10">
                    <div className="mb-8">
                        <div className="bg-[#2C4B7E]/10 border-l-4 border-[#2C4B7E] p-4 rounded">
                            <p className="text-[#2C4B7E] font-semibold text-lg">
                                The more thorough and detailed your answers are, the more likely you are to get a response back. <br />
                                <span className="font-bold">Serious inquiries only.</span>
                            </p>
                        </div>
                    </div>
                    <h1 className="text-3xl font-[--font-playfair] text-[#2C4B7E] mb-6 text-center">Join the Laza Café Family</h1>

                    <form className="space-y-8" onSubmit={handleSubmit(onSubmit)}>
                        {/* 1. Contact & Basics */}
                        <section>
                            <h2 className="text-xl font-bold text-[#2C4B7E] mb-2">1. Contact & Basics</h2>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div>
                                    <label className="font-medium">Full name</label>
                                    <input {...register("fullName")}
                                        className="input w-full" placeholder="Your full name" />
                                    {errors.fullName && <p className="text-red-500 text-xs">{errors.fullName.message}</p>}
                                </div>
                                <div>
                                    <label className="font-medium">Preferred email</label>
                                    <input {...register("email")}
                                        className="input w-full" placeholder="you@email.com" />
                                    {errors.email && <p className="text-red-500 text-xs">{errors.email.message}</p>}
                                </div>
                                <div>
                                    <label className="font-medium">Mobile number</label>
                                    <input {...register("phone")}
                                        className="input w-full" placeholder="(555) 555-5555" />
                                    {errors.phone && <p className="text-red-500 text-xs">{errors.phone.message}</p>}
                                </div>
                                <div>
                                    <label className="font-medium">City & state where you'd like to open the café</label>
                                    <input {...register("cityState")}
                                        className="input w-full" placeholder="City, State" />
                                    {errors.cityState && <p className="text-red-500 text-xs">{errors.cityState.message}</p>}
                                </div>
                            </div>
                        </section>
                        {/* 2. Motivation & Alignment */}
                        <section>
                            <h2 className="text-xl font-bold text-[#2C4B7E] mb-2">2. Motivation & Alignment</h2>
                            <div className="space-y-4">
                                <div>
                                    <label className="font-medium">In one sentence, why does owning a dessert café appeal to you?</label>
                                    <input {...register("whyDessertCafe")}
                                        className="input w-full" placeholder="Your answer" />
                                    {errors.whyDessertCafe && <p className="text-red-500 text-xs">{errors.whyDessertCafe.message}</p>}
                                </div>
                                <div>
                                    <label className="font-medium">Which of our brand values (quality, creativity, community, etc.) resonates most—and why?</label>
                                    <input {...register("brandValue")}
                                        className="input w-full" placeholder="Your answer" />
                                    {errors.brandValue && <p className="text-red-500 text-xs">{errors.brandValue.message}</p>}
                                </div>
                                <div>
                                    <label className="font-medium">How familiar are you with our current menu and in-store experience?</label>
                                    <select {...register("menuFamiliarity")}
                                        className="input w-full">
                                        <option value="">Select</option>
                                        <option value="Never visited">Never visited</option>
                                        <option value="Visited once">Visited once</option>
                                        <option value="Occasional customer">Occasional customer</option>
                                        <option value="Frequent customer / fan">Frequent customer / fan</option>
                                    </select>
                                    {errors.menuFamiliarity && <p className="text-red-500 text-xs">{errors.menuFamiliarity.message}</p>}
                                </div>
                            </div>
                        </section>
                        {/* 3. Experience & Skill Set */}
                        <section>
                            <h2 className="text-xl font-bold text-[#2C4B7E] mb-2">3. Experience & Skill Set</h2>
                            <div className="space-y-4">
                                <div>
                                    <label className="font-medium">Have you owned or managed a food-service business before?</label>
                                    <select {...register("foodServiceExp")}
                                        className="input w-full">
                                        <option value="">Select</option>
                                        <option value="Yes – full ownership">Yes – full ownership</option>
                                        <option value="Yes – management only">Yes – management only</option>
                                        <option value="No, but relevant retail experience">No, but relevant retail experience</option>
                                        <option value="None">None</option>
                                    </select>
                                    {errors.foodServiceExp && <p className="text-red-500 text-xs">{errors.foodServiceExp.message}</p>}
                                </div>
                                {(foodServiceExp === "Yes – full ownership" || foodServiceExp === "Yes – management only") && (
                                    <div>
                                        <label className="font-medium">If yes, briefly describe the concept, your role, and years operated.</label>
                                        <input {...register("foodServiceExpDesc")}
                                            className="input w-full" placeholder="Your answer" />
                                    </div>
                                )}
                                <div>
                                    <label className="font-medium">Do you have hands-on experience with front-of-house operations (staffing, customer service, cash handling)?</label>
                                    <input {...register("frontOfHouse")}
                                        className="input w-full" placeholder="Your answer" />
                                    {errors.frontOfHouse && <p className="text-red-500 text-xs">{errors.frontOfHouse.message}</p>}
                                </div>
                                <div>
                                    <label className="font-medium">Do you have a current food-handling or serv-safe certification?</label>
                                    <select {...register("foodCert")} className="input w-full">
                                        <option value="">Select</option>
                                        <option value="Yes">Yes</option>
                                        <option value="No">No</option>
                                    </select>
                                    {errors.foodCert && <p className="text-red-500 text-xs">{errors.foodCert.message}</p>}
                                </div>
                            </div>
                        </section>
                        {/* 4. Financial Readiness */}
                        <section>
                            <h2 className="text-xl font-bold text-[#2C4B7E] mb-2">4. Financial Readiness</h2>
                            <div className="space-y-4">
                                <div>
                                    <label className="font-medium">Liquid capital you can invest today (USD):</label>
                                    <select {...register("liquidCapital")}
                                        className="input w-full">
                                        <option value="">Select</option>
                                        <option value="<$50k">&lt;$50k</option>
                                        <option value="$50–$100k">$50–$100k</option>
                                        <option value="$100–$250k">$100–$250k</option>
                                        <option value="$250k+">$250k+</option>
                                    </select>
                                    {errors.liquidCapital && <p className="text-red-500 text-xs">{errors.liquidCapital.message}</p>}
                                </div>
                                <div>
                                    <label className="font-medium">Net worth (approximate, USD):</label>
                                    <select {...register("netWorth")}
                                        className="input w-full">
                                        <option value="">Select</option>
                                        <option value="<$250k">&lt;$250k</option>
                                        <option value="$250–$500k">$250–$500k</option>
                                        <option value="$500k–$1M">$500k–$1M</option>
                                        <option value="$1M+">$1M+</option>
                                    </select>
                                    {errors.netWorth && <p className="text-red-500 text-xs">{errors.netWorth.message}</p>}
                                </div>
                                <div>
                                    <label className="font-medium">Primary funding source</label>
                                    <input {...register("fundingSource")}
                                        className="input w-full" placeholder="Personal savings, partner/investors, SBA loan, other..." />
                                    {errors.fundingSource && <p className="text-red-500 text-xs">{errors.fundingSource.message}</p>}
                                </div>
                                <div>
                                    <label className="font-medium">Have you been pre-qualified for a business loan?</label>
                                    <select {...register("preQualified")}
                                        className="input w-full">
                                        <option value="">Select</option>
                                        <option value="Yes">Yes</option>
                                        <option value="No">No</option>
                                        <option value="In progress">In progress</option>
                                    </select>
                                    {errors.preQualified && <p className="text-red-500 text-xs">{errors.preQualified.message}</p>}
                                </div>
                            </div>
                        </section>
                        {/* 5. Timeframe & Commitment */}
                        <section>
                            <h2 className="text-xl font-bold text-[#2C4B7E] mb-2">5. Timeframe & Commitment</h2>
                            <div className="space-y-4">
                                <div>
                                    <label className="font-medium">Ideal timeline to open</label>
                                    <select {...register("timeline")}
                                        className="input w-full">
                                        <option value="">Select</option>
                                        <option value="< 6 months">&lt; 6 months</option>
                                        <option value="6–12 months">6–12 months</option>
                                        <option value="12–18 months">12–18 months</option>
                                        <option value="Just researching">Just researching</option>
                                    </select>
                                    {errors.timeline && <p className="text-red-500 text-xs">{errors.timeline.message}</p>}
                                </div>
                                <div>
                                    <label className="font-medium">Are you prepared to work full-time in the business for at least the first 12 months?</label>
                                    <select {...register("fullTime")}
                                        className="input w-full">
                                        <option value="">Select</option>
                                        <option value="Yes">Yes</option>
                                        <option value="No">No</option>
                                    </select>
                                    {errors.fullTime && <p className="text-red-500 text-xs">{errors.fullTime.message}</p>}
                                </div>
                                <div>
                                    <label className="font-medium">How many locations do you ultimately hope to own?</label>
                                    <input {...register("locationsHoped")}
                                        className="input w-full" placeholder="Number" />
                                    {errors.locationsHoped && <p className="text-red-500 text-xs">{errors.locationsHoped.message}</p>}
                                </div>
                                <div>
                                    <label className="font-medium">Are you willing to relocate or travel for required training (2–3 weeks)?</label>
                                    <select {...register("relocate")}
                                        className="input w-full">
                                        <option value="">Select</option>
                                        <option value="Yes">Yes</option>
                                        <option value="No">No</option>
                                    </select>
                                </div>
                            </div>
                        </section>
                        {/* 6. Due-Diligence Indicators */}
                        <section>
                            <h2 className="text-xl font-bold text-[#2C4B7E] mb-2">6. Due-Diligence Indicators</h2>
                            <div className="space-y-4">
                                <div>
                                    <label className="font-medium">Have you reviewed our Franchise Disclosure Document (FDD) or would you like it sent?</label>
                                    <input {...register("fddReviewed")}
                                        className="input w-full" placeholder="Your answer" />
                                    {errors.fddReviewed && <p className="text-red-500 text-xs">{errors.fddReviewed.message}</p>}
                                </div>
                                <div>
                                    <label className="font-medium">List two questions you'd like answered before moving forward with an application fee.</label>
                                    <input {...register("questions")}
                                        className="input w-full" placeholder="Your questions" />
                                    {errors.questions && <p className="text-red-500 text-xs">{errors.questions.message}</p>}
                                </div>
                                <div>
                                    <label className="font-medium">How did you hear about our franchise opportunity?</label>
                                    <input {...register("howHeard")}
                                        className="input w-full" placeholder="Your answer" />
                                    {errors.howHeard && <p className="text-red-500 text-xs">{errors.howHeard.message}</p>}
                                </div>
                            </div>
                        </section>
                        {/* 7. Final Check */}
                        <section>
                            <h2 className="text-xl font-bold text-[#2C4B7E] mb-2">7. Final Check</h2>
                            <div className="space-y-4">
                                <div>
                                    <label className="font-medium">On a scale of 1–10, how committed are you to opening our franchise within the next year?</label>
                                    <input {...register("commitment")}
                                        className="input w-full" placeholder="1–10" />
                                    {errors.commitment && <p className="text-red-500 text-xs">{errors.commitment.message}</p>}
                                </div>
                                <div>
                                    <label className="font-medium">Anything else you'd like us to know?</label>
                                    <textarea {...register("anythingElse")}
                                        className="input w-full" placeholder="Your answer (optional)" />
                                </div>
                            </div>
                        </section>
                        <button type="submit" disabled={isSubmitting} className="w-full bg-[#2C4B7E] text-white font-bold py-3 rounded-xl mt-6 hover:bg-[#1a2d4d] transition">
                            {isSubmitting ? 'Submitting...' : 'Submit Application'}
                        </button>
                    </form>

                </div>
                <style jsx global>{`
        .input {
          border-radius: 10px;
          background: rgba(255, 255, 255, 0.20);
          box-shadow: 0px 2px 4px 2px rgba(0, 0, 0, 0.10) inset;
          border: 1px solid #e5e7eb; /* Tailwind gray-300 */
          padding: 0.5rem 1rem;
          margin-top: 0.25rem;
          outline: none;
          width: 100%;
          transition: box-shadow 0.2s;
        }
        .input:focus {
          box-shadow: 0px 2px 4px 2px rgba(44, 75, 126, 0.15) inset, 0 0 0 2px #2C4B7E;
        }
      `}</style>
            </main>

            {/* Confirmation Popup */}
            <FranchiseConfirmationPopup
                isVisible={showConfirmation}
                onClose={handleCloseConfirmation}
                fullName={submittedName}
            />
        </>
    );
} 