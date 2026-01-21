export class ProdutoView {
    constructor() {
        this.listaProdutos = document.querySelector(".listaProdutos");
    }

    atualizarTabela(listaProdutos) {
        this.listaProdutos.innerHTML = '';

        listaProdutos.forEach(produto => {
            this.adicionarTabela(produto);
        })
    }

    adicionarTabela(produto) {
        const novaLinha = `
        <tr>
            <td>${produto.nome}</td>
            <td>${produto.descricao}</td>
            <td>R$ ${produto.preco}</td>
            <td>
                <a class="editButton" href="#" data-id="${produto.id}" style="background-color: rgb(240, 224, 82); color:black; padding: 2px; border-radius: 5px;">Editar</a>
                <a class="deleteButton" href="#" data-id="${produto.id}" style="background-color: rgb(230, 84, 84); color:black; padding: 2px; border-radius: 5px;">Remover</a>
            </td>
        </tr>
        `;

        this.listaProdutos.innerHTML += novaLinha;
    }

    limparFormulario() {
        document.querySelector('.nomeProd').value = '';
        document.querySelector('.precoProd').value = '';
        document.querySelector('.descProd').value = '';
        document.querySelector('.nomeProd').focus();
    }
}