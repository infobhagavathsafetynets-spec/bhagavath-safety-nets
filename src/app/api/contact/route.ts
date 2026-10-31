import { NextResponse } from "next/server";
import * as z from "zod";

const NOTIFICATION_EMAIL = process.env.NOTIFICATION_EMAIL || "info.bhagavathsafetynets@gmail.com";

// Zod Schema matching client-side validation
const serverContactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters").max(100),
  phone: z.string().regex(/^[6-9]\d{9}$/, "Must be a valid 10-digit Indian phone number"),
  location: z.string().min(2).max(100),
  service: z.string().min(2).max(100),
  message: z.string().max(1000).optional(),
  utm_source: z.string().max(200).optional(),
  utm_medium: z.string().max(200).optional(),
  utm_campaign: z.string().max(200).optional(),
  utm_term: z.string().max(200).optional(),
  utm_content: z.string().max(200).optional(),
  gclid: z.string().max(200).optional(),
  page_path: z.string().max(300).optional(),
});

// In-memory rate limiting: IP Address -> Timestamps
const rateLimitMap = new Map<string, number[]>();
const RATE_LIMIT_WINDOW = 60 * 1000; // 1 minute
const MAX_REQUESTS_PER_WINDOW = 5;

function sanitizeString(str: string): string {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#x27;")
    .replace(/\//g, "&#x2F;");
}

export async function POST(request: Request) {
  try {
    const ip = request.headers.get("x-forwarded-for") || "unknown-ip";
    const now = Date.now();
    const timestamps = rateLimitMap.get(ip) || [];
    const recentRequests = timestamps.filter((time) => now - time < RATE_LIMIT_WINDOW);

    if (recentRequests.length >= MAX_REQUESTS_PER_WINDOW) {
      return NextResponse.json(
        { error: "Too many requests. Please try again after a minute." },
        { status: 429 }
      );
    }

    recentRequests.push(now);
    rateLimitMap.set(ip, recentRequests);

    const body = await request.json();
    const result = serverContactSchema.safeParse(body);

    if (!result.success) {
      return NextResponse.json(
        { error: "Invalid form data submission.", details: result.error.flatten() },
        { status: 400 }
      );
    }

    const lead = {
      name: sanitizeString(result.data.name),
      phone: sanitizeString(result.data.phone),
      location: sanitizeString(result.data.location),
      service: sanitizeString(result.data.service),
      message: result.data.message ? sanitizeString(result.data.message) : "",
      utm_source: result.data.utm_source || "",
      utm_medium: result.data.utm_medium || "",
      utm_campaign: result.data.utm_campaign || "",
      utm_term: result.data.utm_term || "",
      utm_content: result.data.utm_content || "",
      gclid: result.data.gclid || "",
      page_path: result.data.page_path || "/",
      targetRecipient: NOTIFICATION_EMAIL,
      submittedAt: new Date().toISOString(),
    };

    console.log(`[LEAD RECEIVED] Dispatching to ${NOTIFICATION_EMAIL}:`, lead);

    // If Resend API Key is configured in environment, dispatch email via native fetch
    if (process.env.RESEND_API_KEY) {
      try {
        await fetch("https://api.resend.com/emails", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${process.env.RESEND_API_KEY}`,
          },
          body: JSON.stringify({
            from: "Bhagavath Safety Nets <leads@bhagavathsafetynets.com>",
            to: [NOTIFICATION_EMAIL],
            subject: `New Lead: ${lead.name} (${lead.service} - ${lead.location})`,
            html: `
              <h2>New Lead Received - Bhagavath Safety Nets</h2>
              <p><strong>Name:</strong> ${lead.name}</p>
              <p><strong>Phone:</strong> <a href="tel:+91${lead.phone}">+91 ${lead.phone}</a></p>
              <p><strong>Service:</strong> ${lead.service}</p>
              <p><strong>Location:</strong> ${lead.location}</p>
              <p><strong>Message:</strong> ${lead.message || "None"}</p>
              <hr />
              <p><strong>Page:</strong> ${lead.page_path}</p>
              <p><strong>UTM Source:</strong> ${lead.utm_source}</p>
              <p><strong>UTM Campaign:</strong> ${lead.utm_campaign}</p>
              <p><strong>GCLID:</strong> ${lead.gclid}</p>
              <p><strong>Time:</strong> ${lead.submittedAt}</p>
            `,
          }),
        });
      } catch (err) {
        console.error("Email dispatch failed:", err);
      }
    }

    return NextResponse.json({
      success: true,
      message: `Quote request successfully processed and routed to ${NOTIFICATION_EMAIL}.`,
    });
  } catch (error) {
    console.error("Server-side contact form API error:", error);
    return NextResponse.json(
      { error: "Internal server error occurred." },
      { status: 500 }
    );
  }
}
