-- ============================================================
--  CREED & CONTROVERSY — Supabase Schema
--  Run this entire file in: Supabase → SQL Editor → New Query
-- ============================================================

-- User profiles (extends Supabase auth)
create table if not exists profiles (
  id          uuid references auth.users on delete cascade primary key,
  display_name text not null default 'Anonymous',
  denomination text,
  created_at  timestamptz default now()
);

-- Comments
create table if not exists comments (
  id          bigserial primary key,
  topic_id    text not null,
  user_id     uuid references profiles(id) on delete cascade,
  display_name text not null,
  denomination text,
  body        text not null check (char_length(body) <= 600),
  upvotes     integer not null default 0,
  created_at  timestamptz default now()
);

-- Upvotes (one per user per comment)
create table if not exists upvotes (
  user_id    uuid references profiles(id) on delete cascade,
  comment_id bigint references comments(id) on delete cascade,
  primary key (user_id, comment_id)
);

-- Indexes
create index if not exists idx_comments_topic on comments(topic_id);
create index if not exists idx_comments_created on comments(created_at desc);

-- ── Row-Level Security ──────────────────────────────────────
alter table profiles enable row level security;
alter table comments  enable row level security;
alter table upvotes   enable row level security;

-- Profiles: anyone can read; only owner can update
create policy "Public profiles" on profiles for select using (true);
create policy "Own profile insert" on profiles for insert with check (auth.uid() = id);
create policy "Own profile update" on profiles for update using (auth.uid() = id);

-- Comments: anyone can read; signed-in users can insert
create policy "Public comments" on comments for select using (true);
create policy "Auth insert comment" on comments for insert with check (auth.uid() = user_id);
create policy "Own delete comment" on comments for delete using (auth.uid() = user_id);
create policy "Update upvote count" on comments for update using (true);

-- Upvotes: anyone can read; signed-in users can insert/delete their own
create policy "Public upvotes" on upvotes for select using (true);
create policy "Auth insert upvote" on upvotes for insert with check (auth.uid() = user_id);
create policy "Own delete upvote" on upvotes for delete using (auth.uid() = user_id);

-- ── Auto-create profile on signup ──────────────────────────
create or replace function handle_new_user()
returns trigger language plpgsql security definer as $$
begin
  insert into profiles (id, display_name, denomination)
  values (
    new.id,
    coalesce(new.raw_user_meta_data->>'display_name', 'Anonymous'),
    new.raw_user_meta_data->>'denomination'
  );
  return new;
end;
$$;

drop trigger if exists on_auth_user_created on auth.users;
create trigger on_auth_user_created
  after insert on auth.users
  for each row execute procedure handle_new_user();
