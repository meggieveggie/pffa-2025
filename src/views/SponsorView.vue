<script setup lang="ts">
import { BContainer, BRow, BCol, BImg } from 'bootstrap-vue-3';
const logo = new URL('../assets/main_image.png', import.meta.url).href;
const table = new URL('../assets/table.png', import.meta.url).href;
</script>

<template>
  <b-container fluid>
    <b-row class="mt-5">
      <b-col xs="12" lg="5" class="mt-4">
        <BImg fluid :src="logo" class="main-image" />
      </b-col>

      <b-col xs="12" lg="6" class="right-grid d-flex flex-column mt-4">
        <b-row class="top-block">
          <div class="titles mb-4">Sponsor</div>
        </b-row>
        <b-row class="block mb-3">
          <p class="text">
            Porn Film Festival Amsterdam (PFFA) is an annual celebration and critical space centred on sexuality, pleasure, city issues, and politics through the art of adult filmmaking.
          </p>
        </b-row>
        <b-row class="block mb-3">
          <p class="text">
            For 2025, we present an even more engaging and inclusive event, continuing our mission to provide a platform for storytelling, discussion, and of course, sexiness.
          </p>
        </b-row>
        <b-row>
          <b-col lg="4">
            <p class="text mb-4">
              To support the festival and bring brands, organisations and communities along the journey with us, we are opening up sponsorship opportunities.
            </p>
            <b-row class="move-right">
              <BButton href="https://docs.google.com/forms/d/e/1FAIpQLSf8sVpxgo8E7vKIHkthpJ3qS2ntPPvLTZrfqcXUu1TtyYkF7g/viewform" class="form-button mb-2 w-auto">Sponsorship application</BButton>
            </b-row>
            <b-row class="move-right mb-2">
                <BButton href="https://docs.google.com/document/d/12WFFmQFtAnUK9YQsD76MwQc2Z8N96FeChWMVQHWDwgY/edit" class="form-button w-auto">More information</BButton>
            </b-row>
          </b-col>
          <b-col lg="8" class="mb-2">
            <BImg fluid :src="table" class="side-image" />
          </b-col>
        </b-row>
      </b-col>
    </b-row>
  </b-container>
</template>

<style scoped>
.main-image {
  width: 150%; /* Adjust width as needed */
  height: auto; /* Adjust height as needed */
}

@media (max-width: 576px) {
  .titles {
    font-size: 1.5em; /* Smaller font size for mobile */
  }

  .block {
    font-size: 1.1em; /* Reduce block font size for small screens */
  }

  .text {
    font-size: 0.9em; /* Smaller font size for better readability */
  }

  .move-right {
    margin-left: 5px; /* Adjust the value as needed */
  }
}
</style>
