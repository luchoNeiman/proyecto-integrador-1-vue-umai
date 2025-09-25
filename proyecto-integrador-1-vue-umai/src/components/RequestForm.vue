<script setup>
import { ref } from 'vue'
import { useMainStore } from '@/store'  //importa el store de Pinia creado en src/store/index.js

const newRequest = ref({  //Crea un objeto de referencia reactiva para almacenar los datos del formulario
    city: '',
    date: '',
    people: 1,
    note: ''
})

const error = ref('')  //Crea una referencia reactiva para almacenar mensajes de error o éxito

const store = useMainStore()  //Accede al store de Pinia ubicado en src/store/index.js

function addRequest() {  //Función para manejar el envío del formulario
    error.value = ''

    if (!newRequest.value.city.trim() || !newRequest.value.date || !newRequest.value.people) {
        error.value = 'Completá ciudad, fecha y personas.'
        return
    }
    
    store.addRequest({
        ...newRequest.value,
        id: Date.now()
    })  //Agrega la nueva solicitud al store llamando a la acción addRequest definida en el store

    newRequest.value = { city: '', date: '', people: 1, note: '' } //Resetea el formulario

    error.value = '¡Solicitud enviada! ✅'
    setTimeout(() => { error.value = '' }, 2000) //Limpia el mensaje de éxito después de 2 segundos
}
</script>

<template>
    <form class="request-form" @submit.prevent="addRequest" autocomplete="off" aria-labelledby="request-form-title"
        novalidate>
        <div>

            <h2 id="request-form-title">Publicar solicitud de hospedaje</h2>
            <div class="form-group">
                <label for="city">Ciudad</label>
                <input id="city" name="city" type="text" v-model="newRequest.city" placeholder="Ej: Buenos Aires"
                    inputmode="text" autocomplete="address-level2" aria-required="true" aria-describedby="city-help" />
            </div>

            <div class="form-group">
                <label for="date">Fecha</label>
                <input id="date" name="date" type="date" v-model="newRequest.date" autocomplete="off"
                    aria-required="true" />
            </div>

            <div class="form-group">
                <label for="people">Personas</label>
                <input id="people" name="people" type="number" min="1" v-model.number="newRequest.people"
                    inputmode="numeric" aria-required="true" />
            </div>

            <div class="form-group">
                <label for="note">Comentario</label>
                <textarea id="note" name="note" v-model="newRequest.note"
                    placeholder="¿Algo que quieras aclarar? (opcional)" rows="2" autocomplete="off"></textarea>
            </div>

            <button class="btn" type="submit" aria-label="Enviar solicitud">Enviar solicitud</button>
            <div v-if="error"
                :class="{ 'error': error !== '¡Solicitud enviada! ✅', 'success': error === '¡Solicitud enviada! ✅' }"
                class="form-msg" role="alert" aria-live="polite">{{ error }}</div>
        </div>
    </form>
</template>
