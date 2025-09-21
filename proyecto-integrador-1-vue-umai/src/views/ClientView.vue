<script setup>
import { ref } from 'vue' // importamos la función ref para crear referencias reactivas

const hotels = ref([  // datos de ejemplo para hoteles
    { id: 1, name: 'Hotel del Sol', city: 'Buenos Aires', price: 120 },
    { id: 2, name: 'Mar Azul', city: 'Mar del Plata', price: 90 },
    { id: 3, name: 'Cielo Andino', city: 'Mendoza', price: 150 }
])
</script>


<template>
    <section class="client-view">
        <h1>Hoteles disponibles</h1>
        <ul class="hotel-list">
            <li v-for="hotel in hotels" :key="hotel.id" class="hotel-item">
                <h2>{{ hotel.name }}</h2>
                <p>{{ hotel.city }} - ${{ hotel.price }} por noche</p>
            </li>
        </ul>
    </section>
</template>



<style scoped>
.client-view {
    padding: 2em;
}

.hotel-list {
    list-style: none;
    padding: 0;
}

.hotel-item {
    border: 1px solid #ccc;
    padding: 1em;
    margin-bottom: 1em;
    border-radius: 6px;
}
</style>
