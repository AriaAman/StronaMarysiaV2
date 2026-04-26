update public.site_services
set image = regexp_replace(image, '\.(png|jpe?g|webp)$', '.avif', 'i')
where image ~* '\.(png|jpe?g|webp)$';

update public.team_members
set photo_src = regexp_replace(photo_src, '\.(png|jpe?g|webp)$', '.avif', 'i')
where photo_src ~* '\.(png|jpe?g|webp)$';

update public.technologies
set image = regexp_replace(image, '\.(png|jpe?g|webp)$', '.avif', 'i')
where image ~* '\.(png|jpe?g|webp)$';

notify pgrst, 'reload schema';
