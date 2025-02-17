<script setup lang="ts">
const logo = new URL('../assets/main_image.png', import.meta.url).href;
import { BContainer, BRow, BCol, BButton, BImg } from 'bootstrap-vue-3';
const pffaLogo = new URL('../assets/pffa_logo.png', import.meta.url).href
const footerlogo = new URL('../assets/footer.png', import.meta.url).href
</script>

<template>
  <b-container fluid class="d-flex flex-column min-vh-100 px-0">
  <b-row>
    <b-col xs="12" lg="5" class="mt-5">
      <b-row  class="mt-5">
        <b-img :src="pffaLogo"></b-img>
<!-- 
        <b-col lg="12" class="mb-3">
          <BButton 
          href="https://drive.google.com/file/d/1clgVZ-eP38C6m-B2cBBSAItJw50UMUdJ/view?usp=sharing" 
          variant="light"
          class="form-button w-auto not-bold move-right"
          target="_blank"
          rel="noopener noreferrer"
          ><span class="linked">Full 2025 program PDF</span></BButton>
        </b-col> -->

        <b-col lg="12" class="mb-3">
          <BButton 
          href="https://drive.google.com/file/d/18asFVz_8yCTrUj3c0NDXhC8BC7rx6cMt/view?usp=sharing" 
          variant="light"
          class="form-button w-auto not-bold move-right"
          target="_blank"
          rel="noopener noreferrer"
          ><span class="linked">2025 Timetable</span></BButton>
        </b-col>

        <b-col lg="12" class="mb-3">
          <BButton 
          href="https://docs.google.com/document/d/1H-rFBJYy0RLSHHp4uK9TRXUbPbGeeEriX5n-X_j8ats/edit?tab=t.0" 
          variant="light"
          class="form-button w-auto not-bold move-right"
          target="_blank"
          rel="noopener noreferrer"
          ><span class="linked">Accessibility</span>  statement</BButton>
        </b-col>

        <b-col lg="12" class="mb-3">
          <BButton 
          href="mailto:pxxnfilmfestams@gmail.com" 
          variant="light"
          class="form-button w-auto not-bold move-right"
          target="_blank"
          rel="noopener noreferrer"
          ><span class="linked">Contact us</span> </BButton>
        </b-col>
      </b-row>
    </b-col>
    <b-col xs="12" lg="6" class="mt-5">
      <b-img fluid :src="logo" class="main-image d-flex align-items-center move-image-right"></b-img>
    </b-col>
  </b-row>
  <b-img :src="footerlogo"  class="footer-image" fluid></b-img>
</b-container>

</template>

<style scoped>

.main-image {
  width: 55%; /* Adjust width as needed */
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

/* Footer styles */
.footer-image {
  width: 100%;
  margin-top: auto;
  margin-bottom: 0px;
}
</style>