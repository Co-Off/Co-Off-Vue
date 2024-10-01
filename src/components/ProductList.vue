<script setup>
import { onMounted, watch } from 'vue';
import { useProdutoStore } from '@/stores/produto';

import { formatDescription, formatPrice, formatTitle } from '@/helpers/format';

const props = defineProps(['categoria_id']);
const produtoStore = useProdutoStore();

async function getProdutos() {
  if (props.categoria_id) {
    await produtoStore.getProdutosPorCategoria(props.categoria_id);
  } else {
    await produtoStore.getProdutos();
  }
}

watch(
  () => props.categoria_id,
  async () => {
    await getProdutos();
  },
);

onMounted(async () => {
  await getProdutos();
});
</script>

<template>
  
  <div class="produto-list">
    <router-link :to="{ name: 'ProdutoAdd' }">
      <button class="icon ">
        <i class="mdi mdi-plus" />
      </button>
    </router-link>
    <div v-if="produtoStore.produtos.length === 0">
      <h3 class="spam">Produtos não encontrados!</h3>
    </div>
    <div
      v-for="produto in produtoStore.produtos"
      :key="produto.id"
      class="produto-card"
    >
      <div class="produto-img-wrapper">
        <img :src="produto.imagemDoProduto?.url" alt="produto.name" />
        <i class="mdi mdi-heart-outline" />
      </div>
      <div class="produto-title-price">
        <p>{{ formatTitle(produto.nome) }}</p>
        <p>{{ formatPrice(produto.preco * 1) }}</p>
      </div>
      <div class="produto-description-stars">
        <p>{{ formatDescription(produto.descricao) }}</p>
        <div class="stars">
          <i class="mdi mdi-star" />
          <i class="mdi mdi-star" />
          <i class="mdi mdi-star" />
          <i class="mdi mdi-star" />
          <i class="mdi mdi-star" />
        </div>
      </div>
    </div>
  </div>
  
</template>

<style scoped>

.icon {
  background-color: #000000;
  color: white;
  border: none;
  border-radius: 50%;
  width: 50px;
  height: 50px;

  position: fixed;
  bottom: 12rem;
  right: 20px;
}

.icon:hover {
  background-color: #bac9e8;
  color: #0a2668;
}

.icon i {
  font-size: 2rem;
}

.produto-list {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  padding: 1rem;
  text-align: center;
  
}

.produto-card {
  width: 225px;
  font-family: 'Belleza', sans-serif;
}

.produto-img-wrapper {
  display: flex;
  justify-content: center;
  align-items: top;
  gap: 0.5rem;
  padding-top: 20px;
  margin-bottom: 1rem;
  background-color: #eeeeee;
  height: 201px;
}

.produto-img-wrapper img {
  width: 153px;
  height: 170px;
  object-fit: cover;
}

.produto-title-price {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;
}

.produto-title-price p {
  font-weight: bold;
  font-size: 16px;
  color: #010101;
}

.produto-description-stars {
  display: flex;
  flex-direction: column;
  margin-bottom: 1rem;
}

.produto-description-stars p {
  font-size: 12px;
  color: #535050;
}
</style>