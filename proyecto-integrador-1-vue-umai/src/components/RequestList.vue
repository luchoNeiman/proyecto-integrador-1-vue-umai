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
                <button class="btn" @click="openOfferModal(req.id)">Ofertar</button>
            </div>
            <OfferModal :visible="openModalFor === req.id" :requestCity="req.city" @close="closeModal"
                @submit="offer => submitOffer(req.id, offer)" />
        </li>
    </ul>
</template>

<style scoped>
.request-list {
    list-style: none;
    padding: 0;
}

.request-item {
    border: 1px solid #ddd;
    padding: 1em;
    margin-bottom: 1.2em;
    border-radius: 1em;
    background: #fff;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.03);
}

.head {
    font-size: 1em;
    color: #357ab7;
    margin-bottom: 0.5em;
}

.offers {
    margin-top: 0.6em;
    font-size: 0.97em;
}

.actions {
    margin-top: 0.8em;
}

.btn {
    background: var(--color-primary);
    color: #fff;
    border: none;
    padding: 0.5em 1.2em;
    border-radius: 0.5em;
    font-weight: bold;
    cursor: pointer;
    transition: background 0.2s;
}

.btn:hover {
    background: var(--color-primary-dark);
}
</style>