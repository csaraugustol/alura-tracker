<template>
    <FormularioTarefas @aoSalvarTarefa="salvarTarefa" />
    <div class="lista">
        <TarefaComponente v-for="(tarefa, index) in tarefas" :key="index" :tarefa="tarefa" />
        <BoxTarefas v-if="listaEstaVazia">
            Você não está muito produtivo hoje!
        </BoxTarefas>
    </div>
</template>
  
<script lang="ts">
import { defineComponent } from 'vue';
import BoxTarefas from '../components/BoxTarefas.vue';
import FormularioTarefas from '../components/FormularioTarefas.vue';
import TarefaComponente from '../components/TarefaComponente.vue';
import ITarefa from '../interfaces/ITarefa';

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
    components: { FormularioTarefas, TarefaComponente, BoxTarefas },
    methods: {
        salvarTarefa(tarefa: ITarefa) {
            this.tarefas.push(tarefa);
        },
    }
});
</script>
  