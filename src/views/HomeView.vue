<script setup>
import CategoryList from '@/components/CategoryList.vue';
import HistoryBox from '@/components/HistoryBox.vue';

import { onMounted } from 'vue';
import { PassageUser } from '@passageidentity/passage-elements/passage-user';
import { useAuthStore } from '@/stores/auth';

const authStore = useAuthStore();
const getUserInfo = async () => {
  try {
    const authToken = localStorage.getItem('psg_auth_token');
    const passageUser = new PassageUser(authToken);
    const user = await passageUser.userInfo(authToken);
    if (user) {
      await authStore.setToken(authToken);
    } else {
      authStore.unsetToken();
    }
  } catch (error) {
    authStore.unsetToken();
  }
};

onMounted(() => {
  getUserInfo();
});
</script>

<template>
  <h2>Nossos Produtos:</h2>
  <category-list />
  <history-box />
</template>
<style scoped>
main{
margin: none;
}
h2{
  margin: 30px;
  text-align: center;
  font-size: 28px;
  color: #000000;
  padding-bottom: 10px;
}
</style>