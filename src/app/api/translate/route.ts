import { NextResponse } from "next/server";
import { translateTexts } from "@/lib/translation-service";
import { getLanguageConfig } from "@/config/languages";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { texts, targetLang } = body;

    if (!targetLang || typeof targetLang !== "string") {
      return NextResponse.json(
        { error: "Invalid or missing targetLang parameter" },
        { status: 400 }
      );
    }

    if (!texts || !Array.isArray(texts)) {
      return NextResponse.json(
        { error: "Invalid or missing texts array parameter" },
        { status: 400 }
      );
    }

    // Verify language configuration exists
    const config = getLanguageConfig(targetLang);

    // Call server-side translation service (which uses cache + Google API)
    const translations = await translateTexts(texts, config.code);

    return NextResponse.json({ translations }, { status: 200 });
  } catch (error) {
    console.error("❌ TRANSLATE API ROUTE ERROR:", error);
    return NextResponse.json(
      { error: "Translation processing error" },
      { status: 500 }
    );
  }
}
