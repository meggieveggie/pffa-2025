<script setup lang="ts">
import { BImg, BRow, BCol, BContainer } from 'bootstrap-vue-3';

const props = defineProps(['image', 'title', 'time', 'place', 'description', 'duration', 'text', 'imagelogo', 'ticket']);
</script>

<template>
  <b-row>
    <b-col xs="12" lg="5">
      <!-- Image and Icons Container -->
      <div class="image-container">
        <b-img :src="props.image" class="standard-image" />
      </div>
    </b-col>

    <b-col xs="12" lg="6">
      <h2>{{ props.title }}</h2>
      <h3>{{ props.time }} |  {{ props.place }}</h3>
      <br />
      <div v-html="props.text"></div>
      <br />
      <div v-html="props.description"></div>
      <p v-if="props.duration">
        <span style="font-weight: bold;">Total duration: </span>{{ props.duration }}
      </p>

        <!-- Button and Image Section -->
      <div style="display: flex; justify-content: space-between; align-items: center; margin-top: 20px;">
        <a :href="props.ticket" style="text-decoration: none;">
          <button v-if="props.ticket" style="background-color: #2C2C2C; color: white; border: none; padding: 10px 20px; cursor: pointer; border-radius: 8px;">
            Buy ticket
          </button>
        </a>
        <img 
          :src="props.imagelogo" 
          alt="Event Image" 
          style="height: 60px; width: auto; margin-left: 10px; border-radius: 8px;">
            </div>

    </b-col>
    <hr style="border-top: 3px solid #000000; width: 75%; margin: 20px auto;"/>
  </b-row>
</template>

<style scoped>
.standard-image {
  width: 100%; /* Adjust this as needed, e.g., 300px for fixed size */
  max-width: 500px; /* You can set a max width if you want to restrict the size */
  height: auto; /* Maintain aspect ratio */
}

.image-container {
  display: flex;
  flex-direction: column; /* Align image and icons vertically */
  align-items: flex-end; /* Align both image and icons to the left */
}

</style>
