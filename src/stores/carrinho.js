import { defineStore } from 'pinia';

export const useCarrinhoStore = defineStore('carrinho', {
  state: () => ({
    items: [], // Produtos adicionados ao carrinho
  }),
  actions: {
    adicionarProduto(produto) {
      const itemExistente = this.items.find(item => item.id === produto.id);
      if (itemExistente) {
        itemExistente.quantidade += 1; // Incrementa a quantidade se o produto já existir
      } else {
        this.items.push({ ...produto, quantidade: 1 }); // Adiciona novo produto com quantidade 1
      }
    },
    removerProduto(produtoId) {
      this.items = this.items.filter(item => item.id !== produtoId);
    },
    limparCarrinho() {
      this.items = [];
    },
  },
  getters: {
    total() {
      return this.items.reduce((sum, item) => sum + item.preco * item.quantidade, 0);
    },
  },
});
