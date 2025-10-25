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
                <span class="button-text">więcej o nas</span>
            </button>
        </div>

        <div class="team-grid">
            <div v-for="(doctor, index) in doctors" :key="index" class="doctor-card">

                <div class="doctor-info">
                    <div class="doctor-image-container">
                        <img :src="doctor.image" :alt="doctor.name" class="doctor-image">
                    </div>
                    <div class="doctor-title">LEKARZ STOMATOLOG</div>
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
        name: 'Piotr Pietruszczak',
        image: '/static/HomePage/piotr.png',
        description: 'Doświadczony implantolog, protetyk i endodonta, właściciel gabinetu PIETRUSZCZAK STOMATOLOGIA od 9 lat. Posiada tytuł „Expert in Oral Implantology”nadany przez Niemieckie Towarzystwo Implantologii Stomatologicznej DGOI. Posiada certyfikat PSI/ICOI/ICOI Europe. Członek Polskiego Stowarzyszenia Implantologicznego PSI. Łączy nowoczesne technologie z precyzyjną diagnostyką, dbając o zdrowy i piękny uśmiech pacjentów...',
        specialties: ['implantologia', 'stomatologia', 'endodoncja', 'protetyka', 'DIAGNOSTYKA',]
    },
    {
        name: 'Agnieszka Rutkowska',
        image: '/static/HomePage/Agnieszka2.png',
        description: 'Absolwentka Akademii Medycznej w Gdańsku, specjalizuje się w stomatologii zachowawczej i dziecięcej. Łączy skuteczność z delikatnością, otaczając szczególną opieką pacjentów z dentofobią. W trakcie szkolenia z Ortotropii. Jest osobą cierpliwą i uśmiechniętą, dzięki czemu łatwo nawiązuje kontakt z Pacjentami w każdym wieku. Szczególną opieką otacza pacjentów z problemem dentofobii...',
        specialties: ['STOMATOLOGIA', 'STOMATOLOGIA DZIECIĘCA','endodoncja', 'Diagnostyka', 'protetyk']
    },
    {
        name: 'Amanda Duszak',
        image: '/static/HomePage/malgor1.png',
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
    width: 100%;
    padding: 80px 0;
    background-color: #E4D5C2;
}

.team-header {
    max-width: 1440px;
    margin: 0 auto 32px;
    display: flex;
    gap: 265px;
    align-items: flex-end;
}

.team-title {
    font-family: 'Satoshi Variable', 'Satoshi';
    width: 878px;
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
}

.team-grid {
    display: flex;
    flex-wrap: wrap;
    gap: 24px;
    max-width: 1440px;
    margin: 0 auto;
}

.doctor-card {
    background-color: #FFFFFF;
    border-radius: 2px;
    width: 458px;
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
@media (max-width: 1200px) {
    .team-header {
        flex-direction: column;
        text-align: center;
        gap: 30px;
    }

    .team-button {
        margin: 0 auto;
    }
}

@media (max-width: 768px) {
    .team-title {
        font-size: 32px;
        width: auto;
    }

    .doctor-card {
        max-width: 100%;
    }

    .doctor-image-container {
        height: 300px;
    }
}
</style>