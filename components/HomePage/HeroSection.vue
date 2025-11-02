<template>
    <section class="hero-section">
        <div class="background-image">
            <NuxtImg src="/static/HomePage/FirstImageHomepage.jpg" alt="Background" loading="eager" />
        </div>

        <div class="overlay-panel"></div>

        <div class="hero-content">
            <h1 class="hero-title">
                Odkryj miejsce gdzie zdrowie <br>& estetyka tworzą idealny uśmiech 
                <span class="hero-title-italic">- Twój uśmiech</span>
            </h1>
            <div class="hero-text">
                <p>Twoje zdrowie i piękny uśmiech w rękach specjalistów, którym możesz zaufać.</p>
                <p>Przekonaj się, jak kompleksowa opieka może odmienić Twój uśmiech!</p>
            </div>
            <div class="hero-button-container">
                <a href="#uslugi" class="hero-button">
                    <span class="button-icon">
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 16 16" fill="#fff">
                          <path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8"/>
                        </svg>
                    </span>
                    <NuxtLink to="/uslugi" class="button-text">SPRAWDŹ OFERTĘ</NuxtLink>
                </a>
            </div>
        </div>
        <div class="logo-circle">
            <NuxtImg src="/static/HomePage/LogoCircleHomepage.svg" alt="Pietruszczak Logo" loading="lazy" />
        </div>
    </section>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Aboreto&family=Satoshi:wght@300;400;500;700&display=swap');

.hero-section {
    position: relative;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    color: #0B162B;
    padding: 0 20px;
    overflow: hidden;
}

.background-image {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: -1;
}

.background-image img {
    width: 100%;
    height: 100%;
    object-fit: cover;
}

/* Translucent band to mimic the mockup */
.overlay-panel {
    position: absolute;
    left: 0;
    right: 0;
    opacity: 0.8;
    top: 18%;
    bottom: 18%;
    background: rgba(255, 255, 255, 0.82);
    backdrop-filter: blur(2px);
}

.hero-content {
    max-width: 1440px;
    height: auto;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    z-index: 1;
}

.meta {
    font-family: 'Aboreto', 'Aboreto';
    font-size: 14px;
    letter-spacing: 2px;
    color: #0B162B;
    text-transform: uppercase;
    margin-bottom: 8px;
}

.hero-title {
    font-family: 'Satoshi', 'Satoshi';
    font-weight: 300;
    font-size: 64px;
    line-height: 110%;
    margin-bottom: 24px;
    margin-top: 0px;
    text-align: center;
}

.hero-title-italic {
    display: block;
    font-family: 'Satoshi', 'Satoshi';
    font-style: italic;
    font-weight: 500;
    font-size: 64px;
    line-height: 110%;;
}

.hero-text {
    font-family: 'Satoshi', 'Satoshi';
    max-width: 885px;
    color: #0B162B;
    font-size: 24px;
    line-height: 150%;
    font-weight: 300;
    width: 100%;
    text-align: center;
    margin-bottom: 32px;
}

.hero-text p {
    font-family: 'Satoshi', 'Satoshi';
    font-size: 24px;
    font-weight: 300;
    line-height: 150%;
    color: #0B162B;
    margin: 0;
}

.hero-button-container {
    display: flex;
    justify-content: center;
}

.hero-button {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 12px;
    background: #FFFFFF;
    border: 1px solid #E4D5C2;
    cursor: pointer;
    text-decoration: none;
    padding: 10px 18px;
    border-radius: 24px;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.06);
}

.button-icon {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 32px;
    height: 32px;
    background-color: #BC9667;
    border-radius: 50%;
    color: #FFFFFF;
}

.button-text {
    font-family: 'Aboreto', serif;
    font-size: 14px;
    font-weight: 400;
    line-height: 160%;
    text-decoration: none;
    color: #0B162B;
    text-transform: uppercase;
    letter-spacing: 1.5px;
    cursor: pointer;
    
}

.logo-circle {
    position: absolute;
    width: 142px;
    height: 142px;
    right: 20%;
    bottom: 15%;
    border-radius: 50%;
    z-index: 1;
}

/* Tablet */
@media (max-width: 1024px) {
    .hero-content {
        height: auto;
    }
    .hero-title {
        font-size: 64px;
        line-height: 105%;
    }
    .hero-title-italic {
        font-size: 68px;
        line-height: 105%;
    }
    .hero-text,
    .hero-text p {
        font-size: 18px;
    }
    .overlay-panel { top: 14%; bottom: 20%; }
    .logo-circle {
        width: 120px;
        height: 120px;
        right: 10%;
        bottom: 12%;
    }
}

/* Mobile */
@media (max-width: 768px) {
    .overlay-panel {
        top: 10%;
        bottom: 10%;
    }

    .hero-section {
        padding: 0 16px;
    }

    .hero-title {
        font-size: 32px;
        line-height: 115%;
        margin-bottom: 16px;
    }

    .hero-title-italic {
        font-size: 36px;
        line-height: 115%;
    }

    .hero-text {
        max-width: 100%;
        font-size: 14px;
        line-height: 150%;
        margin-bottom: 24px;
    }

    .hero-text p {
        font-size: 14px;
    }

    .hero-button { 
        padding: 8px 14px;
        gap: 8px;
    }
    .button-icon { 
        width: 26px; 
        height: 26px; 
    }
    .button-icon svg {
        width: 14px;
        height: 14px;
    }
    .button-text { 
        font-size: 11px;
        letter-spacing: 1.2px;
    }

    .logo-circle {
        width: 80px;
        height: 80px;
        right: 12px;
        bottom: 20px;
    }
}
</style>