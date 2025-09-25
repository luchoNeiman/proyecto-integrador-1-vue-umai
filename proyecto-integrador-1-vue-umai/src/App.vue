<script setup>
// el script setup permite usar la Composition API de manera más sencilla y directa
// sin necesidad de definir un objeto export default
// el código dentro del bloque <script setup> se ejecuta en el contexto del componente
// y las variables definidas son automáticamente reactivas y accesibles en el template
// ideal para componentes simples y funcionales
import Header from './components/Header.vue'

</script>


<template>
  <Header />

  <main>
    <router-view />
  </main>

  <footer class="footer text-center py-3">
    <p class="m-0">Hecho con ❤️ por Luciano Neiman</p>
  </footer>
</template>