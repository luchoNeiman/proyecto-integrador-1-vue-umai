import { createRouter, createWebHistory } from 'vue-router' //vue-router sirve para manejar las rutas de la aplicacion /
// createWebHistory permite usar el historial del navegador para la navegacion
import ClientView from '../views/ClientView.vue'
import HotelView from '../views/HotelView.vue'

const routes = [
    { path: '/', name: 'cliente', component: ClientView },
    { path: '/hotel', name: 'hotel', component: HotelView }
]

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes
})

export default router