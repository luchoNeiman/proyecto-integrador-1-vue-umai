<script setup>
import { useMainStore } from '@/store'
import RequestList from '@/components/RequestList.vue';

const store = useMainStore()

// Manejar el evento de agregar oferta
function handleAddOffer({ requestId, offer }) {
    store.addOffer(requestId, offer)
}
</script>

<template>
    <section class="hotel-view">
        <h1>Solicitudes de hospedaje</h1>

        <div v-if="store.requests.length === 0" class="empty">
            No hay solicitudes por el momento.
        </div>

        <RequestList v-else :requests="store.requests" @add-offer="handleAddOffer" />
    </section>
</template>
