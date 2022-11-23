<template>
    <div class="is-flex is-align-items-center is-justify-content-space-between">
        <CronometroForm :tempoEmSegundos="tempoEmSegundos" />
        <BotaoTemporizador @clicado="iniciar" icone="fas fa-play" texto="play" :desabilitado="cronometroRodando" />
        <BotaoTemporizador @clicado="finalizar" icone="fas fa-stop" texto="stop" :desabilitado="!cronometroRodando" />
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import CronometroForm from './CronometroForm.vue';
import BotaoTemporizador from './BotaoTemporizador.vue';

export default defineComponent({
    name: 'TemporizadorTarefas',
    emits: ['aotemporizadorFinalizado'],
    components: { CronometroForm, BotaoTemporizador },
    data() {
        return {
            tempoEmSegundos: 0,
            cronometro: 0,
            cronometroRodando: false,
        }
    },
    methods: {
        iniciar() {
            this.cronometroRodando = true;
            this.cronometro = setInterval(() => {
                this.tempoEmSegundos++;
            }, 1000)
        },
        finalizar() {
            this.cronometroRodando = false;
            clearInterval(this.cronometro);
            this.$emit('aotemporizadorFinalizado', this.tempoEmSegundos);
            this.tempoEmSegundos = 0;
        }
    }
});
</script>