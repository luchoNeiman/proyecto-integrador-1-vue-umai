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
    <div v-if="visible" class="backdrop">
        <div class="box">
            <h3>Crear oferta para {{ requestCity }}</h3>
            <label>Precio (USD): <input type="number" v-model.number="price" /></label>
            <label>Mensaje: <input v-model="message" /></label>
            <div class="actions">
                <button @click="onSubmit">Enviar</button>
                <button @click="$emit('close')">Cancelar</button>
            </div>
        </div>
    </div>
</template>

<style >
.backdrop {
    position: fixed;
    inset: 0;
    background: rgba(0, 0, 0, 0.4);
    display: flex;
    align-items: center;
    justify-content: center;
}

.box {
    background: white;
    padding: 1rem;
    border-radius: 8px;
    width: 320px;
}

.actions {
    display: flex;
    gap: 0.6rem;
    justify-content: flex-end;
    margin-top: 0.6rem;
}
</style>
