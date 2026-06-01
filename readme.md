# Creed & Controversy — Setup Guide

## What you have
Three files that make your complete web app:
- `index.html` — the full app UI
- `app.js` — all the logic (topics, comments, upvotes, auth)
- `config.js` — where you put your database credentials
- `schema.sql` — the database setup script

---

## Step 1 — Host the files (free, 5 minutes)

### Option A: Netlify (easiest, drag & drop)
1. Go to https://netlify.com and sign up free
2. Go to **Sites** → drag your entire folder onto the page
3. Netlify gives you a live URL instantly (e.g. `creed-controversy.netlify.app`)
4. You can set a custom domain later if you want

### Option B: GitHub Pages (also free)
1. Create a free GitHub account at https://github.com
2. Create a new repository, upload your files
3. Go to Settings → Pages → Source: main branch
4. Your site is live at `yourusername.github.io/repo-name`

---

## Step 2 — Set up the database (free, 10 minutes)

1. Go to https://supabase.com and sign up free (no credit card)
2. Click **New project**, give it a name, pick a region, set a database password
3. Wait ~2 minutes for it to provision
4. Go to **SQL Editor** (left sidebar) → **New query**
5. Open `schema.sql`, copy the entire contents, paste into the editor, click **Run**
6. Go to **Project Settings** → **API**
7. Copy your **Project URL** (looks like `https://xxxx.supabase.co`)
8. Copy your **anon/public** key (long string starting with `eyJ...`)

---

## Step 3 — Connect them

Open `config.js` and replace the placeholder values:

```js
const SUPABASE_URL  = 'https://your-project.supabase.co';
const SUPABASE_ANON = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...';
```

Re-upload `config.js` to Netlify (drag the file onto your site dashboard).

---

## Step 4 — Enable email confirmations (optional)

In Supabase → **Authentication** → **Email** you can turn off email confirmation
for easier testing, or customise the confirmation email with your app name.

---

## That's it!

Your app is now live with:
- ✅ All 12 theological topics with denomination comparisons
- ✅ User sign up / sign in
- ✅ Comments on every topic
- ✅ Upvoting
- ✅ Filter comments by denomination

---

## Adding new topics later

Open `app.js`, find the `TOPICS` array at the top, and copy the pattern of any
existing topic. Add your new object to the array and re-upload `app.js`.
No database changes needed — topics live entirely in the code.
