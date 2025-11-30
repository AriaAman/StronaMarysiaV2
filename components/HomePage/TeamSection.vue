<!-- TeamSection.vue -->
<template>
    <div class="team-container">
        <div class="team-header">
            <h2 class="team-title">Zespół, <br><span class="team-subtitle">który rozumie Twoje potrzeby</span></h2>
            <button class="team-button" @click="navigateToTeam">
                <div class="button-circle">
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="#BC9667"
                        class="bi bi-arrow-right" viewBox="0 0 16 16">
                        <path fill-rule="evenodd"
                            d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8" />
                    </svg>
                </div>
                <NuxtLink to="/oNas" class="button-text">więcej o nas</NuxtLink>
            </button>
        </div>

        <div class="team-grid">
            <div v-for="(doctor, index) in doctors" :key="index" class="doctor-card">

                <div class="doctor-info">
                    <div class="doctor-image-container">
                        <img :src="doctor.image" :alt="`${doctor.name} - ${doctor.title} - Gabinet stomatologiczny Olsztyn`" class="doctor-image">
                    </div>
                    <div class="doctor-title">{{ doctor.title }}</div>
                    <h3 class="doctor-name">{{ doctor.name }}</h3>
                    <p class="doctor-description">{{ doctor.description }}</p>

                    <div class="specialties-container">
                        <div v-for="(specialty, specIndex) in doctor.specialties" :key="specIndex"
                            class="specialty-tag">
                            {{ specialty }}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
const doctors = [
    {
        title: 'LEKARZ STOMATOLOG',
        name: 'Piotr Pietruszczak',
        image: '/static/HomePage/piotr.png',
        description: 'Doświadczony implantolog, protetyk i endodonta, właściciel gabinetu PIETRUSZCZAK STOMATOLOGIA od 9 lat. Posiada tytuł „Expert in Oral Implantology”nadany przez Niemieckie Towarzystwo Implantologii Stomatologicznej DGOI. Posiada certyfikat PSI/ICOI/ICOI Europe. Członek Polskiego Stowarzyszenia Implantologicznego PSI. Łączy nowoczesne technologie z precyzyjną diagnostyką, dbając o zdrowy i piękny uśmiech pacjentów...',
        specialties: ['implantologia', 'stomatologia', 'endodoncja', 'protetyka', 'DIAGNOSTYKA',]
    },
    {
        title: 'LEKARZ STOMATOLOG',
        name: 'Agnieszka Rutkowska',
        image: '/static/HomePage/Agnieszka2.png',
        description: 'Absolwentka Akademii Medycznej w Gdańsku, specjalizuje się w stomatologii zachowawczej i dziecięcej. Łączy skuteczność z delikatnością, otaczając szczególną opieką pacjentów z dentofobią. W trakcie szkolenia z Ortotropii. Jest osobą cierpliwą i uśmiechniętą, dzięki czemu łatwo nawiązuje kontakt z Pacjentami w każdym wieku. Szczególną opieką otacza pacjentów z problemem dentofobii...',
        specialties: ['STOMATOLOGIA', 'STOMATOLOGIA DZIECIĘCA','endodoncja', 'Diagnostyka', 'protetyk']
    },
    {
        title: 'HIGIENISTKA STOMATOLOGICZNA',
        name: 'Amanda Duszak',
        image: '/static/HomePage/Amanda2.png',
        description: 'Jest dyplomowaną higienistką stomatologiczną, która z pasją dba o zdrowie i piękny uśmiech swoich pacjentów. Stale poszerza swoją wiedzę, uczestnicząc w licznych kursach i szkoleniach, dzięki czemu nieustannie doskonali swoje umiejętności. W gabinecie specjalizuje się w profilaktyce chorób przyzębia, wykonując profesjonalne zabiegi skalingu, piaskowania i fluoryzacji...',
        specialties: ['profilaktyka', 'Wsparcie stomatologiczne']
    }
]

const navigateToTeam = () => {
    console.log('Navigation vers la page de l\'équipe')
}
</script>

<style scoped>
.team-container {
    padding: 80px 20px;
    background-color: #E4D5C2;
}

.team-header {
    max-width: 1440px;
    margin: 0 auto 32px;
    display: flex;
    gap: 265px;
    align-items: flex-end;
    padding: 0 20px;
    box-sizing: border-box;
}

.team-title {
    font-family: 'Satoshi Variable', 'Satoshi';
    width: 878px;
    max-width: 100%;
    font-size: 48px;
    font-weight: 100;
    color: #0B162B;
    margin: 0px;
    line-height: 110%;
}

.team-subtitle {
    font-family: 'Satoshi Variable', 'Satoshi';
    font-size: 48px;
    color: #122548;
    font-style: italic;
    font-weight: 500;
    line-height: 110%;
    margin-top: 5px;
}

.team-button {
    display: flex;
    align-items: center;
    background: none;
    border: none;
    cursor: pointer;
    padding: 0;
}

.button-circle {
    width: 36px;
    height: 36px;
    border-radius: 50%;
    background-color: #122548;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-right: 15px;
}

.arrow {
    color: #FFFFFF;
    font-size: 18px;
}

.button-text {
    font-family: 'Aboreto', 'Aboreto';
    font-size: 18px;
    color: #0B162B;
    letter-spacing: 0px;
    line-height: 130%;
    font-weight: 400;
    text-decoration: none;
}

.team-grid {
    display: flex;
    flex-wrap: wrap;
    gap: 24px;
    margin: 0 auto;
    padding: 0 20px;
    justify-content: center;
    box-sizing: border-box;
}

.doctor-card {
    background-color: #FFFFFF;
    border-radius: 2px;
    width: 458px;
    max-width: 100%;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
    overflow: hidden;
}

.doctor-image-container {
    width: 100%;
    height: 390px;
    overflow: hidden;
}

.doctor-image {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
}

.doctor-info {
    padding: 30px;
}

.doctor-title {
    font-family: 'Aboreto', 'Aboreto';
    margin-top: 24px;
    font-size: 14px;
    line-height: 120%;
    font-weight: 400;
    color: #A9722D;
    margin-bottom: 5px;
    text-transform: uppercase;
    letter-spacing: 2px;
}

.doctor-name {
    font-family: 'Satoshi Variable', 'Satoshi';
    font-size: 32px;
    margin: 0px;
    font-weight: 300;
    letter-spacing: 1px;
    line-height: 120%;
    color: #0B162B;
    margin-bottom: 20px;
}

.doctor-description {
    font-family: 'Satoshi Variable', 'Satoshi';
    font-size: 16px;
    font-weight: 400;
    line-height: 180%;
    color: #122548;
    margin-bottom: 24px;
}

.specialties-container {
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
}

.specialty-tag {
    font-family: 'Aboreto', sans-serif;
    font-size: 12px;
    color: #A9722D;
    background-color: rgba(228, 213, 194, 0.2);
    border: 1px solid #E4D5C2;
    border-radius: 2px;
    padding: 8px 16px;
    text-transform: uppercase;
    letter-spacing: 1px;
}

/* Responsive */
/* Desktop à Tablette Large (1025px - 1440px) */
@media (max-width: 1440px) and (min-width: 1025px) {
    .team-header {
        gap: 100px;
    }

    .team-title {
        width: auto;
        flex: 1;
    }
}

/* Tablette (768px - 1024px) */
@media (max-width: 1024px) {
    .team-container {
        padding: 60px 24px;
    }

    .team-header {
        flex-direction: column;
        align-items: center;
        text-align: center;
        gap: 24px;
        padding: 0;
        margin-bottom: 40px;
    }

    .team-title {
        font-size: 36px;
        width: 100%;
        max-width: 600px;
    }

    .team-subtitle {
        font-size: 36px;
    }

    .team-button {
        margin: 0;
    }

    .button-text {
        font-size: 16px;
    }

    .team-grid {
        gap: 20px;
        padding: 0;
    }

    .doctor-card {
        width: 100%;
        max-width: 650px;
    }

    .doctor-image-container {
        height: 350px;
    }

    .doctor-info {
        padding: 28px;
    }

    .doctor-name {
        font-size: 28px;
    }

    .doctor-description {
        font-size: 15px;
        line-height: 170%;
    }

    .specialty-tag {
        font-size: 11px;
        padding: 7px 14px;
    }
}

/* Petites tablettes */
@media (max-width: 900px) {
    .team-title {
        font-size: 32px;
        max-width: 500px;
    }

    .team-subtitle {
        font-size: 32px;
    }

    .doctor-card {
        width: 100%;
        max-width: 450px;
    }

    .doctor-image-container {
        height: 320px;
    }
}

@media (max-width: 768px) {
    .team-container {
        padding: 40px 16px;
    }

    .team-header {
        gap: 20px;
        margin-bottom: 32px;
    }

    .team-title {
        font-size: 28px;
        max-width: 400px;
    }

    .team-subtitle {
        font-size: 28px;
    }

    .button-text {
        font-size: 16px;
    }

    .button-circle {
        width: 32px;
        height: 32px;
    }

    .team-grid {
        gap: 16px;
    }

    .doctor-card {
        width: 100%;
        max-width: 100%;
    }

    .doctor-image-container {
        height: 300px;
    }

    .doctor-info {
        padding: 20px;
    }

    .doctor-name {
        font-size: 24px;
    }

    .doctor-description {
        font-size: 14px;
    }

    .specialty-tag {
        font-size: 11px;
        padding: 6px 12px;
    }
}
</style>