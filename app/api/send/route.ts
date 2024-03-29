import { Resend } from 'resend';
import { EmailTemplate } from '@/components/emailTemplate';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  const body = await request.json();
  const { name, email, message } = body;
  try {
    const data = await resend.emails.send({
      from: 'Website <info@georgieshouse.org.au>',
      to: ['info@georgieshouse.org.au'],
      subject: 'You have an email from your website!',
      text: message,
      react: EmailTemplate({ name, email, message }),
    });

    return Response.json(data);
  } catch (error) {
    return Response.json({ error });
  }
}
