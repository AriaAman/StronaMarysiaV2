<template>
    <header>
        <div class="container">
            <div class="logo">
                <NuxtLink to="/">
                    <NuxtImg 
                        src="/static/header/logoPiotr.svg" 
                        alt="Cabinet Dentaire Dr. Pietruszczak - Logo" 
                        width="200"
                        height="60"
                        loading="eager"
                    />
                </NuxtLink>
            </div>
            <nav class="main-nav">
                <ul>
                    <li><NuxtLink to="/" class="header-link">START</NuxtLink></li>
                    <li><a href="/oNas" class="header-link">O NAS</a></li>
                    <li><NuxtLink to="/uslugi" class="header-link">USŁUGI</NuxtLink></li>
                    <li><a class="reservation-btn" href="/reservation">REZERWACJA ONLINE</a></li>
                    <li><a href="/technologie" class="header-link">TECHNOLOGIE</a></li>
                    <li><a href="/cennik" class="header-link">CENNIK</a></li>
                    <li><a href="/kontakt" class="header-link">KONTAKT</a></li>
                </ul>
            </nav>
            <p class="number">+48 503 529 023</p>
            <div class="menu-toggle" @click="toggleMobileMenu">
                <div class="hamburger" :class="{ 'is-active': isMobileMenuOpen }">
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </div>
        </div>

        <!-- Mobile Menu Overlay -->
        <div class="mobile-menu-overlay" :class="{ 'is-open': isMobileMenuOpen }" @click="closeMobileMenu">
            <nav class="mobile-nav" @click.stop>
                <div class="mobile-nav-header">
                    <div class="mobile-logo">
                        <NuxtImg 
                            src="/static/header/logoPiotr.svg" 
                            alt="Cabinet Dentaire Dr. Pietruszczak - Logo Mobile" 
                            width="150"
                            height="45"
                            loading="eager"
                            format="svg"
                        />
                    </div>
                    <button class="close-btn" @click="closeMobileMenu">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                            <path d="M18 6L6 18M6 6L18 18" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
                        </svg>
                    </button>
                </div>
                <ul class="mobile-nav-list">
                    <li><NuxtLink to="/" class="mobile-link" @click="closeMobileMenu">START</NuxtLink></li>
                    <li><a href="/oNas" class="mobile-link" @click="closeMobileMenu">O NAS</a></li>
                    <li><NuxtLink to="/uslugi" class="mobile-link" @click="closeMobileMenu">USŁUGI</NuxtLink></li>
                    <li><a href="/technologie" class="mobile-link" @click="closeMobileMenu">TECHNOLOGIE</a></li>
                    <li><a href="/cennik" class="mobile-link" @click="closeMobileMenu">CENNIK</a></li>
                    <li><a href="/kontakt" class="mobile-link" @click="closeMobileMenu">KONTAKT</a></li>
                    <div class="mobile-cta">
                    <a class="mobile-reservation-btn" href="/reservation" @click="closeMobileMenu">REZERWACJA ONLINE</a>
                </div>
                </ul>
            </nav>
        </div>
    </header>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const isMobileMenuOpen = ref(false)

const toggleMobileMenu = () => {
    isMobileMenuOpen.value = !isMobileMenuOpen.value
    // Prevent body scroll when menu is open
    if (isMobileMenuOpen.value) {
        document.body.style.overflow = 'hidden'
    } else {
        document.body.style.overflow = ''
    }
}

const closeMobileMenu = () => {
    isMobileMenuOpen.value = false
    document.body.style.overflow = ''
}

// Close menu on escape key
const handleKeydown = (e) => {
    if (e.key === 'Escape' && isMobileMenuOpen.value) {
        closeMobileMenu()
    }
}

// Close menu on window resize to desktop
const handleResize = () => {
    if (window.innerWidth > 768 && isMobileMenuOpen.value) {
        closeMobileMenu()
    }
}

onMounted(() => {
    document.addEventListener('keydown', handleKeydown)
    window.addEventListener('resize', handleResize)
})

onUnmounted(() => {
    document.removeEventListener('keydown', handleKeydown)
    window.removeEventListener('resize', handleResize)
    // Clean up body overflow on component unmount
    document.body.style.overflow = ''
})
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Aboreto&family=Yesteryear&display=swap');
@import url('https://fonts.cdnfonts.com/css/satoshi?styles=135009');
header {
    width: 100%;
    background-color: #fff;
    border-bottom: 1px solid #eee;
}

.number {
    font-family: 'Aboreto', system-ui;
    font-weight: 400;
    font-size: 18px;
    line-height: 100%;
    letter-spacing: 1%;
    color: #A9722D;
    margin: 0;
}

.container {
    max-width: 1440px;
    margin: 0 auto;
    padding: 0 15px;
    display: grid;
    grid-template-columns: auto 1fr auto;
    align-items: center;
    height: 84px;
    gap: 20px;
}

.logo img {
    height: 45px;
}

.main-nav {
    justify-self: center;
}

.main-nav ul {
    display: flex;
    list-style: none;
    margin: 0;
    padding: 0;
    gap: 4px;
    align-items: center;
    justify-content: center;
    flex-wrap: nowrap;
}

.header-link {
    color: #122548;
    text-decoration: none;
    font-family: 'Aboreto', system-ui;
    font-weight: 400;
    font-size: 16px;
    text-transform: uppercase;
    padding: 8px 12px;
    letter-spacing: 1%;
    line-height: 100%;
    display: inline-block;
    transition: color 0.3s ease;
    white-space: nowrap;
}

.header-link:hover {
    color: #BC9667;
}

.reservation-btn {
    background-color: #BC9667;
    color: white;
    border-radius: 4px;
    padding: 10px 14px;
    font-family: 'Satoshi', sans-serif;
    font-weight: 400;
    font-size: 13px;
    text-transform: uppercase;
    text-decoration: none;
    letter-spacing: 1.2px;
    line-height: 140%;
    display: inline-block;
    transition: background-color 0.3s ease;
    white-space: nowrap;
    margin: 0 4px;
}

.reservation-btn:hover {
    background-color: #A88457;
}

.menu-toggle {
    display: none;
    cursor: pointer;
    justify-self: end;
}

/* Hamburger Menu Styles */
.hamburger {
    width: 24px;
    height: 18px;
    position: relative;
    cursor: pointer;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
}

.hamburger span {
    width: 100%;
    height: 2px;
    background-color: #122548;
    transition: all 0.3s ease;
    transform-origin: center;
}

.hamburger.is-active span:nth-child(1) {
    transform: rotate(45deg) translate(6px, 6px);
}

.hamburger.is-active span:nth-child(2) {
    opacity: 0;
}

.hamburger.is-active span:nth-child(3) {
    transform: rotate(-45deg) translate(6px, -6px);
}

/* Mobile Menu Overlay */
.mobile-menu-overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    background-color: rgba(0, 0, 0, 0.8);
    z-index: 9999;
    opacity: 0;
    visibility: hidden;
    transition: all 0.3s ease;
}

.mobile-menu-overlay.is-open {
    opacity: 1;
    visibility: visible;
}

.mobile-nav {
    position: absolute;
    top: 0;
    right: 0;
    width: min(400px, 85vw);
    height: 100vh;
    background-color: #fff;
    padding: 20px;
    transform: translateX(100%);
    transition: transform 0.3s ease;
    overflow-y: auto;
    display: flex;
    flex-direction: column;
}

.mobile-menu-overlay.is-open .mobile-nav {
    transform: translateX(0);
}

.mobile-nav-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 40px;
    padding-bottom: 20px;
    border-bottom: 1px solid #eee;
}

.mobile-logo img {
    height: 35px;
}

.close-btn {
    background: none;
    border: none;
    cursor: pointer;
    padding: 8px;
    color: #122548;
    display: flex;
    align-items: center;
    justify-content: center;
}

.mobile-nav-list {
    list-style: none;
    margin: 0;
    padding: 0;
    flex: 1;
}

.mobile-nav-list li {
    margin-bottom: 8px;
}

.mobile-link {
    display: block;
    color: #122548;
    text-decoration: none;
    font-family: 'Aboreto', sans-serif;
    font-weight: 400;
    font-size: 18px;
    text-transform: uppercase;
    padding: 16px 0;
    letter-spacing: 1px;
    border-bottom: 1px solid #f0f0f0;
    transition: all 0.3s ease;
}

.mobile-link:hover {
    color: #BC9667;
    padding-left: 10px;
}

.mobile-cta {
    margin-top: 30px;
    padding-top: 20px;
}

.mobile-reservation-btn {
    display: block;
    background-color: #BC9667;
    color: white;
    border-radius: 4px;
    padding: 16px 20px;
    font-family: 'Satoshi', sans-serif;
    font-weight: 400;
    font-size: 16px;
    text-transform: uppercase;
    text-decoration: none;
    letter-spacing: 1.5px;
    line-height: 1.4;
    text-align: center;
    transition: background-color 0.3s ease;
}

.mobile-reservation-btn:hover {
    background-color: #A88457;
}

/* Desktop large (1400px+) */
@media (min-width: 1400px) {
    .container {
        max-width: 1600px;
        gap: 12px;
    }

    .header-link {
        font-size: 17px;
        padding: 8px 16px;
    }

    .reservation-btn {
        font-size: 14px;
        padding: 10px 16px;
        letter-spacing: 1.3px;
    }
}

/* Desktop standard (1201px - 1399px) */
@media (max-width: 1399px) and (min-width: 1201px) {
    .container {
        gap: 8px;
    }

    .header-link {
        font-size: 16px;
        padding: 8px 14px;
    }

    .reservation-btn {
        font-size: 13px;
        padding: 10px 12px;
        letter-spacing: 1.1px;
    }
}

/* Tablet large (1024px - 1200px) */
@media (max-width: 1200px) and (min-width: 1025px) {
    .container {
        padding: 0 24px;
        gap: 8px;
    }

    .header-link {
        font-size: 15px;
        padding: 6px 10px;
    }

    .reservation-btn {
        font-size: 12px;
        padding: 8px 10px;
        letter-spacing: 1px;
    }
}

/* Tablet medium (768px - 1024px) */
@media (max-width: 1024px) and (min-width: 769px) {
    .container {
        padding: 0 20px;
        gap: 6px;
    }

    .header-link {
        font-size: 14px;
        padding: 6px 8px;
    }

    .reservation-btn {
        font-size: 11px;
        padding: 7px 8px;
        letter-spacing: 0.8px;
    }

    .logo img {
        height: 42px;
    }

    .main-nav ul {
        gap: 2px;
    }
}

/* Tablet small et Mobile large (481px - 768px) */
@media (max-width: 768px) {
    .container {
        grid-template-columns: auto 1fr auto;
        padding: 0 16px;
        height: 76px;
    }

    .main-nav {
        display: none;
    }

    .menu-toggle {
        display: block;
    }

    .logo img {
        height: 40px;
    }

    .mobile-nav {
        width: min(350px, 90vw);
        padding: 16px;
    }

    .mobile-nav-header {
        margin-bottom: 32px;
        padding-bottom: 16px;
    }

    .mobile-logo img {
        height: 32px;
    }

    .mobile-link {
        font-size: 16px;
        padding: 14px 0;
    }

    .mobile-reservation-btn {
        font-size: 15px;
        padding: 14px 18px;
    }
}

/* Mobile medium (321px - 480px) */
@media (max-width: 480px) {
    .container {
        height: 70px;
        padding: 0 12px;
        gap: 8px;
    }

    .logo img {
        height: 36px;
    }

    .mobile-nav {
        width: min(320px, 95vw);
        padding: 12px;
    }

    .mobile-nav-header {
        margin-bottom: 24px;
        padding-bottom: 12px;
    }

    .mobile-logo img {
        height: 30px;
    }

    .mobile-link {
        font-size: 15px;
        padding: 12px 0;
    }

    .mobile-reservation-btn {
        font-size: 14px;
        padding: 12px 16px;
    }

    .hamburger {
        width: 22px;
        height: 16px;
    }
}

/* Mobile small (jusqu'à 320px) */
@media (max-width: 320px) {
    .container {
        height: 65px;
        padding: 0 8px;
    }

    .logo img {
        height: 32px;
    }

    .mobile-nav {
        width: 100vw;
        padding: 8px;
    }

    .mobile-link {
        font-size: 14px;
        padding: 10px 0;
    }

    .mobile-reservation-btn {
        font-size: 13px;
        padding: 10px 14px;
    }

    .hamburger {
        width: 20px;
        height: 15px;
    }
}
</style>