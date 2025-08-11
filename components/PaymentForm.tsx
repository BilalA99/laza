"use client"
import React from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const paymentSchema = z.object({
    firstName: z.string().min(1, "Required"),
    lastName: z.string().min(1, "Required"),
    cardNumber: z.string().min(12, "Invalid card number"),
    expiration: z.string().min(4, "Invalid expiration"),
    cvc: z.string().min(3, "Invalid CVC"),
    zip: z.string().min(3, "Invalid Zip Code"),
});

type PaymentFormData = z.infer<typeof paymentSchema>;

const PaymentForm: React.FC = () => {
    const { register, handleSubmit, formState: { errors } } = useForm<PaymentFormData>({
        resolver: zodResolver(paymentSchema),
    });

    const onSubmit = (data: PaymentFormData) => {
        // No-op for now
        alert("Order placed! (demo)");
    };

    return (
        <section className="mt-12">
            <h2 className="text-2xl font-500 mb-2">Payment Method</h2>
            <div className="h-[3px] w-full bg-[#2C4B7E] mb-8" style={{ maxWidth: 900 }} />
            <form id="payment_form" onSubmit={handleSubmit(onSubmit)} className="max-w-3xl">
                {/* <button type="button" style={{boxShadow : '0px 2px 8px 2px rgba(0, 0, 0, 0.40) inset'}} className="w-full bg-[#2C4B7E] text-white text-2xl font-medium  py-4 mb-10">Credit / Debit Card</button> */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-8 mb-8">
                    <div>
                        <label className="block mb-2 font-medium">First Name</label>
                        <input {...register("firstName")}
                            style={{ boxShadow: '0px 2px 4px 2px rgba(0, 0, 0, 0.10) inset' }}
                            className="w-full rounded-xl border-none bg-[rgba(255,255,255,0.20)] outline-none text-base p-4 shadow-md focus:ring-2 focus:ring-[#2C4B7E] transition"
                        />
                        {errors.firstName && <p className="text-red-500 text-sm mt-1">{errors.firstName.message}</p>}
                    </div>
                    <div>
                        <label className="block mb-2 font-medium">Last Name</label>
                        <input {...register("lastName")}
                            style={{ boxShadow: '0px 2px 4px 2px rgba(0, 0, 0, 0.10) inset' }}
                            className="w-full rounded-xl border-none bg-[rgba(255,255,255,0.20)] outline-none text-base p-4 shadow-md focus:ring-2 focus:ring-[#2C4B7E] transition"
                        />
                        {errors.lastName && <p className="text-red-500 text-sm mt-1">{errors.lastName.message}</p>}
                    </div>
                </div>
                <div className="mb-8">
                    <label className="block mb-2 font-medium">Card Number</label>
                    <input {...register("cardNumber")}
                        style={{ boxShadow: '0px 2px 4px 2px rgba(0, 0, 0, 0.10) inset' }}
                        className="w-full rounded-xl border-none bg-[rgba(255,255,255,0.20)] outline-none text-base p-4 shadow-md focus:ring-2 focus:ring-[#2C4B7E] transition"
                    />
                    {errors.cardNumber && <p className="text-red-500 text-sm mt-1">{errors.cardNumber.message}</p>}
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-x-8 gap-y-8 mb-10">
                    <div>
                        <label className="block mb-2 font-medium">Expiration</label>
                        <input {...register("expiration")}
                            style={{ boxShadow: '0px 2px 4px 2px rgba(0, 0, 0, 0.10) inset' }}
                            className="w-full rounded-xl border-none bg-[rgba(255,255,255,0.20)] outline-none text-base p-4 shadow-md focus:ring-2 focus:ring-[#2C4B7E] transition"
                        />
                        {errors.expiration && <p className="text-red-500 text-sm mt-1">{errors.expiration.message}</p>}
                    </div>
                    <div>
                        <label className="block mb-2 font-medium">CVC</label>
                        <input {...register("cvc")}
                            style={{ boxShadow: '0px 2px 4px 2px rgba(0, 0, 0, 0.10) inset' }}
                            className="w-full rounded-xl border-none bg-[rgba(255,255,255,0.20)] outline-none text-base p-4 shadow-md focus:ring-2 focus:ring-[#2C4B7E] transition"
                        />
                        {errors.cvc && <p className="text-red-500 text-sm mt-1">{errors.cvc.message}</p>}
                    </div>
                    <div>
                        <label className="block mb-2 font-medium">Zip Code</label>
                        <input {...register("zip")}
                            style={{ boxShadow: '0px 2px 4px 2px rgba(0, 0, 0, 0.10) inset' }}
                            className="w-full rounded-xl border-none bg-[rgba(255,255,255,0.20)] outline-none text-base p-4 shadow-md focus:ring-2 focus:ring-[#2C4B7E] transition"
                        />
                        {errors.zip && <p className="text-red-500 text-sm mt-1">{errors.zip.message}</p>}
                    </div>
                </div>
                <button 
                    id="payment-submit-btn"
                    type="submit" 
                    className="w-full bg-[#2C4B7E] text-white text-2xl font-medium rounded-[30px] hover:scale-105 transition-all duration-300 cursor-pointer py-4 mt-8" 
                    style={{boxShadow : '0px 2px 8px 2px rgba(0, 0, 0, 0.40) inset'}} 
                >
                    Place Pickup Order
                </button>
            </form>
        </section>
    );
};

export default PaymentForm; 