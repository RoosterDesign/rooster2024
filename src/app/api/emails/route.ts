import { Resend } from 'resend';
import { NextRequest, NextResponse } from 'next/server';
import ContactFormEnquiry from '@/emails/ContactFormEnquiry';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: NextRequest) {
    const { name, email, message } = await request.json();

    try {
        const data = await resend.emails.send({
            from: "Rooster Design <noreply@roosterdesign.co.uk>",
            to: "neil@roosterdesign.co.uk",
            subject: "New Contact Form Enquiry",
            react: ContactFormEnquiry({ name, email, message }),
        });

        return NextResponse.json(data);
    } catch (error) {
        return NextResponse.json({error});
    }
}
