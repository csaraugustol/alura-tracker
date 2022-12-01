<template>
    <div class="box formulario">
        <div class="columns">
            <div class="column is-5" role="form" aria-label="Formulário para criação de uma nova tarefa">
                <input type="text" name="" id="" placeholder="Qual tarefa deseja iniciar?" v-model="descricao"
                    required />
                <span v-el:msg-erro id="msg-erro" style="color: red; display: none; font-weight: 600;">Campo
                    Obrigatório</span>
            </div>
            <div class="column is-3">
                <div class="select">
                    <select v-model="idProjeto">
                        <option value="">Selecione o projeto</option>
                        <option :value="projeto.id" v-for="projeto in projetos" :key="projeto.id">
                            {{ projeto.nome }}
                        </option>
                    </select>
                </div>
            </div>
            <div class="column ">
                <TemporizadorTarefa @aotemporizadorFinalizado="finalizarTarefa" />
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { key } from '@/store';
import { computed, defineComponent, ref } from 'vue';
import { useStore } from 'vuex';
import TemporizadorTarefa from './TemporizadorTarefas.vue';

export default defineComponent({
    name: 'FormularioTarefas',
    emits: ['aoSalvarTarefa'],
    components: { TemporizadorTarefa },
    setup(props, {emit}) {
        const store = useStore(key)

        const descricao = ref("");
        const idProjeto = ref("");
        const projetos = computed(() => store.state.projeto.projetos)

        const finalizarTarefa = (tempoDecorrido: number): void =>  {
            emit('aoSalvarTarefa', {
                duracaoEmSegundos: tempoDecorrido,
                descricao: descricao.value,
                projeto: projetos.value.find(proj => proj.id == idProjeto.value)
            })
            descricao.value = '';
        }

        return {
            descricao,
            idProjeto,
            projetos,
            finalizarTarefa
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