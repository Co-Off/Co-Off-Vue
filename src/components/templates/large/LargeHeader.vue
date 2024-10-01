<script setup></script>

<template>
<<<<<<< HEAD
<div class="box-header">
  <div class="logo"></div>
  <div class="icons">
    <i class="mdi mdi-magnify" />
    <i class="mdi mdi-account-circle-outline" />
    <i class="mdi mdi-cart-outline" />
=======
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
>>>>>>> ba6c45c (alteraçẽs finais Large Header)
  </div>
  <div class="login-button"></div>
</div>
</template>

<style scoped>
<<<<<<< HEAD
=======
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
>>>>>>> ba6c45c (alteraçẽs finais Large Header)
.icons {
  display: flex;
  gap: 1rem;
  align-items: center;
<<<<<<< HEAD
  font-size: 1.7rem;
}
.logo {
  position: absolute;
width: 319px;
height: 87px;
left: 561px;
top: -7px;

background: url(Co-Off-removebg-preview.png);

}


.box-header {

box-sizing: border-box;

position: absolute;
width: 100px;
height: 32px;
left: 1306px;
top: 20px;

border: 1px solid #FFFFFF;
border-radius: 100px;

}
/* Login */
.login-button {
position: absolute;
width: 70px;
height: 32px;
left: 1306px;
top: 20px;

font-family: 'Blinker';
font-style: normal;
font-weight: 300;
font-size: 15px;
line-height: 15px;
=======
  font-size: 1rem;
  margin-left: auto;
  color: #ffffff;
>>>>>>> ba6c45c (alteraçẽs finais Large Header)
}


</style>
