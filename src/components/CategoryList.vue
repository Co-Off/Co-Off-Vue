<script setup>

</script>
<template>
    <div class="flex-container">
        <div>
            <router-link :to ="{name: 'Produtos' }">
                Bebidas Puristas
                <img src="@/assets/purista.png" class="logo"/>
            </router-link>
        </div>
        <div>
            <router-link :to ="{name: 'Produtos' }">
                Bebidas Autorais
                <img src="@/assets/autorais.png" class="logo"/>
            </router-link>
        </div>
        <div>
            <router-link :to ="{name: 'Produtos' }">
                Bebidas Coadas
                <img src="@/assets/ico-coado2.png" class="logo"/>
            </router-link>
        </div>
        <div>
            <router-link :to ="{name: 'Produtos' }">
                Comidas
                <img src="@/assets/ico-comida3.png" class="logo"/>
            </router-link>
        </div>
        <div>
            <router-link :to ="{name: 'Produtos' }">
                Bebidas Especiais
                <img src="@/assets/ico-outras-bebidas.png" class="logo"/>
            </router-link>
        </div>
        <div>
            <router-link :to ="{name: 'Produtos' }">
                Comprar Produtos
                <img src="@/assets/shop.png" class="logo"/>
            </router-link>
        </div>
    </div>
</template>
<style scoped>
.flex-container {
    display: flex;
    flex-wrap: nowrap;
    background-color: rgb(255, 255, 255);
  }
  .flex-container > div {
    flex: auto  ;
    justify-content: center;
    width: 100px;
    margin: 10px;
    margin-bottom: 0px;
    text-align: center;
    line-height: 50px;
    font-size: 30px;
  }
  .logo{
    width: 40%;
    height: auto;
    object-fit: contain;
    cursor: pointer;
  }
</style>
