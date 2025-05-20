<!-- ServiceBlocks.vue -->
<template>
    <div class="services-container">
        <div class="services-grid">
            <div v-for="(service, index) in services" :key="index" class="service-card">
                <div class="service-number">{{ service.number }}</div>
                <h2 class="service-title">{{ service.title }}</h2>
                <p class="service-description">{{ service.description }}</p>
                <div class="service-button">
                    <div class="button-circle">
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="#E4D5C2"
                            class="bi bi-arrow-right" viewBox="0 0 16 16">
                            <path fill-rule="evenodd"
                                d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8" />
                        </svg>
                    </div>
                    <span class="button-text">{{ service.buttonText }}</span>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
const services = [
    {
        number: '01',
        title: 'PROFESJONALNY ZESPÓŁ',
        description: 'Nasz zespół to grupa doświadczonych specjalistów, którzy łączą swoją wiedzę z prawdziwą troską o Pacjenta. Istotny jest dla nas nie tylko wynik leczenia, ale również relacja pacjent-dentysta, oparta na zaufaniu, komunikacji i wyjątkowej opiece.',
        buttonText: 'ZOBACZ NASZ ZESPÓŁ'
    },
    {
        number: '02',
        title: 'TECHNOLOGIE',
        description: 'Aby zapewnić najlepsze efekty leczenia, inwestujemy w najwyższej jakości sprzęt i materiały od renomowanych producentów, co w połączeniu z doświadczeniem naszych lekarzy gwarantuje usługi stomatologiczne na najwyższym poziomie.',
        buttonText: 'ZOBACZ TECHNOLOGIE'
    },
    {
        number: '03',
        title: 'SZEROKI ZAKRES USŁUG',
        description: 'Niezależnie od tego, czy potrzebujesz implantów, zabiegu higienizacji, leczenia kanałowego pod mikroskopem, stomatologii dziecięcej czy badania w pracowni tomografii komputerowej CBCT - możemy Ci pomóc.',
        buttonText: 'PRZEJDŹ DO USŁUG'
    }
]
</script>

<style scoped>
.services-container {
    position: relative;
    width: 100%;
    padding: 120px 0;
    z-index: 1;
}

.services-container::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-image: url('/static/HomePage/FondHomePageCat.png');
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    opacity: 0.5;
    z-index: -1;
}

.services-grid {
    position: relative;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: 52px;
    margin: 0 auto;
    padding: 0 20px;
    z-index: 2;
}

.service-card {
    background-color: #FFFFFF;
    border: 1px solid #E4D5C2;
    border-radius: 2px;
    padding: 48px;
    width: 345px;
    display: flex;
    flex-direction: column;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
}

.service-number {
    font-family: 'Aboreto', 'Aboreto';
    color: #A9722D;
    font-size: 13px;
    margin-bottom: 4px;
    letter-spacing: 1.5px;
    font-weight: 400;
}

.service-title {
    font-family: 'Aboreto', 'Aboreto';
    font-size: 24px;
    font-weight: 400;
    margin: 0px;
    line-height: 130%;
    color: #0B162B;
    text-transform: uppercase;
    letter-spacing: 1px;
}

.service-description {
    font-family: 'Satoshi Variable', 'Satoshi Variable';
    font-size: 16px;
    line-height: 180%;
    color: #122548;
    margin-bottom: 8px;
    font-weight: 400;
}

.service-button {
    display: flex;
    align-items: center;
    cursor: pointer;
    margin-top: 20px;
}

.button-circle {
    width: 30px;
    height: 30px;
    border-radius: 50%;
    border: 1px solid #E4D5C2;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-right: 15px;
}

.arrow {
    color: #A9722D;
    font-size: 18px;
}

.button-text {
    font-family: 'Aboreto', sans-serif;
    font-size: 16px;
    color: #0B162B;
    text-transform: uppercase;
    letter-spacing: 1px;
}

/* Responsive */
@media (max-width: 1200px) {
    .services-grid {
        gap: 20px;
    }

    .service-card {
        padding: 30px;
        max-width: 350px;
    }
}

@media (max-width: 768px) {
    .services-container {
        padding: 40px 0;
    }

    .services-grid {
        flex-direction: column;
        align-items: center;
    }

    .service-card {
        max-width: 85%;
    }

    .service-title {
        font-size: 20px;
    }
}
</style>