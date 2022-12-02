<template>
    <FormularioTarefas @aoSalvarTarefa="salvarTarefa" />
    <div class="lista">
        <div class="field">
            <p class="control has-icons-left">
                <input class="input" type="text" placeholder="Digite para filtrar" v-model="filtro">
                <span class="icon is-small is-left">
                    <i class="fas fa-search"></i>
                </span>
            </p>
        </div>
        <TarefaComponente v-for="(tarefa, index) in tarefas" :key="index" :tarefa="tarefa"
            @aoTarefaClicada="selecionarTarefa" />
        <BoxTarefas v-if="listaEstaVazia">
            Nenhuma tarefa encontrada!
        </BoxTarefas>
    </div>

    <div class="modal" :class="{ 'is-active': tarefaSelecionada }" v-if="tarefaSelecionada">
        <div class="modal-background"></div>
        <div class="modal-card">
            <div class="modal-card-head">
                <p class="modal-card-title">Editando Tarefa</p>
                <button @click="fecharModal" class="delete" aria-label="close"></button>
            </div>
            <div class="modal-card-body">
                <div class="field">
                    <label for="descricaoDaTarefa" class="label">Descrição da terafa</label>
                    <input type="text" class="input" v-model="tarefaSelecionada.descricao" id="descricaoDaTarefa">
                </div>
            </div>
            <div class="modal-card-foot">
                <button @click="alterarTarefa" class="button is-success">Salvar Alterações</button>
                <button @click="fecharModal" class="button">Cancelar</button>
            </div>
        </div>
    </div>
</template>
  
<script lang="ts">
import ITarefa from '@/interfaces/ITarefa';
import { useStore } from '@/store';
import { OBTER_TAREFAS, CADASTRAR_TAREFA, OBTER_PROJETOS, ALTERAR_TAREFA } from '@/store/tipo-acoes';
import { defineComponent, computed, ref, watchEffect } from 'vue';
import BoxTarefas from '../components/BoxTarefas.vue';
import FormularioTarefas from '../components/FormularioTarefas.vue';
import TarefaComponente from '../components/TarefaComponente.vue';

export default defineComponent({
    name: "App",
    components: { FormularioTarefas, TarefaComponente, BoxTarefas },
    data() {
        return {
            tarefaSelecionada: null as ITarefa | null
        }
    },
    methods: {
        salvarTarefa(tarefa: ITarefa) {
            this.store.dispatch(CADASTRAR_TAREFA, tarefa)
        },
        selecionarTarefa(tarefa: ITarefa) {
            this.tarefaSelecionada = tarefa;
        },
        fecharModal() {
            this.tarefaSelecionada = null;
        },
        alterarTarefa() {
            this.store.dispatch(ALTERAR_TAREFA, this.tarefaSelecionada)
                .then(() => this.fecharModal());
        }
    },
    computed: {
        listaEstaVazia(): boolean {
            return this.tarefas.length === 0;
        }
    },
    setup() {
        const store = useStore()

        store.dispatch(OBTER_TAREFAS)
        store.dispatch(OBTER_PROJETOS)
        const filtro = ref('')

        // const tarefas = computed(() => store.state.tarefa.tarefas.filter(t => !filtro.value || t.descricao.includes(filtro.value)))

        watchEffect(() => {
            store.dispatch(OBTER_TAREFAS, filtro.value);
        })

        return {
            tarefas: computed(() => store.state.tarefa.tarefas),
            store,
            filtro
        }
    },
});
</script>
  