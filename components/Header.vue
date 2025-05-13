<template>
    <header>
        <div class="container">
            <div class="logo">
                <NuxtLink to="/">
                    <img src="/static/header/logoPiotr.svg" alt="logoPiotr" />
                </NuxtLink>
            </div>
            <nav class="main-nav">
                <ul>
                    <li><NuxtLink to="/" class="header-link">START</NuxtLink></li>
                    <li><a href="/oNas" class="header-link">O NAS</a></li>
                    <li><NuxtLink to="/uslugi" class="header-link">USŁUGI</NuxtLink></li>
                    <li><a class="reservation-btn" href="#">REZERWACJA ONLINE</a></li>
                    <li><a href="/technologie" class="header-link">TECHNOLOGIE</a></li>
                    <li><a href="/cennik" class="header-link">CENNIK</a></li>
                    <li><a href="/kontakt" class="header-link">KONTAKT</a></li>
                </ul>
            </nav>
            <div class="menu-toggle">
                <img src="/static/header/logoBizarreHeader.svg" alt="menu" />
            </div>
        </div>
    </header>
</template>

<script setup>
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Aboreto&family=Yesteryear&display=swap');
@import url('https://fonts.cdnfonts.com/css/satoshi?styles=135009');
header {
    width: 100%;
    background-color: #fff;
    border-bottom: 1px solid #eee;
}

.container {
    max-width: 1440px;
    margin: 0 auto;
    padding: 0 15px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 84px;
}

.logo img {
    height: 45px;
}

.main-nav ul {
    display: flex;
    list-style: none;
    margin: 0;
    padding: 0;
    gap: 8px;
    align-items: center;
}

.header-link {
    color: #122548;
    text-decoration: none;
    font-family: 'Aboreto', system-ui;
    font-weight: 400;
    font-size: 18px;
    text-transform: uppercase;
    padding: 8px 20px;
    letter-spacing: 1%;
    line-height: 100%;
    display: inline-block;
    transition: color 0.3s ease;
}

.header-link:hover {
    color: #BC9667;
}

.reservation-btn {
    background-color: #BC9667;
    color: white ;
    border-radius: 4px;
    padding: 10px 16px;
    font-family: 'Satoshi', sans-serif;          
    font-weight: 400;
    font-size: 14px;
    text-transform: uppercase;
    text-decoration: none;
    letter-spacing: 1.5px;
    line-height: 140%;
    display: inline-block;
    transition: background-color 0.3s ease;
}

.reservation-btn:hover {
    background-color: #A88457;
}

.menu-toggle {
    display: none;
    cursor: pointer;
}

@media (max-width: 960px) {
    .main-nav {
        display: none;
    }
    
    .menu-toggle {
        display: block;
    }
}
</style>