<script setup lang="ts">
import { BContainer, BRow, BCol, BButton, BImg } from 'bootstrap-vue-3';
const logo = new URL('../assets/main_image.png', import.meta.url).href;
</script>

<template>
  <b-container fluid>
    <b-row class="mt-5">
      <!-- Left Grid: Content -->
      <b-col xs="12" lg="6" class="mt-5 move-right">
      <div class="titles mb-5">Open Call</div>
      <div class="text mb-3">We’re happy to announce the second edition of PFFA!</div>
      <div class="text1 mb-3">Submit your work, ideas, and plans through these forms:</div>
      
      <b-row class="button-container mb-3">
        <b-col sx="6" lg="3" class="mb-2">
        <BButton
          variant="light"
          class="form-button"
          href="https://docs.google.com/forms/d/1fR34B983tSXPVgmhvT3jIbwCcHbP17_sDnjmFfm0FcI/edit"
        >Film</BButton>
        </b-col>
        <b-col lg="3" class="mb-2">
        <BButton
          variant="light"
          class="form-button"
          href="https://docs.google.com/forms/d/1BCMByDvIkGJPnmnkkDKjLZTyYa1SuubFjkUcrPlzHE4/edit"
        >Workshop</BButton>
        </b-col>
        <b-col lg="3" class="mb-2">
        <BButton
          variant="light"
          class="form-button"
          href="https://docs.google.com/forms/d/13YX43COCH4L_9_sUaBmPHyks10PYyPpX-nHdu5X8zSo/edit"
        >Performance</BButton>
        </b-col>  
      </b-row>
      
      <b-row lg="12" class="text mb-10 pb-5">
       <p> Send us another wild idea <a href="mailto:pxxnfilmfestams@gmail.com" class="email-link">(pxxnfilmfestams@gmail.com)</a></p>
      </b-row>

      <b-row class="mt-10">
        <div class="d-flex mb-2">
          <p ><span class="bold">If you want to submit your work physically</span>, download the application forms here:</p>
        </div>
        
        <div class="mb-2 d-flex align-items-center">
          <p class="text"> <a href="https://drive.google.com/drive/folders/1WWTql6CfdPBhqwdHFmMuwzk7J-gEsHnk" class="link">Film</a> application form</p>
        </div>
        
        <div class="mb-2 d-flex align-items-center">
          <p class="text"><a href="https://drive.google.com/drive/folders/1WWTql6CfdPBhqwdHFmMuwzk7J-gEsHnk" class="link">Workshop proposal</a> application form</p>
        </div>
        
        <div class="mb-2 d-flex align-items-center">
          <p class="text"><a href="https://drive.google.com/drive/folders/1WWTql6CfdPBhqwdHFmMuwzk7J-gEsHnk" class="link">Performance proposal</a> application form</p>
        </div>
      </b-row>

      <p class="text mt-3">and send DVDs or USB sticks to the following postal address:</p>
      <p class="bold mt-3 mb-1">Filmhuis Cavia</p>
      <p class="bold mb-1">Van Hallstraat 52-I</p>
      <p class="bold">1051 HH Amsterdam</p>
    </b-col>

      <!-- Right Grid: Image -->
      <b-col xs="12" lg="5" class="right-grid d-flex justify-content-center align-items-center">
        <BImg :src="logo" class="main-image" alt="Main Image" fluid />
      </b-col>
    </b-row>
  </b-container>
</template>

<style scoped>

.move-right {
  margin-left: 50px; /* Adjust the value as needed */
}

.email-link {
  color: black;
}

.main-image {
  width: 80%; /* Adjust width as needed */
  height: auto; /* Adjust height as needed */
}

.bold {
  font-weight: bold;
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

  .text1 {
    font-size: 0.9em; /* Smaller font size for better readability */
  }

  .move-right {
    margin-left: 5px; /* Adjust the value as needed */
  }
}
</style>
