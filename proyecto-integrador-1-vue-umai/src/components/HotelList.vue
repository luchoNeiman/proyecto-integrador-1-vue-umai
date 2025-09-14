<template>
    <div>
        <h2>Vista Hotel</h2>
        <p>Aquí se mostrarían las solicitudes de los clientes.</p>

        <ul>
            <li>
                Cliente quiere hospedaje en <strong>Barcelona</strong> para el 20/09 - Presupuesto: 100 USD
                <button @click="responder">Ofertar</button>
            </li>
        </ul>

        <p v-if="respuesta">{{ respuesta }}</p>
    </div>
</template>

<script setup>
    import { ref } from 'vue'

    const respuesta = ref('')

    function responder() {
        respuesta.value = 'El hotel ofreció una habitación por 90 USD'
    }
</script>
