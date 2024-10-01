<script setup lang="ts">
const logo = new URL('../assets/main_image.png', import.meta.url).href;
import { BContainer, BRow, BCol, BButton, BImg } from 'bootstrap-vue-3';
const pffaLogo = new URL('../assets/pffa_logo.png', import.meta.url).href
</script>

<template>
  <b-container fluid>
  <b-row>
    <b-col xs="12" lg="5" class="mt-5">
      <b-row  class="mt-5">
        <b-img :src="pffaLogo"></b-img>
        <b-col lg="12" class="mb-3">
          <BButton 
          href="#/open_call"
          variant="light"
          class="form-button w-auto not-bold move-right"
          ><span class="linked">Submit</span> your film, performance or workshop
          </BButton>
        </b-col>
        <b-col lg="12" class="mb-3">
          <BButton 
          href="https://2024.pornfilmfestival.amsterdam"
          variant="light"
          class="form-button w-auto not-bold move-right"
          ><span class="linked">Explore</span> the 2024 edition of the festival</BButton>
        </b-col>

        <b-col lg="12" class="mb-3">
          <BButton 
          href="https://www.instagram.com/pff_amsterdam/?hl=en" 
          variant="light"
          class="form-button w-auto not-bold move-right"
          ><span class="linked">Let’s connect</span>  on Instagram</BButton>
        </b-col>

        <b-col lg="12" class="mb-3">
          <BButton 
          href="#/sponsors" 
          variant="light"
          class="form-button w-auto not-bold move-right"
          ><span class="linked">Sponsorship</span> info</BButton>
        </b-col>
      </b-row>
    </b-col>
    <b-col xs="12" lg="6" class="mt-5">
      <b-img fluid :src="logo" class="main-image d-flex align-items-center move-image-right"></b-img>
    </b-col>
  </b-row>
</b-container>
</template>

<style scoped>

.main-image {
  width: 70%; /* Adjust width as needed */
  height: auto; /* Adjust height as needed */
}

.linked {
  text-decoration-line: underline;
  font-weight: 900;
}

.not-bold {
  font-weight: 400;
}

.move-right {
  margin-left: 25px; /* Adjust the value as needed */
}

.move-image-right{
  margin-left: 100px; /* Adjust the value as needed */
}

@media (max-width: 576px) {
  .move-image-right{
    margin-left: 50px; /* Adjust the value as needed */
  }
}
</style>