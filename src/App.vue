<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue';
import ListagemProdutos from '@/components/ListagemProdutos.vue';
import MenuSuperiorXl from './components/MenuSuperiorXl.vue';
import MenuSuperiorLg from './components/MenuSuperiorLg.vue';
import MenuSuperiorMd from './components/MenuSuperiorMd.vue';
import MenuSuperiorSm from './components/MenuSuperiorSm.vue';
import MenuSuperiorXs from './components/MenuSuperiorXs.vue';

const currentMenu = ref(MenuSuperiorXl);

const updateMenuSuperior = () => {
  const width = window.innerWidth;
  if (width <= 768) {
    currentMenu.value = MenuSuperiorXs;
  } else if (width <= 992) {
    currentMenu.value = MenuSuperiorSm;
  } else if (width <= 1200) {
    currentMenu.value = MenuSuperiorMd;
  } else if (width <= 1500) {
    currentMenu.value = MenuSuperiorLg;
  } else {
    currentMenu.value = MenuSuperiorXl;
  }
};

onMounted(() => {
  updateMenuSuperior();
  window.addEventListener('resize', updateMenuSuperior);
});

onBeforeUnmount(() => {
  window.removeEventListener('resize', updateMenuSuperior);
});
</script>

<template>
  <component :is="currentMenu" />
  <ListagemProdutos />
</template>
