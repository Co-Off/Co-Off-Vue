<script setup>
  import CartPlus from 'vue-material-design-icons/CartPlus.vue';
  import Account from 'vue-material-design-icons/Account.vue';
  </script>
  
  <template>
    <div class="flex-container">
      <div/><div/>
      <div>
        <router-link :to ="{name: 'Home' }">
            <img src="@/assets/logo-horizontal-branca.png" class="logo"/>
        </router-link>
      </div>
      <div/>
        <div class="icons">
          <CartPlus class="icon-shop"/>
          <router-link :to ="{name: 'Login' }">
            <button class="button">
              <div>Login</div>
              <Account class="icon-login"/>
            </button>
          </router-link>
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
    background-color: black;
  }
  .flex-container > div {
    flex: auto  ;
    justify-content: center;
    margin: 10px;
    margin-bottom: 0px;
    text-align: center;
    line-height: 50px;
    font-size: 30px;
  }
  
  .logo{
    width: 200px;
    margin-left: 115px;
  
  }
  .icons {
    display: flex;
    gap: 1rem;
    align-items: ;
    margin-left: auto;
    color: #ffffff;
  }
  
  
  </style>