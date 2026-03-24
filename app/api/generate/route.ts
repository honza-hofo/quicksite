import { NextResponse } from "next/server";
import Anthropic from "@anthropic-ai/sdk";

const client = new Anthropic({
  apiKey: process.env.ANTHROPIC_API_KEY,
});

export async function POST(req: Request) {
  try {
    const data = await req.json();

    const prompt = `Jsi webový designér a tvým úkolem je vytvořit detailní brief pro tvorbu webu na základě požadavků klienta.

INFORMACE O KLIENTOVI:
- Název firmy: ${data.companyName}
- Obor: ${data.industry}
- Popis firmy: ${data.description}
- Cílová skupina: ${data.targetAudience || "neuvedeno"}

POŽADOVANÉ STRÁNKY:
${data.pages?.join(", ") || "neuvedeno"}

INSPIRACE (weby, které se klientovi líbí):
${data.inspiration || "neuvedeno"}

CO SE KLIENTOVI LÍBÍ NA INSPIRACÍCH:
${data.inspirationNotes || "neuvedeno"}

TEXTY OD KLIENTA:
${data.texts || "neuvedeno"}

PREFERENCE STYLU:
- Barevné schéma: ${data.colorScheme || "neuvedeno"}
- Styl: ${data.style || "neuvedeno"}

---

Na základě těchto informací vytvoř:

1. **KONCEPT WEBU** — krátký popis celkového vizuálního a obsahového směru (3-4 věty)

2. **STRUKTURA STRÁNEK** — pro každou požadovanou stránku navrhni:
   - Jaké sekce bude obsahovat
   - Jaký obsah v každé sekci
   - Doporučení pro texty a vizuály

3. **DESIGNOVÝ SMĚR** — barvy, fonty, celkový feeling (na základě inspirací)

4. **DOPORUČENÍ** — co by klient měl ještě dodat nebo zvážit

Piš česky, stručně ale konkrétně. Formátuj pomocí markdown.`;

    const message = await client.messages.create({
      model: "claude-sonnet-4-20250514",
      max_tokens: 2000,
      messages: [{ role: "user", content: prompt }],
    });

    const text =
      message.content[0].type === "text" ? message.content[0].text : "";

    return NextResponse.json({ brief: text });
  } catch (error: any) {
    console.error("Claude API error:", error);
    return NextResponse.json(
      { error: "Nepodařilo se vygenerovat brief" },
      { status: 500 }
    );
  }
}
