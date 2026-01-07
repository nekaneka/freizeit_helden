const escapeHtml = (value: string) =>
  value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');

export default async function handler(req: any, res: any) {
  if (req.method !== 'POST') {
    res.status(405).json({ error: 'Method not allowed' });
    return;
  }

  const { name, email, phone, message } = req.body || {};
  if (!name || !email || !message) {
    res.status(400).json({ error: 'Missing required fields' });
    return;
  }

  const apiKey = process.env.RESEND_API_KEY;
  const fromEmail = process.env.RESEND_FROM_EMAIL;
  const companyEmail = process.env.COMPANY_EMAIL;
  const sendUserCopy = process.env.SEND_USER_COPY !== 'false';

  if (!apiKey || !fromEmail || !companyEmail) {
    res.status(500).json({ error: 'Email service not configured' });
    return;
  }

  const recipients = [companyEmail];
  if (sendUserCopy) {
    recipients.push(String(email));
  }

  const html = `
    <p><strong>Name:</strong> ${escapeHtml(String(name))}</p>
    <p><strong>E-Mail:</strong> ${escapeHtml(String(email))}</p>
    <p><strong>Telefon:</strong> ${escapeHtml(String(phone || '-'))}</p>
    <p><strong>Nachricht:</strong></p>
    <p>${escapeHtml(String(message))}</p>
    ${sendUserCopy ? '<p>Eine Kopie dieser Nachricht ging an den/die Absender:in.</p>' : ''}
  `;

  try {
    const resendResponse = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${apiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from: fromEmail,
        to: recipients,
        subject: 'Neue Kontaktanfrage - FreizeitHelden',
        html,
      }),
    });

    if (!resendResponse.ok) {
      const text = await resendResponse.text();
      res.status(502).json({ error: text });
      return;
    }

    res.status(200).json({ ok: true });
  } catch (error) {
    res.status(500).json({ error: 'Failed to send email' });
  }
}
