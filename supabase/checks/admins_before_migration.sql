-- Read-only. Run in the Supabase SQL Editor before 202610250001_site_admins.sql
-- to see who is an admin today, wherever it is defined.

-- 1. The live body of is_site_admin() (the repo copy may be out of date).
select pg_get_functiondef('public.is_site_admin()'::regprocedure) as is_site_admin_today;

-- 2. Auth users the migration will copy into site_admins (e-mail written in that body).
select u.id, u.email, u.last_sign_in_at
from auth.users u
where u.email is not null
  and position(
    lower(quote_literal(u.email))
    in lower(pg_get_functiondef('public.is_site_admin()'::regprocedure))
  ) > 0;

-- 3. Policies that grant access some other way (e-mail or uid written in the policy itself).
select schemaname, tablename, policyname, cmd, qual, with_check
from pg_policies
where schemaname in ('public', 'storage')
  and (coalesce(qual, '') || coalesce(with_check, '')) ~* '(email|auth\.uid|@)'
  and (coalesce(qual, '') || coalesce(with_check, '')) !~* '^\s*\(?\s*is_site_admin\(\)\s*\)?\s*$';

-- 4. All auth accounts (sign-ups are open today: look for accounts nobody expected).
select id, email, created_at, last_sign_in_at, email_confirmed_at
from auth.users
order by created_at;
