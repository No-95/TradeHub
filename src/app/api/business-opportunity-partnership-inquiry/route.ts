import { NextRequest, NextResponse } from "next/server";

export const dynamic = "force-dynamic";

const RESEND_API_KEY = process.env.RESEND_API_KEY;
const TO_EMAIL = process.env.CONTACT_FORM_TO_EMAIL || "business@hdpholdings.com.vn";
const FROM_EMAIL = process.env.CONTACT_FORM_FROM_EMAIL || "HDP TradeHub <onboarding@resend.dev>";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    const companyName = String(body?.companyName ?? "").trim();
    const corporateEmail = String(body?.corporateEmail ?? "").trim();
    const opportunityType = String(body?.opportunityType ?? "").trim();
    const message = String(body?.message ?? "").trim();

    if (!companyName || !corporateEmail || !opportunityType || !message) {
      return NextResponse.json(
        { error: "Missing required fields: companyName, corporateEmail, opportunityType, message" },
        { status: 400 }
      );
    }

    if (!RESEND_API_KEY) {
      return NextResponse.json(
        { error: "Email service is not configured." },
        { status: 500 }
      );
    }

    const response = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${RESEND_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: FROM_EMAIL,
        to: [TO_EMAIL],
        reply_to: corporateEmail,
        subject: `New business opportunity inquiry: ${companyName}`,
        text: `Company Name: ${companyName}\nCorporate Email: ${corporateEmail}\nOpportunity Type: ${opportunityType}\n\nMessage:\n${message}`,
      }),
    });

    const data = await response.json();

    if (!response.ok) {
      return NextResponse.json(
        { error: data?.message ?? "Failed to send email" },
        { status: 400 }
      );
    }

    return NextResponse.json({ success: true }, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { error: error instanceof Error ? error.message : "Unexpected server error" },
      { status: 400 }
    );
  }
}
