<template>
  <main class="columns is-gapless is-multiline modo-escuro">
    <div class="column is-one-quarter">
      <BarraLateral />
    </div>
    <div class="column is-three-quarters conteudo">
      <FormularioTarefas @aoSalvarTarefa="salvarTarefa" />
      <div class="lista">
        <TarefaComponente v-for="(tarefa, index) in tarefas" :key="index" :tarefa="tarefa" />
        <BoxTarefas v-if="listaEstaVazia">
          Você não está muito produtivo hoje!
        </BoxTarefas>
      </div>
    </div>
  </main>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import BarraLateral from './components/BarraLateral.vue';
import BoxTarefas from './components/BoxTarefas.vue';
import FormularioTarefas from './components/FormularioTarefas.vue';
import TarefaComponente from './components/TarefaComponente.vue';
import ITarefa from './interfaces/ITarefa';

export default defineComponent({
  name: "App",
  data() {
    return {
      tarefas: [] as ITarefa[],
    }
  },
  computed: {
    listaEstaVazia(): boolean {
      return this.tarefas.length === 0;
    }
  },
  components: { BarraLateral, FormularioTarefas, TarefaComponente, BoxTarefas },
  methods: {
    salvarTarefa(tarefa: ITarefa) {
      this.tarefas.push(tarefa);
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
