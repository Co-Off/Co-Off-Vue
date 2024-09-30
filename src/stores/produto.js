import { ref } from 'vue';
import { defineStore } from 'pinia';

import ProdutoService from '@/services/produto';
const produtoService = new ProdutoService();

export const useProdutoStore = defineStore('produto', () => {
  const produtos = ref([]);

  async function getProdutos() {
    produtos.value = await produtoService.getProdutos();
  }

  async function getProdutosPorCategoria(categoria_id) {
    produtos.value = await produtoService.getProdutoPorCategoria(categoria_id);
  }

  async function createProduto(produto) {
    await produtoService.createProduto(produto);
    getProdutos();
  }

  return { produtos, createProduto, getProdutos, getProdutosPorCategoria };
});