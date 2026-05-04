import { Resend } from "resend";
import { NextResponse } from "next/server";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  const { email } = await req.json();

  if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return NextResponse.json({ error: "Correo inválido" }, { status: 400 });
  }

  const { error } = await resend.emails.send({
    from: "Explobyte <onboarding@resend.dev>",
    to: process.env.CONTACT_EMAIL!,
    subject: "Nuevo contacto desde el sitio web",
    html: `
      <div style="font-family:sans-serif;max-width:480px;margin:0 auto;padding:32px;background:#f6f9ff;border-radius:12px;">
        <h2 style="color:#1a2a4a;margin-bottom:8px;">Nuevo contacto</h2>
        <p style="color:#64748b;margin-bottom:24px;">Alguien dejó su correo en el sitio web de Explobyte.</p>
        <div style="background:#fff;border-radius:8px;padding:20px;border:1px solid #e2e8f0;">
          <p style="margin:0;font-size:13px;color:#94a3b8;margin-bottom:4px;">Correo electrónico</p>
          <p style="margin:0;font-size:16px;font-weight:600;color:#1a2a4a;">${email}</p>
        </div>
        <p style="color:#94a3b8;font-size:12px;margin-top:24px;">Explobyte · sitio web</p>
      </div>
    `,
  });

  if (error) {
    return NextResponse.json({ error: "Error al enviar el correo" }, { status: 500 });
  }

  return NextResponse.json({ ok: true });
}
