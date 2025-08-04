import { Resend } from 'resend';
import { CateringFormType } from '@/components/OrderForm';
import { LazaCateringConfirmation } from './LazaCateringConfirmation';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function SendCateringConfirmationEmail(formData: CateringFormType) {
    try {

        // Send email using React Email
        const { data, error } = await resend.emails.send({
            from: 'Laza Dessert Cafe <catering@lazadessert.cafe>',
            to: [formData.email],
            subject: `Laza Dessert Cafe Catering Inquiry Confirmation`,
            react: LazaCateringConfirmation({ cateringData: formData }),
        });

        if (error) {
            console.error('Error sending email:', error);
            throw new Error('Failed to send email');
        }

        // Also send a copy to the business
        await resend.emails.send({
            from: 'Laza Dessert Cafe <catering@lazadessert.cafe>',
            to: ['catering@lazadessert.cafe'], // Replace with your actual catering email
            subject: `New Catering Inquiry - ${formData.phone}`,
            react: LazaCateringConfirmation({ cateringData: formData }),
        });

        return { success: true, data };
    } catch (error) {
        console.error('Error in SendCateringConfirmationEmail:', error);
        throw error;
    }
} 