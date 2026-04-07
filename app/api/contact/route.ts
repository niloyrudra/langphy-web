import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
    try {
        const { name, email, message } = await req.json();

        await resend.emails.send({
            from: (process.env.NODE_ENV === "production" ? email : "onboarding@resend.dev"), // works without domain
            to: (process.env.ADMIN_MAIL_ADDRESS ?? "niloyrudra4249@gmail.com"), // YOUR EMAIL
            subject: `New message from ${name}`,
            html: `
                <p><strong>Name:</strong> ${name}</p>
                <p><strong>Email:</strong> ${email}</p>
                <p>${message}</p>
            `,
        });

        return Response.json({ success: true });
    } catch (error) {
        return Response.json({ error: "Failed to send" }, { status: 500 });
    }
}