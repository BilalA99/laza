'use server'

import { Resend } from 'resend';
import React from 'react';
import LazaCateringConfirmation from './LazaCateringConfirmation';
import { CateringFormType } from '@/components/OrderForm';
import { JoinUsForm } from '@/app/join-us/page';

const resend = new Resend(process.env.RESEND_KEY);
import LazaFranchiseInquiry from './LazaFranchiseInquiry';

export async function SendCateringConfirmationEmail(formData: CateringFormType) {
    try {
        // Generate inquiry number and date
        const inquiryNumber = `CATER-${new Date().getFullYear()}-${String(Math.floor(Math.random() * 1000)).padStart(3, '0')}`;
        const inquiryDate = new Date().toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        });

        // Prepare email data
        const emailData = {
            firstName: formData.firstName,
            lastName: formData.lastName,
            phone: formData.phone,
            email: formData.email,
            address: formData.address,
            notes: formData.notes,
            eventDate: formData.eventDate,
            eventType: formData.eventType,
            guestCount: formData.guestCount,
            inquiryDate: inquiryDate,
            inquiryNumber: inquiryNumber,
        };

        // Send email to customer
        const { data, error } = await resend.emails.send({
            from: 'Laza Dessert Cafe <catering@lazacafe.com>',
            to: [formData.email],
            subject: `Catering Inquiry Confirmation - ${inquiryNumber}`,
            react: React.createElement(LazaCateringConfirmation, { cateringData: emailData }),
        });

        if (error) {
            console.error('Error sending email:', error);
            throw new Error('Failed to send email');
        }

        // Also send a copy to the business
        try {
            await resend.emails.send({
                from: 'Laza Dessert Cafe <catering@lazacafe.com>',
                to: ['catering@lazacafe.com'], // Replace with your actual catering email
                subject: `New Catering Inquiry - ${inquiryNumber}`,
                react: React.createElement(LazaCateringConfirmation, { cateringData: emailData }),
            });
        } catch (businessEmailError) {
            console.error('Error sending business copy:', businessEmailError);
            // Don't fail the request if business email fails
        }

        return { success: true, inquiryNumber, data };
    } catch (error) {
        console.error('Error in SendCateringConfirmationEmail:', error);
        throw error;
    }
}

export async function SendFranchiseInquiryEmail(formData: JoinUsForm) {
    try {
        const { data, error } = await resend.emails.send({
            from: 'Laza Dessert Cafe <catering@lazadessert.cafe>',
            to: [formData.email],
            subject: `New Franchise Inquiry - ${formData.phone}`,
            react: React.createElement(LazaFranchiseInquiry, { inquiryData: formData }),
        });

        if (error) {
            console.error('Error sending email:', error);
            throw new Error('Failed to send email');
        }
        
    } catch (error) {
        console.error('Error in SendFranchiseInquiryEmail:', error);
        throw error;
    }
}