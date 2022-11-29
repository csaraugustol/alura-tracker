<template>
    <header>
        <h1>
            <img src="../assets/logo.png" alt="Logo Alura Tracker">
        </h1>
        <button class="button" @click="alterartema">
            {{textoBotao}}
        </button>
        <nav class="panel mt-5">
            <ul>
                <li>
                    <router-link class="link" to="/">
                        <i class="fas fa-tasks"></i>
                        Tarefas
                    </router-link>
                </li>
                <li>
                    <router-link class="link" to="/projetos">
                        <i class="fas fa-project-diagram"></i>
                        Projetos
                    </router-link>
                </li>
            </ul>
        </nav>
    </header>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { RouterLink, routerViewLocationKey } from 'vue-router';

export default defineComponent({
    name: "BarraLateral",
    emits: ["aoTemaAlterado"],
    data() {
        return {
            modoEscuroAtivo: false,
        };
    },
    computed: {
        textoBotao() {
            if (this.modoEscuroAtivo) {
                return "Desativar modo escuro";
            }
            return "Ativar modo escuro";
        },
        iconeBotao() {
            if (this.modoEscuroAtivo) {
                return "fa-solid fa-sun";
            }
            return "fa-solid fa-moon";
        }
    },
    methods: {
        alterartema() {
            this.modoEscuroAtivo = !this.modoEscuroAtivo;
            this.$emit("aoTemaAlterado", this.modoEscuroAtivo);
        }
    },
});
</script>

<style>
/* Estilo do componente */
header {
    padding: 1rem;
    background: #0d3b66;
    width: 100%;
    height: 100vh;
    text-align: center;
}

.panel li {
    margin: 8px 0;
}
.link {
    color: #fff;
}
.link:hover {
    color: #FAF0CA;
}
.link.router-link-active {
    color: #FAF0CA;
}

@media only screen and (max-width: 768px) {
    header {
        padding: 2.5rem;
        height: auto;
    }
}
</style>