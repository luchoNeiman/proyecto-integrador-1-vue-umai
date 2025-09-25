import { defineStore } from 'pinia'
import hotelData from '@/assets/data/mock-hotels.json'

export const useMainStore = defineStore('main', {
    state: () => ({
        hotels: hotelData,
        requests: []
    }),
    actions: {
        addRequest(newReq) {
            // crear objeto con id
            const request = { id: Date.now(), ...newReq, offers: [] }

            // agregar a memoria
            this.requests.push(request)
        },
        addOffer(requestId, offer) {
            const req = this.requests.find(r => r.id === requestId)
            if (req) {
                req.offers = req.offers || []
                req.offers.push({ ...offer, id: Date.now() })
            }
        }
    },
    persist: true // <--- ¡Esto es lo que activa la persistencia!

})
