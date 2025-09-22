import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import router from './router'
import './assets/css/styles.css'

const app = createApp(App)
app.use(createPinia())  // Pinia sirve para manejar el estado de la aplicacion // es una alternativa a Vuex   
app.use(router) //router sirve para manejar las rutas de la aplicacion 
app.mount('#app')
