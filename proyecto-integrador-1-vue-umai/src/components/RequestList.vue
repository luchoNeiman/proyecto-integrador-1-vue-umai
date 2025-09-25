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

function openOfferModal(requestId) {
    openModalFor.value = requestId
}

function closeModal() {
    openModalFor.value = null
}

function submitOffer(requestId, offer) {
    emit('add-offer', { requestId, offer })
    closeModal()
}
</script>

<template>
    <ul class="request-list">
        <li v-for="req in requests" :key="req.id" class="request-item">
            <div class="head">
                <strong>{{ req.city }}</strong> — {{ req.date }}<br>
                Personas: {{ req.people }}<br>
                <span v-if="req.note">Nota: {{ req.note }}</span>
            </div>
            <div class="offers" v-if="req.offers && req.offers.length">
                <strong>Ofertas:</strong>
                <ul>
                    <li v-for="offer in req.offers" :key="offer.id">
                        💲<b>{{ offer.price }}</b> — {{ offer.message }}
                    </li>
                </ul>
            </div>
            <div class="actions">
                <button class="main-btn" @click="openOfferModal(req.id)">Ofertar</button>
            </div>
            <OfferModal :visible="openModalFor === req.id" :requestCity="req.city" @close="closeModal"
                @submit="offer => submitOffer(req.id, offer)" />
        </li>
    </ul>
</template>