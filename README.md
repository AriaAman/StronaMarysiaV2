# Pietruszczak monorepo

## Apps

- `apps/site`: public Nuxt site.
- `apps/admin`: admin panel for `admin.pietruszczak.pl`.
- `packages/shared`: shared types and fallback price data.
- `supabase/migrations`: SQL to run in Supabase.

## Local commands

Use Node `20.19+`.

```bash
npm install
npm run site:dev
npm run admin:dev
npm run site:build
npm run admin:build
```

## Supabase setup

Run the files in `supabase/migrations/` in order in the Supabase SQL Editor.

Admins are listed in `public.site_admins` (by auth user id). To give someone access:

1. Supabase > Authentication > Users > Invite user (their e-mail).
2. In the SQL Editor:

```sql
insert into public.site_admins (user_id)
select id from auth.users where lower(email) = lower('adres@gabinetu.pl')
on conflict do nothing;
```

Keep public sign-ups disabled: Authentication > Sign In / Providers > "Allow new users to sign up" off.

The admin app uses magic-link login. In Supabase Auth, add the deployed admin URL to the allowed redirect URLs when deploying:

```txt
https://admin.pietruszczak.pl
```

## Contact form

`apps/site/server/api/contact.post.js` sends through Brevo's transactional API. It needs `BREVO_API_KEY`, `CONTACT_TO` (clinic inbox) and `CONTACT_FROM` (a sender verified in Brevo > Senders, Domains). Without them the form answers with an error and logs which variable is missing.
