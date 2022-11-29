import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router";
import Tarefas from '../views/Tarefas.vue';
import ProjetosAluraTracker from '../views/ProjetosAluraTracker.vue';
import FormularioAluraTracker from '../views/Projetos/FormularioAluraTracker.vue';
import ListaProjetos from '../views/Projetos/ListaProjetos.vue';

const rotas: RouteRecordRaw[] = [
    {
        path: '/',
        name: 'Tarefas',
        component: Tarefas
    },
    {
        path: '/projetos',
        component: ProjetosAluraTracker,
        children: [
            {
                path: '',
                name: 'ProjetosAluraTracker',
                component: ListaProjetos
            },
            {
                path: 'novo',
                name: 'Novo Projeto',
                component: FormularioAluraTracker
            },
            {
                path: ':id',
                name: 'Editar Projeto',
                component: FormularioAluraTracker,
                props: true
            }
        ]
    }
];

const roteador = createRouter({
    history: createWebHashHistory(),
    routes: rotas
});

export default roteador;