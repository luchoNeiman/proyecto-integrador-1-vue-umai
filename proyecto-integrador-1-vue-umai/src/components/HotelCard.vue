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

<style >
.card {
    display: flex;
    gap: 1em;
    border: 1px solid #e1e1e1;
    padding: 0.8em;
    border-radius: 8px;
    align-items: center;
}

.img-wrap {
    width: 6em;
    height: 5em;
    overflow: hidden;
    border-radius: 6px;
    flex-shrink: 0;
}

.img-wrap img {
    width: 100%;
    height: 100%;
    object-fit: cover;
}

.card-body h3 {
    margin: 0;
    font-size: 1.05em;
}

.meta {
    color: #666;
    font-size: 0.9em;
}

.price {
    font-weight: bold;
    margin-top: 0.4em;
}
</style>
