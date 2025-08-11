'use client'
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form, FormField, FormItem, FormLabel, FormControl, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { SendCateringConfirmationEmail } from "@/email";

const formSchema = z.object({
    firstName: z.string().min(1, "First name is required"),
    lastName: z.string().min(1, "Last name is required"),
    phone: z.string().min(1, "Phone number is required"),
    email: z.string().email("Invalid email address"),
    address: z.string().min(1, "Home address is required"),
    notes: z.string().optional(),
    eventDate: z.string().optional(),
    eventType: z.string().optional(),
    guestCount: z.string().optional(),
});

export type CateringFormType = z.infer<typeof formSchema>;

const inputClass =
    "w-full rounded-lg p-4 bg-[rgba(255,255,255,0.20)] shadow-[inset_0px_2px_4px_2px_rgba(0,0,0,0.10)] border-none outline-none text-base placeholder:text-gray-400 h-20 focus:ring-2 focus:ring-[#2C4B7E] transition";

// Confirmation Popup Component
const ConfirmationPopup: React.FC<{ isVisible: boolean; onClose: () => void }> = ({ isVisible, onClose }) => {
    if (!isVisible) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
            {/* Backdrop */}
            <div
                className="absolute inset-0  backdrop-blur-sm animate-in fade-in duration-300"
                onClick={onClose}
            />

            {/* Popup */}
            <div className="relative bg-white rounded-3xl p-8 max-w-md w-full mx-4 shadow-2xl animate-in zoom-in-95 duration-500">

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
                        Thank You! 🎊
                    </h2>

                    {/* Message */}
                    <p className="text-[#2C4B7E] text-lg leading-relaxed mb-6 animate-in slide-in-from-bottom-4 duration-700 delay-400">
                        Your catering inquiry has been received! We're excited to help make your event truly special.
                    </p>

                    {/* Additional Info */}
                    <div className="bg-gradient-to-r from-[#2C4B7E]/10 to-[#1B3A6B]/10 rounded-2xl p-4 mb-6 animate-in slide-in-from-bottom-4 duration-700 delay-500">
                        <p className="text-[#1B3A6B] font-semibold mb-2">What's Next?</p>
                        <p className="text-[#2C4B7E] text-sm">
                            Our catering team will review your request and reach out within 24 hours with a personalized quote and menu suggestions.
                        </p>
                    </div>

                    {/* Email Confirmation */}
                    <div className="bg-gradient-to-r from-green-50 to-emerald-50 border border-green-200 rounded-xl p-3 mb-6 animate-in slide-in-from-bottom-4 duration-700 delay-600">
                        <p className="text-green-700 text-sm font-medium">
                            📧 Check your email for confirmation details
                        </p>
                    </div>

                    {/* Close Button */}
                    <button
                        onClick={onClose}
                        className="bg-gradient-to-r from-[#2C4B7E] to-[#1B3A6B] text-white font-semibold py-3 px-8 rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 animate-in slide-in-from-bottom-4 duration-700 delay-700"
                    >
                        Got it! ✨
                    </button>
                </div>

                {/* Floating dessert icons */}
                {/* <div className="absolute top-4 left-4 text-2xl animate-bounce delay-1000">🧁</div>
                <div className="absolute top-8 right-8 text-xl animate-bounce delay-1200">🍮</div>
                <div className="absolute bottom-8 left-8 text-xl animate-bounce delay-1400">🍨</div> */}
            </div>
        </div>
    );
};

const OrderForm: React.FC = () => {
    const form = useForm<CateringFormType>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            firstName: "",
            lastName: "",
            phone: "",
            email: "",
            address: "",
            notes: "",
            eventDate: "",
            eventType: "",
            guestCount: "",
        },
    });

    const [isSubmitting, setIsSubmitting] = useState(false);
    const [showConfirmation, setShowConfirmation] = useState(false);

    const onSubmit = async (data: CateringFormType) => {
        setIsSubmitting(true);
        try {
            await SendCateringConfirmationEmail(data);
            setShowConfirmation(true);
        } catch (error) {
            console.error('Error submitting form:', error);
            alert('There was an error submitting your inquiry. Please try again.');
        } finally {
            form.reset();
            form.clearErrors();
            setIsSubmitting(false);
        }
    };

    const handleCloseConfirmation = () => {
        setShowConfirmation(false);
    };

    return (
        <>
            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="mx-auto w-full p-4 md:p-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <FormField
                            control={form.control}
                            name="firstName"
                            render={({ field }) => (
                                <FormItem className="">
                                    <FormLabel>First Name</FormLabel>
                                    <FormControl className="h-full">
                                        <Input {...field} className={inputClass} autoComplete="given-name" />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="lastName"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Last Name</FormLabel>
                                    <FormControl>
                                        <Input {...field} className={inputClass} autoComplete="family-name" />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="phone"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Phone Number</FormLabel>
                                    <FormControl>
                                        <Input {...field} className={inputClass} autoComplete="tel" />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="email"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Email Address</FormLabel>
                                    <FormControl>
                                        <Input {...field} className={inputClass} autoComplete="email" />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                    </div>
                    <div className="mt-6">
                        
                        <FormField
                            control={form.control}
                            name="address"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Home Address</FormLabel>
                                    <FormControl>
                                        <Input {...field} className={inputClass} autoComplete="street-address" />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                    </div>

                    {/* Event Details Section */}
                    <div className="mt-8">
                        <h3 className="text-lg font-semibold text-[#1B3A6B] mb-4 border-b-2 border-[#2C4B7E] pb-2">
                            Event Details
                        </h3>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            <FormField
                                control={form.control}
                                name="eventDate"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Event Date</FormLabel>
                                        <FormControl>
                                            <Input
                                                {...field}
                                                type="date"
                                                className={inputClass}
                                                min={new Date().toISOString().split('T')[0]}
                                            />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name="eventType"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Event Type</FormLabel>
                                        <FormControl>
                                            <select
                                                {...field}
                                                className={inputClass}
                                            >
                                                <option value="">Select event type</option>
                                                <option value="Wedding">Wedding</option>
                                                <option value="Birthday Party">Birthday Party</option>
                                                <option value="Corporate Event">Corporate Event</option>
                                                <option value="Anniversary">Anniversary</option>
                                                <option value="Graduation">Graduation</option>
                                                <option value="Baby Shower">Baby Shower</option>
                                                <option value="Holiday Party">Holiday Party</option>
                                                <option value="Other">Other</option>
                                            </select>
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name="guestCount"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Number of Guests</FormLabel>
                                        <FormControl>
                                            <Input
                                                {...field}
                                                type="number"
                                                className={inputClass}
                                                placeholder="e.g., 50"
                                                min="1"
                                                max="1000"
                                            />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                        </div>
                    </div>

                    <div className="mt-6">
                        <FormField
                            control={form.control}
                            name="notes"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Additional Notes</FormLabel>
                                    <FormControl>
                                        <Textarea {...field} className={inputClass + " min-h-[100px] resize-none"} placeholder="Event details, dietary restrictions, special requests, anything else we should know" />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                    </div>
                    <div className="mt-10 flex justify-start">
                        <Button
                            type="submit"
                            disabled={isSubmitting}
                            className="bg-[#2C4B7E] text-white text-lg font-semibold rounded-full px-12 py-3 shadow-md hover:bg-[#1e3356] transition disabled:opacity-60"
                        >
                            {isSubmitting ? 'Sending...' : 'Submit Inquiry'}
                        </Button>
                    </div>
                </form>
            </Form>

            {/* Confirmation Popup */}
            <ConfirmationPopup
                isVisible={showConfirmation}
                onClose={handleCloseConfirmation}
            />
        </>
    );
};

export default OrderForm; 