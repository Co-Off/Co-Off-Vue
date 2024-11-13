<script setup>
  import CartPlus from 'vue-material-design-icons/CartPlus.vue';
  import Account from 'vue-material-design-icons/Account.vue';

  import {useAuthStore} from '@/stores/auth'
  const authStore = useAuthStore()

  function handleLogin() { 


  }
  </script>
  
  <template>
    <div class="flex-container">
      <div/>
      <div/>
      <div>
        <router-link :to ="{name: 'Home' }">
            <img src="@/assets/logo-horizontal-branca.png" class="logo"/>
        </router-link>
      </div>
      <div/>
        <div class="icons">
          <CartPlus class="icon-shop"/>
          <router-link :to ="{name: 'Login' }">
            <button class="button" @click="handleLogin">{{ authStore.isLoggedIn ? 'Meu Perfil' : 'Login' }}
              <Account class="icon-login"/>
            </button>
          </router-link>
        </div>
    </div>
  </template>
  
  <style scoped>
  .button {
    display: flex;
    background-color: #000000;
    color: white;
    padding: 7px ;
    border-radius: 20px;
    cursor: pointer;
    justify-content: center;
    transition: all;
    align-items: center;
    font-weight: bold;
    border: 0;
      
  }
  .button:hover {
        background-color: white;
        color: #000000;
        transition: all 0.5s ease;
        border: 0;
  }
  .flex-container {
    display: flex;
    flex-wrap: nowrap;
    background-color: black;
  }
  .flex-container > div {
    flex: auto  ;
    justify-content: center;
    width: 100px;
    margin: 10px;
    margin-bottom: 5px;
    text-align: center;
    line-height: 50px;
    font-size: 30px;
    margin-top: 5px;
  }

  a {
    text-decoration: none;
  }
  
  .logo{
    width: 50%;
    height: fit-content;
    justify-content: center;
    align-self: center;
    margin-top: 10px;
  
  }
  .icons {
    display: flex;
    gap: 1rem;
    align-items: center;
    font-size: 1rem;
    color: #ffffff;
    margin-top: 0px;
  }
  
  
  </style>
  