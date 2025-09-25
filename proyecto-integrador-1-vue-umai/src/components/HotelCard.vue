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
    <article class="hotel-card h-100">
        <figure class="img-wrap m-0">
            <img :src="hotel.image" :alt="hotel.name" />
        </figure>
        <section class="hotel-card-body d-flex flex-column justify-content-between flex-grow-1">
            <div>
                <h3 class="mb-1">{{ hotel.name }}</h3>
                <p class="meta mb-1">
                    <i class="bi bi-geo-alt-fill me-1"></i>{{ hotel.location }}
                    <span class="ms-2"><i class="bi bi-star-fill text-warning"></i> {{ hotel.rating }}</span>
                </p>
            </div>
            <div>
                <p class="price mb-0 meta">${{ hotel.price }} <span class="text-muted fs-6">/ noche</span></p>
            </div>
        </section>
    </article>
</template>