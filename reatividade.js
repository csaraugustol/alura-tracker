const projeto = {
    id: "1",
    descricao: "Alura"
}

const proxy = new Proxy(projeto, {
    get(objetoOriginal, chave) {
        return objetoOriginal[chave]
    },
    set(objetoOriginal, chave, valor) {
        objetoOriginal[chave] = valor;
    },
})