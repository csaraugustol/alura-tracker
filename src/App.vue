<template>
  <main class="columns is-gapless is-multiline">
    <div class="column is-one-quarter">
        <BarraLateral/>
    </div>
    <div class="column is-three-quarters">
      <FormularioTarefas/>
      <div class="lista">
        <TarefaComponente />
        <TarefaComponente />
        <TarefaComponente />
        <TarefaComponente />
      </div>
    </div>
  </main>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import BarraLateral from './components/BarraLateral.vue';
import FormularioTarefas from './components/FormularioTarefas.vue';
import TarefaComponente from './components/TarefaComponente.vue';

export default defineComponent({
    name: "App",
    components: { BarraLateral, FormularioTarefas, TarefaComponente }
});
</script>

<style>

</style>
