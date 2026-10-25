-- Admins are identified by their auth user id, not by an e-mail written in the code.
create table if not exists public.site_admins (
  user_id uuid primary key references auth.users(id) on delete cascade,
  created_at timestamptz not null default now()
);

-- RLS on and no policy: the table cannot be read or written through the API.
alter table public.site_admins enable row level security;
revoke all on public.site_admins from anon, authenticated;

-- Carry over every admin of the current function: any auth user whose e-mail is
-- written as a literal in the live is_site_admin() body (e.g. e-mails added by
-- hand in the SQL Editor). Must run before the function is replaced below.
insert into public.site_admins (user_id)
select u.id
from auth.users u
where u.email is not null
  and position(
    lower(quote_literal(u.email))
    in lower(pg_get_functiondef('public.is_site_admin()'::regprocedure))
  ) > 0
on conflict do nothing;

create or replace function public.is_site_admin()
returns boolean
language sql
stable
security definer
set search_path = ''
as $$
  select exists (
    select 1 from public.site_admins
    where user_id = (select auth.uid())
  )
$$;

revoke all on function public.is_site_admin() from public;
grant execute on function public.is_site_admin() to anon, authenticated;

-- To add someone (e.g. the clinic's account), create the user in
-- Supabase > Authentication > Users > Invite user, then run:
--   insert into public.site_admins (user_id)
--   select id from auth.users where lower(email) = lower('adres@gabinetu.pl')
--   on conflict do nothing;

notify pgrst, 'reload schema';
