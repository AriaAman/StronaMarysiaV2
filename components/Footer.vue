<template>
  <footer class="footer">
    <div class="footer-content">
      <div class="footer-logo">
        <div class="mobile-divider" aria-hidden="true"></div>
        <NuxtImg 
          src="/static/footer/logoPiotrFooter.svg" 
          alt="Cabinet Dentaire Dr. Pietruszczak - Contact" 
          loading="lazy"
        />
        <div class="mobile-divider" aria-hidden="true"></div>
        <div class="social-title">OBSERWUJ NAS</div>
        <div class="social-links">
          <a href="https://www.facebook.com/pietruszczakstomatologia" class="social-link">
            <div class="social-icon">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#BC9667" class="bi bi-facebook" viewBox="0 0 16 16">
                <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951"/>
              </svg>
            </div>
            <span>FACEBOOK</span>
          </a>
          <a href="https://www.instagram.com/pietruszczak.stomatologia" class="social-link">
            <div class="social-icon">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#BC9667" class="bi bi-instagram" viewBox="0 0 16 16">
                <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.9 3.9 0 0 0-1.417.923A3.9 3.9 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.9 3.9 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.9 3.9 0 0 0-.923-1.417A3.9 3.9 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599s.453.546.598.92c.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.5 2.5 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.5 2.5 0 0 1-.92-.598 2.5 2.5 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233s.008-2.388.046-3.231c.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92s.546-.453.92-.598c.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92m-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217m0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334"/>
              </svg>
            </div>
            <span>INSTAGRAM</span>
          </a>
        </div>
      </div>

      <div class="footer-nav">
        <div class="nav-column">
          <h5>Na skróty</h5>
          <nav>
            <a href="/start" class="a">START</a>
            <a href="/uslugi" class="a">USŁUGI</a>
            <a href="/oNas" class="a">O NAS</a>
            <a href="/cennik" class="a">CENNIK</a>
            <a href="/technologie" class="a">TECHNOLOGIE</a>
            <a href="/kontakt" class="a">KONTAKT</a>
          </nav>
          <div class="cta-button">
            <a href="/reservation" class="btn-appointment">
              UMÓW WIZYTĘ
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-right" viewBox="0 0 16 16">
                <path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"/>
              </svg>
            </a>
          </div>
        </div>

        <div class="nav-column">
          <h5>Blog o zdrowiu</h5>
          <nav>
            <a href="#" class="a">JAK DBAĆ O ZĘBY?</a>
            <a href="#" class="a">WORK SINGLE</a>
            <a href="#" class="a">BLOG</a>
            <a href="#" class="a">BLOG POST</a>
          </nav>
        </div>

        <div class="nav-column">
          <h5>Skontaktuj się z nami</h5>
          <div class="contact-info">
            <p class="mini-title">TELEFON:</p>
            <a href="tel:+48503529023">+48 503 529 023</a>

            <p class="mini-title">ADRES:</p>
            <address>
              <a>Stawigudzka 8c/e,</a>
              <a>10-687 OLSZTYN</a>
            </address>
            <p class="map-link"><a href="/kontakt">WSKAZÓWKI DOJAZDU (MAPA)</a></p>
            <p class="mini-title">TAGI:</p>
            <div class="footer-tags">
              <span class="footer-tag">STOMATOLOGIA OLSZTYN</span>
              <span class="footer-tag">IMPLANTY OLSZTYN</span>
              <span class="footer-tag">STOMATOLOG OLSZTYN</span>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="footer-bottom">
      <div class="copyright">
        <p>© 2025 PIETRUSZCZAK STOMATOLOGIA & IMPLANTOLOGIA - Wszelkie prawa zastrzeżone | Design by Daria Georgie | Developer Aria Aman</p>
      </div>
      <a href="#" class="back-to-top" @click.prevent="scrollToTop">
        <span>DO GÓRY</span>
        <div class="arrow-circle">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-up" viewBox="0 0 16 16">
            <path fill-rule="evenodd" d="M8 15a.5.5 0 0 0 .5-.5V2.707l3.146 3.147a.5.5 0 0 0 .708-.708l-4-4a.5.5 0 0 0-.708 0l-4 4a.5.5 0 1 0 .708.708L7.5 2.707V14.5a.5.5 0 0 0 .5.5"/>
          </svg>
        </div>
      </a>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'Footer',
  methods: {
    scrollToTop() {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      })
    }
  }
}
</script>

<style scoped>
.footer {
  width: 100%;
  background-color: #fff;
}

.footer-content {
    max-width: 1200px;
    padding: clamp(32px, 5vw, 64px) clamp(16px, 6vw, 160px);
    margin: 0 auto;
    display: grid;
    grid-template-columns: minmax(260px, 1fr) minmax(0, 2fr);
    gap: clamp(24px, 4vw, 64px);
}

.footer-logo {
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 520px;
  align-items: center; 
  text-align: center;
}

.footer-logo img {
  width: clamp(160px, 28vw, 230px);
  height: auto;
  margin: 43px 0px;
}

.social-links {
  display: flex;
  flex-direction: column;
  gap: 16px;
  align-items: center; /* center socials under the title */
}

/* Desktop default for the social title */
.social-title {
  font-family: 'Aboreto', 'Aboreto';
  font-size: 14px;
  letter-spacing: 2px;
  color: #A9722D; 
  text-transform: uppercase;
  margin-bottom: 8px;
}

.social-link {
  display: flex;
  align-items: center;
  gap: 10px;
  text-decoration: none;
  color: #A9722D;
}

.social-icon {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 38px;
  height: 38px;
  border: 1px solid #DAC5A7;
  border-radius: 50%;
}

.social-link span {
  text-transform: uppercase;
  font-size: 13px;
  letter-spacing: 1.5px;
  font-weight: 400;
  font-family: 'Aboreto', 'Aboreto';
}

.footer-nav {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: clamp(16px, 3vw, 32px);
}

.nav-column {
  display: flex;
  flex-direction: column;
  min-width: 0;
}

.nav-column h5 {
  font-family: 'Aboreto', 'Aboreto';
  font-size: 18px;
  letter-spacing: 1px;
  line-height: 140%;
  color: #0B162B;
  font-weight: 300;
  margin-bottom: 20px;
  padding-bottom: 12px;
  border-bottom: 1px solid #DAC5A7; /* add divider under titles on desktop */
  text-transform: none;
}

.nav-column nav {
  display: flex;
  flex-direction: column;
  gap: 15px;
}

.nav-column .a {
  color: #A9722D;
  font-family: 'Aboreto', 'Aboreto';
  text-decoration: none;
  font-size: 13px;
  gap: 16px;
  letter-spacing: 1.5px;
  line-height: 160%;
  text-transform: uppercase;
  font-weight: 400;
}

.cta-button {
  margin-top: 30px;
}

.btn-appointment {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  background-color: #BC9667;
  color: #FFFFFF;
  padding: 10px 16px;
  text-decoration: none;
  line-height: 160%;
  font-size: 13px;
  font-family: 'Aboreto', 'Aboreto';
  letter-spacing: 1.5px;
  border-radius: 4px;
}

.contact-info {
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.contact-info p {
  color: #122548;
  font-size: 13px;
  line-height: 160%;
  letter-spacing: 1.5px;
  font-family: 'Aboreto', 'Aboreto';
  margin: 0;
}

.contact-info .mini-title {
  color: #0B162B;
  font-weight: 400;
  font-size: 13px;
  letter-spacing: 1.5px;
  font-family: 'Aboreto', 'Aboreto';
  line-height: 160%;
}

.contact-info a {
  color: #A9722D;
  text-decoration: underline;
  font-weight: 400;
  font-size: 13px;
  letter-spacing: 1.5px;
  font-family: 'Aboreto', 'Aboreto';
  line-height: 160%;
}

address {
  color: #A9722D;
  text-decoration: none;
  font-weight: 400;
  font-size: 13px;
  letter-spacing: 1.5px;
  font-family: 'Aboreto', 'Aboreto';
  line-height: 160%;
  font-style: normal;
  display: flex;
  flex-direction: column;
  gap: 5px;
}

/* Footer tags (based on oNas specialist-tag styles) */
.footer-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin-top: 8px;
}
.footer-tag {
  padding: 8px 10px;
  background-color: #F8F4F0;
  border: 1px solid #E4D5C2;
  color: #A9722D;
  font-family: 'Aboreto', 'Aboreto';
  font-size: 12px;
  text-transform: uppercase;
  border-radius: 4px;
}

.map-link {
  margin-top: 5px;
  text-decoration: underline;
  cursor: pointer;
}

/* Divider lines above and below the logo on desktop */
.mobile-divider {
  width: 100%;
  height: 1px;
  background: #DAC5A7;
  margin: 16px 0;
}

.footer-bottom {
  max-width: 1200px;
  padding: 0 clamp(16px, 6vw, 160px) 20px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 20px;
  gap: 16px;
  flex-wrap: wrap;
  border-top: 1px solid #DAC5A7;
}

.copyright p {
  font-family: 'Satoshi Variable', 'Satoshi';
  font-size: 12px;
  color: #A9722D;
  margin: 0;
  line-height: 180%;
  letter-spacing: 0.5px;
  font-weight: 400;
}

.back-to-top {
  font-family: 'Aboreto', 'Aboreto';
  display: flex;
  font-size: 13px;
  letter-spacing: 1.5px;
  line-height: 160%;
  align-items: center;
  text-transform: uppercase;
  gap: 32px;
  text-decoration: none;
  color: #0B162B;
}

.arrow-circle {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 46px;
  height: 46px;
  border-radius: 50%;
  background-color: #122548;
}

.arrow-circle svg {
  color: #fff;
}

/* Responsive breakpoints */
@media (max-width: 1024px) {
  .footer-content {
    /* Switch from grid to flex on tablet */
    display: flex;
    flex-direction: column;
    padding: 40px 32px;
    gap: 32px;
    align-items: stretch;
  }
  .footer-logo img {
    width: clamp(150px, 22vw, 200px);
  }
  .footer-logo {
    align-items: center;
    text-align: center;
    margin: 0 auto;
  }
  /* Tablet: socials stacked vertically under the title */
  .social-links {
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 12px;
  }
  /* Show dividers around the logo area on tablet too */
  .mobile-divider {
    width: 100%;
    height: 1px;
    background: #DAC5A7;
    margin: 12px 0 16px;
  }
  .social-title {
    font-family: 'Aboreto', sans-serif;
    font-size: 14px;
    letter-spacing: 2px;
    color: #A9722D;
    text-transform: uppercase;
    margin-bottom: 16px;
    margin-top: 40px;
  }
  /* Tablet: keep footer nav in three columns */
  .footer-nav {
    display: grid;
    grid-template-columns: repeat(3, minmax(0, 1fr));
    column-gap: 24px;
    row-gap: 28px;
  }
  .nav-column h5 {
    margin-bottom: 12px;
    padding-bottom: 12px;
    border-bottom: 1px solid #DAC5A7;
    font-size: 16px; /* tablet heading size */
  }
  .btn-appointment {
    font-size: 12px;
    padding: 8px 12px;
  }
  .footer-bottom {
    padding: 0 32px 20px;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }
}

@media (max-width: 640px) {
  .footer-content {
    padding: clamp(28px, 6vw, 48px) clamp(14px, 5vw, 24px);
    display: flex;
    flex-direction: column;
    gap: 28px;
  }
  .footer-logo img {
    width: clamp(150px, 45vw, 220px);
    margin-bottom: 24px;
  }
  .footer-logo {
    align-items: center;
    text-align: center;
    margin: 0 auto;
  }
  .mobile-divider {
    width: 100%;
    height: 1px;
    background: #DAC5A7;
    margin: 12px 0 16px;
  }
  .social-title {
    font-family: 'Aboreto', 'Aboreto';
    font-size: 13px;
    letter-spacing: 1.5px;
    color: #A9722D;
    text-transform: uppercase;
    margin-bottom: 16px;
  }
  .social-links {
    flex-direction: row;
    justify-content: center;
    gap: 16px;
  }
  /* Stack all nav columns using flex instead of grid */
  .footer-nav {
    display: flex;
    flex-direction: column;
    gap: 24px;
  }
  .nav-column h5 {
    margin-bottom: 12px;
    padding-bottom: 12px;
    font-size: 20px;
    border-bottom: 2px solid #BC9667;
  }
  .btn-appointment {
    font-size: 12px;
    padding: 8px 14px;
  }
  .footer-bottom {
    flex-direction: column;
    align-items: center;
    text-align: center;
  }
  .back-to-top {
    gap: 16px;
  }
  .arrow-circle {
    width: 40px;
    height: 40px;
  }
}
</style>
