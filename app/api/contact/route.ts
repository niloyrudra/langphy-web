import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

const escape = (str: string) =>
  str.replace(/[&<>"']/g, (tag) =>
    ({
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      '"': "&quot;",
      "'": "&#39;",
    }[tag]!)
  );

export async function POST(req: Request) {
    try {
        const { name, email, message } = await req.json();

        await resend.emails.send({
            from:
                process.env.NODE_ENV === "production"
                    ? "Langphy Contact <no-reply@langphy.com>"
                    : "onboarding@resend.dev",
            to: process.env.ADMIN_MAIL_ADDRESS ?? "niloyrudra4249@gmail.com",
            replyTo: email, // ✅ FIXED
            subject: `New message from ${name}`,
            html: `
                <p><strong>Name:</strong> ${name}</p>
                <p><strong>Email:</strong> ${email}</p>
                <p>${escape(message)}</p>
            `,
        });

        return Response.json({ success: true });
    } catch (error) {
        return Response.json({ error: "Failed to send" }, { status: 500 });
    }
}