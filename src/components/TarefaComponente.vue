<template>
    <BoxTarefas>
        <div class="columns">
            <div class="column is-4">
                {{tarefa.descricao || 'Tarefa sem descrição'}}
            </div>
            <div class="column is-3">
                {{tarefa.projeto?.nome || 'Sem projeto'}}
            </div>
            <div class="column">
                <!-- <i class="fas fa-clock"></i> --><CronometroForm :tempoEmSegundos="tarefa.duracaoEmSegundos" />
            </div>
        </div>
    </BoxTarefas>
</template>

<script lang="ts">
import ITarefa from '@/interfaces/ITarefa';
import { defineComponent, PropType } from 'vue';
import BoxTarefas from './BoxTarefas.vue';
import CronometroForm from './CronometroForm.vue';

export default defineComponent({
    name: 'TarefaComponente',
    components: { CronometroForm, BoxTarefas },
    props: {
        tarefa: {
            type: Object as PropType<ITarefa>,
            required: true
        }
    }
})
</script>