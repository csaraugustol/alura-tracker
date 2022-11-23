<template>
    <div class="box">
        <div class="columns">
            <div class="column is-8" role="form" aria-label="Formulário para criação de uma nova tarefa">
                <input type="text" name="" id="" placeholder="Qual tarefa deseja iniciar?" v-model="descricao"/>
            </div>
            <div class="column ">
                <TemporizadorTarefa @aotemporizadorFinalizado="finalizarTarefa"/>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import TemporizadorTarefa from './TemporizadorTarefas.vue';

export default defineComponent({
    name: 'FormularioTarefas',
    data() {
        return {
            descricao: '',
        }
    },
    components: {TemporizadorTarefa},
    methods: {
        finalizarTarefa(tempoDecorrido: number): void {
            console.log(tempoDecorrido)
            this.descricao = '';
        }
    }
});
</script>

<style>
    input {
        width: 100%;
        height: 40px;
        border-radius: 10px;
        font-size: 18px;
        font-weight: 500;
        padding-left: 5px;
    }
</style>