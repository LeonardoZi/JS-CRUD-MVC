import { Produto } from "../model/produto.js";
import { ProdutoView } from "../view/produtoView.js";
import { listaProdutos } from "../model/produto.js";

export class ProdutoController {
    constructor() {
        this.listaProdutos = new listaProdutos();
        this.produtoView = new ProdutoView();

        this.idEdicao = null;

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

            if (event.target.classList.contains('editButton')) {
                event.preventDefault();

                const idEditar = Number(event.target.dataset.id);
                console.log("Clicou para editar - ID:", idEditar);

                this.editarProduto(event);
            }
        })
    }

    adicionarProduto(event) {
        event.preventDefault();

        const nome = this.inputNome.value;
        const preco = this.inputPreco.value;
        const descricao = this.inputDesc.value;

        if(this.idEdicao !== null) {


            this.listaProdutos.editar(this.idEdicao, nome, preco, descricao);

            this.idEdicao = null;

        } else{
            const novoProduto = new Produto(nome, preco, descricao);

            this.listaProdutos.adicionar(novoProduto);
            console.log('Produto criado');
            console.log(nome, preco, descricao, this.listaProdutos.listar());
        }

        document.querySelector('.tituloFormulario').textContent = "Adicionar um produto";
        const tabelaAtualizada = this.listaProdutos.listar();
        this.produtoView.atualizarTabela(tabelaAtualizada);
        this.produtoView.limparFormulario();

    }

    removerProduto(id, elementoBotao) {
        this.listaProdutos.remover(id);
        elementoBotao.closest("tr").remove();

        console.log("Lista atualizada após remoção: ", this.listaProdutos.listar());
    }

    editarProduto(event) {
        event.preventDefault();

        document.querySelector('.tituloFormulario').textContent = "Editar Produto";

        const id = Number(event.target.dataset.id);

        const produto = this.listaProdutos.produtos.find(prod => prod.id === id);

        this.inputNome.value = produto.nome;
        this.inputPreco.value = produto.preco;
        this.inputDesc.value = produto.descricao;

        this.idEdicao = id;
    }
}