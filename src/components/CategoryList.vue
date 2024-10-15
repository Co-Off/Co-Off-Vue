<script setup>
</script>
<template>
    <div class="flex-container">
        <div>
            <router-link :to ="{name: 'Produtos' }" class="button">
                <img src="@/assets/purista.png" class="logo"/>
                <div >Bebidas Puristas</div>
            </router-link>
        </div>
        <div>
            <router-link :to ="{name: 'Produtos' }" class="button">
                <img src="@/assets/autorais.png" class="logo"/>
                <div >Bebidas Autorais</div>
            </router-link>
        </div>
        <div>
            <router-link :to ="{name: 'Produtos' }" class="button">
                <img src="@/assets/ico-coado2.png" class="logo"/>
                <div >Bebidas Coadas</div>
            </router-link>
        </div>
        <div>
            <router-link :to ="{name: 'Produtos' }" class="button">
                <img src="@/assets/ico-comida3.png" class="logo"/>
                <div >Comidas</div>
            </router-link>
        </div> 
        <div>
            <router-link :to ="{name: 'Produtos' }" class="button">
                <img src="@/assets/ico-outras-bebidas.png" class="logo"/>
                <div >Bebidas Especiais</div>
            </router-link>
        </div>
        <div>
            <router-link :to ="{name: 'Produtos' }" class="button">
                <img src="@/assets/shop.png" class="logo"/>
                <div>Comprar Mais</div>
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
    margin-bottom: 50px;
    text-align: center;
    line-height: 50px;
    font-size: 30px;

  }
  .logo{
    width: 30%;
    height: auto;
    object-fit: contain;
    cursor: pointer;
  }
  .button{
    font-weight: 7px;
    color: #000000;
    font-size: 20px;
    text-decoration: none;
}
  .button:hover{
    

  }
  .logo:hover{
    filter: brightness(1.2);

    transition: filter 0.3s;

  }
</style>
