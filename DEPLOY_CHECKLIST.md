# SterlingPro – Deploy to SmarterASP (single-folder)

Use this when deploying to SmarterASP so you don’t repeat the issues we had on EncryptKey.

---

## Before deploy

- [ ] **SMTP**: You have the mailbox for sending (e.g. info@sterlingprong.com):
  - SMTP host, port (usually 587), user, password
- [ ] **FALLBACK in server.js**: Open `server/server.js`, find the `FALLBACK` object, and set **SMTP_PASS** (and correct SMTP_HOST if your host uses something like `mail5013.site4now.net`). **Do not commit** that file with the real password.
- [ ] **Domain**: Site is at https://sterlingprong.com (HTTPS). Use **https** in the API URL.

---

## Deploy steps (in order)

1. **.env.production** (project root):  
   `VITE_CONTACT_API_URL=https://sterlingprong.com`  
   (Site is already HTTPS.)

2. **Build**: From project root run  
   `npm run build:single`  
   This runs `vite build` and copies `dist` → `server/public`.

3. **Install server deps**:  
   `cd server && npm install && cd ..`

4. **Zip**: Zip the **contents** of the **server** folder (not the “server” folder itself). So the zip should contain at the top level:  
   `server.js`, `run.js`, `web.config`, `package.json`, `package-lock.json`, `node_modules`, `public` (with index.html and assets).

5. **Upload**: Upload the zip to the **site root** of your SmarterASP site (e.g. the folder for sterlingprong.com). Unzip there.

6. **Control Panel**: **Setup Node.js App** for the **site root**. Application startup file: **run.js**. Save.

7. **If the panel overwrote web.config**: Restore it from your repo. It must point iisnode at **run.js** and have the rewrite rules (static files → pass through, everything else → run.js).

8. **Test**:
   - Open https://sterlingprong.com → site loads.
   - Open https://sterlingprong.com/contact in browser → JSON like `{"status":"ok","message":"SterlingPro Contact API"}`.
   - Submit the contact form → email is received; no “Submission failed”.

---

## If you switch domain or need to rebuild

1. **.env.production**: Set `VITE_CONTACT_API_URL` to your live URL (e.g. `https://sterlingprong.com`).
2. **Rebuild**: `npm run build:single`
3. **Re-upload** the **server** folder contents (or at least **public**) to the site root.
4. Test the site and contact form.

---

## If something goes wrong

- **“Submission failed” / form doesn’t send**: SMTP not loaded. Put the real password in **FALLBACK** in `server/server.js` and re-upload `server.js` (do not commit). If the host strips `.env` or `config.local.js`, FALLBACK is the only way.
- **run.js or package.json is 0 KB on the server**: Some hosts strip certain files. Paste the file content back via File Manager “Edit”, or re-upload. Use **run.js** (not run.cjs) as the iisnode entry.
- **Connection reset / “Failed to fetch”**: Don’t use a virtual directory for `/api`. The Node app must run at the **site root** and serve both the API and the static files from one app.

Reference: same approach as EncryptKey (single-folder Node at root, FALLBACK for SMTP, run.js entry).
