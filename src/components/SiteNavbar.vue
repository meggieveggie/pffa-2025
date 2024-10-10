<script setup lang="ts">
import { ref } from 'vue'
import { RouterLink } from 'vue-router'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import type { BCollapse } from 'bootstrap-vue-3'

const icon = new URL('../assets/icon.png', import.meta.url).href

const collapseNavbar = () => {
  const element = document.getElementById('nav-collapse')
  if (element) {
    element.classList.remove('show')
  }
}
</script>

<template>
  <b-navbar toggleable="lg" fixed="top" sticky="true">
    <b-navbar-brand><router-link to="/"><b-img class="logo" fluid :src="icon"/></router-link></b-navbar-brand>
    <b-navbar-toggle target="nav-collapse">
      <font-awesome-icon icon="fa-bars" class="menu"/>
    </b-navbar-toggle>
    <b-collapse id="nav-collapse" is-nav>
      <b-navbar-nav class="nav nav-collapse ml-auto">
        <b-nav-item class="nav-item-spacing"><router-link to="about_us" @click="collapseNavbar">About Us</router-link></b-nav-item>
        <b-nav-item class="nav-item-spacing"><router-link to="open_call" @click="collapseNavbar">Open Call</router-link></b-nav-item>
        <b-nav-item class="nav-item-spacing"><router-link to="sponsors" @click="collapseNavbar">Sponsors</router-link></b-nav-item>
        <b-nav-item class="nav-item-spacing"><a href="https://2024.pornfilmfestival.amsterdam" @click="collapseNavbar">2024 Edition</a></b-nav-item>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</template>

<style scoped>

.navbar {
  background-color: black;
}


.nav {
  margin-left: auto;
}

a {
    color: var(--vt-c-white);
    text-decoration: none;
}

.menu {
      color: white;
   }

a:hover {
  color: white;
  text-decoration: underline;
}

.router-link-active, .router-link-exact-active {
  color: white;
  text-decoration: underline;
}

.logo {
  max-height: 70px;
}


@media (max-width: 932px) {
   .logo {
     width: 250px;
   }

  .navbar {
    background-color: black;
  }
}

@media (min-width: 932px) {
  .navbar {
    background-color: black;
    max-height: 60px;
  }
}
</style>