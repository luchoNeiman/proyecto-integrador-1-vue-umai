import { createApp } from 'vue' // importacion de la funcion para crear la aplicacion de Vue
import App from './App.vue' // importacion del componente raiz de la aplicacion
import router from './router' // importacion del router para manejar las rutas de la aplicacion
import { createPinia } from 'pinia' // importacion de pinia para el manejo del estado
import './assets/css/styles.css' // estilos globales
import 'bootstrap/dist/css/bootstrap.min.css'  // CSS de bootstrap
import 'bootstrap' // JS de bootstrap
import 'bootstrap-icons/font/bootstrap-icons.css' // iconos de bootstrap


const app = createApp(App) // crea la aplicacion de Vue
app.use(createPinia())  // Es un store para manejar el estado de la aplicacion   
app.use(router) //router sirve para manejar las rutas de la aplicacion 
app.mount('#app') // monta la aplicacion en el elemento con id app en el index.html
