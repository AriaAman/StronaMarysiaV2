<template>
    <section class="first-visit-section">
        <div class="first-visit-container">
            <div class="content-left">
                <p class="subheading">ZRÓB KROK W STRONĘ ZDROWIA</p>
                <h2 class="main-title">
                    Pierwsza wizyta?<br />
                    <span class="subtitle">Zarezerwuj ją już teraz!</span>
                </h2>
                <p class="description">
                    Czas na pierwszy krok do perfekcyjnego uśmiechu.<br />
                    Umów swoją wizytę i zacznij dbać o zdrowie jamy ustnej.
                </p>
                <img src="/public/static/uslugi/circle-pietrus.png" alt="" class="btn-circle" />
                <a href="#" class="reservation-btn">
                    <img src="/public/static/icons/online-icon.png" alt="" class="btn-icon" />
                    REZERWACJA ONLINE
                </a>
            </div>
        </div>
    </section>
</template>

<script setup>
// No specific logic needed
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Satoshi:wght@300;400;500&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Aboreto&display=swap');

.first-visit-section {
    background-color: #BC9667;
    padding-top: 140px;
    padding-bottom: 96px;
    position: relative;
    overflow: hidden;
}

.first-visit-container {
    max-width: 1440px;
    margin: 0 auto;
    padding: 0 40px;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
}

.content-left {
    flex: 1;
    max-width: 600px;
    display: flex;
    flex-direction: column;
    align-items: center;
}

.subheading {
    font-family: 'Aboreto', sans-serif;
    font-size: 13px;
    font-weight: 400;
    letter-spacing: 1.5px;
    text-transform: uppercase;
    color: #FFFFFF;
    margin-bottom: 24px;
    line-height: 160%;
}

.main-title {
    font-family: 'Satoshi', sans-serif;
    font-size: 96px;
    font-weight: 300;
    line-height: 100%;
    color: #0B162B;
    margin: 0 0 24px 0;
    text-align: center;
}

.subtitle {
    font: italic 300 96px 'Merriweather', serif;
    display: inline;
    white-space: nowrap
}

.description {
    font-family: 'Satoshi', sans-serif;
    font-size: 20px;
    line-height: 160%;
    font-weight: 300;
    color: #FFFFFF;
    margin: 0 0 0 0;
    text-align: center;
}

.reservation-btn {
    display: inline-flex;
    align-items: center;
    gap: 12px;
    color: #0B162B;
    padding: 16px 24px;
    text-decoration: none;
    font-family: 'Aboreto', sans-serif;
    font-size: 18px;
    font-weight: 400;
    text-transform: uppercase;
    letter-spacing: 1.5px;
    transition: all 0.3s ease;
}

.reservation-btn:hover {
    transform: translateY(-8px);
}

.btn-icon {
    width: 32px;
    height: 32px;
}

.btn-circle {
    width: 15%;
    height: 15%;
    margin-left: 85%;
}

/* Responsive styles remain the same */
@media (max-width: 1023px) {
    .main-title {
        font-size: 56px;
    }
}

@media (max-width: 767px) {
    .first-visit-section {
        padding: 60px 0;
    }

    .first-visit-container {
        padding: 0 20px;
    }

    .main-title {
        font-size: 40px;
    }

    .description {
        font-size: 18px;
    }

    .reservation-btn {
        font-size: 16px;
        padding: 14px 20px;
    }
}
</style>