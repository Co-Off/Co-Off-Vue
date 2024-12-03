import { ref } from 'vue';
import { defineStore } from 'pinia';

import { useRouter } from 'vue-router';

import AuthService from '@/services/auth';
const authService = new AuthService();

export const useAuthStore = defineStore('auth', () => {
  const user = ref({});
  const router = useRouter();
  const isLogged = ref(false);


  async function setToken(token) {
    user.value = await authService.postUserToken(token);
    isLogged.value = true;
    router.push('/');
  }

  function unsetToken() {
    user.value = {};
    isLogged.value = false;
  }

  return { user, setToken, unsetToken , isLogged};
});