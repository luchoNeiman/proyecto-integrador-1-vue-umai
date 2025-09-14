<script setup>
  // que es el script setup de Vue 3
  // permite usar la Composition API de manera más sencilla y directa
  // sin necesidad de definir un objeto export default
  // el código dentro del bloque <script setup> se ejecuta en el contexto del componente
  // y las variables definidas son automáticamente reactivas y accesibles en el template
  // ideal para componentes simples y funcionales
  import { ref } from 'vue'
  import ClienteForm from './components/ClienteForm.vue'
  import HotelList from './components/HotelList.vue'

  const vista = ref(null)
</script>


<template>
  <div>
    <h1>Proyecto Hospedajes</h1>

    <div>
      <button @click="vista = 'cliente'">Entrar como Cliente</button>
      <button @click="vista = 'hotel'">Entrar como Hotel</button>
    </div>

    <hr />

    <div v-if="vista === 'cliente'">
      <ClienteForm />
    </div>
    <div v-else-if="vista === 'hotel'">
      <HotelList />
    </div>
    <div v-else>
      <p>Selecciona una vista</p>
    </div>
  </div>
</template>

<style scoped></style>
