<script setup></script>

<template>
<div class="box-header">
  <div class="logo"></div>
  <div class="icons">
    <i class="mdi mdi-magnify" />
    <i class="mdi mdi-account-circle-outline" />
    <i class="mdi mdi-cart-outline" />
  </div>
  <div class="login-button"></div>
</div>
</template>

<style scoped>
.icons {
  display: flex;
  gap: 1rem;
  align-items: center;
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
}


</style>
