import { EmailTemplate } from '@/components/emailTemplate';
import { NextApiRequest, NextApiResponse } from 'next';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: NextApiRequest, res: NextApiResponse) {
  try {
    const { name, email, message } = req.body;

    const data = await resend.emails.send({
      from: 'Georgies House <website>',
      to: ['info@georgieshouse.org.au'],
      subject: 'You have a message from your website!',
      text: message,
      react: EmailTemplate({ name, email, message }),
    });

    return res.status(200).json(data);
  } catch (error) {
    return Response.json({ error });
  }
}
