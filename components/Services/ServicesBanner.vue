<template>
    <div class="services-banner">
        <div class="services-container">
            <div class="services-list">
                <span class="service-item">
                    IMPLANTOLOGIA DENTYSTYCZNA
                    <span class="separator">+++</span>
                </span>
                <span class="service-item">
                    &nbsp;LECZENIE KANAŁOWE
                    <span class="separator">+++</span>
                </span>
                <span class="service-item">
                    &nbsp;PROTETYKA
                    <span class="separator">+++</span>
                </span>
                <span class="service-item">
                    &nbsp;STOMATOLOGIA ESTETYCZNA
                    <span class="separator">+++</span>
                </span>
                <span class="service-item">
                    &nbsp;STOMATOLOGIA ZACHOWAWCZA
                    <span class="separator">+++</span>
                </span>
                <span class="service-item">
                    &nbsp;DIAGNOSTYKA
                    <span class="separator">+++</span>
                </span>
                <span class="service-item">
                    &nbsp;PROFILAKTYKA
                    <span class="separator">++++</span>
                </span>
                <span class="service-item">
                    &nbsp;CHIRURGIA STOMATOLOGICZNA
                </span>
            </div>
        </div>
    </div>
</template>

<script setup>
</script>

<style scoped>
.services-banner {
    background-color: #ffffff;
    padding: 16px 0;
    border-bottom: 1px solid #e4d5c2;
    border: #BC9667 1px solid;
}

.services-container {
    max-width: 1440px;
    margin: 0 auto;
    padding: 0 40px;
}

.services-list {
    display: flex;
    justify-content: space-between;
    align-items: center;
    white-space: nowrap;
    overflow: hidden;
}

.service-item {
    font-family: 'Aboreto', sans-serif;
    font-size: 12px;
    font-weight: 400;
    letter-spacing: 1.5px;
    text-transform: uppercase;
    color: #0B162B;
    display: flex;
    align-items: center;
    gap: 24px;
    white-space: nowrap;
    flex-shrink: 0;
}

.separator {
    color: #BC9667;
    font-size: 14px;
    margin: 0 8px;
}

@media (max-width: 1280px) {
    .service-item {
        font-size: 11px;
    }

    .services-list {
        gap: 8px;
    }
}

@media (max-width: 768px) {
    .services-container {
        padding: 0 20px;
    }

    .service-item {
        font-size: 10px;
    }
}
</style>