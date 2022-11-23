<template>
    <div class="box has-text-weight-bold">
        <div class="columns">
            <div class="column is-7">
                Descrição da tarefa
            </div>
            <div class="column">
                <CronometroForm :tempoEmSegundos="15"/>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
    import { defineComponent } from 'vue';
    import CronometroForm from './CronometroForm.vue';

    export default defineComponent({
        name: 'TarefaComponente',
        components: {CronometroForm}
    })
</script>

<style scoped>
    .box {
        background: #FAF0CA;
    }
</style>