<script setup>
import ProductList from '@/components/ProductList.vue';
</script>
<template>
    <button>
        <router-link :to ="{name: 'Home' }" class="link">
            <div class="back">Voltar</div>
        </router-link>
    </button>
    <div>
        <ProductList/>
    </div>
</template>

<style scoped>
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
.link{
    text-decoration: none;
    color: #ffffff;
    text-decoration-line: none;
}
</style>