import { ref } from 'vue';
import { defineStore } from 'pinia';

import AuthService from '@/services/auth';
const authService = new AuthService();

export const useAuthStore = defineStore('auth', () => {
  const user = ref({});
  const isLoggedIn = ref(false)

  async function setToken(token) {
    try {
      user.value = await authService.postUserToken(token);
      isLoggedIn.value = true;
    } catch (error) {
      console.error(error);
      unsetToken();
    }
  }

  function unsetToken() {
    user.value = {};
    isLoggedIn.value = false;
  }

  return { user, isLoggedIn, setToken, unsetToken };
});