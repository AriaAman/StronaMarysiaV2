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
                <NuxtImg src="/static/uslugi/circle-pietrus.png" alt="" class="btn-circle" loading="lazy" />
                <a href="/reservation" class="reservation-btn">
                    <NuxtImg src="/static/icons/online-icon.png" alt="" class="btn-icon" loading="lazy" />
                    REZERWACJA ONLINE
                </a>
            </div>
        </div>
    </section>
</template>

<script setup>

</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Satoshi:wght@300;400;500&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Aboreto&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Merriweather:ital,wght@0,300;1,300;1,400&display=swap');

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
    padding: 0 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
}

.content-left {
    flex: 1;
    max-width: 800px;
    display: flex;
    flex-direction: column;
    align-items: center;
}

.subheading {
    font-family: 'Aboreto', 'Aboreto';
    font-size: 13px;
    font-weight: 400;
    letter-spacing: 1.5px;
    text-transform: uppercase;
    color: #FFFFFF;
    margin-bottom: 24px;
    line-height: 160%;
}

.main-title {
    font-family: 'Satoshi', 'Satoshi';
    font-size: clamp(40px, 8vw, 96px);
    font-weight: 300;
    line-height: 100%;
    color: #0B162B;
    margin: 0 0 16px 0;
    text-align: center;
}

.subtitle {
    font-family: 'Satoshi', 'Satoshi';
    font-style: italic;
    font-weight: 500;
    font-size: clamp(36px, 7.5vw, 96px);
    line-height: 110%;
    display: block;
    white-space: normal;
}

.description {
    font-family: 'Satoshi', 'Satoshi';
    font-size: clamp(16px, 2.2vw, 20px);
    line-height: 140%;
    font-weight: 400;
    color: #FFFFFF;
    margin: 16px 0 0 0;
    text-align: center;
    max-width: 680px;
    margin-bottom: 40px;
}

.reservation-btn {
    display: inline-flex;
    align-items: center;
    gap: 12px;
    color: #0B162B;
    padding: 14px 22px;
    text-decoration: none;
    font-family: 'Aboreto', 'Aboreto';
    font-size: clamp(14px, 1.8vw, 18px);
    font-weight: 400;
    text-transform: uppercase;
    letter-spacing: 1.5px;
    transition: all 0.3s ease;
}

.reservation-btn:hover {
    transform: translateY(8px);
}

.btn-icon {
    width: 32px;
    height: 32px;
    border-radius: 50%;
    background: #fff;
    padding: 6px;
}

.btn-circle {
    display: none;
}

/* Responsive styles remain the same */
@media (max-width: 1023px) {
    .first-visit-section {
        padding-top: 100px;
        padding-bottom: 80px;
    }
}

@media (max-width: 767px) {
    .first-visit-section {
        padding: 60px 0;
    }

    .first-visit-container {
        padding: 0 20px;
    }

    .reservation-btn {
        padding: 12px 18px;
    }
}

/* Desktop safeguard to preserve original spacing */
@media (min-width: 1200px) {
    .first-visit-container {
        padding: 0 40px;
    }
    .main-title {
        margin-bottom: 24px;
    }
    .reservation-btn {
        font-size: 18px;
        padding: 16px 24px;
    }
}
</style>