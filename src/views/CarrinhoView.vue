<script setup>
import { useCarrinhoStore } from '@/stores/carrinho';
import { formatPrice } from '@/helpers/format';
import HeaderProduto from '@/components/HeaderProduto.vue';
import ModalSpamZap from '@/components/ModalSpamZap.vue';
import { ref } from 'vue';
const carrinhoStore = useCarrinhoStore(); // Instância da store do carrinho
const showSpamProduct = ref(false);
const currentProduct = ref({});

function removerProduto(produtoId) {
  carrinhoStore.removerProduto(produtoId);
}
</script>

<template>
  <HeaderProduto />
  <div class="carrinho">
    <div class="container-card">
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
        <button @click="carrinhoStore.limparCarrinho()" class="trash">Limpar Carrinho</button>
        <div class="spam-product" v-if="showSpamProduct">
          <ModalSpamZap :product="currentProduct" />
        </div>
        <button>
          <ModalSpamZap v-if="showSpamProduct" @close="showSpamProduct = false" :product="currentProduct" />
          Comprar
          </button>
      </div>
    </div>
  </div>

</template>

<style scoped>
/* Container principal */
.carrinho {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh; /* Garante que o carrinho fique centralizado na tela */
  background-color: #ffffff; /* Cor de fundo leve */
}

/* Card do carrinho */
.carrinho .container-card {
  background-color: #ffffff;
  border-radius: 10px;
  border: solid black 1px; 
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); /* Sombra para destacar o card */
  padding: 2rem;
  width: 400px;
  max-width: 100%;
  box-sizing: border-box;
  color: #000;
}

/* Título do carrinho */
.carrinho h2 {
  font-size: 1.5rem;
  font-weight: bold;
  margin-bottom: 1rem;
}

/* Estilo para itens no carrinho */
.carrinho-item {
  display: flex;
  border-bottom: solid 1px #69696975;
  padding: 1rem;
  gap: 1rem;
  margin-bottom: 1rem;
  background-color: #ffffff; /* Cor de fundo para os itens */
}

.carrinho-item img {
  width: 80px;
  height: 80px;
  object-fit: cover;
  border-radius: 8px;
}

.carrinho-item div {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  max-width: 150px;

}

button {
  background-color: #000000;
  color: white;
  border: none;
  padding: 0.5rem 1rem;
  cursor: pointer;
  border-radius: 5px;
  transition: background-color 0.3s ease;
  max-width: 100px;
}
.trash{
  max-width: 200px;
  margin-right: 110px;
}

button:hover {
  background-color: #444;
}

/* Total e limpar carrinho */
.carrinho h3 {
  font-size: 1.25rem;
  font-weight: bold;
  margin-top: 1rem;
}

button:last-child {
  background-color: #000000;
  margin-top: 1rem;
}
</style>
