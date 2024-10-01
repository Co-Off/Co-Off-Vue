<script setup>
import Facebook from  'vue-material-design-icons/Facebook.vue';
import Twitter from 'vue-material-design-icons/Twitter.vue';
import Instagram from 'vue-material-design-icons/Instagram.vue';

</script>
<template>
  <div class="icons">
    <Facebook  class="Face"/>
    <Twitter   class="Twt"/>
    <Instagram class="Insta"/>
  </div>
</template>
<style scoped>
.icons {
  padding-right: 3rem;
  display: flex;
  gap: 4rem;
  font-size: 2.2rem;
}

.Face:hover,
.Twt:hover,
.Insta:hover {
  transform: scale(1.8);
  transition: transform 0.5s ease-in-out;
}

</style>