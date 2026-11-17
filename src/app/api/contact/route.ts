import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, subject, message } = body;

    // Basic validation
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Name, email, and message are required." },
        { status: 400 }
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: "Please provide a valid email address." },
        { status: 400 }
      );
    }

    // In a production deployment, this can integrate with Resend, SendGrid, or Formspree.
    // For now, log the submission securely and return success response.
    console.log("[Contact Form Received]", {
      timestamp: new Date().toISOString(),
      name,
      email,
      subject: subject || "No Subject",
      messageLength: message.length,
    });

    return NextResponse.json(
      {
        success: true,
        message: "Message received successfully! Priyanka will get back to you shortly.",
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("[Contact API Error]", error);
    return NextResponse.json(
      { error: "Internal server error. Please try reaching out directly via email." },
      { status: 500 }
    );
  }
}
