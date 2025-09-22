<script setup>
import { ref } from 'vue'

const newRequest = ref({
    city: '',
    date: '',
    people: 1,
    note: ''
})

const error = ref('')


function addRequest() {
    error.value = ''
    if (!newRequest.value.city.trim() || !newRequest.value.date || !newRequest.value.people) {
        error.value = 'Completá ciudad, fecha y personas.'
        return
    }

    const stored = JSON.parse(localStorage.getItem('requests') || '[]')
    const request = {
        id: Date.now(),
        city: newRequest.value.city.trim(),
        date: newRequest.value.date,
        people: Number(newRequest.value.people),
        note: newRequest.value.note,
        offers: []
    }

    stored.push(request)
    localStorage.setItem('requests', JSON.stringify(stored))
    window.dispatchEvent(new CustomEvent('request-added'))

    newRequest.value = { city: '', date: '', people: 1, note: '' }
    error.value = '¡Solicitud enviada! ✅'
    setTimeout(() => { error.value = '' }, 2000)
}
</script>

<template>
    <form class="request-form" @submit.prevent="addRequest" autocomplete="off">
        <h2>Publicar solicitud de hospedaje</h2>

        <label>
            Ciudad
            <input v-model="newRequest.city" placeholder="Ej: Buenos Aires" required />
        </label>

        <label>
            Fecha
            <input type="date" v-model="newRequest.date" required />
        </label>

        <label>
            Personas
            <input type="number" min="1" v-model.number="newRequest.people" required />
        </label>

        <label>
            Comentario
            <textarea v-model="newRequest.note" placeholder="¿Algo que quieras aclarar? (opcional)"></textarea>
        </label>

        <button class="btn" type="submit">Enviar solicitud</button>
        <div v-if="error"
            :class="{ 'error': error !== '¡Solicitud enviada! ✅', 'success': error === '¡Solicitud enviada! ✅' }"
            class="form-msg">{{ error }}</div>
    </form>
</template>
