<script setup>
import ProductList from '@/components/ProductList.vue';
import HeaderProduto from '@/components/HeaderProduto.vue';

</script>
<template>
    <div>
        <HeaderProduto/>
        <h2>Nossos Produtos:</h2>
        <ProductList/>
    </div>
</template>

<style scoped>
h2{
    text-align: center;
}
.back {
    text-decoration: none;
    color: #ffffff;
    font-weight: bold;
    text-decoration-line: none;
}
button{
    margin-top: 20px;
    padding: 10px 20px;
    background-color: #000000;
    color: #fff;
    border: none;
    cursor: pointer;
    transition: background-color 0.3s ease;
    border-radius: 7px;

}

</style>