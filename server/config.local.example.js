/**
 * Copy to config.local.js and fill in. config.local.js is gitignored.
 * On SmarterASP, .env may be stripped; use this or put values in FALLBACK in server.js.
 */
module.exports = {
  SMTP_HOST: 'mail.sterlingprong.com',
  SMTP_PORT: '587',
  SMTP_USER: 'info@sterlingprong.com',
  SMTP_PASS: 'your-smtp-password',
  CONTACT_TO_EMAIL: 'info@sterlingprong.com',
};
