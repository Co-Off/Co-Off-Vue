<script setup>
import { useCarrinhoStore } from '@/stores/carrinho';
import { formatPrice } from '@/helpers/format';
import HeaderProduto from '@/components/HeaderProduto.vue';

const carrinhoStore = useCarrinhoStore();

function removerProduto(produtoId) {
  carrinhoStore.removerProduto(produtoId);
}
</script>

<template>
    <HeaderProduto />
  <div class="carrinho">
    <h2>Seu Carrinho</h2>
    <div v-if="carrinhoStore.items.length === 0">
      <p>Seu carrinho está vazio.</p>
    </div>
    <div v-else>
      <div v-for="item in carrinhoStore.items" :key="item.id" class="carrinho-item">
        <img :src="item.imagemDoProduto?.url" alt="imagem do produto" />
        <div>
          <h4>{{ item.nome }}</h4>
          <p>Preço: {{ formatPrice(item.preco) }}</p>
          <p>Quantidade: {{ item.quantidade }}</p>
          <button @click="removerProduto(item.id)">Remover</button>
        </div>
      </div>
      <h3>Total: {{ formatPrice(carrinhoStore.total) }}</h3>
      <button @click="carrinhoStore.limparCarrinho()">Limpar Carrinho</button>
    </div>
  </div>
</template>

<style scoped>
.carrinho {
  padding: 2rem;
}
.carrinho-item {
  display: flex;
  gap: 1rem;
  margin-bottom: 1rem;
}
.carrinho-item img {
  width: 80px;
  height: 80px;
  object-fit: cover;
}
button {
  background-color: #e74c3c;
  color: white;
  border: none;
  padding: 0.5rem 1rem;
  cursor: pointer;
}
</style>
