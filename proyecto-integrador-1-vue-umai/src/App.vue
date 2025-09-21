<script setup>
// el script setup permite usar la Composition API de manera más sencilla y directa
// sin necesidad de definir un objeto export default
// el código dentro del bloque <script setup> se ejecuta en el contexto del componente
// y las variables definidas son automáticamente reactivas y accesibles en el template
// ideal para componentes simples y funcionales
import { ref } from 'vue'  // importamos la función ref para crear referencias reactivas
import Header from './components/Header.vue'

</script>


<template>
  <div>
    <Header /> 
    <router-view />
  </div>
</template>

<style scoped>
main {
  text-align: center;
  padding: 2rem;
}
</style>
