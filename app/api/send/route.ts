import { Resend } from 'resend';
import { EmailTemplate } from '@/components/emailTemplate';
import { ProfileCreateQuery, ProfileEnum } from 'klaviyo-api';
import { profilesApi } from '@/lib/klaviyo/client';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  const body = await request.json();
  const { name, email, message } = body;

  if (!name || !email || !message) {
    return Response.json({
      error: 'Please provide a name, email, and message',
    });
  }

  const splitName = name.split(' ');
  const firstName = splitName[0] ?? 'No First Name';
  const lastName = splitName[1] ?? 'No Last Name';

  let profile: ProfileCreateQuery = {
    data: {
      type: ProfileEnum.Profile,
      attributes: {
        firstName,
        lastName,
        email,
        properties: {
          source: 'Website',
        },
      },
    },
  };

  try {
    // Send email to Georgies House
    const data = await resend.emails.send({
      from: 'Website <info@georgieshouse.org.au>',
      to: ['info@georgieshouse.org.au'],
      subject: 'You have an email from your website!',
      text: message,
      react: EmailTemplate({ name, email, message }),
    });

    // Create profile in Klaviyo
    await profilesApi.createProfile(profile);

    return Response.json(data);
  } catch (error) {
    return Response.json({ error });
  }
}
