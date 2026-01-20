export class Produto {
    constructor(nome, preco, descricao) {
        this.id = Date.now();
        this.nome = nome;
        this.preco = preco;
        this.descricao = descricao;
    }
}

export class listaProdutos {
    constructor() {
        this.produtos = [];
    }

    adicionar(produto) {
        this.produtos.push(produto);
    }

    remover(id) {
        this.produtos = this.produtos.filter(prod => prod.id !== prod.id);
    }

    listar() {
        return this.produtos;
    }
}