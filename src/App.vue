<template>
  <main class="columns is-gapless is-multiline" :class="{'modo-escuro' : modoEscuroAtivo}">
    <div class="column is-one-quarter">
      <BarraLateral @aoTemaAlterado="trocarTema"/>
    </div>
    <div class="column is-three-quarters conteudo">
      <RouterView></RouterView>
    </div>
  </main>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import BarraLateral from './components/BarraLateral.vue';

export default defineComponent({
  name: "App",
  data() {
    return {
      modoEscuroAtivo: false
    }
  },
  components: { BarraLateral},
  methods: {
    trocarTema(modoEscuroAtivo: boolean) {
      this.modoEscuroAtivo = modoEscuroAtivo;
    }
  }
});
</script>

<style>
  .lista {
    padding: 1.25rem;
  }

  main {
    --bg-primario: #FFF;
    --texto-primario: #000;
  }

  main.modo-escuro {
    --bg-primario: #2B2D42;
    --texto-primario: #DDD;
  }

  .conteudo {
    background-color: var(--bg-primario);
  }
</style>
