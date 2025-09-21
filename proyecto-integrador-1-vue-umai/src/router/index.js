import { createRouter, createWebHistory } from 'vue-router' //vue-router sirve para manejar las rutas de la aplicacion
import ClientView from '../views/ClientView.vue'
import HotelView from '../views/HotelView.vue'

const routes = [
    { path: '/', component: ClientView },
    { path: '/hotel', component: HotelView }
]

export default createRouter({
    history: createWebHistory(),
    routes
})
