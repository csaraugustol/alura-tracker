import { NOTIFICAR } from './../store/tipo-mutacoes';
import { TipoNotificacao } from './../interfaces/INotificacao';
import { store } from '@/store';

export const notificaoMixin = {
    methods: {
        notificar(tipo: TipoNotificacao, titulo: string, texto: string) {
            store.commit(NOTIFICAR, {
                titulo,
                texto,
                tipo
            });
        }
    }
}