create table if not exists public.site_services (
  id uuid primary key default gen_random_uuid(),
  title text not null unique,
  caption text not null default '',
  image text not null default '',
  category text not null unique,
  description text not null default '',
  sort_order integer not null default 1,
  is_active boolean not null default true,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table if not exists public.faq_items (
  id uuid primary key default gen_random_uuid(),
  question text not null unique,
  answer text not null default '',
  sort_order integer not null default 1,
  is_active boolean not null default true,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table if not exists public.team_members (
  id uuid primary key default gen_random_uuid(),
  name text not null unique,
  title text not null default '',
  photo_src text not null default '',
  bio text not null default '',
  personal text not null default '',
  tags text[] not null default '{}',
  sort_order integer not null default 1,
  is_active boolean not null default true,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table if not exists public.technologies (
  id uuid primary key default gen_random_uuid(),
  title text not null unique,
  image text not null default '',
  caption text not null default '',
  intro text not null default '',
  points jsonb not null default '[]'::jsonb,
  sort_order integer not null default 1,
  is_active boolean not null default true,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table if not exists public.page_sections (
  id uuid primary key default gen_random_uuid(),
  page text not null,
  section_key text not null,
  title text not null default '',
  subtitle text not null default '',
  body text not null default '',
  metadata jsonb not null default '{}'::jsonb,
  updated_at timestamptz not null default now(),
  unique (page, section_key)
);

drop trigger if exists site_services_set_updated_at on public.site_services;
create trigger site_services_set_updated_at
before update on public.site_services
for each row execute function public.set_updated_at();

drop trigger if exists faq_items_set_updated_at on public.faq_items;
create trigger faq_items_set_updated_at
before update on public.faq_items
for each row execute function public.set_updated_at();

drop trigger if exists team_members_set_updated_at on public.team_members;
create trigger team_members_set_updated_at
before update on public.team_members
for each row execute function public.set_updated_at();

drop trigger if exists technologies_set_updated_at on public.technologies;
create trigger technologies_set_updated_at
before update on public.technologies
for each row execute function public.set_updated_at();

drop trigger if exists page_sections_set_updated_at on public.page_sections;
create trigger page_sections_set_updated_at
before update on public.page_sections
for each row execute function public.set_updated_at();

alter table public.site_services enable row level security;
alter table public.faq_items enable row level security;
alter table public.team_members enable row level security;
alter table public.technologies enable row level security;
alter table public.page_sections enable row level security;

grant select on public.site_services to anon, authenticated;
grant select on public.faq_items to anon, authenticated;
grant select on public.team_members to anon, authenticated;
grant select on public.technologies to anon, authenticated;
grant select on public.page_sections to anon, authenticated;
grant insert, update, delete on public.site_services to authenticated;
grant insert, update, delete on public.faq_items to authenticated;
grant insert, update, delete on public.team_members to authenticated;
grant insert, update, delete on public.technologies to authenticated;
grant insert, update, delete on public.page_sections to authenticated;

drop policy if exists "Public can read active services" on public.site_services;
create policy "Public can read active services" on public.site_services
for select using (is_active = true or public.is_site_admin());
drop policy if exists "Admin can manage services" on public.site_services;
create policy "Admin can manage services" on public.site_services
for all using (public.is_site_admin()) with check (public.is_site_admin());

drop policy if exists "Public can read active faq" on public.faq_items;
create policy "Public can read active faq" on public.faq_items
for select using (is_active = true or public.is_site_admin());
drop policy if exists "Admin can manage faq" on public.faq_items;
create policy "Admin can manage faq" on public.faq_items
for all using (public.is_site_admin()) with check (public.is_site_admin());

drop policy if exists "Public can read active team" on public.team_members;
create policy "Public can read active team" on public.team_members
for select using (is_active = true or public.is_site_admin());
drop policy if exists "Admin can manage team" on public.team_members;
create policy "Admin can manage team" on public.team_members
for all using (public.is_site_admin()) with check (public.is_site_admin());

drop policy if exists "Public can read active technologies" on public.technologies;
create policy "Public can read active technologies" on public.technologies
for select using (is_active = true or public.is_site_admin());
drop policy if exists "Admin can manage technologies" on public.technologies;
create policy "Admin can manage technologies" on public.technologies
for all using (public.is_site_admin()) with check (public.is_site_admin());

drop policy if exists "Public can read page sections" on public.page_sections;
create policy "Public can read page sections" on public.page_sections
for select using (true);
drop policy if exists "Admin can manage page sections" on public.page_sections;
create policy "Admin can manage page sections" on public.page_sections
for all using (public.is_site_admin()) with check (public.is_site_admin());

insert into public.faq_items (question, answer, sort_order, is_active) values
('Jak często powinienem odwiedzać dentystę?', 'Regularne wizyty u stomatologa to podstawa zdrowego uśmiechu. W naszym gabinecie zalecamy kontrolę co 6 miesięcy, aby w porę wykrywać i zapobiegać problemom. Podczas wizyty wykonujemy profesjonalne badanie jamy ustnej i doradzamy najlepsze metody pielęgnacji zębów. <a href="/kontakt">Zapisz się już teraz.</a>', 1, true),
('Czy leczenie zębów w Waszym gabinecie jest bolesne?', 'Absolutnie nie! Korzystamy z nowoczesnych, skutecznych znieczuleń, dzięki czemu zabiegi są całkowicie komfortowe. Jeśli odczuwasz lęk przed wizytą, poinformuj nas o tym - zadbamy o Twój spokój i wygodę. Nie jesteś przekonany? <a href="/kontakt">Zadzwoń do nas</a>, rozwiejemy Twoje wątpliwości.', 2, true),
('Kiedy należy zgłosić się na leczenie kanałowe?', 'Jeśli odczuwasz silny ból, nadwrażliwość na ciepło i zimno lub masz opuchnięte dziąsło - to mogą być objawy infekcji miazgi zęba. W naszym gabinecie stosujemy nowoczesne techniki endodontyczne, w tym leczenie kanałowe pod mikroskopem, co gwarantuje precyzję i skuteczność zabiegu.', 3, true),
('Czy w gabinecie oferujecie nowoczesne metody leczenia?', 'Tak! Wykorzystujemy nowoczesne technologie, takie jak mikroskop stomatologiczny, laseroterapia, cyfrowe zdjęcia RTG oraz zaawansowane systemy do leczenia kanałowego. Dzięki temu zabiegi są skuteczniejsze, szybsze i bardziej komfortowe dla pacjentów. <a href="/technologie">Poznaj nasze technologie.</a>', 4, true),
('Jakie są opcje uzupełnienia brakujących zębów?', 'W naszym gabinecie oferujemy kilka rozwiązań: implanty, mosty protetyczne oraz protezy. Implanty to najtrwalsza i najbardziej komfortowa opcja - wyglądają i funkcjonują jak naturalne zęby. Podczas konsultacji pomożemy Ci wybrać najlepsze rozwiązanie dopasowane do Twoich potrzeb. <a href="/uslugi">Przejdź do usług.</a>', 5, true),
('Od jakiego wieku dzieci powinny chodzić do dentysty?', 'Pierwsza wizyta powinna odbyć się już po pojawieniu się pierwszego ząbka, czyli około 6. miesiąca życia. W naszym gabinecie oferujemy wizyty adaptacyjne, podczas których dziecko w przyjaznej atmosferze oswaja się z dentystą i uczy się dbania o zęby.', 6, true)
on conflict (question) do update set
answer = excluded.answer,
sort_order = excluded.sort_order,
is_active = excluded.is_active;

insert into public.site_services (title, caption, image, category, description, sort_order, is_active) values
('Implantologia dentystyczna', 'Implanty', '/static/uslugi/implanty.avif', 'implanty', '<p style="color: #A9722D;">To zaawansowana dziedzina stomatologii, zajmująca się odbudową braków w uzębieniu poprzez <strong>wszczepianie tytanowych implantów</strong>, które zastępują korzenie utraconych zębów.</p>', 1, true),
('Endodoncja - leczenie kanałowe', 'Endodoncja', '/static/uslugi/endodoncja.avif', 'endodoncja', '<p style="color: #A9722D;">Dział stomatologii zajmujący się <strong>leczeniem chorób miazgi zęba</strong>. W naszym gabinecie leczenie kanałowe wykonujemy precyzyjnie i komfortowo.</p>', 2, true),
('Protetyka', 'Protetyka', '/static/uslugi/protetyka.avif', 'protetyka', '<p style="color: #A9722D;">Dziedzina stomatologii zajmująca się uzupełnianiem braków zębowych oraz poprawą wyglądu zębów.</p>', 3, true),
('Stomatologia estetyczna', 'Stomatologia estetyczna', '/static/uslugi/stomatologia-estetyczna.avif', 'estetyczna', '<p style="color: #A9722D;">Stomatologia estetyczna skupia się na poprawie wyglądu zębów, dziąseł i ogólnego uśmiechu pacjenta.</p>', 4, true),
('Stomatologia zachowawcza', 'Stomatologia zachowawcza', '/static/uslugi/stomatologia-zachowawcza.avif', 'zachowawcza', '<p style="color: #A9722D;">Dziedzina stomatologii koncentrująca się na zapobieganiu i leczeniu chorób zębów.</p>', 5, true),
('Diagnostyka', 'Diagnostyka', '/static/uslugi/diagnostyka.avif', 'diagnostyka', '<p style="color: #A9722D;">Diagnostyka w stomatologii obejmuje wywiad, badanie kliniczne oraz zaawansowane metody obrazowania.</p>', 6, true),
('Profilaktyka', 'Profilaktyka', '/static/uslugi/profilaktyka.avif', 'profilaktyka', '<p style="color: #A9722D;">Profilaktyka pomaga utrzymać zdrowie jamy ustnej i zmniejszyć ryzyko próchnicy oraz chorób dziąseł.</p>', 7, true),
('Chirurgia stomatologiczna', 'Chirurgia stomatologiczna', '/static/uslugi/chirurgia-stomatologiczna.avif', 'chirurgia', '<p style="color: #A9722D;">Bezpieczne i precyzyjne zabiegi chirurgiczne wykonywane w nowoczesnym środowisku.</p>', 8, true)
on conflict (category) do update set
title = excluded.title,
caption = excluded.caption,
image = excluded.image,
description = excluded.description,
sort_order = excluded.sort_order,
is_active = excluded.is_active;

insert into public.team_members (name, title, photo_src, bio, tags, sort_order, is_active) values
('Piotr Pietruszczak', 'LEKARZ STOMATOLOG', '/static/oNas/Piotrek.avif', 'Absolwent Lwowskiego Państwowego Uniwersytetu Medycznego, który ukończył z wyróżnieniem w 2002 roku. Od piętnastu lat jest właścicielem gabinetu PIETRUSZCZAK STOMATOLOGIA.', array['IMPLANTOLOGIA','PROTETYKA','ENDODONCJA','STOMATOLOGIA ESTETYCZNA'], 1, true),
('Agnieszka Rutkowska', 'LEKARZ STOMATOLOG', '/static/oNas/Agnieszka.avif', 'Absolwentka Wydziału Stomatologii Akademii Medycznej w Gdańsku. Na co dzień zajmuje się stomatologią zachowawczą i dziecięcą.', array['STOMATOLOGIA ZACHOWAWCZA','STOMATOLOGIA DZIECIĘCA','DENTOFOBIA','PROFILAKTYKA'], 2, true),
('Daria Kozak', 'CHIRURG STOMATOLOGICZNY', '', 'Doświadczona chirurg stomatologiczny, specjalistka w dziedzinie chirurgii szczękowo-twarzowej.', array['CHIRURGIA STOMATOLOGICZNA','CHIRURGIA SZCZĘKOWO-TWARZOWA'], 3, true),
('Amanda Duszak', 'HIGIENISTKA STOMATOLOGICZNA', '/static/oNas/Amanda.avif', 'Dyplomowana higienistka stomatologiczna, która z pasją dba o zdrowie i piękny uśmiech swoich pacjentów.', array['HIGIENA','SKALING','PIASKOWANIE','FLUORYZACJA','WYBIELANIE'], 4, true),
('Sylwia Niklewicz-Grabowska', 'ASYSTENTKA STOMATOLOGICZNA', '/static/oNas/Sylvia.avif', 'Doświadczona asystentka stomatologiczna, która z zaangażowaniem wspiera lekarzy podczas zabiegów.', array['ASYSTA STOMATOLOGICZNA','OPIEKUN PACJENTA'], 5, true)
on conflict (name) do update set
title = excluded.title,
photo_src = excluded.photo_src,
bio = excluded.bio,
tags = excluded.tags,
sort_order = excluded.sort_order,
is_active = excluded.is_active;

insert into public.technologies (title, image, caption, intro, points, sort_order, is_active) values
('TOMOGRAF CS 9600', '/static/technologie/IMPLANT.avif', 'Nowoczesne obrazowanie CBCT', 'Tomograf komputerowy Kodak Carestream CS 9600 to zaawansowany aparat CBCT w swojej kategorii.', '[{"title":"Precyzyjna diagnostyka","desc":"dokładne odwzorowanie struktur anatomicznych."},{"title":"Minimalna dawka promieniowania","desc":"redukcja ekspozycji przy zachowaniu jakości obrazu."}]', 1, true),
('SKANER WEWNĄTRZUSTNY CARESTREAM CS 3600', '/static/technologie/CHIRURGIA-STOMATOLOGICZNA.avif', 'Cyfrowe wyciski', 'Pozwala na otrzymanie wirtualnego obrazu jamy ustnej na ekranie komputera w ciągu kilku minut.', '[{"title":"Cyfrowe wyciski","desc":"szybkie i dokładne odwzorowanie jamy ustnej."},{"title":"Komfort pacjenta","desc":"eliminacja tradycyjnych mas wyciskowych."}]', 2, true),
('MIKROSKOP ZUMAX', '/static/technologie/ZUMAX-OMS2350-technologie.avif', 'Precyzja w leczeniu kanałowym i protetyce', 'Narzędzie, które zapewnia skuteczność i najwyższą jakość leczenia dzięki powiększeniu i ostrości obrazu.', '[{"title":"Obraz w jakości HD","desc":"doskonała widoczność szczegółów."},{"title":"Precyzyjna endodoncja","desc":"ułatwia odnalezienie ujść kanałów."}]', 3, true),
('LASER BIOLASE EPIC X', '/static/technologie/PROTETYKA.avif', 'Nowoczesny laser diodowy', 'Laser Biolase Epic X to narzędzie dla klinik, które stawiają na innowacyjność i komfort pacjenta.', '[{"title":"Minimalizacja krwawienia i bólu","desc":"delikatne cięcie tkanek."},{"title":"Szerokie zastosowanie","desc":"implantologia, chirurgia, protetyka i estetyka."}]', 4, true)
on conflict (title) do update set
image = excluded.image,
caption = excluded.caption,
intro = excluded.intro,
points = excluded.points,
sort_order = excluded.sort_order,
is_active = excluded.is_active;

notify pgrst, 'reload schema';
