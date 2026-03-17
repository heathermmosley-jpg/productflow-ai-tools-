import { Resend } from 'resend';
import { NextResponse } from 'next/server';

// 🔑 PASTE YOUR KEY FROM RESEND.COM HERE
const resend = new Resend('re_ZBpUsNdu_8zPX5jErGYytHtHkfHDcw5Gh

export async function POST(request: Request) {
  try {
    const { email, niche } = await request.json();

    const { data, error } = await resend.emails.send({
      from: 'ProductFlowAI <onboarding@resend.dev>', 
      to: [email],
      subject: `Your ${niche} Blueprint is ready!`,
      html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: auto; padding: 30px; border: 2px solid #2563eb; border-radius: 30px;">
          <h1 style="color: #0f172a; font-size: 32px; font-weight: 900; letter-spacing: -1px;">ProductFlow<span style="color: #2563eb;">AI</span></h1>
          <p style="font-size: 18px; font-weight: 700; color: #475569;">Your ${niche} Side Hustle Analysis</p>
          
          <hr style="border: none; border-top: 1px solid #f1f5f9; margin: 30px 0;" />
          
          <p style="color: #64748b; line-height: 1.6;">Congratulations! You've officially entered the Infinity Loop. Your analysis for the <strong>${niche}</strong> niche is complete.</p>
          
          <div style="background-color: #f8fafc; padding: 25px; border-radius: 20px; margin: 30px 0;">
            <h3 style="margin-top: 0; color: #1e293b;">The Next Steps:</h3>
            <p style="color: #64748b; font-size: 14px;">1. Access your 5+ Free Transformation Tools at <strong>ProductFlowAI.com</strong></p>
            <p style="color: #64748b; font-size: 14px;">2. Track your profit margins at <strong>ClarityFinancialAI.com</strong></p>
          </div>

          <a href="https://productflowai.com" style="display: block; text-align: center; padding: 18px; background-color: #2563eb; color: white; text-decoration: none; border-radius: 15px; font-weight: 900; font-size: 18px;">
            Enter the Master Suite
          </a>

          <p style="margin-top: 40px; font-size: 11px; color: #cbd5e1; text-align: center; text-transform: uppercase; letter-spacing: 2px;">
            Powered by the ProductFlowAI Infinity Loop
          </p>
        </div>
      `,
    });

    if (error) {
      return NextResponse.json({ error }, { status: 500 });
    }

    return NextResponse.json(data);
  } catch (err) {
    return NextResponse.json({ err }, { status: 500 });
  }
}
