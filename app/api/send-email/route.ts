import { Resend } from 'resend';
import { NextResponse } from 'next/server';

const resend = new Resend('re_ZBpUsNdu_8zPX5jErGYytHtHkfHDcw5Gh');

export async function POST(request: Request) {
  try {
    const { email, niche } = await request.json();

    const { data, error } = await resend.emails.send({
      from: 'ProductFlowAI <onboarding@resend.dev>',
      to: [email],
      subject: `Your ${niche} Side Hustle Analysis is Ready!`,
      html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: auto; padding: 40px; border: 2px solid #2563eb; border-radius: 30px; background-color: #ffffff;">
          <h1 style="color: #0f172a; font-size: 32px; font-weight: 900; letter-spacing: -1px; margin-bottom: 10px;">ProductFlow<span style="color: #2563eb;">AI</span></h1>
          <p style="font-size: 18px; font-weight: 700; color: #475569; margin-top: 0;">Niche Analysis: ${niche}</p>
          
          <hr style="border: none; border-top: 1px solid #f1f5f9; margin: 30px 0;" />
          
          <p style="color: #64748b; line-height: 1.6; font-size: 16px;">Congratulations! You've taken the first step towards building your **${niche}** brand. Your custom analysis is attached below.</p>
          
          <div style="background-color: #f8fafc; padding: 25px; border-radius: 20px; margin: 30px 0; border: 1px solid #e2e8f0;">
            <h3 style="margin-top: 0; color: #1e293b; font-weight: 800;">Your Next Transformation Steps:</h3>
            <p style="color: #64748b; font-size: 15px; margin-bottom: 8px;">1. Claim your **5+ Free Growth Tools** at <strong>ProductFlowAI.com</strong></p>
            <p style="color: #64748b; font-size: 15px;">2. Set up your Profit Dashboard at <strong>ClarityFinancialAI.com</strong></p>
          </div>

          <a href="https://productflowai.com" style="display: block; text-align: center; padding: 18px 25px; background-color: #2563eb; color: white; text-decoration: none; border-radius: 15px; font-weight: 900; font-size: 18px;">
            Enter the Master Suite
          </a>

          <p style="margin-top: 40px; font-size: 11px; color: #cbd5e1; text-align: center; text-transform: uppercase; letter-spacing: 2px; font-weight: 700;">
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


