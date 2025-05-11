<template>
    <section class="hero-section">
        <div class="background-image">
            <img src="/static/HomePage/FirstImageHomepage.jpg" alt="Background" />
        </div>

        <div class="hero-content">
            <h1 class="hero-title">
                Odkryj miejsce gdzie zdrowie
                <span class="hero-title-italic">&amp; estetyka tworzą idealny</span>
                <span class="hero-title-italic">uśmiech - Twój uśmiech</span>
            </h1>
            <div class="hero-text">
                <p>Twoje zdrowie i piękny uśmiech w rękach specjalistów, którym możesz zaufać.</p>
                <p>Przekonaj się, jak kompleksowa opieka może odmienić Twój uśmiech!</p>
            </div>
            <div class="hero-button-container">
                <a href="#" class="hero-button">
                    <span class="button-icon">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="#BC9667"
                            class="bi bi-arrow-down-short" viewBox="0 0 16 16">
                            <path fill-rule="evenodd"
                                d="M8 4a.5.5 0 0 1 .5.5v5.793l2.146-2.147a.5.5 0 0 1 .708.708l-3 3a.5.5 0 0 1-.708 0l-3-3a.5.5 0 1 1 .708-.708L7.5 10.293V4.5A.5.5 0 0 1 8 4" />
                            </svg>
                    </span>
                    <span class="button-text">BUTTON TEXT</span>
                </a>
            </div>
        </div>
        <div class="logo-circle">
            <img src="/static/HomePage/LogoCircleHomepage.svg" alt="Pietruszczak Logo" />
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
    opacity: 0.32;
}

.hero-content {
    max-width: 1440px;
    height: 542px;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    z-index: 1;
}

.hero-title {
    font-family: 'Satoshi', sans-serif;
    font-weight: 200;
    font-size: 96px;
    line-height: 100%;
    margin-bottom: 24px;
    text-align: center;
}

.hero-title-italic {
    display: block;
    font-family: 'Satoshi', sans-serif;
    font-style: italic;
    font-weight: 400;
    font-size: 96px;
    line-height: 100%;
}

.hero-text {
    font-family: 'Satoshi', system-ui;
    max-width: 885px;
    color: #0B162B;
    font-size: 24px;
    line-height: 150%;
    font-weight: 300;
    width: 100%;
    text-align: center;
    margin-bottom: 48px;
}

.hero-text p {
    font-family: 'Satoshi', sans-serif;
    font-size: 24px;
    font-weight: 300;
    line-height: 150%;
    color: #0B162B;
    margin: 0;
}

.hero-button-container {
    display: flex;
    justify-content: center;
    margin-top: 32px;
}

.hero-button {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
    background: transparent;
    border: none;
    cursor: pointer;
    text-decoration: none;
}

.button-icon {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 40px;
    height: 40px;
    background-color: white;
    border-radius: 50%;
    color: #0B162B;
    font-size: 24px;
}

.button-text {
    font-family: 'Aboreto', serif;
    font-size: 18px;
    font-weight: 400;
    line-height: 130%;
    color: #0B162B;
    text-transform: uppercase;
    letter-spacing: 0px;
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

@media (max-width: 768px) {
    .hero-title {
        font-size: 42px;
    }

    .hero-title-italic {
        font-size: 46px;
    }

    .hero-text {
        max-width: 100%;
    }
}
</style>