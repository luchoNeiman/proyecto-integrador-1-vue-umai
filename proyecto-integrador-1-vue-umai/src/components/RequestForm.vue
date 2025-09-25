<script setup>
import { ref } from 'vue'
import { useMainStore } from '@/store/store'  //importa el store de Pinia creado en src/store/index.js

const newRequest = ref({  //Crea un objeto de referencia reactiva para almacenar los datos del formulario
    city: '',
    date: '',
    people: 1,
    note: ''
})

//Una referencia reactiva significa que si su valor cambia, Vue se dará cuenta y actualizará el DOM en consecuencia.

const error = ref('')  //Crea una referencia reactiva para almacenar mensajes de error o éxito

const store = useMainStore()  //Accede al store de Pinia ubicado en src/store/index.js

function addRequest() {  //Función para manejar el envío del formulario
    error.value = ''

    if (!newRequest.value.city.trim() || !newRequest.value.date || !newRequest.value.people) {
        error.value = 'Completá ciudad, fecha y personas.'
        return
    }

    store.addRequest({  //Agrega la nueva solicitud al store llamando a la acción addRequest definida en el store
        ...newRequest.value,  //Usa el operador spread para copiar las propiedades del objeto newRequest
        id: Date.now()
    })

    newRequest.value = { city: '', date: '', people: 1, note: '' } //Resetea el formulario

    error.value = '¡Solicitud enviada! ✅'
    setTimeout(() => { error.value = '' }, 2000) //Limpia el mensaje de éxito después de 2 segundos
}
</script>

<template>
    <form class="request-form shadow" @submit.prevent="addRequest" autocomplete="off"
        aria-labelledby="request-form-title" novalidate>
        <h2 id="request-form-title" class="mb-3 text-center">
            <i class="bi bi-send-check-fill me-2 text-primary"></i>
            Publicar solicitud de hospedaje
        </h2>

        <div class="form-group mb-3">
            <label for="city" class="form-label">Ciudad</label>
            <div class="input-group">
                <span class="input-group-text"><i class="bi bi-geo-alt"></i></span>
                <input id="city" name="city" type="text" class="form-control" v-model="newRequest.city"
                    placeholder="Ej: Buenos Aires" inputmode="text" autocomplete="address-level2" aria-required="true"
                    aria-describedby="city-help" />
            </div>
            <small id="city-help" class="form-text text-muted visually-hidden">Ingrese la ciudad de destino</small>
        </div>

        <div class="form-group mb-3">
            <label for="date" class="form-label">Fecha</label>
            <div class="input-group">
                <span class="input-group-text"><i class="bi bi-calendar-event"></i></span>
                <input id="date" name="date" type="date" class="form-control" v-model="newRequest.date"
                    autocomplete="off" aria-required="true" />
            </div>
        </div>

        <div class="form-group mb-3">
            <label for="people" class="form-label">Personas</label>
            <div class="input-group">
                <span class="input-group-text"><i class="bi bi-people-fill"></i></span>
                <input id="people" name="people" type="number" min="1" class="form-control"
                    v-model.number="newRequest.people" inputmode="numeric" aria-required="true" />
            </div>
        </div>

        <div class="form-group mb-4">
            <label for="note" class="form-label">Comentario</label>
            <textarea id="note" name="note" class="form-control" v-model="newRequest.note"
                placeholder="¿Algo que quieras aclarar? (opcional)" rows="2" autocomplete="off"></textarea>
        </div>

        <button class="main-btn w-100 text-white" type="submit" aria-label="Enviar solicitud">
            <i class="bi bi-send"></i> Enviar solicitud
        </button>

        <div v-if="error"
            :class="{ 'form-error': error !== '¡Solicitud enviada! ✅', 'form-success': error === '¡Solicitud enviada! ✅' }"
            class="form-msg mt-3" role="alert" aria-live="polite">
            {{ error }}
        </div>
    </form>
</template>
