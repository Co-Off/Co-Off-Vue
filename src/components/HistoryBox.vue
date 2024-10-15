<script setup>
</script>
<template>
    <div class="flex-container">
        <div class="history-image">
            <h1 class="title"> We are The CO-OFF</h1>

        </div>
        <div class="history-text">
            <h1>Torrefação própria de cafés</h1>
            <p>
                A seleção e a torrefação dos nossos grãos acontecem na cidade de
                Curitiba, por meio de um criterioso trabalho do nosso Mestre de
                Torras. Esse profissional, após diversas pesquisas e testes,
                encontrou o perfil (ou curva) de torra ideal, responsável por definir
                o tempo e a temperatura as quais ficarão expostas os grãos na
                Torrefadora. Com ela, conseguimos valorizar o café e ressaltar as
                suas características da melhor maneira. E, assim, nossos clientes
                podem desfrutar o melhor que podemos oferecer.
            </p>
        </div>
    </div>
</template>
<style scoped>
.flex-container {
    display: flex;
    flex-wrap: nowrap;
    background-color: black;
    color:white;
    height: 700px;

  }
  .flex-container > div {
    flex: auto  ;
    justify-content: center;
    width: 100%;
    margin-bottom: 0px;
    line-height: 50px;
    padding: 0px;
    text-align: center;
  }
  .history-image {
    background-image:url(../assets/image-history.png) ;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    align-items: center;
    display: flex;
  }
  .history-text {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .history-text > p {
    font-size: 20px;
    line-height: 1.5;
    text-align: justify;
    margin: 50px;
  }
  h1{
    font-size: 2rem;
    margin-top: 0;
    margin-bottom: 1rem;
    text-align: center;
  }
  .title{
    text-align: center;
    justify-content: center;
  }
  .space{
    height: 100px;
  }
</style>