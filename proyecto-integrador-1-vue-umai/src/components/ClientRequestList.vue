<script setup>
import { defineProps } from 'vue'
const props = defineProps({  //define las props que el componente recibe
    requests: {
        type: Array,  //define que la prop requests es un array
        required: true  //define que la prop requests es obligatoria
    }
})
</script>


<template>
    <section class="client-requests">
        <h2 class="mb-4">Mis Solicitudes</h2>

        <div v-if="requests.length === 0" class="alert alert-info text-center">
            No publicaste ninguna solicitud todavía.
        </div>

        <div v-else>
            <ul class="list-unstyled row g-4">
                <li v-for="req in requests" :key="req.id" class="col-12 col-md-6 col-lg-4 d-flex">
                    <article class="card card-clientRequestList flex-fill shadow-sm h-100">
                        <header class="card-header bg-white border-0 pb-0">
                            <h3 class="h5 mb-1 text-white">{{ req.city }}</h3>
                            <span class="badge bg-primary-subtle text-primary-emphasis mb-2">
                                <i class="bi bi-calendar-event me-1"></i>{{ req.date }}
                            </span>
                        </header>
                        <div class="card-body pt-2">
                            <p class="mb-1">
                                <i class="bi bi-people-fill me-1"></i>
                                <strong>Personas:</strong> {{ req.people }}
                            </p>
                            <p v-if="req.note" class="mb-2">
                                <i class="bi bi-chat-left-text me-1"></i>
                                <strong>Comentario:</strong> {{ req.note }}
                            </p>
                            <div v-if="req.offers && req.offers.length" class="mt-3">
                                <h6 class="fw-bold mb-2">Ofertas recibidas:</h6>
                                <ul class="list-group list-group-flush">
                                    <li v-for="(offer, i) in req.offers" :key="i"
                                        class="list-group-item py-2 px-0 border-0">
                                        <span class="text-success fw-semibold">
                                            <i class="bi bi-cash-coin me-1"></i>
                                            {{ offer.price }}
                                        </span>
                                        <span v-if="offer.hotel" class="ms-2 text-secondary">
                                            <i class="bi bi-building me-1"></i>{{ offer.hotel }}
                                        </span>
                                    </li>
                                </ul>
                            </div>
                            <p v-else class="text-muted mt-3 mb-0">
                                <i class="bi bi-hourglass-split me-1"></i>
                                Aún no recibiste ofertas
                            </p>
                        </div>
                    </article>
                </li>
            </ul>
        </div>
    </section>
</template>