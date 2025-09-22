<script setup>
import { ref } from 'vue'
import { useMainStore } from '@/store'
import RequestForm from '@/components/RequestForm.vue'
import HotelCard from '@/components/HotelCard.vue'

const store = useMainStore()
</script>

<template>
    <section class="client-view">
        <RequestForm />
        <h2>Hoteles disponibles</h2>
        <div class="hotel-grid">
            <HotelCard v-for="hotel in store.hotels" :key="hotel.id" :hotel="hotel" />
        </div>
    </section>
</template>
