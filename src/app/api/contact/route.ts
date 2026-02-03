import { NextResponse } from "next/server";
import { connectDB } from "@/app/lib/db";
import Contact from "@/app/models/Contact";

export async function POST(req: Request) {
  try {
    await connectDB();

    const body = await req.json();
    const { name, email, phone, message } = body;

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Name, email and message are required" },
        { status: 400 }
      );
    }

    await Contact.create({
      name,
      email,
      phone,
      message,
    });

    return NextResponse.json(
      { message: "Message sent successfully" },
      { status: 201 }
    );
  } catch (error) {
    console.error("CONTACT API ERROR:", error);

    return NextResponse.json(
      { error: "Something went wrong" },
      { status: 500 }
    );
  }
}
