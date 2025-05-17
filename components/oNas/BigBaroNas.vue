<template>
  <div class="specialists-section">
    <div class="specialists-content">
      <h2 class="specialists-title">
        Nasi specjaliści
        <span class="specialists-subtitle">stomatologii</span>
      </h2>
      <p class="specialists-description">
        Za sukcesem zdrowego i pięknego uśmiechu stoi zespół pełen pasji, doświadczenia i zaangażowania.
        Jesteśmy grupą specjalistów, których łączy jeden cel — zapewnienie naszym pacjentom najwyższego
        standardu opieki stomatologicznej w przyjaznej atmosferze.
      </p>
      <a href="#specjalisci" class="specialists-button">
        <span class="button-icon">
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="#BC9667" class="bi bi-arrow-down" viewBox="0 0 16 16">
                <path fill-rule="evenodd" d="M8 1a.5.5 0 0 1 .5.5v11.793l3.146-3.147a.5.5 0 0 1 .708.708l-4 4a.5.5 0 0 1-.708 0l-4-4a.5.5 0 0 1 .708-.708L7.5 13.293V1.5A.5.5 0 0 1 8 1"/>
            </svg>
        </span>
        POZNAJ SPECJALISTÓW
      </a>
    </div>
  </div>
</template>

<script setup>
// Aucune logique nécessaire pour ce composant statique
</script>

<style scoped>
.specialists-section {
  background-color: #D7C0A4;
  padding: 4rem 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
}

.specialists-content {
  max-width: 900px;
  text-align: center;
}

.specialists-title {
  font-family: 'Satoshi Variable ', 'Satoshi';
  font-weight: 100;
  font-size: 96px;
  line-height: 100%;
  color: #0B162B;
  margin-bottom: 0;
}

.specialists-subtitle {
  display: block;
  font-family: 'Merriweatther', 'Merriweather';
  font-style: italic;
  font-weight: 300;
  font-size: 96px;
  line-height: 100%;
  color: #0B162B;
}

.specialists-description {
  font-family: 'Satoshi Variable', 'Satoshi';
  font-size: 20px;
  font-weight: 400;
  line-height: 170%;
  letter-spacing: 0px;
  margin: 2rem 0;
  color: #122548;
}

.specialists-button {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  background: transparent;
  border: none;
  cursor: pointer;
  font-family: 'Aboreto', 'Aboreto';
  font-weight: 400;
  font-size: 18px;
  color: #0B162B;
  padding: 0.5rem 1rem;
  text-decoration: none;
}

.button-icon {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 46px;
  height: 46px;
  background-color: white;
  border-radius: 50%;
}

@media (max-width: 768px) {
  .specialists-title, .specialists-subtitle {
    font-size: 60px;
  }
  
  .specialists-description {
    font-size: 16px;
  }
}
</style> 