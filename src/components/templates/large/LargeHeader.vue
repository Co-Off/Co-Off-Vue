<script setup></script>

<template>
  <div class="flex-container">
      <div/>
      <div/>
      <div>
        <img src="@/assets/logo-horizontal-branca.png" class="logo"/>
      </div>
     <div/>
      <div class="icons">
      <CartPlus class="icon-shop"/>
        <button class="button">
          <div>Login</div>
          <Account class="icon-login"/>
        </button>
      </div>
  </div>
  <div class="login-button"></div>
</template>

<style scoped>
.button {
  display: flex;
  background-color: #000000;
  color: white;
  padding: 7px ;
  border-radius: 45px;
  cursor: pointer;
  justify-content: center;
  transition: all;
  align-items: center;
  font-weight: bold;
    
}
.button:hover {
      background-color: white;
      color: #000000;
      transition: all 0.5s ease;
}
.flex-container {
  display: flex;
  flex-wrap: nowrap;  
}
.flex-container > div {
  flex: auto  ;
  justify-content: center;
  width: 100px;
  margin: 10px;
  text-align: center;
  line-height: 50px;
  font-size: 30px;
}

.logo{
  width: 50%;
  height: fit-content;
  justify-content: center;
}
.icons {
  display: flex;
  gap: 1rem;
  align-items: center;
  font-size: 1rem;
  margin-left: auto;
  color: #ffffff;
}


</style>
