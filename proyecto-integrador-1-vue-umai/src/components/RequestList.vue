<script setup>
import { defineProps, defineEmits, ref } from 'vue'
import OfferModal from './OfferModal.vue'

const props = defineProps({
    requests: {
        type: Array,
        default: () => []
    }
})

const emit = defineEmits(['add-offer'])

const openModalFor = ref(null)

function openOfferModal(requestId) {  //Sirve para abrir el modal de ofertas
    openModalFor.value = requestId
}

function closeModal() {
    openModalFor.value = null
}

function submitOffer(requestId, offer) {
    emit('add-offer', { requestId, offer })  // Emitir el evento 'add-offer' con el ID de la solicitud y la oferta
    closeModal()
}
</script>

<template>
    <ul class="list-unstyled row g-4">
        <li v-for="req in requests" :key="req.id" class="col-12 col-md-6 col-lg-4 d-flex">
            <article class="card flex-fill shadow-sm h-100">
                <header class="card-header bg-white border-0 pb-0">
                    <h3 class="h5 mb-1 text-white">{{ req.city }}</h3>
                    <span class="badge bg-primary-subtle text-primary-emphasis mb-2">
                        <i class="bi bi-calendar-event me-1"></i>{{ req.date }}
                    </span>
                </header>
                <div class="card-body pt-2">
                    <p class="mb-1">
                        <i class="bi bi-people-fill me-1"></i>
                        <strong>Personas:</strong> {{ req.people }}
                    </p>
                    <p v-if="req.note" class="mb-2">
                        <i class="bi bi-chat-left-text me-1"></i>
                        <strong>Comentario:</strong> {{ req.note }}
                    </p>
                    <div v-if="req.offers && req.offers.length" class="mt-3">
                        <h6 class="fw-bold mb-2">Ofertas recibidas:</h6>
                        <ul class="list-group list-group-flush">
                            <li v-for="(offer, i) in req.offers" :key="i" class="list-group-item py-2 px-0 border-0">
                                <span class="text-success fw-semibold">
                                    <i class="bi bi-cash-coin me-1"></i>
                                    {{ offer.price }}
                                </span>
                                <span v-if="offer.hotel" class="ms-2 text-secondary">
                                    <i class="bi bi-building me-1"></i>{{ offer.hotel }}
                                </span>
                                <span v-if="offer.message" class="ms-2 text-muted">
                                    — {{ offer.message }}
                                </span>
                            </li>
                        </ul>
                    </div>
                    <p v-else class="text-muted mt-3 mb-0">
                        <i class="bi bi-hourglass-split me-1"></i>
                        Aún no recibiste ofertas
                    </p>
                </div>
                <footer class="card-footer bg-white border-0 pt-0">
                    <button class="btn btn-primary w-100" @click="openOfferModal(req.id)">
                        <i class="bi bi-plus-circle me-1"></i> Ofertar
                    </button>
                </footer>
                <OfferModal :visible="openModalFor === req.id" :requestCity="req.city" @close="closeModal"
                    @submit="offer => submitOffer(req.id, offer)" />
            </article>
        </li>
    </ul>
</template>