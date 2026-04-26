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

Run `supabase/migrations/202604260001_prices_v1.sql` in the Supabase SQL Editor.

The first admin email is:

```txt
ariaaman@outlook.fr
```

The admin app uses magic-link login. In Supabase Auth, add the deployed admin URL to the allowed redirect URLs when deploying:

```txt
https://admin.pietruszczak.pl
```
