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
  SMTP_HOST: 'mail.sterlingprong.com',
  SMTP_PORT: '587',
  SMTP_USER: 'info@sterlingprong.com',
  SMTP_PASS: '', // ← put real password here before upload; do not commit
  CONTACT_TO_EMAIL: 'info@sterlingprong.com',
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

async function handleContact(req, res) {
  try {
    const { name, email, company, product, location, industry, message } = req.body || {};
    console.log('Contact form received from', email || '(no email)');
    const transporter = getTransporter();
    const text = [
      `Name: ${name || ''}`,
      `Email: ${email || ''}`,
      `Company: ${company || ''}`,
      `Product: ${product || ''}`,
      `Location: ${location || ''}`,
      `Industry: ${industry || ''}`,
      '',
      (message || '').trim(),
    ].join('\n');
    await transporter.sendMail({
      from: env('SMTP_USER'),
      to: contactTo,
      replyTo: email || undefined,
      subject: 'SterlingPro website – Contact form',
      text,
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
