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
import { JoinUsForm } from '@/app/join-us/page';

interface FranchiseInquiryData {
    // Contact & Basics
    fullName: string;
    email: string;
    phone: string;
    cityState: string;
    // Motivation & Alignment
    whyDessertCafe: string;
    brandValue: string;
    menuFamiliarity: string;
    // Experience & Skill Set
    foodServiceExp: string;
    foodServiceExpDesc?: string;
    frontOfHouse: string;
    foodCert: string;
    // Financial Readiness
    liquidCapital: string;
    netWorth: string;
    fundingSource: string;
    preQualified: string;
    // Timeframe & Commitment
    timeline: string;
    fullTime: string;
    locationsHoped: string;
    relocate: string;
    // Due-Diligence Indicators
    fddReviewed: string;
    questions: string;
    howHeard: string;
    // Final Check
    commitment: string;
    anythingElse?: string;
    // Generated fields
}

export const LazaFranchiseInquiry: React.FC<{ inquiryData: JoinUsForm }> = ({ inquiryData }) => {
    return (
        <Html>
            <Head />
            <Preview>Franchise Inquiry Received - {inquiryData.phone}</Preview>
            <Body style={main} className='w-full max-w-[800px]'>
                    {/* Header Section */}
                    <Section style={headerSection} className='flex flex-col relative items-center justify-center'>
                        <Img
                            src="https://lazadessert.cafe/lazabluelogo.png"
                            width="150"
                            height="auto"
                            alt="Laza Dessert Cafe"
                            style={logo}
                        />
                        <Heading style={headerTitle}>
                            Franchise Inquiry Received!
                        </Heading>
                        <Text style={headerSubtitle}>
                            Thank you for your interest in joining the Laza family
                        </Text>
                    </Section>

                    {/* Main Content */}
                    <Section style={contentSection}>
                        {/* Thank You Message */}
                        <Section style={thankYouSection}>
                            <Heading style={sectionTitle}>
                                Welcome to the Laza Family, {inquiryData.fullName}! 👋
                            </Heading>
                            <Text style={bodyText}>
                                We're excited to receive your franchise inquiry and look forward to exploring this opportunity with you!
                            </Text>
                            <Text style={bodyText}>
                                Our franchise development team will carefully review your information and reach out within 48 hours to discuss next steps.
                            </Text>
                        </Section>

                        {/* Inquiry Details */}
                        <Section style={inquirySection}>
                            <Heading style={inquiryTitle}>Inquiry Details</Heading>
                            <Row style={detailRow}>
                                <Column style={detailColumn}>
                                    <Text style={detailLabel}>Inquiry Number:</Text>
                                    <Text style={detailValue}>{inquiryData.phone}</Text>
                                </Column>
                                <Column style={detailColumn}>
                                    <Text style={detailLabel}>Inquiry Date:</Text>
                                    <Text style={detailValue}>{new Date().toLocaleDateString('en-US', {
                                        year: 'numeric',
                                        month: 'long',
                                        day: 'numeric'
                                    })}</Text>
                                </Column>
                            </Row>
                        </Section>

                        {/* Contact Information */}
                        <Section style={contactSection}>
                            <Heading style={sectionTitle}>Contact Information</Heading>
                            <Row style={contactRow}>
                                <Column style={contactColumn}>
                                    <Text style={fieldLabel}>Full Name</Text>
                                    <Section style={fieldBox}>
                                        <Text style={fieldValue}>{inquiryData.fullName}</Text>
                                    </Section>
                                </Column>
                                <Column style={contactColumn}>
                                    <Text style={fieldLabel}>Email</Text>
                                    <Section style={fieldBox}>
                                        <Text style={fieldValue}>{inquiryData.email}</Text>
                                    </Section>
                                </Column>
                            </Row>

                            <Row style={contactRow}>
                                <Column style={contactColumn}>
                                    <Text style={fieldLabel}>Phone</Text>
                                    <Section style={fieldBox}>
                                        <Text style={fieldValue}>{inquiryData.phone}</Text>
                                    </Section>
                                </Column>
                                <Column style={contactColumn}>
                                    <Text style={fieldLabel}>City & State</Text>
                                    <Section style={fieldBox}>
                                        <Text style={fieldValue}>{inquiryData.cityState}</Text>
                                    </Section>
                                </Column>
                            </Row>
                        </Section>

                        {/* Motivation & Alignment */}
                        <Section style={motivationSection}>
                            <Heading style={sectionTitle}>Motivation & Brand Alignment</Heading>
                            <Row style={contactRow}>
                                <Column style={contactColumn}>
                                    <Text style={fieldLabel}>Why Laza Dessert Cafe?</Text>
                                    <Section style={fieldBox}>
                                        <Text style={fieldValue}>{inquiryData.whyDessertCafe}</Text>
                                    </Section>
                                </Column>
                                <Column style={contactColumn}>
                                    <Text style={fieldLabel}>Brand Values Important to You</Text>
                                    <Section style={fieldBox}>
                                        <Text style={fieldValue}>{inquiryData.brandValue}</Text>
                                    </Section>
                                </Column>
                            </Row>

                            <Row style={contactRow}>
                                <Column style={contactColumn}>
                                    <Text style={fieldLabel}>Menu Familiarity</Text>
                                    <Section style={fieldBox}>
                                        <Text style={fieldValue}>{inquiryData.menuFamiliarity}</Text>
                                    </Section>
                                </Column>
                            </Row>
                        </Section>

                        {/* Experience & Skills */}
                        <Section style={experienceSection}>
                            <Heading style={sectionTitle}>Experience & Skill Set</Heading>
                            <Row style={contactRow}>
                                <Column style={contactColumn}>
                                    <Text style={fieldLabel}>Food Service Experience</Text>
                                    <Section style={fieldBox}>
                                        <Text style={fieldValue}>{inquiryData.foodServiceExp}</Text>
                                    </Section>
                                </Column>
                                <Column style={contactColumn}>
                                    <Text style={fieldLabel}>Food Safety Certification</Text>
                                    <Section style={fieldBox}>
                                        <Text style={fieldValue}>{inquiryData.foodCert}</Text>
                                    </Section>
                                </Column>
                            </Row>

                            {inquiryData.foodServiceExpDesc && (
                                <Row style={contactRow}>
                                    <Column style={contactColumn}>
                                        <Text style={fieldLabel}>Experience Description</Text>
                                        <Section style={fieldBox}>
                                            <Text style={fieldValue}>{inquiryData.foodServiceExpDesc}</Text>
                                        </Section>
                                    </Column>
                                </Row>
                            )}

                            <Row style={contactRow}>
                                <Column style={contactColumn}>
                                    <Text style={fieldLabel}>Front of House Experience</Text>
                                    <Section style={fieldBox}>
                                        <Text style={fieldValue}>{inquiryData.frontOfHouse}</Text>
                                    </Section>
                                </Column>
                            </Row>
                        </Section>

                        {/* Financial Readiness */}
                        <Section style={financialSection}>
                            <Heading style={sectionTitle}>Financial Readiness</Heading>
                            <Row style={contactRow}>
                                <Column style={contactColumn}>
                                    <Text style={fieldLabel}>Liquid Capital</Text>
                                    <Section style={fieldBox}>
                                        <Text style={fieldValue}>{inquiryData.liquidCapital}</Text>
                                    </Section>
                                </Column>
                                <Column style={contactColumn}>
                                    <Text style={fieldLabel}>Net Worth</Text>
                                    <Section style={fieldBox}>
                                        <Text style={fieldValue}>{inquiryData.netWorth}</Text>
                                    </Section>
                                </Column>
                            </Row>

                            <Row style={contactRow}>
                                <Column style={contactColumn}>
                                    <Text style={fieldLabel}>Funding Source</Text>
                                    <Section style={fieldBox}>
                                        <Text style={fieldValue}>{inquiryData.fundingSource}</Text>
                                    </Section>
                                </Column>
                                <Column style={contactColumn}>
                                    <Text style={fieldLabel}>Pre-Qualified for Financing</Text>
                                    <Section style={fieldBox}>
                                        <Text style={fieldValue}>{inquiryData.preQualified}</Text>
                                    </Section>
                                </Column>
                            </Row>
                        </Section>

                        {/* Timeframe & Commitment */}
                        <Section style={timeframeSection}>
                            <Heading style={sectionTitle}>Timeframe & Commitment</Heading>
                            <Row style={contactRow}>
                                <Column style={contactColumn}>
                                    <Text style={fieldLabel}>Timeline to Open</Text>
                                    <Section style={fieldBox}>
                                        <Text style={fieldValue}>{inquiryData.timeline}</Text>
                                    </Section>
                                </Column>
                                <Column style={contactColumn}>
                                    <Text style={fieldLabel}>Full-Time Commitment</Text>
                                    <Section style={fieldBox}>
                                        <Text style={fieldValue}>{inquiryData.fullTime}</Text>
                                    </Section>
                                </Column>
                            </Row>

                            <Row style={contactRow}>
                                <Column style={contactColumn}>
                                    <Text style={fieldLabel}>Desired Locations</Text>
                                    <Section style={fieldBox}>
                                        <Text style={fieldValue}>{inquiryData.locationsHoped}</Text>
                                    </Section>
                                </Column>
                                <Column style={contactColumn}>
                                    <Text style={fieldLabel}>Willing to Relocate</Text>
                                    <Section style={fieldBox}>
                                        <Text style={fieldValue}>{inquiryData.relocate}</Text>
                                    </Section>
                                </Column>
                            </Row>
                        </Section>

                        {/* Due Diligence */}
                        <Section style={diligenceSection}>
                            <Heading style={sectionTitle}>Due Diligence & Research</Heading>
                            <Row style={contactRow}>
                                <Column style={contactColumn}>
                                    <Text style={fieldLabel}>FDD Review Status</Text>
                                    <Section style={fieldBox}>
                                        <Text style={fieldValue}>{inquiryData.fddReviewed}</Text>
                                    </Section>
                                </Column>
                                <Column style={contactColumn}>
                                    <Text style={fieldLabel}>How You Heard About Us</Text>
                                    <Section style={fieldBox}>
                                        <Text style={fieldValue}>{inquiryData.howHeard}</Text>
                                    </Section>
                                </Column>
                            </Row>

                            <Row style={contactRow}>
                                <Column style={contactColumn}>
                                    <Text style={fieldLabel}>Questions for Us</Text>
                                    <Section style={fieldBox}>
                                        <Text style={fieldValue}>{inquiryData.questions}</Text>
                                    </Section>
                                </Column>
                            </Row>
                        </Section>

                        {/* Commitment */}
                        <Section style={commitmentSection}>
                            <Heading style={sectionTitle}>Commitment & Additional Information</Heading>
                            <Row style={contactRow}>
                                <Column style={contactColumn}>
                                    <Text style={fieldLabel}>Commitment Level</Text>
                                    <Section style={fieldBox}>
                                        <Text style={fieldValue}>{inquiryData.commitment}</Text>
                                    </Section>
                                </Column>
                            </Row>

                            {inquiryData.anythingElse && (
                                <Row style={contactRow}>
                                    <Column style={contactColumn}>
                                        <Text style={fieldLabel}>Additional Information</Text>
                                        <Section style={fieldBox}>
                                            <Text style={fieldValue}>{inquiryData.anythingElse}</Text>
                                        </Section>
                                    </Column>
                                </Row>
                            )}
                        </Section>

                        {/* Next Steps */}
                        <Section style={nextStepsSection}>
                            <Heading style={sectionTitle}>What Happens Next?</Heading>
                            <Row style={stepRow} className='grid grid-cols-3 gap-4'>
                                <Column style={stepColumn}>
                                    <Section style={stepBox}>
                                        <Text style={stepNumber}>1</Text>
                                        <Heading style={stepTitle}>Review Your Profile</Heading>
                                        <Text style={stepDescription}>
                                            Our franchise team will carefully review your qualifications and experience
                                        </Text>
                                    </Section>
                                </Column>
                                <Column style={stepColumn}>
                                    <Section style={stepBox}>
                                        <Text style={stepNumber}>2</Text>
                                        <Heading style={stepTitle}>Initial Consultation</Heading>
                                        <Text style={stepDescription}>
                                            We'll schedule a call to discuss your goals and answer your questions
                                        </Text>
                                    </Section>
                                </Column>
                                <Column style={stepColumn}>
                                    <Section style={stepBox}>
                                        <Text style={stepNumber}>3</Text>
                                        <Heading style={stepTitle}>Franchise Disclosure</Heading>
                                        <Text style={stepDescription}>
                                            If qualified, we'll provide detailed franchise information and next steps
                                        </Text>
                                    </Section>
                                </Column>
                            </Row>
                        </Section>

                        {/* Why Choose Laza */}
                        <Section style={highlightsSection}>
                            <Heading style={sectionTitle}>Why Choose Laza Franchising?</Heading>
                            <Row style={highlightRow} className='grid grid-cols-3 gap-4'>
                                <Column style={highlightColumn}>
                                    <Section style={highlightBox}>
                                        <Img
                                            src="https://lazadessert.cafe/desserts/kunafa.jpg"
                                            width="60"
                                            height="60"
                                            alt="Proven Concept"
                                            style={highlightImage}
                                        />
                                        <Heading style={highlightTitle}>Proven Concept</Heading>
                                        <Text style={highlightDescription}>Established brand with loyal customer base</Text>
                                    </Section>
                                </Column>
                                <Column style={highlightColumn}>
                                    <Section style={highlightBox}>
                                        <Img
                                            src="https://lazadessert.cafe/desserts/crepe.jpg"
                                            width="60"
                                            height="60"
                                            alt="Comprehensive Support"
                                            style={highlightImage}
                                        />
                                        <Heading style={highlightTitle}>Comprehensive Support</Heading>
                                        <Text style={highlightDescription}>Training, marketing, and operational guidance</Text>
                                    </Section>
                                </Column>
                                <Column style={highlightColumn}>
                                    <Section style={highlightBox}>
                                        <Img
                                            src="https://lazadessert.cafe/drinks/ferroshake.jpg"
                                            width="60"
                                            height="60"
                                            alt="Growing Market"
                                            style={highlightImage}
                                        />
                                        <Heading style={highlightTitle}>Growing Market</Heading>
                                        <Text style={highlightDescription}>Expanding dessert and cafe industry</Text>
                                    </Section>
                                </Column>
                            </Row>
                        </Section>

                        {/* Contact Information */}
                        <Section style={contactInfoSection}>
                            <Heading style={contactInfoTitle}>📞 Ready to Take the Next Step?</Heading>
                            <Text style={contactInfoText}>
                                If you have any urgent questions, feel free to contact our franchise team directly:
                            </Text>
                            <Text style={contactInfoDetails}>
                                📧 franchise@lazadessert.cafe | 📱 (555) 123-4567
                            </Text>
                        </Section>

                        {/* Footer */}
                        <Section style={footerSection}>
                            <Text style={footerTitle}>
                                Welcome to the Laza Family! 🚀
                            </Text>
                            <Text style={footerText}>
                                We look forward to helping you bring the sweet taste of Laza to your community.
                            </Text>
                            <Row style={socialRow} className='grid grid-cols-2 gap-4'>
                                <Column style={socialColumn}>
                                    <Link href="https://www.instagram.com/laza.cafe">
                                        <Img
                                            src="https://lazadessert.cafe/insta.png"
                                            width="40"
                                            height="40"
                                            alt="Instagram"
                                            style={socialIcon}
                                        />
                                    </Link>
                                </Column>
                                <Column style={socialColumn}>
                                    <Link href="https://www.tiktok.com/@lazacafe">
                                        <Img
                                            src="https://lazadessert.cafe/tiktok.png"
                                            width="40"
                                            height="40"
                                            alt="TikTok"
                                            style={socialIcon}
                                        />
                                    </Link>
                                </Column>
                            </Row>
                            <Text style={footerSignature}>
                                Laza Dessert Cafe - Building Sweet Success Together! 🌟
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
    width: '100%',
    maxWidth: '800px'
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
    position: 'relative' as const,
};

const logo = {
    marginBottom: '20px',
};

const headerTitle = {
    color: 'white',
    fontSize: '32px',
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
    textAlign: 'center' as const,
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

const motivationSection = {
    marginBottom: '40px',
};

const experienceSection = {
    marginBottom: '40px',
};

const financialSection = {
    marginBottom: '40px',
};

const timeframeSection = {
    marginBottom: '40px',
};

const diligenceSection = {
    marginBottom: '40px',
};

const commitmentSection = {
    marginBottom: '40px',
};

const nextStepsSection = {
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
};

const stepNumber = {
    width: '50px',
    height: '50px',
    backgroundColor: '#2C4B7E',
    borderRadius: '50%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
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
};

const stepDescription = {
    color: '#2C4B7E',
    fontSize: '14px',
    margin: '0',
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
};

const highlightDescription = {
    color: '#2C4B7E',
    fontSize: '14px',
    margin: '0',
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

export default LazaFranchiseInquiry; 