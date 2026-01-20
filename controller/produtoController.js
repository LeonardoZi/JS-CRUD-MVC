import { Produto } from "../model/produto.js";
import { ProdutoView } from "../view/produtoView.js";
import { listaProdutos } from "../model/produto.js";

export class ProdutoController {
    constructor() {
        this.listaProdutos = new listaProdutos();
        this.produtoView = new ProdutoView();

        this.inputNome = document.querySelector('.nomeProd');
        this.inputPreco = document.querySelector('.precoProd');
        this.inputDesc = document.querySelector('.descProd');

        this.tbody = document.querySelector('.listaProdutos');

        this.tbody.addEventListener('click', (event) => {
            if (event.target.classList.contains('deleteButton')) {
                event.preventDefault();

                const idRemover = Number(event.target.dataset.id);
                console.log("Clicou para remover - ID:", idRemover)

                this.removerProduto(idRemover, event.target);
            }
        })
    }

    adicionarProduto(event) {
        event.preventDefault();

        const nome = this.inputNome.value;
        const preco = this.inputPreco.value;
        const descricao = this.inputDesc.value;

        const novoProduto = new Produto(nome, preco, descricao);

        this.listaProdutos.adicionar(novoProduto);
        console.log('Produto criado');
        console.log(nome, preco, descricao, this.listaProdutos.listar());

        this.produtoView.adicionarTabela(novoProduto);
        this.produtoView.limparFormulario();

    }

    removerProduto(id, elementoBotao) {
        this.listaProdutos.remover(id);
        elementoBotao.closest("tr").remove();

        console.log("Lista atualizada após remoção: ", this.listaProdutos.listar());
    }
}