import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { createPinia } from 'pinia'
import './assets/css/styles.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap'
import 'bootstrap-icons/font/bootstrap-icons.css'


const app = createApp(App)
app.use(createPinia())  // Pinia sirve para manejar el estado de la aplicacion // es una alternativa a Vuex   
app.use(router) //router sirve para manejar las rutas de la aplicacion 
app.mount('#app')
