<script setup>

</script>

<template>
    <header class="header">
        <h1>Mi Aplicación Vue</h1>
        <nav class="nav">
            <ul>
                <li class="link"><router-link to="/">Inicio</router-link></li>
                <li class="link"><router-link to="/hotel">Hoteles</router-link></li>
            </ul>
        </nav>
    </header>
</template>


<style scoped>
.header {
    background-color: #2c3e50;
    padding: 1em;
}

.nav {
    display: flex;
    gap: 1em;
    justify-content: center;
}

.link {
    color: #fff;
    text-decoration: none;
    font-weight: bold;
}

.link.router-link-exact-active {
    text-decoration: underline;
}
</style>