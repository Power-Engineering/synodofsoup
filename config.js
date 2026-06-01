// ============================================================
// CREED & CONTROVERSY — Supabase Configuration
// ============================================================
// 1. Go to https://supabase.com and create a free project
// 2. Project Settings → API → copy your URL and anon key
// 3. Paste them below and save
// ============================================================

const SUPABASE_URL = 'https://mxaacoycgevczpemttyk.supabase.co';   // e.g. 'https://xyzxyz.supabase.co'
const SUPABASE_ANON_KEY = 'sb_publishable_rgaHiYinr6w2NT28XizAGg_U0BtVbtl'; // e.g. 'eyJhbGci...'

// ── Do not edit below this line ─────────────────────────────
const SUPABASE_CONFIGURED = !!(
  SUPABASE_URL &&
  SUPABASE_ANON_KEY &&
  SUPABASE_URL !== 'YOUR_SUPABASE_URL' &&
  SUPABASE_ANON_KEY !== 'YOUR_SUPABASE_ANON_KEY'
);
