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
      <CartPlus class="icon-shop" />
      <router-link :to="{ name: 'Login' }" class="rota">
        <button class="button">
          <div>Login</div>
          <Account class="icon-login" />
        </button>
      </router-link>
    </div>
  </div>
</template>

<style scoped>
.rota {
  text-decoration: none;
}
.button {
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
  top: 24px;
  right: 14px;
  width: 80px;
  height: 30px;
}
.button:hover {
  background-color: white;
  color: #000000;
  transition: all 0.5s ease;
}
.flex-container {
  display: flex;
  flex-wrap: nowrap;
  background-color: black;
  padding-bottom: 20px;
}
.flex-container > div {
  flex: auto;
  justify-content: center;
  margin: 10px;
  margin-bottom: 0px;
  text-align: center;
  line-height: 50px;
  font-size: 30px;
}

.logo {
  width: 200px;
  position: absolute;
  top: 16px;
  left: 818px;
}
.icons {
  display: flex;
  gap: 1rem;
  align-items:;
  margin-left: auto;
  color: #ffffff;
}
.icon-shop {
  
}
</style>
