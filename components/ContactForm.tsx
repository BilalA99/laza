"use client"
import React from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const contactSchema = z.object({
    firstName: z.string().min(1, "Required"),
    lastName: z.string().min(1, "Required"),
    phone: z.string().min(1, "Required"),
    email: z.string().email("Invalid email address"),
    emailSignup: z.boolean().optional(),
});

type ContactFormData = z.infer<typeof contactSchema>;

const ContactForm: React.FC = () => {
    const { register, formState: { errors } } = useForm<ContactFormData>({
        resolver: zodResolver(contactSchema),
        defaultValues: { emailSignup: false },
    });

    return (
        <section className="mt-12">
            <h2 className="text-2xl font-500 mb-2">Contact Information</h2>
            <div className="h-[3px] w-full bg-[#2C4B7E] mb-8" style={{ maxWidth: 900 }} />
            <form className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-8 max-w-3xl">
                <div>
                    <label className="block mb-2 font-medium">First Name</label>
                    <input {...register("firstName")}
                        style={{
                           boxShadow : ' 0px 2px 4px 2px rgba(0, 0, 0, 0.10) inset' 
                        }}
                        className="w-full rounded-xl border-none bg-[rgba(255,255,255,0.20)] outline-none text-base p-4 shadow-md focus:ring-2 focus:ring-[#2C4B7E] transition"
                    />
                    {errors.firstName && <p className="text-red-500 text-sm mt-1">{errors.firstName.message}</p>}
                </div>
                <div>
                    <label className="block mb-2 font-medium">Last Name</label>
                    <input {...register("lastName")}
                        style={{
                            boxShadow : ' 0px 2px 4px 2px rgba(0, 0, 0, 0.10) inset' 
                         }}
                         className="w-full rounded-xl border-none bg-[rgba(255,255,255,0.20)] outline-none text-base p-4 shadow-md focus:ring-2 focus:ring-[#2C4B7E] transition"
                    />
                    {errors.lastName && <p className="text-red-500 text-sm mt-1">{errors.lastName.message}</p>}
                </div>
                <div>
                    <label className="block mb-2 font-medium">Phone Number</label>
                    <input {...register("phone")}
                        style={{
                            boxShadow : ' 0px 2px 4px 2px rgba(0, 0, 0, 0.10) inset' 
                         }}
                         className="w-full rounded-xl border-none bg-[rgba(255,255,255,0.20)] outline-none text-base p-4 shadow-md focus:ring-2 focus:ring-[#2C4B7E] transition"
                    />
                    {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone.message}</p>}
                </div>
                <div>
                    <label className="block mb-2 font-medium">Email Address</label>
                    <input {...register("email")}
                        style={{
                            boxShadow : ' 0px 2px 4px 2px rgba(0, 0, 0, 0.10) inset' 
                         }}
                         className="w-full rounded-xl border-none bg-[rgba(255,255,255,0.20)] outline-none text-base p-4 shadow-md focus:ring-2 focus:ring-[#2C4B7E] transition"
                    />
                    {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>}
                </div>
                <div className="col-span-2 mt-6 flex items-start gap-3">
                    <input type="checkbox" {...register("emailSignup")}
                        className="w-6 h-6 rounded-[5px] border-[2px_solid_#2C4B7E] focus:ring-[#2C4B7E] mt-1"
                    />
                    <div>
                        <label className="font-medium">Sign up for emails from Laza Cafe (optional)</label>
                        <div className="text-gray-400 text-base mt-1">Know about products, offers, announcements and events</div>
                    </div>
                </div>
            </form>
        </section>
    );
};

export default ContactForm; 