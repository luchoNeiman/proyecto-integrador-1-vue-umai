<template>
    <header class="navbar navbar-expand-lg navbar-dark shadow-sm py-3 sticky-top">
        <div class="container">
            <div class="d-flex align-items-center gap-3">
                <i class="bi bi-moon-stars-fill fs-2"></i>
                <div>
                    <a class="navbar-brand fw-bold fs-3 mb-0" href="#">SleepRace</a>
                    <p class="mb-0 text-light small">Los hoteles compiten por tu estadía</p>
                </div>
            </div>
            <nav class="ms-auto">
                <ul class="navbar-nav flex-row gap-2">
                    <li class="nav-item link">
                        <router-link to="/" class="nav-link px-3" active-class="active" exact>Cliente</router-link>
                        <!-- exact para que solo se active en la ruta raíz -->
                    </li>
                    <li class="nav-item link tagline">
                        <router-link to="/hotel" class="nav-link px-3" active-class="active">Hotel</router-link>
                        <!-- active-class para definir la clase CSS que se aplicará cuando la ruta esté activa -->
                    </li>
                </ul>
            </nav>
        </div>
    </header>
</template>