"use client"
import React from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form, FormField, FormItem, FormLabel, FormControl, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

const formSchema = z.object({
    firstName: z.string().min(1, "First name is required"),
    lastName: z.string().min(1, "Last name is required"),
    phone: z.string().min(1, "Phone number is required"),
    email: z.string().email("Invalid email address"),
    address: z.string().min(1, "Home address is required"),
    notes: z.string().optional(),
});

type FormData = z.infer<typeof formSchema>;

const inputClass =
    "w-full rounded-lg p-4 bg-[rgba(255,255,255,0.20)] shadow-[inset_0px_2px_4px_2px_rgba(0,0,0,0.10)] border-none outline-none text-base placeholder:text-gray-400 h-20 focus:ring-2 focus:ring-[#2C4B7E] transition";

const OrderForm: React.FC = () => {
    const form = useForm<FormData>({
        resolver: zodResolver(formSchema),
    });

    const onSubmit = async (data: FormData) => {
        alert("Form submitted!\n" + JSON.stringify(data, null, 2));
        form.reset();
    };

    return (
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
                                    <Input {...field} className={inputClass} autoComplete="given-name"/>
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
                <div className="mt-6">
                    <FormField
                        control={form.control}
                        name="notes"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Additional Notes</FormLabel>
                                <FormControl>
                                    <Textarea {...field} className={inputClass + " min-h-[100px] resize-none"} placeholder="Event details, order details, anything else we should know" />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                </div>
                <div className="mt-10 flex justify-start">
                    <Button
                        type="submit"
                        disabled={form.formState.isSubmitting}
                        className="bg-[#2C4B7E] text-white text-lg font-semibold rounded-full px-12 py-3 shadow-md hover:bg-[#1e3356] transition disabled:opacity-60"
                    >
                        Submit
                    </Button>
                </div>
            </form>
        </Form>
    );
};

export default OrderForm; 