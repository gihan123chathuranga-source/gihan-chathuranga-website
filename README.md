# Gihan Chathuranga – Headless WordPress frontend

## Requirements
- Node.js 20.9 or newer
- A WordPress site with the REST API available

## Run locally
1. Install dependencies: `npm install`
2. Copy `.env.example` to `.env.local`
3. Set `WP_URL` to your WordPress site URL (no trailing slash)
4. Start: `npm run dev`
5. Open `http://localhost:3000`

## Deploy to Vercel
Import this project repository into Vercel and add the environment variable:
- `WP_URL` = `https://gihanchathuranga.com`

Deploy after saving the variable. The WordPress site remains the content backend.

## Before launch
- Confirm category slugs in `components/Categories.tsx` match WordPress.
- Set your preferred contact email in `app/contact/page.tsx`.
- If featured images use another host, add that hostname to `images.remotePatterns` in `next.config.ts`.
- Check the public WordPress REST API at `/wp-json/wp/v2/posts`.
