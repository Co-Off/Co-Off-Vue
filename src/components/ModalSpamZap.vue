<script setup>
import Close from 'vue-material-design-icons/Close.vue';


defineProps(['product'])
// const spamPrtoduct = 


</script>

<template>
  <div class="modal">
    <div class="modal-content">
        <button @click="$emit('close')" class="btn-close">
          aaaaaaaaaaaaa
          <Close/>
        </button>
        <div>
      </div>
  </div>
  </div>
</template>

<style scoped>
.modal {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 100;
}

.modal-content {
  background-color: white;
  padding: 2rem;
  border-radius: 10px;
  width: 30%;
}

.modal-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;
}

.modal-header h2 {
  font-size: 1.5rem;
}


.produto-img-wrapper {
    display: flex;
    justify-content: center;
    align-items: top;
    padding-top: 20px;
    background-color: #ffffff;
    height: 200px;
  }
  
  .produto-img-wrapper img {
    width: 153px;
    height: 170px;
    object-fit: cover;
  }
  
  .produto-title-price {
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    margin: 3px;
  }
  
  .produto-title-price p {
    font-weight: bold;
    font-size: 16px;
    color: #010101;
  }
  
  .produto-description-stars {
    display: flex;
    flex-direction: column;
    margin-bottom: 1rem;
  }
  
  .produto-description-stars p {
    font-size: 12px;
    color: #535050;
  }
  .btn-close{
    font-size: 24px;
    color: #000000;
    background-color: #ffffff;
    border: none;
    padding: 5px 10px;
    border-radius: 5px;
    cursor: pointer;
    transition: background-color 0.3s ease;
    margin-right: 10px;
  }

</style>