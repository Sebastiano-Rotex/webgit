/**
 * Trimiterea formularului de contact — funcție izolată.
 *
 * ÎN MODUL TEST: nu trimite nimic nicăieri. Returnează doar un mesaj de confirmare.
 *
 * CONECTARE ULTERIOARĂ (înainte de lansare):
 *  1. Alegeți un serviciu de e-mail tranzacțional GĂZDUIT ÎN UE
 *     (de ex. un furnizor cu servere în UE și contract de prelucrare a datelor — DPA).
 *  2. Variantă recomandată: un endpoint pe server, ca să nu expuneți chei în browser.
 *     - setați în astro.config.mjs `output: "server"` (sau `"static"` + adapter și
 *       `export const prerender = false` în endpoint) și instalați adapterul găzduirii;
 *     - creați `src/pages/api/contact.ts` după modelul de mai jos;
 *     - în `submitContact` de mai jos, înlocuiți ramura de test cu `fetch("/api/contact", …)`.
 *
 *  // src/pages/api/contact.ts — MODEL, neactivat
 *  // import type { APIRoute } from "astro";
 *  // export const prerender = false;
 *  // export const POST: APIRoute = async ({ request }) => {
 *  //   const data = await request.json();
 *  //   // 1) re-validați pe server (nume, telefon/e-mail, mesaj ≤ 1000, consimțământ)
 *  //   // 2) respingeți dacă `website` (honeypot) e completat sau `elapsed` < 3000 ms
 *  //   // 3) trimiteți e-mailul prin API-ul furnizorului din UE, cu cheia din import.meta.env
 *  //   // 4) nu stocați mesajul mai mult decât e necesar (vezi politica de confidențialitate)
 *  //   return new Response(JSON.stringify({ ok: true }), { status: 200 });
 *  // };
 */
import { site } from "../config/site";

export interface ContactPayload {
  name: string;
  phone: string;
  email: string;
  area: string;
  message: string;
  consent: boolean;
  website: string; // honeypot — trebuie să rămână gol
  elapsed: number; // ms de la încărcarea formularului
}

export interface ContactResult {
  ok: boolean;
  message: string;
}

export const MIN_FILL_MS = 3000;

export async function submitContact(payload: ContactPayload): Promise<ContactResult> {
  // Anti-spam: honeypot completat sau completare prea rapidă → ignorăm în tăcere.
  if (payload.website || payload.elapsed < MIN_FILL_MS) {
    return { ok: true, message: "Mulțumesc, mesajul a fost înregistrat." };
  }

  if (site.testMode) {
    await new Promise((r) => setTimeout(r, 400));
    return { ok: true, message: "Mesaj de test — formularul nu a trimis nimic." };
  }

  // TODO lansare: conectați aici endpoint-ul (vezi comentariul de la începutul fișierului).
  // const res = await fetch("/api/contact", {
  //   method: "POST",
  //   headers: { "Content-Type": "application/json" },
  //   body: JSON.stringify(payload),
  // });
  // if (res.ok) return { ok: true, message: "Mulțumesc! Vă voi contacta în zilele lucrătoare următoare." };
  return {
    ok: false,
    message: "Formularul nu este încă conectat. Vă rog să mă contactați telefonic sau prin e-mail.",
  };
}
