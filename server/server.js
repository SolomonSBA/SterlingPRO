/**
 * SterlingPro: API + React app from one Node server (single folder on host).
 * Serves /api/* and static React app from ./public (SPA fallback to index.html).
 * Config: .env first, then config.local.js, then FALLBACK (for hosts that strip .env).
 * Do not commit config.local.js or FALLBACK with real passwords.
 */
import 'dotenv/config';
import path from 'path';
import fs from 'fs';
import { fileURLToPath } from 'url';
import { createRequire } from 'module';
import express from 'express';
import cors from 'cors';
import nodemailer from 'nodemailer';

const __dirname = fileURLToPath(new URL('.', import.meta.url));
const require = createRequire(import.meta.url);

let localConfig = {};
try {
  localConfig = require(path.join(__dirname, 'config.local.js'));
} catch {
  try {
    const jsonPath = path.join(__dirname, 'config.local.json');
    if (fs.existsSync(jsonPath)) {
      localConfig = JSON.parse(fs.readFileSync(jsonPath, 'utf8'));
    }
  } catch {
    // optional
  }
}

// FALLBACK: if config files are stripped on the host, put your real password here before upload. DO NOT COMMIT.
const FALLBACK = {
  SMTP_HOST: 'mail5013.site4now.net',
  SMTP_PORT: '587',
  SMTP_USER: 'info@encryptkey.co.uk',
  SMTP_PASS: 'v1AfsTbBa#', // ← put real password here before upload; do not commit
  CONTACT_TO_EMAIL: 'contact@sterlingprong.com',
};

function env(key) {
  return process.env[key] ?? localConfig[key] ?? FALLBACK[key];
}

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors({ origin: process.env.CORS_ORIGIN || '*' }));
app.use(express.json());

function getTransporter() {
  const host = env('SMTP_HOST');
  const user = env('SMTP_USER');
  const pass = env('SMTP_PASS');
  if (!host || !user || !pass) {
    throw new Error('Missing SMTP config: set in .env or config.local.js or FALLBACK (SMTP_HOST, SMTP_USER, SMTP_PASS)');
  }
  const port = parseInt(env('SMTP_PORT') || '587', 10);
  const secure = env('SMTP_SECURE') === 'true' || port === 465;
  return nodemailer.createTransport({
    host,
    port,
    secure,
    auth: { user, pass },
  });
}

const contactTo = env('CONTACT_TO_EMAIL') || env('SMTP_USER');

function escapeHtml(input = '') {
  return String(input)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

function nl2br(input = '') {
  return escapeHtml(input).replace(/\n/g, '<br />');
}

function buildEmailLayout({ title, subtitle, rows }) {
  const rowHtml = rows
    .filter((r) => r.value)
    .map(
      (r) => `
        <tr>
          <td style="padding:8px 0;color:#6b7280;font-size:13px;width:170px;vertical-align:top;">${escapeHtml(r.label)}</td>
          <td style="padding:8px 0;color:#111827;font-size:14px;font-weight:500;vertical-align:top;">${r.value}</td>
        </tr>
      `
    )
    .join('');

  return `
    <!doctype html>
    <html>
      <body style="margin:0;padding:0;background:#f3f4f6;font-family:Arial,Helvetica,sans-serif;">
        <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="padding:24px 12px;">
          <tr>
            <td align="center">
              <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="max-width:680px;background:#ffffff;border:1px solid #e5e7eb;border-radius:10px;overflow:hidden;">
                <tr>
                  <td style="height:6px;background:linear-gradient(90deg,#2628DD,#C419BE);font-size:0;line-height:0;">&nbsp;</td>
                </tr>
                <tr>
                  <td style="padding:18px 24px;background:#0f172a;color:#ffffff;">
                    <div style="display:inline-block;padding:4px 10px;border-radius:999px;background:rgba(255,255,255,0.14);color:#ffffff;font-size:11px;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;">SterlingPro Website</div>
                    <div style="font-size:20px;font-weight:700;letter-spacing:0.2px;margin-top:10px;">SterlingPro</div>
                    <div style="font-size:13px;opacity:0.95;margin-top:4px;">${escapeHtml(subtitle)}</div>
                  </td>
                </tr>
                <tr>
                  <td style="padding:22px 24px;">
                    <h2 style="margin:0 0 14px;font-size:18px;color:#111827;">${escapeHtml(title)}</h2>
                    <table role="presentation" width="100%" cellpadding="0" cellspacing="0">
                      ${rowHtml}
                    </table>
                  </td>
                </tr>
              </table>
            </td>
          </tr>
        </table>
      </body>
    </html>
  `;
}

async function handleContact(req, res) {
  try {
    const { name, email, company, product, location, industry, message } = req.body || {};
    console.log('Contact form received from', email || '(no email)');
    const transporter = getTransporter();
    const text = [
      'Source Website: SterlingPro',
      '',
      `Name: ${name || ''}`,
      `Email: ${email || ''}`,
      `Company: ${company || ''}`,
      `Product: ${product || ''}`,
      `Location: ${location || ''}`,
      `Industry: ${industry || ''}`,
      '',
      (message || '').trim(),
    ].join('\n');
    const html = buildEmailLayout({
      title: 'New Contact Form Submission',
      subtitle: 'SterlingPro website contact request',
      rows: [
        { label: 'Source Website', value: 'SterlingPro Website' },
        { label: 'Name', value: escapeHtml(name || '') },
        { label: 'Email', value: escapeHtml(email || '') },
        { label: 'Company', value: escapeHtml(company || '') },
        { label: 'Product', value: escapeHtml(product || '') },
        { label: 'Location', value: escapeHtml(location || '') },
        { label: 'Industry', value: escapeHtml(industry || '') },
        { label: 'Message', value: nl2br((message || '').trim()) },
      ],
    });
    await transporter.sendMail({
      from: env('SMTP_USER'),
      to: contactTo,
      replyTo: email || undefined,
      subject: 'SterlingPro website – Contact form',
      text,
      html,
    });
    console.log('Contact email sent to', contactTo);
    res.status(200).json({ ok: true });
  } catch (e) {
    console.error('Contact send error:', e);
    res.status(500).json({ ok: false, error: e.message || 'Failed to send' });
  }
}

// API routes (before static) – use /contact not /api/contact (same as EncryptKey)
app.get('/contact', (req, res) => res.json({ status: 'ok', message: 'SterlingPro Contact API' }));
app.post('/contact', handleContact);

// Static React app (from ./public)
app.use(express.static(path.join(__dirname, 'public')));

// SPA fallback
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.listen(PORT, () => {
  console.log(`SterlingPro (API + site) listening on port ${PORT}`);
});
