<script setup>
</script>

<template>
    <header class="header">
        <h1>SleepRace</h1>
        <p class="tagline">Los hoteles compiten por tu estadía</p>
        <nav class="nav">
            <ul>
                <li class="link"><router-link to="/">Cliente</router-link></li>
                <li class="link"><router-link to="/hotel">Hotel</router-link></li>
            </ul>
        </nav>
    </header>
</template>

<style scoped>
* {
    margin:0;
    padding:0;
    box-sizing: border-box;
}
.header {
    background: linear-gradient(90deg, #357ab7 0%, #4a90e2 100%);
    padding: 1.5em 0;
    color: #fff;
    text-align: center;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.04);
}

h1 {
    margin: 0;
    font-size: 1.8em;
    color: #fff;
}

.nav ul {
    display: flex;
    gap: 2em;
    justify-content: center;
    margin-top: 1em;
    padding: 0;
}

.link a {
    color: #fff;
    text-decoration: none;
    font-weight: bold;
    font-size: 1.1em;
    padding: 0.3em 1em;
    border-radius: 0.5em;
    transition: background 0.2s;
}

.link a.router-link-exact-active {
    background: rgba(255, 255, 255, 0.18);
    text-decoration: underline;
}
</style>