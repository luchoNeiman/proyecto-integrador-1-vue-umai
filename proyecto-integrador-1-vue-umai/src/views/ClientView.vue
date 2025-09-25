<script setup>
import { ref } from 'vue'
import { useMainStore } from '@/store/store'
import RequestForm from '@/components/RequestForm.vue'
import HotelCard from '@/components/HotelCard.vue'
import ClientRequestList from '@/components/ClientRequestList.vue'

const store = useMainStore()
</script>

<template>
    <section class="d-flex gap-5">
        <div class="w-50">
            <RequestForm />
        </div>
        <div>
            <h2>Hoteles disponibles</h2>
            <div class="hotel-grid d-flex flex-wrap gap-3">
                <HotelCard v-for="hotel in store.hotels" :key="hotel.id" :hotel="hotel" />
            </div>
        </div>

    </section>

    <section>
        <ClientRequestList :requests="store.requests" />
    </section>
</template>
