import { createApp } from 'vue' // importacion de la funcion para crear la aplicacion de Vue
import App from './App.vue' // importacion del componente raiz de la aplicacion
import router from './router/router.js' // importacion del router para manejar las rutas de la aplicacion
import { createPinia } from 'pinia' // importacion de pinia para el manejo del estado
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate' // importacion del plugin para persistir el estado en el localStorage automaticamente
import './assets/css/styles.css' // estilos globales
import 'bootstrap/dist/css/bootstrap.min.css'  // CSS de bootstrap
import 'bootstrap' // JS de bootstrap
import 'bootstrap-icons/font/bootstrap-icons.css' // iconos de bootstrap

const pinia = createPinia() // crea la instancia de pinia
pinia.use(piniaPluginPersistedstate) // usa el plugin para persistir el estado y que cuando recargue no se pierda la info. Todo para que se guarde en el localStorage

const app = createApp(App) // crea la aplicacion de Vue
app.use(pinia)  // Es un store para manejar el estado de la aplicacion   
app.use(router) //router sirve para manejar las rutas de la aplicacion 
app.mount('#app') // monta la aplicacion en el elemento con id app en el index.html
// el orden de los app.use es importante, primero pinia y luego router