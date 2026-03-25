import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

const RECIPIENT = "Nomvulacourierp@gmail.com";

export async function POST(req: NextRequest) {
  let body: { fullName?: string; email?: string; message?: string };
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Invalid JSON" }, { status: 400 });
  }

  const { fullName, email, message } = body;

  if (!fullName || !email || !message) {
    return NextResponse.json(
      { error: "All fields are required." },
      { status: 400 }
    );
  }

  // Basic email format check
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return NextResponse.json(
      { error: "Invalid email address." },
      { status: 400 }
    );
  }

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  });

  try {
    await transporter.sendMail({
      from: `"Nomvula Courier & Procurement" <${process.env.SMTP_USER}>`,
      to: RECIPIENT,
      replyTo: email,
      subject: `New Contact Form Message from ${fullName}`,
      text: `Name: ${fullName}\nEmail: ${email}\n\nMessage:\n${message}`,
      html: `
        <div style="font-family:sans-serif;max-width:600px;margin:0 auto">
          <h2 style="color:#f97316">New Contact Form Submission</h2>
          <p><strong>Name:</strong> ${fullName.replace(/</g, "&lt;")}</p>
          <p><strong>Email:</strong> ${email.replace(/</g, "&lt;")}</p>
          <hr style="border:none;border-top:1px solid #e5e7eb;margin:16px 0" />
          <p><strong>Message:</strong></p>
          <p style="white-space:pre-wrap">${message.replace(/</g, "&lt;")}</p>
        </div>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("Email send error:", err);
    return NextResponse.json(
      { error: "Failed to send email. Please try again later." },
      { status: 500 }
    );
  }
}
