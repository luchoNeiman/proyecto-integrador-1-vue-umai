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

<style scoped>
.request-form {
    display: grid;
    gap: 1em;
    max-width: 420px;
    margin-bottom: 2em;
    background: #fff;
    border-radius: 1em;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.04);
    padding: 2em 1.5em;
}

.request-form h2 {
    margin-bottom: 0.5em;
    color: var(--color-primary-dark);
    font-size: 1.2em;
    text-align: center;
}

.request-form label {
    font-weight: 500;
    color: #333;
    display: flex;
    flex-direction: column;
    gap: 0.3em;
}

.request-form input,
.request-form textarea {
    padding: 0.7em;
    border: 1px solid var(--color-border);
    border-radius: 0.5em;
    font-size: 1em;
    margin-top: 0.1em;
    background: #f7f8fc;
    transition: border 0.2s;
}

.request-form input:focus,
.request-form textarea:focus {
    border: 1.5px solid var(--color-primary);
    outline: none;
}

.btn {
    background: var(--color-primary);
    color: #fff;
    border: none;
    padding: 0.7em 1.2em;
    border-radius: 0.5em;
    font-weight: bold;
    font-size: 1.1em;
    cursor: pointer;
    transition: background 0.2s;
    margin-top: 0.5em;
}

.btn:hover {
    background: var(--color-primary-dark);
}

.form-msg {
    margin-top: 0.7em;
    text-align: center;
    font-size: 1em;
    border-radius: 0.5em;
    padding: 0.5em 0.7em;
}

.error {
    color: #b91c1c;
    background: #fee2e2;
    border: 1px solid #fca5a5;
}

.success {
    color: #166534;
    background: #bbf7d0;
    border: 1px solid #4ade80;
}
</style>
