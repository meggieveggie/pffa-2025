<script setup lang="ts">
import { BContainer, BRow, BCol, BImg } from 'bootstrap-vue-3';

// Asset URLs
const leftImageUrl = new URL('../assets/program.png', import.meta.url).href;
const rightImageUrl = new URL('../assets/rightimage.png', import.meta.url).href;
const f2f = new URL('../assets/f2f.png', import.meta.url).href;
const newside = new URL('../assets/newside.png', import.meta.url).href;

const latexpeach = new URL('../assets/LatexPeach.png', import.meta.url).href;
const irides = new URL('../assets/irides.png', import.meta.url).href;
const imageAngel = new URL('../assets/ImageAngel.png', import.meta.url).href;
const lover = new URL('../assets/lover.png', import.meta.url).href;
const hairtopher = new URL('../assets/hairtopher.png', import.meta.url).href;
const condomerie = new URL('../assets/condomerie.png', import.meta.url).href;

const cultuurfonds = new URL('../assets/cultuurfonds.png', import.meta.url).href;
const afk = new URL('../assets/afk.png', import.meta.url).href;
</script>

<template>
  <b-container fluid class="program-color">
    <b-row class="mt-5 justify-content-center">
      <!-- Left Image -->

      <!-- Sponsor Text -->
      <b-col xs="12" lg="3" class="mt-5 d-flex justify-content-center align-items-center">
        <div class="text-center">
          <span class="sponsor-text">The incredible <span class="underline">sponsors</span> that help bring the festival to life</span>
        </div>
      </b-col>
    </b-row>

    <b-row class="justify-content-center">
      <b-col lg="4" class="mb-4 d-flex justify-content-center align-items-center">
        <div class="text-center">
          We want to extend extra thanks to these companies. This festival is very new and sponsorship required a leap of faith and trust - which each one of them dove into.
        </div>
      </b-col>
    </b-row>

    <b-row class="justify-content-center">
      <b-col lg="4" class="mb-4 d-flex justify-content-center align-items-center">
        <div class="text-center">
          Why would they do that? Because these companies all have one thing in common - <span style="font-weight: bold;">a commitment to their communities</span> and their sponsorships are further proof of that.
        </div>
      </b-col>
    </b-row>

    <b-row class="justify-content-center">
      <b-col lg="4" class="mb-4 d-flex justify-content-center align-items-center">
        <div class="text-center">
          Thank you, from the bottom of our hearts
        </div>
      </b-col>
    </b-row>

    <b-row class="justify-content-center">
      <b-col lg="6" class="mb-4">
        <div class="text-center black-box mb-5">
          TASTE SPONSOR (TITLE)
        </div>
      </b-col>
    </b-row>

    <b-row class="justify-content-center">
    <b-col lg="10" class="mb-4">
      <a target="_blank" rel="noopener noreferrer" href="https://f2f.com/">
        <img :src="f2f" class="img-fluid" />
      </a>
    </b-col>
  </b-row>

  <b-row class="justify-content-center">
      <b-col lg="6" class="d-flex justify-content-center align-items-center">
        <div class="text-center black-box mb-5">
          TOUCH SPONSORS
        </div>
      </b-col>
    </b-row>

    <b-row class="justify-content-center ">
    <b-col lg="8" class="mb-4 d-flex justify-content-center align-items-center">
      <a target="_blank" rel="noopener noreferrer" href="https://mynewside.com/">
        <img :src="newside" class="img-fluid" />
      </a>
    </b-col>
  </b-row>

    <b-row class="justify-content-center">
      <b-col lg="6" class="mt-5 d-flex justify-content-center align-items-center">
        <div class="text-center black-box mb-5">
          TEASE SPONSORS
        </div>
      </b-col>
    </b-row>

    <b-row class="justify-content-center">
      <b-col lg="12" class="mb-4 d-flex justify-content-center align-items-center">
        <a target="_blank" rel="noopener noreferrer" href="https://latexpeach.com/">
          <img :src="latexpeach" class="img-fluid image-spacing" />
        </a>

        <a target="_blank" rel="noopener noreferrer" href="https://condomerie.com/nl/?gad_source=1&gclid=Cj0KCQiAkJO8BhCGARIsAMkswygImYZa8HZga2gjoYu1Zea4cRmDXcnGA1TGbpY5oGjNZB0veDMlzGoaAnDYEALw_wcB">
          <img :src="condomerie" class="img-fluid image-spacing" />
        </a>
      </b-col>
      <b-col lg="10" class="mb-4 d-flex justify-content-center align-items-center">
        <a target="_blank" rel="noopener noreferrer" href="https://imageangel.co.uk/">
          <img :src="imageAngel" class="img-fluid image-spacing" />
        </a>
        <a target="_blank" rel="noopener noreferrer" href="https://www.lovermanagement.com/">
          <img :src="lover" class="img-fluid image-spacing" />
        </a>
      </b-col>
      <b-col lg="11" class="mb-4 d-flex justify-content-center align-items-center">
        <a target="_blank" rel="noopener noreferrer" href="https://www.hairbytopher.com/">
          <img :src="hairtopher" class="img-fluid image-spacing" />
        </a>
        <a target="_blank" rel="noopener noreferrer" href="https://www.iridescentamsterdam.com/">
          <img :src="irides" class="img-fluid image-spacing" />
        </a>
      </b-col>
</b-row>

    <b-row class="justify-content-center">
      <b-col lg="6" class="mt-5 d-flex justify-content-center align-items-center">
        <div class="text-center black-box mb-5">
          FUNDS
        </div>
      </b-col>
    </b-row>

    <b-row class="justify-content-center ">
    <b-col lg="8" class="mb-4 d-flex justify-content-center align-items-center">
      <a>
        <img :src="cultuurfonds" class="img-fluid" />
      </a>
      <a>
        <img :src="afk" class="img-fluid" />
      </a>
    </b-col>
  </b-row>

  </b-container>
</template>

<style scoped>
.underline {
  text-decoration: underline;
}

.program-color {
  background: #929ABA;
}


.black-box {
  background-color: black;
  color: white;
  padding: 10px;
  width: 100%; /* Narrower width */
  height: 50%; /* Taller height */
}

.sponsor-text {
  font-size: 2.0em;
  font-weight: bold;
}

.img-small {
  max-width: 60%; /* Make images responsive */
  height: auto;
}

@media (max-width: 576px) {
  .sponsor-text {
    font-size: 1.2em; /* Reduce text size on smaller screens */
  }
}
</style>
