<template>
  <router-view />
  <nav>
    <router-link to="/produtos">Produtos</router-link>
    <router-link to="/carrinho">Carrinho</router-link>
  </nav>
</template>

<style scoped>
nav {
  display: flex;
  gap: 1rem;
  padding: 1rem;
  background-color: #f4f4f4;
}
</style>
