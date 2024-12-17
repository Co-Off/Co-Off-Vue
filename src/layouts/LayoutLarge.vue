<script setup>
  import LargeFooter from '@/components/templates/large/LargeFooter.vue';
</script>
<template>
  <div id="layout-large">
    <main>
      <router-view />
    </main>
    <footer>
      <large-footer />
    </footer>
  </div>
</template>

  <style scoped>
#layout-large {
  display: grid;
  grid-template-columns: 0fr 5fr;
  grid-template-rows: auto 1fr auto;
  grid-template-areas:
    'aside header'
    'aside main'
    'aside footer';
  min-height: 100vh;
}

header {
  display: flexbox;
  
  widows: 100vw;
  justify-content: flex-end;
  grid-area: header;
}
main {
  min-height: 80%;
  padding: none;
  grid-area: main;
  
}

footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.5rem;
  background-color: #ffffff;
  grid-area: footer;
  border-top: solid;
  border-color: black;
  border: 0px 5px 0px 0px;
  border-width: 0.15em;

}
</style>