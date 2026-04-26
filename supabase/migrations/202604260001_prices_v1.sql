create extension if not exists pgcrypto;

create or replace function public.is_site_admin()
returns boolean
language sql
stable
as $$
  select lower(coalesce(auth.jwt() ->> 'email', '')) = 'ariaaman@outlook.fr'
$$;

create table if not exists public.price_categories (
  id uuid primary key default gen_random_uuid(),
  title text not null unique,
  description text,
  sort_order integer not null default 1,
  is_active boolean not null default true,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table if not exists public.price_items (
  id uuid primary key default gen_random_uuid(),
  category_id uuid not null references public.price_categories(id) on delete cascade,
  name text not null,
  price text not null default '',
  sort_order integer not null default 1,
  is_active boolean not null default true,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  unique (category_id, name)
);

create or replace function public.set_updated_at()
returns trigger
language plpgsql
as $$
begin
  new.updated_at = now();
  return new;
end;
$$;

drop trigger if exists price_categories_set_updated_at on public.price_categories;
create trigger price_categories_set_updated_at
before update on public.price_categories
for each row execute function public.set_updated_at();

drop trigger if exists price_items_set_updated_at on public.price_items;
create trigger price_items_set_updated_at
before update on public.price_items
for each row execute function public.set_updated_at();

alter table public.price_categories enable row level security;
alter table public.price_items enable row level security;

grant usage on schema public to anon, authenticated;
grant execute on function public.is_site_admin() to anon, authenticated;
grant select on public.price_categories to anon, authenticated;
grant select on public.price_items to anon, authenticated;
grant insert, update, delete on public.price_categories to authenticated;
grant insert, update, delete on public.price_items to authenticated;

drop policy if exists "Public can read active price categories" on public.price_categories;
create policy "Public can read active price categories"
on public.price_categories for select
using (is_active = true or public.is_site_admin());

drop policy if exists "Admin can insert price categories" on public.price_categories;
create policy "Admin can insert price categories"
on public.price_categories for insert
with check (public.is_site_admin());

drop policy if exists "Admin can update price categories" on public.price_categories;
create policy "Admin can update price categories"
on public.price_categories for update
using (public.is_site_admin())
with check (public.is_site_admin());

drop policy if exists "Admin can delete price categories" on public.price_categories;
create policy "Admin can delete price categories"
on public.price_categories for delete
using (public.is_site_admin());

drop policy if exists "Public can read active price items" on public.price_items;
create policy "Public can read active price items"
on public.price_items for select
using (
  public.is_site_admin()
  or (
    is_active = true
    and exists (
      select 1 from public.price_categories
      where price_categories.id = price_items.category_id
      and price_categories.is_active = true
    )
  )
);

drop policy if exists "Admin can insert price items" on public.price_items;
create policy "Admin can insert price items"
on public.price_items for insert
with check (public.is_site_admin());

drop policy if exists "Admin can update price items" on public.price_items;
create policy "Admin can update price items"
on public.price_items for update
using (public.is_site_admin())
with check (public.is_site_admin());

drop policy if exists "Admin can delete price items" on public.price_items;
create policy "Admin can delete price items"
on public.price_items for delete
using (public.is_site_admin());

insert into public.price_categories (title, description, sort_order, is_active) values
('KONSULTACJE', 'Indywidualna ocena stanu zdrowia jamy ustnej i plan leczenia.', 1, true),
('DIAGNOSTYKA', 'Precyzyjne badania i nowoczesne technologie dla trafnej diagnozy.', 2, true),
('PROFILAKTYKA', 'Skuteczne zabiegi zapobiegajace prochnicy i chorobom dziasel.', 3, true),
('IMPLANTOLOGIA', 'Nowoczesne implanty dla trwalego i estetycznego uzupelnienia brakow zebowych.', 4, true),
('ENDODONCJA (MIKROSKOPOWA)', 'Precyzyjne leczenie kanalowe z uzyciem zaawansowanych technologii.', 5, true),
('PROTETYKA', 'Estetyczne i funkcjonalne odbudowy protetyczne dopasowane do Twoich potrzeb.', 6, true),
('STOMATOLOGIA ZACHOWAWCZA', 'Skuteczna odbudowa i leczenie prochnicy dla zdrowych zebow.', 7, true),
('CHIRURGIA', 'Bezpieczne i komfortowe zabiegi chirurgiczne w nowoczesnym wydaniu.', 8, true),
('STOMATOLOGIA ESTETYCZNA', 'Piekny usmiech dzieki wybielaniu i nowoczesnym licowkom.', 9, true),
('STOMATOLOGIA DZIECIECA', 'Bezstresowe leczenie zebow najmlodszych pacjentow.', 10, true),
('STOMATOLOGIA LASEROWA', 'Nowoczesne i bezbolesne zabiegi z wykorzystaniem lasera.', 11, true)
on conflict (title) do update set
description = excluded.description,
sort_order = excluded.sort_order,
is_active = excluded.is_active;

with item_seed(category_title, name, price, sort_order) as (
  values
  ('KONSULTACJE', 'KONSULTACJA/BADANIE STOMATOLOGICZNE', '200 zl', 1),
  ('KONSULTACJE', 'KONSULTACJA/BADANIE STOMATOLOGICZNE + PANTOMOGRAM', '300 zl', 2),
  ('DIAGNOSTYKA', 'ZDJECIE PUNKTOWE', '50 ZL', 1),
  ('DIAGNOSTYKA', 'ZDJECIE PANTOMOGRAFICZNE', '150 ZL', 2),
  ('DIAGNOSTYKA', 'TOMOGRAF (CBCT) PUNKTOWE', '150 ZL', 3),
  ('DIAGNOSTYKA', 'TOMOGRAF (CBCT) ZUCHWA/SZCZEKA', '200 ZL', 4),
  ('DIAGNOSTYKA', 'TOMOGRAF (CBCT) CALOSC JAMY USTNEJ', '400 ZL', 5),
  ('PROFILAKTYKA', 'FLUORYZACJA OBU LUKOW ZEBOWYCH', '200 ZL', 1),
  ('PROFILAKTYKA', 'PIASKOWANIE ZEBOW + LAKIEROWANIE', '250 ZL', 2),
  ('PROFILAKTYKA', 'SKALING ULTRADZWIEKOWY + LAKIEROWANIE', '250 ZL', 3),
  ('PROFILAKTYKA', 'PAKIET HIGIENIZACYJNY (SKALING, PIASKOWANIE, FLUORYZACJA)', '400 zl', 4),
  ('IMPLANTOLOGIA', 'WSZCZEPIENIE IMPLANTU', '3500 zl', 1),
  ('IMPLANTOLOGIA', 'ODSLONIECIE IMPLANTU I ZALOZENIE SRUBY GOJACEJ', '300 ZL', 2),
  ('IMPLANTOLOGIA', 'PRACE IMPLANTOLOGICZNE ZLOZONE WYCENIANE SA INDYWIDUALNIE', '', 3),
  ('IMPLANTOLOGIA', 'KORONA TYMCZASOWA NA LACZNIKU TYTANOWYM', '800 ZL', 4),
  ('IMPLANTOLOGIA', 'SZABLON IMPLANTOLOGICZNY', '1200 ZL', 5),
  ('IMPLANTOLOGIA', 'PODNIESIENIE DNA ZATOKI SZCZEKOWEJ (SINUS LIFT)', '2500 ZL', 6),
  ('IMPLANTOLOGIA', 'KORONA PORCELANOWA NA IMPLANCIE', 'OD 3500 ZL', 7),
  ('ENDODONCJA (MIKROSKOPOWA)', 'ODBUDOWA ZEBA PO LECZENIU ENDODONTYCZNYM KOMPOZYTEM', '350-500 ZL', 1),
  ('ENDODONCJA (MIKROSKOPOWA)', 'ODBUDOWA ZEBA PO LECZENIU ENDODONTYCZNYM WLOKNEM SZKLANYM', '500 ZL', 2),
  ('ENDODONCJA (MIKROSKOPOWA)', 'LECZENIE ENDODONTYCZNE Z WYPELNIENIEM 1 KANALU*', '800 ZL', 3),
  ('ENDODONCJA (MIKROSKOPOWA)', 'LECZENIE ENDODONTYCZNE Z WYPELNIENIEM 2 KANALOW*', '1100 ZL', 4),
  ('ENDODONCJA (MIKROSKOPOWA)', 'LECZENIE ENDODONTYCZNE Z WYPELNIENIEM 3 KANALOW*', '1500 ZL', 5),
  ('ENDODONCJA (MIKROSKOPOWA)', 'LECZENIE ENDODONTYCZNE Z WYPELNIENIEM 4 KANALOW*', '1800 ZL', 6),
  ('ENDODONCJA (MIKROSKOPOWA)', 'POWTORNE LECZENIE KANALOWE', '+200 ZL / 1 KANAL', 7),
  ('PROTETYKA', 'WAX UP (1PUNKT)', '150ZL', 1),
  ('PROTETYKA', 'DOSTAWIENIE ZEBA DO PROTEZY', '200 ZL', 2),
  ('PROTETYKA', 'POWTORNE ZACEMENTOWANIE KORONY/MOSTU (1 PUNKT)', '400 ZL', 3),
  ('PROTETYKA', 'WKLAD KORONOWO-KORZENIOWY JEDNOCZESCIOWY CHROMO-KOBALT', '450 ZL', 4),
  ('PROTETYKA', 'WKLAD KORONOWO-KORZENIOWY ZLOZONY CHROMO-KOBALT', '600 ZL', 5),
  ('PROTETYKA', 'SZYNA RELAKSACYJNA', '800 ZL', 6),
  ('PROTETYKA', 'SZYNA DLA SPORTOWCOW', '800 ZL', 7),
  ('PROTETYKA', 'KORONA PORCELANOWA NA PODBUDOWIE CHROMOWO KOBALTOWEJ (PUNKT SPIEKANY)', '2000 zl', 8),
  ('PROTETYKA', 'KORONA PELNOCERAMICZNA/CYRKONOWA', '2500 ZL', 9),
  ('PROTETYKA', 'KORONA TYMCZASOWA', 'W CENIE USLUGI', 10),
  ('PROTETYKA', 'LICOWKA PORCELANOWA', '2500 ZL', 11),
  ('PROTETYKA', 'PROTEZA SZKIELETOWA', '3500 ZL', 12),
  ('PROTETYKA', 'PROTEZA BEZKLAMROWA', 'WYCENA INDYWIDUALNA', 13),
  ('PROTETYKA', 'PROTEZA AKRYLOWA', '2000 ZL', 14),
  ('PROTETYKA', 'PROTEZA AKRONOWA', '3000 ZL', 15),
  ('STOMATOLOGIA ZACHOWAWCZA', 'ZNIECZULENIE KOMPUTEROWE DENTAPEN', 'Bezplatnie', 1),
  ('STOMATOLOGIA ZACHOWAWCZA', 'WYPELNIENIA TYMCZASOWE', '200 ZL', 2),
  ('STOMATOLOGIA ZACHOWAWCZA', 'WYPELNIENIE ZEBA (W ZALEZNOSCI OD ROZLEGLOSCI UBYTKU)', '400-500 ZL', 3),
  ('STOMATOLOGIA ZACHOWAWCZA', 'ODBUDOWA ZEBA NA WLOKNIE SZKLANYM', '600 ZL', 4),
  ('CHIRURGIA', 'EKSTRAKCJA ZEBA JEDNOKORZENIOWEGO', '300 ZL', 1),
  ('CHIRURGIA', 'EKSTRAKCJA ZEBA WIELOKORZENIOWEGO', '400 ZL', 2),
  ('CHIRURGIA', 'EKSTRAKCJA OSEMKI', '600 ZL', 3),
  ('CHIRURGIA', 'EKSTRAKCJA ZEBA MLECZNEGO', '200-300 ZL', 4),
  ('CHIRURGIA', 'USUNIECIE ZEBA ZATRZYMANEGO', '400-600 ZL', 5),
  ('CHIRURGIA', 'EKSTRAKCJA ZEBA ZATRZYMANEGO', '1000-1500 ZL', 6),
  ('CHIRURGIA', 'PODCIECIE CHIRURGICZNE WEDZIDELKA (WARGI, JEZYKA)', '400 ZL', 7),
  ('STOMATOLOGIA ESTETYCZNA', 'Wybielanie nakladkowe (z szynami indywidualnymi)', '1200 zl', 1),
  ('STOMATOLOGIA ESTETYCZNA', 'Wybielanie gabinetowe z regeneracja szkliwa metoda PREVDENT', '1600 zl', 2),
  ('STOMATOLOGIA DZIECIECA', 'WIZYTA KONSULTACYJNA/ADAPTACYJNA Z PRZEGLADEM JAMY USTNEJ', '200 ZL', 1),
  ('STOMATOLOGIA DZIECIECA', 'OPATRUNEK W ZEBIE MLECZNYM', '200 ZL', 2),
  ('STOMATOLOGIA DZIECIECA', 'WYPELNIENIE W ZEBIE MLECZNYM', '250-300 ZL', 3),
  ('STOMATOLOGIA DZIECIECA', 'LAKIEROWANIE ZEBOW MLECZNYCH/STALYCH (2 LUKI)', '200 ZL', 4),
  ('STOMATOLOGIA DZIECIECA', 'EKSTRAKCJA ZEBA MLECZNEGO', '200-250 ZL', 5),
  ('STOMATOLOGIA DZIECIECA', 'LAKOWANIE ZEBA', '200 ZL', 6),
  ('STOMATOLOGIA DZIECIECA', 'OTWARCIE ZEBA Z OPATRUNKIEM', '200 ZL', 7),
  ('STOMATOLOGIA LASEROWA', 'LECZENIE OPRYSZCZKI, AFT', '200 ZL', 1),
  ('STOMATOLOGIA LASEROWA', 'WYDLUZENIE KORONY KLINICZNEJ (KOREKTA DZIASLA)', '250 ZL', 2)
)
insert into public.price_items (category_id, name, price, sort_order, is_active)
select price_categories.id, item_seed.name, item_seed.price, item_seed.sort_order, true
from item_seed
join public.price_categories on price_categories.title = item_seed.category_title
on conflict (category_id, name) do update set
price = excluded.price,
sort_order = excluded.sort_order,
is_active = excluded.is_active;
