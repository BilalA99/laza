import React from 'react';
import {
    Body,
    Container,
    Head,
    Heading,
    Html,
    Img,
    Link,
    Preview,
    Section,
    Text,
    Hr,
    Row,
    Column,
} from '@react-email/components';
import { CateringFormType } from '@/components/OrderForm';

interface LazaCateringConfirmationProps {
    cateringData: {
        firstName: string;
        lastName: string;
        phone: string;
        email: string;
        address: string;
        notes?: string;
        eventDate?: string;
        eventType?: string;
        guestCount?: number;
    };
}
const url = 'https://lazadessert.cafe'

export const LazaCateringConfirmation = ({ cateringData }: { cateringData: CateringFormType }) => {
    return (
        <Html>
            <Head />
            <Preview>Catering Inquiry Confirmation - {cateringData.phone}</Preview>
            <Body style={main} className='w-full max-w-[800px]'>

                {/* Header Section */}
                <Section style={headerSection}>
                    <Img
                        src={`${url}/lazabluelogo.png`}
                        width="130"
                        height="auto"
                        alt="Laza Dessert Cafe"
                        style={logo}
                        className='rounded-full'
                    />
                    <Heading style={headerTitle}>
                        Catering Inquiry Received! 🎉
                    </Heading>
                    <Text style={headerSubtitle}>
                        Thank you for choosing Laza for your special event
                    </Text>
                </Section>

                {/* Main Content */}
                <Section style={contentSection}>
                    {/* Thank You Message */}
                    <Section style={thankYouSection}>
                        <Heading style={sectionTitle}>
                            Thank you, {cateringData.firstName}! 👋
                        </Heading>
                        <Text style={bodyText}>
                            We've received your catering inquiry and are excited to help make your event truly special!
                        </Text>
                        <Text style={bodyText}>
                            Our catering team will review your request and get back to you within 24 hours with a personalized quote and menu suggestions.
                        </Text>
                    </Section>

                    {/* Inquiry Details */}
                    <Section style={inquirySection}>
                        <Heading style={inquiryTitle}>📋 Inquiry Details</Heading>
                        <Row style={detailRow}>
                            <Column style={detailColumn}>
                                <Text style={detailLabel}>Inquiry Number:</Text>
                                <Text style={detailValue}>{cateringData.phone}</Text>
                            </Column>
                            <Column style={detailColumn}>
                                <Text style={detailLabel}>Inquiry Date:</Text>
                                <Text style={detailValue}>{cateringData.eventDate}</Text>
                            </Column>
                        </Row>

                        {cateringData.eventDate && (
                            <Row style={detailRow}>
                                <Column style={detailColumn}>
                                    <Text style={detailLabel}>Event Date:</Text>
                                    <Text style={detailValue}>{cateringData.eventDate}</Text>
                                </Column>
                                <Column style={detailColumn}>
                                    <Text style={detailLabel}>Event Type:</Text>
                                    <Text style={detailValue}>{cateringData.eventType || 'Not specified'}</Text>
                                </Column>
                            </Row>
                        )}

                        {cateringData.guestCount && (
                            <Row style={detailRow}>
                                <Column style={detailColumn}>
                                    <Text style={detailLabel}>Expected Guests:</Text>
                                    <Text style={detailValue}>{cateringData.guestCount} people</Text>
                                </Column>
                            </Row>
                        )}
                    </Section>

                    {/* Contact Information */}
                    <Section style={contactSection}>
                        <Heading style={sectionTitle}>Contact Information</Heading>
                        <Row style={contactRow}>
                            <Column style={contactColumn}>
                                <Text style={fieldLabel}>First Name</Text>
                                <Section style={fieldBox}>
                                    <Text style={fieldValue}>{cateringData.firstName}</Text>
                                </Section>
                            </Column>
                            <Column style={contactColumn}>
                                <Text style={fieldLabel}>Last Name</Text>
                                <Section style={fieldBox}>
                                    <Text style={fieldValue}>{cateringData.lastName}</Text>
                                </Section>
                            </Column>
                        </Row>

                        <Row style={contactRow}>
                            <Column style={contactColumn}>
                                <Text style={fieldLabel}>Phone</Text>
                                <Section style={fieldBox}>
                                    <Text style={fieldValue}>{cateringData.phone}</Text>
                                </Section>
                            </Column>
                            <Column style={contactColumn}>
                                <Text style={fieldLabel}>Email</Text>
                                <Section style={fieldBox}>
                                    <Text style={fieldValue}>{cateringData.email}</Text>
                                </Section>
                            </Column>
                        </Row>

                        <Row style={contactRow}>
                            <Column style={contactColumn}>
                                <Text style={fieldLabel}>Address</Text>
                                <Section style={fieldBox}>
                                    <Text style={fieldValue}>{cateringData.address}</Text>
                                </Section>
                            </Column>
                        </Row>

                        {cateringData.notes && (
                            <Row style={contactRow}>
                                <Column style={contactColumn}>
                                    <Text style={fieldLabel}>Special Requirements</Text>
                                    <Section style={fieldBox}>
                                        <Text style={fieldValue}>{cateringData.notes}</Text>
                                    </Section>
                                </Column>
                            </Row>
                        )}
                    </Section>

                    {/* What's Next */}
                    <Section style={nextSection}>
                        <Heading style={sectionTitle}>What Happens Next?</Heading>
                        <Row style={stepRow}>
                            <Column style={stepColumn}>
                                <Section style={stepBox}>
                                    <Text style={stepNumber}>1</Text>
                                    <Heading style={stepTitle}>Review Your Request</Heading>
                                    <Text style={stepDescription}>
                                        Our catering team will carefully review your requirements
                                    </Text>
                                </Section>
                            </Column>
                            <Column style={stepColumn}>
                                <Section style={stepBox}>
                                    <Text style={stepNumber}>2</Text>
                                    <Heading style={stepTitle}>Custom Quote</Heading>
                                    <Text style={stepDescription}>
                                        We'll prepare a personalized quote and menu suggestions
                                    </Text>
                                </Section>
                            </Column>
                            <Column style={stepColumn}>
                                <Section style={stepBox}>
                                    <Text style={stepNumber}>3</Text>
                                    <Heading style={stepTitle}>Contact You</Heading>
                                    <Text style={stepDescription}>
                                        We'll reach out within 24 hours to discuss your event
                                    </Text>
                                </Section>
                            </Column>
                        </Row>
                    </Section>

                    {/* Catering Highlights */}
                    <Section style={highlightsSection}>
                        <Heading style={sectionTitle}>Why Choose Laza Catering?</Heading>
                        <Row style={highlightRow}>
                            <Column style={highlightColumn}>
                                <Section style={highlightBox}>
                                    <Img
                                        src={`${url}/desserts/kunafa.jpg`}
                                        width="60"
                                        height="60"
                                        alt="Fresh Made"
                                        style={highlightImage}
                                    />
                                    <Heading style={highlightTitle}>Fresh Made Daily</Heading>
                                    <Text style={highlightDescription}>All desserts made fresh</Text>
                                </Section>
                            </Column>
                            <Column style={highlightColumn}>
                                <Section style={highlightBox}>
                                    <Img
                                        src={`${url}/desserts/crepe.jpg`}
                                        width="60"
                                        height="60"
                                        alt="Customizable"
                                        style={highlightImage}
                                    />
                                    <Heading style={highlightTitle}>Customizable Menus</Heading>
                                    <Text style={highlightDescription}>Tailored to your event</Text>
                                </Section>
                            </Column>
                            <Column style={highlightColumn}>
                                <Section style={highlightBox}>
                                    <Img
                                        src={`${url}/drinks/ferroshake.jpg`}
                                        width="60"
                                        height="60"
                                        alt="Professional"
                                        style={highlightImage}
                                    />
                                    <Heading style={highlightTitle}>Professional Service</Heading>
                                    <Text style={highlightDescription}>From setup to cleanup</Text>
                                </Section>
                            </Column>
                        </Row>
                    </Section>

                    {/* Contact Information */}
                    <Section style={contactInfoSection}>
                        <Heading style={contactInfoTitle}>📞 Need to Reach Us?</Heading>
                        <Text style={contactInfoText}>
                            If you have any urgent questions, feel free to contact us directly:
                        </Text>
                        <Text style={contactInfoDetails}>
                            📧 catering@lazadessert.cafe | 📱 (555) 123-4567
                        </Text>
                    </Section>

                    {/* Footer */}
                    <Section style={footerSection}>
                        <Text style={footerTitle}>
                            Thank you for choosing Laza for your special event! 🎉
                        </Text>
                        <Text style={footerText}>
                            We look forward to making your event truly memorable with our delicious desserts.
                        </Text>
                        <Row style={socialRow} className='grid grid-cols-2 gap-4'>
                            <Link href="https://www.instagram.com/laza.cafe">
                                <Img
                                    src={`${url}/insta.png`}
                                    width="40"
                                    height="40"
                                    alt="Instagram"
                                    style={socialIcon}
                                />
                            </Link>
                            <Link href="https://www.tiktok.com/@lazacafe">
                                <Img
                                    src={`${url}/tiktok.png`}
                                    width="40"
                                    height="40"
                                    alt="TikTok"
                                    style={socialIcon}
                                />
                            </Link>
                        </Row>
                        <Text style={footerSignature}>
                            Laza Dessert Cafe - Making every event sweeter! 🌟
                        </Text>
                    </Section>
                </Section>

            </Body>
        </Html>
    );
};


// Styles
const main = {
    backgroundColor: '#f8f9fa',
    fontFamily: 'Arial, sans-serif',

};

const container = {
    margin: '0 auto',
    padding: '20px',
    width: '100%',
};

const headerSection = {
    background: 'linear-gradient(135deg, #1B3A6B 0%, #2C4B7E 100%)',
    borderRadius: '20px 20px 0 0',
    padding: '40px 30px',
    textAlign: 'center' as const,
    display: 'flex',
    flexDirection: 'column' as const,
    alignItems: 'center' as const,
    justifyContent: 'center' as const,
};

const logo = {
    marginBottom: '20px',
};

const headerTitle = {
    color: 'white',
    fontSize: '30px',
    fontWeight: 'bold',
    margin: '0',
    textShadow: '0 2px 4px rgba(0,0,0,0.3)',
};

const headerSubtitle = {
    color: 'rgba(255,255,255,0.95)',
    fontSize: '18px',
    margin: '15px 0 0 0',
};

const contentSection = {
    backgroundColor: 'white',
    padding: '40px 30px',
    borderRadius: '0 0 20px 20px',
    boxShadow: '0 4px 20px rgba(0,0,0,0.1)',
};

const thankYouSection = {
    textAlign: 'center' as const,
    marginBottom: '40px',
};

const sectionTitle = {
    color: '#1B3A6B',
    fontSize: '24px',
    fontWeight: 'bold',
    margin: '0 0 20px 0',
};

const bodyText = {
    color: '#2C4B7E',
    fontSize: '16px',
    lineHeight: '1.6',
    margin: '0 0 15px 0',
};

const inquirySection = {
    backgroundColor: 'rgba(44, 75, 126, 0.05)',
    padding: '25px',
    borderRadius: '15px',
    border: '2px solid #2C4B7E',
    marginBottom: '40px',
};

const inquiryTitle = {
    color: '#1B3A6B',
    fontSize: '20px',
    textAlign: 'start' as const,
    fontWeight: 'bold',
    margin: '0 0 20px 0',
};

const detailRow = {
    marginBottom: '20px',
};

const detailColumn = {
    padding: '0 10px',
};

const detailLabel = {
    color: '#1B3A6B',
    fontWeight: 'bold',
    fontSize: '14px',
    margin: '0',
};

const detailValue = {
    color: '#2C4B7E',
    fontSize: '16px',
    fontWeight: 'bold',
    margin: '5px 0 0 0',
};

const contactSection = {
    marginBottom: '40px',
};

const contactRow = {
    marginBottom: '20px',
};

const contactColumn = {
    padding: '0 10px',
};

const fieldLabel = {
    color: '#1B3A6B',
    fontWeight: 'bold',
    fontSize: '14px',
    margin: '0 0 5px 0',
};

const fieldBox = {
    padding: '12px',
    backgroundColor: 'rgba(255, 255, 255, 0.20)',
    borderRadius: '10px',
    border: '1px solid rgba(44, 75, 126, 0.2)',
    boxShadow: '0px 2px 4px 2px rgba(0, 0, 0, 0.10) inset',
};

const fieldValue = {
    color: '#2C4B7E',
    fontSize: '16px',
    margin: '0',
};

const nextSection = {
    marginBottom: '40px',
};

const stepRow = {
    marginBottom: '20px',
};

const stepColumn = {
    padding: '0 10px',
};

const stepBox = {
    textAlign: 'center' as const,
    padding: '20px',
    backgroundColor: 'rgba(44, 75, 126, 0.05)',
    borderRadius: '15px',
    border: '1px solid rgba(44, 75, 126, 0.1)',
    display: 'flex',
    flexDirection: 'column' as const,
    alignItems: 'center' as const,
    justifyContent: 'center' as const,
};

const stepNumber = {
    width: '50px',
    height: '50px',
    backgroundColor: '#2C4B7E',
    borderRadius: '50%',
    display: 'flex',
    alignItems: 'center' as const,
    justifyContent: 'center' as const,
    margin: '0 auto 15px auto',
    color: 'white',
    fontSize: '20px',
    fontWeight: 'bold',
};

const stepTitle = {
    color: '#1B3A6B',
    fontSize: '16px',
    fontWeight: 'bold',
    margin: '0 0 10px 0',
    textAlign: 'center' as const,
};

const stepDescription = {
    color: '#2C4B7E',
    fontSize: '14px',
    margin: '0',
    textAlign: 'center' as const,
};

const highlightsSection = {
    marginBottom: '40px',
};

const highlightRow = {
    marginBottom: '20px',
};

const highlightColumn = {
    padding: '0 10px',
};

const highlightBox = {
    textAlign: 'center' as const,
    padding: '15px',
    backgroundColor: 'rgba(44, 75, 126, 0.05)',
    borderRadius: '15px',
    border: '1px solid rgba(44, 75, 126, 0.1)',
    display: 'flex',
    flexDirection: 'column' as const,
    alignItems: 'center' as const,
    justifyContent: 'center' as const,
};

const highlightImage = {
    borderRadius: '50%',
    marginBottom: '10px',
};

const highlightTitle = {
    color: '#1B3A6B',
    fontSize: '16px',
    fontWeight: 'bold',
    margin: '0 0 5px 0',
    textAlign: 'center' as const,
};

const highlightDescription = {
    color: '#2C4B7E',
    fontSize: '14px',
    margin: '0',
    textAlign: 'center' as const,
};

const contactInfoSection = {
    backgroundColor: 'rgba(44, 75, 126, 0.1)',
    padding: '25px',
    borderRadius: '15px',
    border: '2px solid #2C4B7E',
    textAlign: 'center' as const,
    marginBottom: '30px',
};

const contactInfoTitle = {
    color: '#1B3A6B',
    fontSize: '20px',
    fontWeight: 'bold',
    margin: '0 0 15px 0',
};

const contactInfoText = {
    color: '#2C4B7E',
    fontSize: '16px',
    margin: '0 0 10px 0',
};

const contactInfoDetails = {
    color: '#1B3A6B',
    fontSize: '18px',
    fontWeight: 'bold',
    margin: '0',
};

const footerSection = {
    textAlign: 'center' as const,
    padding: '20px',
    backgroundColor: 'rgba(44, 75, 126, 0.05)',
    borderRadius: '15px',
};

const footerTitle = {
    color: '#1B3A6B',
    fontSize: '16px',
    fontWeight: 'bold',
    margin: '0 0 15px 0',
};

const footerText = {
    color: '#2C4B7E',
    fontSize: '14px',
    margin: '0 0 15px 0',
};

const socialRow = {
    marginBottom: '20px',
    display: 'flex',
    justifyContent: 'center' as const,
    alignItems: 'center' as const,
    gap: '20px',
};

const socialColumn = {
    padding: '0 5px',
};

const socialIcon = {
    cursor: 'pointer',
};

const footerSignature = {
    color: '#666',
    fontSize: '12px',
    margin: '0',
};

export default LazaCateringConfirmation; 