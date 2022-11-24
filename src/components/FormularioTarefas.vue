<template>
    <div class="box formulario">
        <div class="columns">
            <div class="column is-8" role="form" aria-label="Formulário para criação de uma nova tarefa">
                <input type="text" name="" id="" placeholder="Qual tarefa deseja iniciar?" v-model="descricao" required/>
                <span v-el:msg-erro id="msg-erro" style="color: red; display: none; font-weight: 600;">Campo Obrigatório</span>
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
    emits: ['aoSalvarTarefa'],
    data() {
        return {
            descricao: '',
        }
    },
    components: {TemporizadorTarefa},
    methods: {
        finalizarTarefa(tempoDecorrido: number): void {
            this.$emit('aoSalvarTarefa', {
                duracaoEmSegundos: tempoDecorrido,
                descricao: this.descricao
            })
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

    .formulario {
        color: var(--texto-primario);
        background-color: var(--bg-primario);
    }
</style>