// src/store/index.js
import { defineStore } from 'pinia'
import hotelData from '@/assets/data/mock-hotels.json'
import requestData from '@/assets/data/mock-requests.json'

export const useMainStore = defineStore('main', {
    state: () => ({
        hotels: hotelData,
        requests: [...requestData, ...(JSON.parse(localStorage.getItem('requests') || '[]'))]
    }),
    actions: {
        addRequest(newReq) {
            // crear objeto con id
            const request = { id: Date.now(), ...newReq, offers: [] }

            // agregar a memoria
            this.requests.push(request)

            // persistir en localStorage
            const saved = JSON.parse(localStorage.getItem('requests') || '[]')
            saved.push(request)
            localStorage.setItem('requests', JSON.stringify(saved))
        },

        addOffer(requestId, offer) {
            const req = this.requests.find(r => r.id === requestId)
            if (req) {
                req.offers = req.offers || []
                req.offers.push({ ...offer, id: Date.now() })
                // Actualiza en localStorage
                const saved = JSON.parse(localStorage.getItem('requests') || '[]')
                const idx = saved.findIndex(r => r.id === requestId)
                if (idx !== -1) {
                    saved[idx].offers = req.offers
                    localStorage.setItem('requests', JSON.stringify(saved))
                }
            }
        }
    }
})
