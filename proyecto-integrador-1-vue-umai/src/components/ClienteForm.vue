<template>
    <div>
        <h2>Vista Cliente</h2>
        <form @submit.prevent="enviarSolicitud">
            <label>Destino:</label>
            <input v-model="destino" placeholder="Ej: Barcelona" />

            <label>Fecha:</label>
            <input type="date" v-model="fecha" />

            <label>Presupuesto:</label>
            <input type="number" v-model="presupuesto" />

            <button type="submit">Enviar Solicitud</button>
        </form>

        <p v-if="mensaje">{{ mensaje }}</p>
    </div>
</template>

<script setup>
    import { ref } from 'vue'

    const destino = ref('')
    const fecha = ref('')
    const presupuesto = ref('')
    const mensaje = ref('')

    function enviarSolicitud() {
        mensaje.value = `Solicitud enviada para ${destino.value} con presupuesto de ${presupuesto.value}`
        destino.value = ''
        fecha.value = ''
        presupuesto.value = ''
    }
</script>
