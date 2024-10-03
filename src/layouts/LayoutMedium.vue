<script setup>
  import MediumHeader from '@/components/templates/medium/MediumHeader.vue';
  import MediumFooter from '@/components/templates/medium/MediumFooter.vue';
</script>

<template>
  <div id="layout-medium">
    <header>
      <medium-header />
    </header>
    <main>
      <router-view />
    </main>
    <footer>
      <medium-footer />
    </footer>
  </div>
</template>

<style scoped>
#layout-medium {
  display: grid;
  grid-template-columns: 0fr 4fr;
  grid-template-rows: auto 1fr auto;
  grid-template-areas:
    'aside header'
    'aside main'
    'aside footer';
  min-height: 100vh;
}

header {
  display: flex;
  justify-content: flex-end;
  grid-area: header;
  background-color: black;
}

main {
  min-height: 80%;
  padding: 2rem;
  grid-area: main;
}

footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2rem;
  background-color: #eeeeee;
  grid-area: footer;
}
</style>
