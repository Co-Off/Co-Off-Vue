<script setup>
import CartPlus from 'vue-material-design-icons/CartPlus.vue'
import Account from 'vue-material-design-icons/Account.vue'
</script>

<template>
  <div class="flex-container">
    <div>
      <router-link :to="{ name: 'Home' }">
        <img src="@/assets/logo-horizontal-branca.png" class="logo" />
      </router-link>
    </div>
    <div class="icons">
      <router-link :to="{ name: 'Carrinho' }" class="rota">
        <CartPlus class="icon-shop" />
      </router-link>
      <router-link :to="{ name: 'Login' }" class="rota">
        <button class="botao">
          <div>Login</div>
          <Account class="icon-login" />
        </button>
      </router-link>
    </div>
  </div>
</template>

<style scoped>
.a{
  width: 24px;
  height: 24px;
}
.back{
  text-decoration: none;
  color: #ffffff;
  display: flex;
  justify-content: center;
  font-size: 15px;
  background-color: #000000;
  border: none;
  cursor: pointer;
  height: 30px;
  padding: 20px;
  position: absolute;
  top: 18px;
  left: 10px;
  width: 80px;
  padding: 0px;
  border-radius: 45px;
  transition: all 0.5s ease;
  align-items: center;
  border: 1px solid #ffffff;
}
.back:hover {
  background-color: white;
  color: #000000;
  transition: all 0.5s ease;
}
.rota {
  text-decoration: none;
}
.botao {
  display: flex;
  background-color: #000000;
  color: white;
  padding: 0px;
  border-radius: 45px;
  cursor: pointer;
  justify-content: center;
  transition: all;
  align-items: center;
  border: 1px solid #ffffff;
  position: absolute;
  top: 18px;
  right: 14px;
  width: 80px;
  height: 30px;
}
.botao:hover {
  background-color: white;
  color: #000000;
  transition: all 0.5s ease;
}
.flex-container {
  display: flex;
  flex-wrap: nowrap;
  background-color: black;
  align-items: center;
  justify-content: center;
}
.flex-container > div {
  justify-content: center;
  margin-top: 10px;
  margin-bottom: 0px;
  text-align: center;
  line-height: 50px;
  font-size: 30px;
}

.logo {
  width: 200px;
  cursor: pointer;
}
.icons {
  display: flex;
  color: #ffffff;
}
.icon-shop {
  position: absolute;
  top: 10px;
  right: 100px;  
}
</style>
