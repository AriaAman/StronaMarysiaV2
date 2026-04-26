alter table public.site_services
drop column if exists image;

alter table public.team_members
drop column if exists photo_src;

alter table public.technologies
drop column if exists image;

notify pgrst, 'reload schema';
