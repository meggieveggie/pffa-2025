<script setup lang="ts">
import { RouterView } from 'vue-router'
import SiteNavbar from './components/SiteNavbar.vue'
import SiteFooter from './components/SiteFooter.vue';
</script>

<template>
  <div class="page-container">
    <SiteNavbar />
    <main app class="pffa_bg">
      <RouterView />
    </main>
    <SiteFooter />
  </div>
</template>

<style scoped>
.page-container {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

header, footer {
  flex-shrink: 0; /* Ensure the header doesn't shrink */
}
main {
    flex-grow: 1;
}

.pffa_bg {
  background-color: #C1D3A6;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  position: relative;
  padding-bottom: 20%;
}
</style>