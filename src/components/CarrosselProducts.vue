<script setup>
import { ref, onMounted, watch } from 'vue';
import { useProdutoStore } from '@/stores/produto';
import ModalSpamProduto from './ModalSpamProduct.vue';
import { formatPrice } from '@/helpers/format';

// Importações do Swiper
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';

const props = defineProps(['categoria_id']);
const produtoStore = useProdutoStore();
const showSpamProduct = ref(false);
const currentProduct = ref({});

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

watch(
  () => props.categoria_id,
  async () => {
    await getProdutos();
  },
);

onMounted(async () => {
  await getProdutos();
});

const modules = [Navigation, Pagination, Autoplay];
</script>


<template>
  <div class="produto-container">
    <div class="produto-list">
      <div v-if="produtoStore.produtos.length === 0">
        <h3 class="spam">Produtos não encontrados!</h3>
      </div>
  
      <swiper
        :modules="modules"
        :slides-per-view="3"
        :space-between="30"
        navigation
        pagination
        :autoplay="{ delay: 3000 }"
        loop
      >
        <swiper-slide
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
              <p>{{ formatPrice(produto.preco * 1) }}</p>
            </div>
          </div>
        </swiper-slide>
      </swiper>
    </div>
  </div>
    <ModalSpamProduto
      v-if="showSpamProduct"
      @close="showSpamProduct = false"
      :product="currentProduct"
    />
  </template>
  

<style scoped>

.produto-container {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 30px;
  padding-top: 0px;
  padding-bottom:50px ;
}

.swiper {
    width: 80rem;
    height: auto;
    
  }
  
  .swiper-slide {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .cards{
    width: 100px;
    height: 300px;
    border: solid;
    border-radius: 20px;
    border-width: 0.15em;
  }

  
  .produto-img-wrapper {
    display: flex;
    justify-content: center;
    align-items: top;
    background-color: #ffffff;
    height: 200px;
  }
  
  .produto-img-wrapper img {
    width: 153px;
    height: 170px;
    object-fit: cover;
  }
  
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
  


</style>