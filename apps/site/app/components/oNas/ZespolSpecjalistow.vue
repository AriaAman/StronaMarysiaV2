<template>
    <SpecjalistaProfil
      v-for="(member, index) in teamMembers"
      :key="member.id || member.name"
      :title="member.title"
      :name="member.name"
      :photoSrc="member.photo_src"
      :bio="member.bio"
      :personal="member.personal"
      :tags="member.tags"
      :isReversed="index % 2 === 1"
    />
</template>

<script setup>
import SpecjalistaProfil from './SpecjalistaProfil.vue';

const pietruszczakBio = `Absolwent Lwowskiego Państwowego Uniwersytetu Medycznego, który ukończył z wyróżnieniem w 2002 roku. Przez kilka lat zdobywał doświadczenie w prywatnych klinikach w Polsce i za granicą. Od piędnastu lat jest właścicielem gabinetu PIETRUSZCZAK STOMATOLOGIA. W 2019 roku uzyskał tytuł "Expert in Oral Implantology" nadany przez Niemieckie Towarzystwo Implantologii Stomatologicznej DGOI (Deutsche Gesellschaft für Orale Implantologie). Posiada certyfikat PSI/ICOI/ICOI Europe. Członek Polskiego Stowarzyszenia Implantologicznego PSI. <br><br> Wykonuje zabiegi z zakresu leczenia implantologicznego, protetycznego i endodoncji. Praca w zaawansowanym środowisku cyfrowym, dostęp do innowacyjnych technologii oraz bezpiecznych i dokładnych narzędzi diagnostycznych, stanowią podstawę w planowaniu i realizacji głównego celu, jakim zawsze jest zdrowy i piękny uśmiech.<br><br>Prywatnie tata dwóch synów. Wielbiciel starego rocka i gry na perkusji.`;

const rutkowskaBio = `Absolwentka Wydziału Stomatologii Akademii Medycznej w Gdańsku. Na co dzień zajmuje się stomatologią zachowawczą i dziecięcą. Jest lekarzem niezwykle empatycznym. Łączy skuteczność z delikatnością.<br><br> Specjalizuje się w leczeniu zachowawczym opartym na metodach minimalnie inwazyjnych, lecz dających maksymalną skuteczność. Jest osobą cierpliwą i uśmiechniętą, dzięki czemu łatwo nawiązuje kontakt z Pacjentami w każdym wieku. Szczególną opieką otacza pacjentów z problemem dentofobii.<br><br> Obecnie w trakcie szkolenia z Ortotropii, dziedzinie polegającej na przyczynowym, wczesnym leczeniu dzieci w okresie wzrostu twarzy.<br><br> Prywatnie miłośniczka wypraw rowerowych i żagli, a także dobrej książki i koncertów.`;

const kozakBio = `Doświadczona chirurg stomatologiczny, specjalistka w dziedzinie chirurgii szczękowo-twarzowej. Absolwentka Lwowskiego Narodowego Uniwersytetu Medycznego, od 2011 roku związana z Wojewódzkim Specjalistycznym Szpitalem Dziecięcym w Olsztynie, gdzie na Oddziale Chirurgii Szczękowo-Twarzowej przeprowadza zaawansowane zabiegi w obrębie jamy ustnej i twarzy.<br><br> Cechuje ją precyzja, profesjonalizm oraz indywidualne podejście do każdego pacjenta. Stosuje nowoczesne techniki leczenia, dbając o komfort i bezpieczeństwo swoich podopiecznych. Jej wieloletnie doświadczenie pozwala skutecznie diagnozować i leczyć nawet najbardziej wymagające przypadki. <br><br>Regularnie poszerza swoją wiedzę, uczestnicząc w prestiżowych krajowych i międzynarodowych szkoleniach, dzięki czemu zawsze oferuje swoim pacjentom najwyższy standard opieki.`;

const duszakBio = `Jest dyplomowaną higienistką stomatologiczną, która z pasją dba o zdrowie i piękny uśmiech swoich pacjentów. Stale poszerza swoją wiedzę, uczestnicząc w licznych kursach i szkoleniach, dzięki czemu nieustannie doskonali swoje umiejętności W gabinecie specjalizuje się w profilaktyce chorób przyzębia, wykonując profesjonalne zabiegi skalingu, piaskowania i fluoryzacji Dzięki życzliwości, uśmiechowi i indywidualnemu podejściu zyskała zaufanie pacjentów, którzy chętnie wracają na regularne wizyty.<br><br> Tym, którzy pragną rozjaśnić swój uśmiech, oferuje skuteczne i bezpieczne metody wybielania zębów. Dodatkowo edukuje pacjentów, ucząc ich prawidłowej higieny jamy ustnej, by mogli cieszyć się zdrowymi zębami na dłużej.<br><br>Prywatnie miłośniczka podróży, dobrej literatury i pasjonatka cukiernictwa, która z równie dużym zaangażowaniem, co w pracy, oddaje się kulinarnym eksperymentom.`;

const grabowskaBio = `Doświadczona asystentka stomatologiczna, która z zaangażowaniem wspiera lekarzy podczas zabiegów z zakresu stomatologii zachowawczej, endodoncji i protetyki. <br><br> Dzięki swojej precyzji i doskonałej organizacji pracy dba o sprawny przebieg każdej wizyty, zapewniając pacjentom komfort i poczucie bezpieczeństwa.<br><br> Cechuje ją cierpliwość, empatia oraz indywidualne podejście do każdego pacjenta, co sprawia, że nawet najbardziej wymagające zabiegi przebiegają w przyjaznej atmosferze. Stale poszerza swoją wiedzę, aby jeszcze lepiej wspierać zarówno lekarzy, jak i pacjentów.  <br><br> W wolnym czasie ceni chwile spędzone z rodziną oraz dba o rozwój osobisty.`;

const fallbackTeamMembers = [
  { name: 'Piotr Pietruszczak', title: 'LEKARZ STOMATOLOG', photo_src: '/static/oNas/Piotrek.avif', bio: pietruszczakBio, personal: '', tags: ['IMPLANTOLOGIA', 'PROTETYKA', 'ENDODONCJA', 'STOMATOLOGIA ESTETYCZNA'] },
  { name: 'Agnieszka Rutkowska', title: 'LEKARZ STOMATOLOG', photo_src: '/static/oNas/Agnieszka.avif', bio: rutkowskaBio, personal: '', tags: ['STOMATOLOGIA ZACHOWAWCZA', 'STOMATOLOGIA DZIECIĘCA', 'DENTOFOBIA', 'PROFILAKTYKA'] },
  { name: 'Daria Kozak', title: 'CHIRURG STOMATOLOGICZNY', photo_src: '', bio: kozakBio, personal: '', tags: ['CHIRURGIA STOMATOLOGICZNA', 'CHIRURGIA SZCZĘKOWO-TWARZOWA'] },
  { name: 'Amanda Duszak', title: 'HIGIENISTKA STOMATOLOGICZNA', photo_src: '/static/oNas/Amanda.avif', bio: duszakBio, personal: '', tags: ['HIGIENA', 'SKALING', 'PIASKOWANIE', 'FLUORYZACJA', 'WYBIELANIE'] },
  { name: 'Sylwia Niklewicz-Grabowska', title: 'ASYSTENTKA STOMATOLOGICZNA', photo_src: '/static/oNas/Sylvia.avif', bio: grabowskaBio, personal: '', tags: ['ASYSTA STOMATOLOGICZNA', 'OPIEKUN PACJENTA'] }
]

const teamImagesByName = Object.fromEntries(
  fallbackTeamMembers.map((member) => [member.name, member.photo_src])
)

const supabase = useSupabase()

const { data } = useAsyncData('team-members', async () => {
  const { data: rows, error } = await supabase
    .from('team_members')
    .select('id,name,title,bio,personal,tags,sort_order,is_active')
    .eq('is_active', true)
    .order('sort_order', { ascending: true })

  if (error || !rows?.length) {
    return fallbackTeamMembers
  }

  return rows.map((row) => ({
    ...row,
    photo_src: teamImagesByName[row.name] || ''
  }))
}, {
  default: () => fallbackTeamMembers,
  lazy: true
})

const teamMembers = computed(() => data.value || fallbackTeamMembers)
</script>

<style scoped>
.specialists-team {
  display: flex;
  flex-direction: column;
  gap: 3rem;
  background-color: #f9f9f9;
  padding: 2rem 0;
}
</style>
