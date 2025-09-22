<script setup>
import { defineProps } from 'vue'

const props = defineProps({
    hotel: {
        type: Object,
        required: true
    }
})
</script>

<template>
    <article class="card">
        <div class="img-wrap">
            <img :src="hotel.image" :alt="hotel.name" />
        </div>
        <div class="card-body">
            <h3>{{ hotel.name }}</h3>
            <p class="meta">{{ hotel.location }} · ★ {{ hotel.rating }}</p>
            <p class="price">${{ hotel.price }} / noche</p>
        </div>
    </article>
</template>