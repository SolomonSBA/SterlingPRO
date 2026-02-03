# SterlingPRO – Clone

React + TypeScript + Vite clone of [SterlingPRO Business Applications](https://sterlingprong.com/). Uses Tailwind CSS, shadcn/ui, and Framer Motion.

## Logo and assets

- **Navbar/Footer logo:** Loaded from the live site: `https://sterlingprong.com/wp-content/uploads/2022/12/` (Sterling-pro-logo-1-01-1-768x129.png and 300x50.png). This keeps the clone visually accurate. For a production app you’d typically download these, add them to `public/`, and reference `/logo.png` so you’re not depending on their server.
- **Hero image:** Same idea – `sterlingprong.com/.../home-page-image.png`. You can later replace with a local copy in `public/`.

## Run locally

```bash
npm install
npm run dev
```

Open http://localhost:5173 (or the port Vite prints).

## Push to Git

```bash
git init
git add .
git commit -m "Initial commit: SterlingPRO clone"
```

Create a new repository on GitHub (no README/license). Then:

```bash
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git
git branch -M main
git push -u origin main
```

## Deploy on Vercel

1. Go to [vercel.com](https://vercel.com) and sign in (e.g. with GitHub).
2. **Add New Project** → **Import** your GitHub repo.
3. Leave **Build Command** as `npm run build` and **Output Directory** as `dist`. Root directory: `./`.
4. Click **Deploy**. Vercel will build and host the app; `vercel.json` is set so routes like `/about`, `/contact`, `/products/twig-secure` work (SPA rewrites).

After deploy, you’ll get a URL like `https://your-project.vercel.app`.

## Scripts

- `npm run dev` – dev server
- `npm run build` – production build
- `npm run preview` – preview production build locally
