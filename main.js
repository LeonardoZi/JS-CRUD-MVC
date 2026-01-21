import { ProdutoController } from "./controller/produtoController.js";

const controller = new ProdutoController();

const botaoSalvar = document.querySelector('.salvarButton');
const botaoEditar = document.querySelector('.editButton');

botaoSalvar.addEventListener('click', (event) => {
    controller.adicionarProduto(event);
})