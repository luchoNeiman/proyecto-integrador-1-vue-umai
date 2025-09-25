<script setup>
import { defineProps, defineEmits, ref } from 'vue'

const props = defineProps({  // Props recibidos del componente padre
    visible: Boolean,
    requestCity: String  // Ciudad del request para mostrar en el modal
})
const emit = defineEmits(['close', 'submit'])  // Eventos que el componente puede emitir

const price = ref(null)  // Precio ingresado por el usuario
const message = ref('')  // Mensaje opcional ingresado por el usuario

function onSubmit() {  // Maneja el envío del formulario
    if (!price.value) {
        alert('Ingresá un precio.')
        return
    }
    emit('submit', { price: Number(price.value), message: message.value })  // Emitir evento con datos de la oferta
    price.value = null
    message.value = ''
}
</script>

<template>
    <div v-if="visible" class="offer-modal-backdrop">
        <div class="offer-modal-box p-4">
            <h3 class="mb-3 text-center">
                <i class="bi bi-cash-coin me-2 text-primary"></i>
                Crear oferta para <span class="fw-bold">{{ requestCity }}</span>
            </h3>
            <form @submit.prevent="onSubmit">
                <div class="mb-3">
                    <label for="offer-price" class="form-label">Precio (USD)</label>
                    <input id="offer-price" type="number" class="form-control" v-model.number="price" min="1"
                        placeholder="Ej: 120" autofocus />
                </div>
                <div class="mb-4">
                    <label for="offer-message" class="form-label">Mensaje</label>
                    <input id="offer-message" type="text" class="form-control" v-model="message" maxlength="80"
                        placeholder="Ej: ¡Incluye desayuno!" />
                </div>
                <div class="d-flex justify-content-end gap-2">
                    <button type="submit" class="btn btn-primary">
                        <i class="bi bi-send"></i> Enviar
                    </button>
                    <button type="button" class="btn btn-outline-secondary" @click="$emit('close')">
                        Cancelar
                    </button>
                </div>
            </form>
        </div>
    </div>
</template>
