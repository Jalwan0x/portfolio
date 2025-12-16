import { NextResponse } from "next/server";
import { z } from "zod";

const schema = z.object({
  email: z.string().email(),
  role: z.string().min(2),
  appUrl: z.string().url(),
  prequal: z.string().optional(),
  notes: z.string().optional(),
  company: z.string().optional()
});

export async function POST(request: Request) {
  const body = await request.json().catch(() => null);
  const parse = schema.safeParse(body);
  if (!parse.success) {
    return NextResponse.json({ error: "Invalid input" }, { status: 400 });
  }

  const data = parse.data;

  if (data.company && data.company.trim().length > 0) {
    return NextResponse.json({ error: "Spam detected" }, { status: 400 });
  }

  // Store the lead (example: replace with database or queue)
  console.info("New lead", {
    email: data.email,
    role: data.role,
    appUrl: data.appUrl,
    prequal: data.prequal,
    notes: data.notes
  });

  // Email stub: integrate with SMTP provider by setting SMTP_URL or RESEND_API_KEY
  if (!process.env.SMTP_URL && !process.env.RESEND_API_KEY) {
    console.info("Email not sent (no provider configured). Set SMTP_URL or RESEND_API_KEY.");
  }

  return NextResponse.json({ ok: true });
}
