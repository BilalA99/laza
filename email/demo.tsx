'use client'
import React from 'react';
import LazaOrderConfirmation from './LazaOrderConfirmation';
import LazaWelcomeEmail from './LazaWelcomeEmail';
import LazaPromotionalEmail from './LazaPromotionalEmail';
import LazaCateringConfirmation from './LazaCateringConfirmation';

const EmailDemo: React.FC = () => {
    // Sample data for Order Confirmation
    const sampleOrderData = {
        firstName: "John",
        lastName: "Doe",
        phone: "(555) 123-4567",
        email: "john.doe@example.com",
        address: "123 Sweet Street, Dessert City, DC 12345",
        notes: "Please make the kunafa extra crispy and add extra pistachios on top!",
        orderNumber: "LAZA-2024-001",
        orderDate: "December 15, 2024",
        items: [
            {
                name: "Classic Kunafa",
                quantity: 2,
                price: 12.99,
                modifiers: [{ name: "Toppings", options: "Extra Pistachios" }],
                comments: "Extra crispy please"
            },
            {
                name: "Oreo Crepe",
                quantity: 1,
                price: 9.99,
                modifiers: [{ name: "Chocolate & Spread's", options: "Nutella" }],
                comments: ""
            },
            {
                name: "Ferro Shake",
                quantity: 1,
                price: 7.99,
                modifiers: [],
                comments: "Less ice"
            }
        ]
    };

    // Sample data for Welcome Email
    const sampleWelcomeData = {
        firstName: "Sarah",
        lastName: "Smith",
        email: "sarah.smith@example.com"
    };

    // Sample data for Promotional Email
    const samplePromotionData = {
        title: "Sweet December Sale!",
        description: "Indulge in our festive dessert collection with amazing discounts",
        discount: "25%",
        validUntil: "December 31, 2024",
        code: "SWEET25",
        featuredItems: [
            {
                name: "Triple Chocolate Kunafa",
                originalPrice: "15.99",
                discountedPrice: "11.99",
                imageSrc: "/desserts/triplechocolatekunafa.png"
            },
            {
                name: "Pistachio Kunafa",
                originalPrice: "14.99",
                discountedPrice: "11.24",
                imageSrc: "/desserts/pistachiokunafa.png"
            },
            {
                name: "Brownie Shake",
                originalPrice: "8.99",
                discountedPrice: "6.74",
                imageSrc: "/drinks/brownieshake.png"
            }
        ]
    };

    // Sample data for Catering Email
    const sampleCateringData = {
        firstName: "Emily",
        lastName: "Johnson",
        phone: "(555) 987-6543",
        email: "emily.johnson@example.com",
        address: "456 Event Street, Celebration City, CC 54321",
        notes: "We need a variety of desserts for a wedding reception. Please include some gluten-free options and make sure everything is nut-free due to allergies.",
        eventDate: "January 15, 2025",
        eventType: "Wedding Reception",
        guestCount: 150,
        inquiryDate: "December 15, 2024",
        inquiryNumber: "CATER-2024-001"
    };

    return (
        <div style={{
            fontFamily: 'Arial, sans-serif',
            padding: '20px',
            backgroundColor: '#f5f5f5'
        }}>
            <h1 style={{
                textAlign: 'center',
                color: '#1B3A6B',
                marginBottom: '40px',
                fontSize: '32px'
            }}>
                Laza Email Templates Demo
            </h1>

            {/* Order Confirmation Email */}
            <div style={{ marginBottom: '60px' }}>
                <h2 style={{
                    color: '#2C4B7E',
                    marginBottom: '20px',
                    fontSize: '24px',
                    textAlign: 'center'
                }}>
                    1. Order Confirmation Email
                </h2>
                <LazaOrderConfirmation orderData={sampleOrderData} />
            </div>

            {/* Welcome Email */}
            <div style={{ marginBottom: '60px' }}>
                <h2 style={{
                    color: '#2C4B7E',
                    marginBottom: '20px',
                    fontSize: '24px',
                    textAlign: 'center'
                }}>
                    2. Welcome Email
                </h2>
                <LazaWelcomeEmail customerData={sampleWelcomeData} />
            </div>

            {/* Promotional Email */}
            <div style={{ marginBottom: '60px' }}>
                <h2 style={{
                    color: '#2C4B7E',
                    marginBottom: '20px',
                    fontSize: '24px',
                    textAlign: 'center'
                }}>
                    3. Promotional Email
                </h2>
                <LazaPromotionalEmail promotionData={samplePromotionData} />
            </div>

            {/* Catering Email */}
            <div style={{ marginBottom: '60px' }}>
                <h2 style={{
                    color: '#2C4B7E',
                    marginBottom: '20px',
                    fontSize: '24px',
                    textAlign: 'center'
                }}>
                    4. Catering Inquiry Confirmation
                </h2>
                <LazaCateringConfirmation cateringData={sampleCateringData} />
            </div>

            {/* Usage Instructions */}
            <div style={{
                backgroundColor: 'white',
                padding: '30px',
                borderRadius: '15px',
                boxShadow: '0 4px 20px rgba(0,0,0,0.1)',
                maxWidth: '800px',
                margin: '0 auto'
            }}>
                <h3 style={{
                    color: '#1B3A6B',
                    marginBottom: '20px',
                    fontSize: '20px'
                }}>
                    How to Use These Email Templates
                </h3>
                <div style={{ color: '#2C4B7E', lineHeight: '1.6' }}>
                    <p><strong>1. Order Confirmation Email:</strong></p>
                    <pre style={{
                        backgroundColor: '#f8f9fa',
                        padding: '15px',
                        borderRadius: '8px',
                        overflow: 'auto',
                        fontSize: '14px'
                    }}>
                        {`import { LazaOrderConfirmation } from '@/email';

const orderData = {
  firstName: "John",
  lastName: "Doe",
  phone: "(555) 123-4567",
  email: "john@example.com",
  address: "123 Street, City, State",
  notes: "Special instructions",
  orderNumber: "LAZA-2024-001",
  orderDate: "December 15, 2024",
  items: [
    {
      name: "Classic Kunafa",
      quantity: 2,
      price: 12.99,
      modifiers: [{ name: "Toppings", options: "Extra Pistachios" }],
      comments: "Extra crispy"
    }
  ]
};

<LazaOrderConfirmation orderData={orderData} />`}
                    </pre>

                    <p style={{ marginTop: '20px' }}><strong>2. Welcome Email:</strong></p>
                    <pre style={{
                        backgroundColor: '#f8f9fa',
                        padding: '15px',
                        borderRadius: '8px',
                        overflow: 'auto',
                        fontSize: '14px'
                    }}>
                        {`import { LazaWelcomeEmail } from '@/email';

const customerData = {
  firstName: "Sarah",
  lastName: "Smith",
  email: "sarah@example.com"
};

<LazaWelcomeEmail customerData={customerData} />`}
                    </pre>

                    <p style={{ marginTop: '20px' }}><strong>3. Promotional Email:</strong></p>
                    <pre style={{
                        backgroundColor: '#f8f9fa',
                        padding: '15px',
                        borderRadius: '8px',
                        overflow: 'auto',
                        fontSize: '14px'
                    }}>
                        {`import { LazaPromotionalEmail } from '@/email';

const promotionData = {
  title: "Sweet December Sale!",
  description: "Indulge in our festive dessert collection",
  discount: "25%",
  validUntil: "December 31, 2024",
  code: "SWEET25",
  featuredItems: [
    {
      name: "Triple Chocolate Kunafa",
      originalPrice: "15.99",
      discountedPrice: "11.99",
      imageSrc: "/desserts/triplechocolatekunafa.png"
    }
  ]
};

<LazaPromotionalEmail promotionData={promotionData} />`}
                    </pre>

                    <p style={{ marginTop: '20px' }}><strong>4. Catering Inquiry Confirmation:</strong></p>
                    <pre style={{
                        backgroundColor: '#f8f9fa',
                        padding: '15px',
                        borderRadius: '8px',
                        overflow: 'auto',
                        fontSize: '14px'
                    }}>
                        {`import { LazaCateringConfirmation } from '@/email';

const cateringData = {
  firstName: "Emily",
  lastName: "Johnson",
  phone: "(555) 987-6543",
  email: "emily@example.com",
  address: "456 Event Street, City, State",
  notes: "Wedding reception with gluten-free options needed",
  eventDate: "January 15, 2025",
  eventType: "Wedding Reception",
  guestCount: 150,
  inquiryDate: "December 15, 2024",
  inquiryNumber: "CATER-2024-001"
};

<LazaCateringConfirmation cateringData={cateringData} />`}
                    </pre>
                </div>
            </div>
        </div>
    );
};

export default EmailDemo; 