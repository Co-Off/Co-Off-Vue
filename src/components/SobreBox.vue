<script setup>
</script>
<template>
    <div class="flex-container">
        <div class="history-text">
            <h1>O nosso Ideal</h1>
            <p>
                Nosso Ideal é ser um time preparado, em busca de resultados consistentes e com responsabilidade para você cliente.
                Aqui, nós somos Co-Off, e trabalhamos juntos para conseguir o melhor de tecnologia e qualiadade de nossos produtos.
                Nosso objetivo é retratar a alta gastronomia imersa em inovações presentes no seu cotidiano.
                Se você deseja nos conhecer melhor ou tiver alguma dúvida, não hesite em entrar em contato em nossas redes sociais.
                Agradeçemos a preferência e confiança em nossa Marca.

            </p>
        </div>
        <div class="history-image">
            <h1 class="title"> We are Co-Off</h1>

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
    background-image:url(../assets/sobre.jpg);
    background-color: rgba(0, 0, 0, 0.753);
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
    color: #000;
    background-color: rgb(255, 255, 255);
    padding: 10px 20px 10px 20px;
  }
  .space{
    height: 100px;
  }
</style>