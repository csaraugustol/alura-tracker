import { projeto } from './modulos/projeto/index';
import { EstadoProjeto } from './modulos/projeto';
import { INotificacao } from './../interfaces/INotificacao';
import { InjectionKey } from "@vue/runtime-core";
import { createStore, Store, useStore as vuexUseStore } from "vuex";
import { ALTERA_TAREFA, CADASTRAR_TAREFAS, DEFINIR_TAREFAS, NOTIFICAR } from "./tipo-mutacoes";
import { ALTERAR_TAREFA, CADASTRAR_TAREFA, OBTER_TAREFAS } from './tipo-acoes';
import http from '@/http'
import ITarefa from '@/interfaces/ITarefa';
export interface Estado {
    notificacoes: INotificacao[] 
    tarefas: ITarefa[],
    projeto: EstadoProjeto,
}

export const key: InjectionKey<Store<Estado>> = Symbol();

export const store = createStore<Estado>({
    state: {
        notificacoes: [],
        tarefas: [],
        projeto: {
            projetos: []
        }
    },
    mutations: {
        [DEFINIR_TAREFAS](state, tarefas: ITarefa[]) {
            state.tarefas = tarefas
        },
        [CADASTRAR_TAREFAS](state, tarefa: ITarefa) {
            state.tarefas.push(tarefa);
        },
        [ALTERA_TAREFA](state, tarefa: ITarefa) {
            const index = state.tarefas.findIndex(t => t.id == tarefa.id)
            state.tarefas[index] = tarefa
        },
        [NOTIFICAR](state, novaNotificacao: INotificacao) {
            novaNotificacao.id = new Date().getTime()
            state.notificacoes.push(novaNotificacao)

            setInterval(() => {
                state.notificacoes = state.notificacoes.filter(notificacao => notificacao.id != novaNotificacao.id)
            }, 3000);
        },
    },
    actions: {
        [OBTER_TAREFAS]({commit}) {
            http.get('tarefas')
                .then(resposta => commit(DEFINIR_TAREFAS,resposta.data))
        },
        [CADASTRAR_TAREFA]({commit}, tarefa: ITarefa) {
            return http.post('/tarefas', tarefa)
                .then(resposta => commit(CADASTRAR_TAREFAS, resposta.data))
        },
        [ALTERAR_TAREFA]({commit}, tarefa: ITarefa) {
            return http.put(`/tarefas/${tarefa.id}`, tarefa)
            .then(() => commit(ALTERA_TAREFA, tarefa))

        },
    },
    modules: {
        projeto
    }
})

export function useStore(): Store<Estado> {
    return vuexUseStore(key)
}