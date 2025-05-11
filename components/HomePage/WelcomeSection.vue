<template>
    <section class="welcome-section">
        <div class="container">
            <div class="welcome-header">
                <h2 class="title">
                    Witaj w naszym
                    <span class="title-italic">gabinecie stomatologicznym</span>
                </h2>
            </div>

            <div class="cards-container">
                <div class="cards-left">
                    <!-- Première carte -->
                    <div class="card">
                        <div class="card-icon">
                            <img src="/static/HomePage/DentVector.svg" alt="Nowoczesna stomatologia" />
                        </div>
                        <h3 class="card-title">Nowoczesna stomatologia dla wymagających</h3>
                        <p class="card-text">
                            "Korzystając z najnowocześniejszych rozwiązań technologicznych zapewniamy Pacjentom
                            rzetelną diagnostykę, kompleksowe leczenie oraz profesjonalną profilaktykę. Kładziemy
                            szczególny nacisk na jakość oraz estetykę wykonania, żeby to piękny uśmiech pacjentów był
                            najlepszą reklamą naszych usług."
                        </p>
                        <div class="doctor-card">
                            <div class="doctor-photo">
                                <img src="/static/HomePage/PiotrWrapper.svg" alt="Piotr Pietruszczak" />
                            </div>
                            <div class="doctor-info">
                                <h4 class="doctor-name">PIOTR PIETRUSZCZAK</h4>
                                <p class="doctor-title">Lekarz stomatolog</p>
                            </div>
                        </div>
                    </div>

                    <!-- Troisième carte -->
                    <div class="card">
                        <div class="card-icon">
                            <img src="/static/HomePage/DentVector.svg" alt="Wsparcie" />
                        </div>
                        <h3 class="card-title">Wsparcie w każdej sytuacji</h3>
                        <p class="card-text">
                            "Jesteśmy zawsze do dyspozycji pacjentów, gotowi pomóc, doradzić i wesprzeć na każdym
                            etapie leczenia. Niezależnie od tego, czy to drobna procedura, czy poważniejszy zabieg,
                            możesz liczyć na nasze pełne wsparcie."
                        </p>
                        <div class="doctor-card">
                            <div class="doctor-photo">
                                <img src="/static/HomePage/AmandaWrapper.svg" alt="Amanda Duszak" />
                            </div>
                            <div class="doctor-info">
                                <h4 class="doctor-name">AMANDA DUSZAK</h4>
                                <p class="doctor-title">Higienistka stomatologiczna</p>
                            </div>
                        </div>
                    </div>

                    <!-- Boutons -->
                    <div class="action-buttons">
                        <a href="#" class="primary-button">REZERWACJA ONLINE</a>
                        <a href="#" class="secondary-button">
                            <span class="button-icon">
                                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="#BC9667"
                                    class="bi bi-arrow-right-short" viewBox="0 0 16 16">
                                    <path fill-rule="evenodd"
                                        d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8" />
                                </svg>
                            </span>
                            ZOBACZ NA MAPIE
                        </a>
                    </div>
                </div>

                <!-- Deuxième carte (à droite) -->
                <div class="card card-right">
                    <div class="right-card-content">
                        <div class="card-header">
                            <h3 class="special-header">NAJWYŻSZY STANDARD OPIEKI</h3>
                        </div>
                        <h3 class="card-title-big">Dołącz do naszej rodziny Pacjentów i poczuj różnicę :)</h3>
                        <p class="card-text">
                            Gabinet Pietruszczak Stomatologia w Olsztynie stworzyliśmy z myślą o zróżnicowanych
                            potrzebach Pacjentów i jest naszą odpowiedzią na wysokie wymagania osób, które z troską
                            i odpowiedzialnością podchodzą do zdrowia — swojego i swoich najbliższych.
                        </p>
                        <p class="card-text">
                            Jesteśmy zespołem doświadczonych specjalistów którzy połączyli siły, aby zapewnić Ci
                            najlepszą opiekę dentystyczną. Wierzymy, że zdrowie jamy ustnej ma wpływ na ogólny stan
                            zdrowia i samopoczucie.
                        </p>
                        <div class="patient-image">
                            <img src="/static/HomePage/OlekAvecDame.jpg" alt="Patient with doctor" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
// Aucune logique spécifique nécessaire
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Satoshi:wght@300;400;500;700&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Merriweather:ital,wght@0,300;0,400;0,700;1,300;1,400&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Aboreto&display=swap');

.welcome-section {
    background-color: #f7f7f7;
    padding: 80px 0;
}

.container {
    max-width: 1440px;
    margin: 0 auto;
    padding: 0 20px;
}

.welcome-header {
    text-align: center;
    margin-bottom: 60px;
}

.title {
    font-family: 'Satoshi', sans-serif;
    font-weight: 300;
    font-size: 80px;
    line-height: 100%;
    color: #0B162B;
    text-align: center;
    margin: 0;
}

.title-italic {
    display: block;
    font-family: 'Merriweather', serif;
    font-style: italic;
    font-weight: 300;
    font-size: 80px;
    line-height: 100%;
    letter-spacing: 0px;
}

.cards-container {
    display: flex;
    gap: 32px;
    margin-bottom: 50px;
}

.cards-left {
    flex: 1;
    display: flex;
    flex-direction: column;
    gap: 32px;
}

.card {
    background-color: #fff;
    padding: 32px;
    display: flex;
    flex-direction: column;
    border: 1px solid #E4D5C2;
}

.card-right {
    flex: 1;
    height: auto;
}

.card-icon {
    width: 30px;
    height: 34px;
    margin-bottom: 20px;
}

.card-icon img {
    width: 100%;
    height: 100%;
    object-fit: contain;
}

.card-title {
    font-family: 'Merriweather', serif;
    font-style: italic;
    font-weight: 300;
    margin: 0px;
    font-size: 24px;
    color: #122548;
    line-height: 140%;
}

.card-title-big {
    font-family: 'Satoshi', serif;
    font-weight: 400;
    margin: 0px;
    font-size: 48px;
    color: #0B162B;
    line-height: 110%;
}

.card-text {
    font-family: 'Satoshi', sans-serif;
    font-size: 16px;
    line-height: 180%;
    font-weight: 400;
    color: #122548;
}

.doctor-card {
    display: flex;
    align-items: center;
    margin-top: auto;
}

.doctor-photo {
    width: 60px;
    height: 60px;
    border-radius: 50%;
    overflow: hidden;
    margin-right: 15px;
}

.doctor-photo img {
    width: 100%;
    height: 100%;
    object-fit: cover;
}

.doctor-info {
    display: flex;
    flex-direction: column;
}

.doctor-name {
    font-family: 'Aboreto', sans-serif;
    font-size: 24px;
    font-weight: 400;
    color: #122548;
    text-transform: uppercase;
    letter-spacing: 1px;
    margin: 0;
}

.doctor-title {
    font-family: 'Satoshi', sans-serif;
    font-size: 16px;
    font-weight: 400px;
    line-height: 180%;
    color: #BC9667;
    margin: 0;
}

.special-header {
    font-family: 'Aboreto', sans-serif;
    font-size: 13px;
    color: #BC9667;
    text-transform: uppercase;
    letter-spacing: 160%;
    font-weight: 400;
}

.patient-image {
    width: 100%;
    height: auto;
    margin-top: 30px;
    overflow: hidden;
}

.patient-image img {
    opacity: 0.7;
    width: 100%;
    height: auto;
    object-fit: cover;
}

.action-buttons {
    display: flex;
    gap: 20px;
    margin-top: 0;
}

.primary-button {
    background-color: #BC9667;
    color: white;
    padding: 15px 25px;
    font-family: 'Aboreto', sans-serif;
    font-size: 18px;
    font-weight: 400;
    line-height: 130%;
    text-transform: uppercase;
    letter-spacing: 1.5px;
    border-radius: 4px;
    text-decoration: none;
    transition: background-color 0.3s;
}

.primary-button:hover {
    background-color: #a88457;
}

.secondary-button {
    display: flex;
    align-items: center;
    gap: 8px;
    font-family: 'Aboreto', sans-serif;
    font-size: 18px;
    font-weight: 400;
    color: #0B162B;
    text-transform: uppercase;
    text-decoration: none;
}

.secondary-button:hover {
    border-color: #A9722D;
}

.button-icon {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 32px;
    height: 32px;
    background-color: white;
    border: 0.5px solid #BC9667;
    border-radius: 50%;
    color: #0B162B;
    font-size: 24px;
}

@media (max-width: 992px) {
    .cards-container {
        flex-direction: column;
    }

    .title,
    .title-italic {
        font-size: 56px;
    }
}

@media (max-width: 768px) {

    .title,
    .title-italic {
        font-size: 42px;
    }

    .action-buttons {
        flex-direction: column;
    }
}
</style>