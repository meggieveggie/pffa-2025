<script setup lang="ts">
import { BImg, BRow, BCol, BContainer } from 'bootstrap-vue-3';
const logo = new URL('../assets/main_image.png', import.meta.url).href;
</script>

<template>
  <b-container fluid>
    <b-row class="mt-5">
      <!-- Left Grid: Content -->
      <b-col xs="12" lg="6" class="mt-5  move-right">
        <div class="titles">About Us</div>
        <p class="text">
          Porn Film Festival Amsterdam aims to create a safe and accessible space where marginalised voices can be heard, and where the community can come together to explore, reclaim and celebrate their autonomy and art. And most importantly: to enjoy, connect, discuss, get inspired and create.
        </p>

        <div>
          <div class="titles mb-4">Our guiding principles</div>
          <b-row class="four-blocks mb-4">
            <b-col xs="12" sm="6">
              <div class="block">Plurality.</div>
              <p class="text">
                Many have been made invisible by the leading culture. Many others have been objectified by it. Here they take the lead and bring their own desires and legacy to the fore. We provide a stage to assemble these very diverse perspectives and explore together the untold territories of sexuality.
              </p>
            </b-col>

            <b-col xs="12" sm="6">
              <div class="block">Art.</div>
              <p class="text">
                Porn is a film genre and as such it demands artistic value. Cinema illuminates, expands and defies reality with its endless stream of perceptions. We reclaim porn as a field of aesthetic experimentation.
              </p>
            </b-col>

            <b-col xs="12" sm="6">
              <div class="block">Pleasure.</div>
              <p class="text">
                Porn enriches our sex life and helps us explore fantasies. Desire is extremely layered and ambiguous and we need others to know ourselves better. We strive to create an open environment in which shame gives place to playfulness.
              </p>
            </b-col>

            <b-col xs="12" sm="6">
              <div class="block">Community.</div>
              <p class="text">
                We live in a city which, while calling itself tolerant, makes it increasingly hard for many to stay. We believe in the potential of real-life encounters to challenge and reconquer the public space.
              </p>
            </b-col>
          </b-row>
        </div>

        <p class="text">
          Moreover, the 2025 edition of the festival recognises the nature of the new Dutch government as it stands openly against plurality in all its forms and raises taxes on cultural events, theaters, books, newspapers, thereby making them less accessible.
        </p>

        <p class="text">
          Porn Film Festival Amsterdam stands as a beacon of resistance against these changes, offering a platform for artistic and sexual exploration.
        </p>
      </b-col>

      <!-- Right Grid: Image -->
      <b-col xs="12" lg="5" class="d-flex justify-content-center align-items-center">
        <b-img fluid :src="logo" class="main-image"></b-img>
      </b-col>
    </b-row>
  </b-container>
</template>

<style scoped>

.move-right {
  margin-left: 50px; /* Adjust the value as needed */
}


.block {
  font-weight: 500;
  font-size: 1.3em;
}

.main-image {
  width: 80%; /* Adjust width as needed */
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
