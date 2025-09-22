<script setup>
import { defineProps, defineEmits, ref } from 'vue'

const props = defineProps({
    visible: Boolean,
    requestCity: String
})
const emit = defineEmits(['close', 'submit'])

const price = ref(null)
const message = ref('')

function onSubmit() {
    if (!price.value) {
        alert('Ingresá un precio.')
        return
    }
    emit('submit', { price: Number(price.value), message: message.value })
    price.value = null
    message.value = ''
}
</script>

<template>
    <div v-if="visible" class="offer-modal-backdrop">
        <div class="offer-modal-box">
            <h3>Crear oferta para {{ requestCity }}</h3>
            <label>Precio (USD): <input type="number" v-model.number="price" /></label>
            <label>Mensaje: <input v-model="message" /></label>
            <div class="offer-modal-actions">
                <button @click="onSubmit">Enviar</button>
                <button @click="$emit('close')">Cancelar</button>
            </div>
        </div>
    </div>
</template>
