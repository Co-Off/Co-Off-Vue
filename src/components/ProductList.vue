<script setup>
import { ref, onMounted, watch } from 'vue';
import { useProdutoStore } from '@/stores/produto';
import { useCarrinhoStore } from '@/stores/carrinho'; // Importa a store do carrinho
import ModalSpamProduto from './ModalSpamProduct.vue';
import { formatPrice } from '@/helpers/format';

const props = defineProps(['categoria_id']);
const produtoStore = useProdutoStore();
const carrinhoStore = useCarrinhoStore(); // Instância da store do carrinho
const showSpamProduct = ref(false);
const currentProduct = ref({});
const showToast = ref(false); // Controle do toast
const toastMessage = ref(''); // Mensagem do toast

async function getProdutos() {
  if (props.categoria_id) {
    await produtoStore.getProdutosPorCategoria(props.categoria_id);
  } else {
    await produtoStore.getProdutos();
  }
}

function showProduct(produto) {
  currentProduct.value = produto;
  showSpamProduct.value = true;
}

function adicionarAoCarrinho(produto) {
  carrinhoStore.adicionarProduto(produto); // Adiciona o produto ao carrinho
  toastMessage.value = `${produto.nome} foi adicionado ao carrinho!`; // Mensagem de confirmação
  showToast.value = true; // Exibe o toast
  setTimeout(() => {
    showToast.value = false; // Esconde o toast após 2 segundos
  }, 6000);
}

watch(
  () => props.categoria_id,
  async () => {
    await getProdutos();
  },
);

onMounted(async () => {
  await getProdutos();
  console.log(produtoStore.produtos);
});
</script>



<template>
  <div class="produto-list">
    <div v-if="produtoStore.produtos.length === 0">
      <h3 class="spam">Produtos não encontrados!</h3>
    </div>
    <div
      v-for="produto in produtoStore.produtos"
      :key="produto.id"
      class="cards"
    >
      <div @click="showProduct(produto)">
        <div class="produto-img-wrapper">
          <img :src="produto.imagemDoProduto?.url" alt="produto.image" />
          <i class="mdi mdi-heart-outline" />
        </div>
        <div class="produto-title-price">
          <p>{{ produto.nome }}</p>
          <p>{{ formatPrice(produto.preco) }}</p>
        </div>
      </div>
      <!-- Botão para adicionar ao carrinho -->
      <button @click.stop="adicionarAoCarrinho(produto)" class="btn-carrinho">
        Adicionar ao Carrinho
      </button>
    </div>
  </div>

  <!-- Exibição do Toast de confirmação -->
  <div v-if="showToast" class="toast">
    {{ toastMessage }}
  </div>

  <!-- Modal de detalhes do produto -->
  <ModalSpamProduto v-if="showSpamProduct" @close="showSpamProduct = false" :product="currentProduct" />
</template>

<style scoped>
/* Estilo para o Toast (mensagem temporária de confirmação) */
.toast {
  position: fixed;
  top: 80px;
  left: 80%;
  transform: translateX(-50%);
  background-color: #000000;
  color: white;
  padding: 10px 20px;
  border-radius: 5px;
  font-size: 16px;
  z-index: 1000;
  transition: opacity 0.5s ease;
  min-width: 200px;
  text-align: center;

}

/* Estilos para os produtos */
.cards {
  width: 200px;
  height: 300px;
  overflow: hidden;
  position: relative;
  border: solid;
  border-radius: 20px;
  border-width: 0.15em;
}

.cards:hover {
  transform: scale(1.05, 1.05);
  transition: 0.4s;
}


/* Estilos da lista de produtos */
.produto-list {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  padding: 1rem;
  gap: 2rem;
  text-align: center;
  background-color: #ffffff;
}

.produto-card {
  width: 200px;
  font-family: 'Belleza', sans-serif;
  border: #000000;
}

/* Estilo para as imagens dos produtos */
.produto-img-wrapper {
  display: flex;
  justify-content: center;
  align-items: top;
  padding-top: 20px;
  background-color: #ffffff;
  height: 200px;
}

.produto-img-wrapper img {
  width: 153px;
  height: 170px;
  object-fit: cover;
}

/* Estilo para o nome e preço do produto */
.produto-title-price {
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  margin: 3px;
}

.produto-title-price p {
  font-weight: bold;
  font-size: 16px;
  color: #010101;
}

/* Estilo do botão de adicionar ao carrinho */
.btn-carrinho {
  background-color: #000000;
  color: #ffffff;
  border: none;
  border-radius: 5px;
  padding: 0.5rem 1rem;
  font-size: 14px;
  cursor: pointer;
  margin-top: 10px;
  transition: background-color 0.3s ease;
}
</style>

