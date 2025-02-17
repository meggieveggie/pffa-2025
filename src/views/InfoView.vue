<script setup lang="ts">
import { BImg, BRow, BCol, BContainer } from 'bootstrap-vue-3';
import { ref } from 'vue';
const logo = new URL('../assets/main_image.png', import.meta.url).href;

const accessibilty = ref<HTMLElement | null>(null);
const tickets = ref<HTMLElement | null>(null);
const venue = ref<HTMLElement | null>(null);
const warning = ref<HTMLElement | null>(null);
const filmmaker = ref<HTMLElement | null>(null);


  const scrollMeTo = (refName: 'accessibilty' | 'tickets' | 'venue' | 'warning' | 'filmmaker') => {
  const element = {
    accessibilty: accessibilty.value,
    tickets: tickets.value,
    venue: venue.value,
    warning: warning.value,
    filmmaker: filmmaker.value,
  }[refName];

  if (element) {
    element.scrollIntoView({ behavior: 'smooth' });
  }
};
</script>

<template>
  <b-container fluid class="program-color">
    <b-row class="mt-5">
      <!-- Left Column -->
      <b-col xs="12" sm="6" class="mt-5 move-right">
        <div class="titles">Extra Info</div>
        <div><v-button style="color: black; text-decoration: none; font-weight: bold; font-size: 1.3em;" @click="scrollMeTo('accessibilty')" class="underline-hover">Accessibility</v-button></div>
        <div><v-button style="color: black; text-decoration: none; font-weight: bold; font-size: 1.3em;" @click="scrollMeTo('tickets')" class="underline-hover">Tickets & prices</v-button></div>
        <div><v-button style="color: black; text-decoration: none; font-weight: bold; font-size: 1.3em;" @click="scrollMeTo('venue')" class="underline-hover">Venue info</v-button></div>
        <div><v-button style="color: black; text-decoration: none; font-weight: bold; font-size: 1.3em;" @click="scrollMeTo('warning')" class="underline-hover">Trigger warnings</v-button></div>
        <div><v-button style="color: black; text-decoration: none; font-weight: bold; font-size: 1.3em;" @click="scrollMeTo('filmmaker')" class="underline-hover">Filmmaker information</v-button></div>
        <div ref="accessibilty"></div>
        <div class="titles1 mt-5" >Accessibility</div>
        <b-row class="button-container mb-3 mt-4" lg="4">
        <b-col sx="6" lg="4" class="mb-2">
        <BButton
          style="background-color: #2C2C2C; color: white; border: none; padding: 10px 20px; cursor: pointer; border-radius: 8px; text-decoration: underline;"
          class="form-button"
          target="_blank"
          rel="noopener noreferrer"
          href="https://docs.google.com/document/d/1H-rFBJYy0RLSHHp4uK9TRXUbPbGeeEriX5n-X_j8ats/edit?tab=t.0"
        >Accessibility statement</BButton>
        </b-col>
        <b-col lg="4" class="mb-2">
        <BButton
          style="background-color: #2C2C2C; color: white; border: none; padding: 10px 20px; cursor: pointer; border-radius: 8px; text-decoration: underline;"
          class="form-button"
          target="_blank"
          rel="noopener noreferrer"
          href="https://docs.google.com/forms/d/e/1FAIpQLSeGE2MD9_tDuimzADGG4CcCYLLewxnfk08IGOU1JBoB1raokQ/viewform"
        >Accessibility request form</BButton>
        </b-col>
      </b-row>
      </b-col>

      <!-- Right Column -->
      <b-col xs="12" sm="4" class="mt-5">
        <b-img fluid :src="logo" class="main-image"></b-img>
      </b-col>
    </b-row>
    <b-row>
      <b-col xs="12" sm="6" class="move-right">
        <div ref="tickets"></div>
    <div class="titles1 mt-5" id="tickets">Tickets & prices</div>
    <div class="text mt-2">Tickets: 7 euros</div>
    <div class="text">Cineville card accepted</div>
    <div class="text">Workshops: 15 euros</div>
    <div class="text">
  Presale for screenings and workshops: 
  <a href="https://www.amsterdamalternative.nl" target="_blank" rel="noopener noreferrer">
    https://www.amsterdamalternative.nl
  </a>
</div>
    <div class="text mt-4">Each day there will be a limited number of tickets available at the cinemas. You can get them on the day and location of the screening itself. Cineville cards are accepted.</div>
    <div ref="venue"></div>
    <div class="text mt-5">
      <a 
        href="https://docs.google.com/document/d/1_D5hEGY3FLelMLJt6GZhYgBp8qMMuhM5adr5KXeBzcg/edit?tab=t.0#heading=h.8fsdd0or3jdd" 
        target="_blank" 
        rel="noopener noreferrer" 
        class="bold underline" 
        id="venue-info"
      >
        Venue info
      </a> 
      - Venue measurements and information for accessibility
    </div>
    <br />
    <div class="text mt-2 bold">FILMHUIS CAVIA</div>
    <div class="text">Van Hallstraat 52-I, 1051 HH Amsterdam</div>
    <div class="text mt-2">Public transport:</div>
    <div class="text">Tram 3 · Van Hallstraat (last stop)</div>
    <div class="text">Bus 21 · Van Beuningenplein</div>
    <div class="text mt-2">Go through the gate, cross the courtyard, and go through the doors on the right side of the building. Take the stairs and find us on the first floor (above the gym).</div>
    <br />
    <div class="text mt-2 bold">VRANKRIJK</div>
    <div class="text">Spuistraat 216, 1012 VT Amsterdam</div>
    <div class="text mt-2">Public transport:</div>
    <div class="text">Tram 2, 12 · Paleisstraat</div>
    <div class="text">Tram 5, 13, 17 · Dam/Raadhuisstraat + 4 min walk</div>
    <div class="text">Tram 4, 14 · Dam + 6 min walk</div>
    <br />
    <div class="text mt-2 bold">DE RICHEL</div>
    <div class="text">Nieuwezijds Voorburgwal 282H, 1012 RT Amsterdam</div>
    <div class="text mt-2">Public transport:</div>
    <div class="text">Tram 2, 12 · Paleisstraat</div>
    <div class="text">Tram 4, 14 · Dam / Rokin + 6 min walk</div>
    <div class="text">Metro 52 · Rokin + 6 min walk</div>
    <br />
    <div class="text mt-2 bold">PROSTITUTION INFORMATION CENTER (PIC)</div>
    <div class="text">Enge Kerksteeg 3, 1012 GV Amsterdam</div>
    <div class="text mt-2">Public transport:</div>
    <div class="text">Tram 4 or 14 · Dam</div>
    <div class="text">Tram 2, 12, 13, 17 · Nieuwezijds Kolk + 5 min walk</div>
    <br />
    <div class="text mt-2 bold">TILLA TEC</div>
    <div class="text">Doctor Jan van Breemenstraat 1, 1056 AB Amsterdam</div>
    <div class="text mt-2">Public transport:</div>
    <div class="text">Routes from these stops are wheelchair accessible from the stop to the entrance. A volunteer is able to push you when you arrive if you need it. If you are on crutches or otherwise mobility impaired, please let us know in this <a           target="_blank"
      rel="noopener noreferrer" href="https://docs.google.com/forms/d/e/1FAIpQLSeGE2MD9_tDuimzADGG4CcCYLLewxnfk08IGOU1JBoB1raokQ/viewform"><span>form</span></a> so that we can meet you with the venue wheelchair. </div>
    <div class="text">Tram 13 · Jan van Galenstraat + 300m wheelchair roll / walk </div>
    <div class="text">Bus 18 · Adm. Helfrichstraat + 270m wheelchair roll / walk</div>
    <br />
    <div ref="warning"></div>
    <div class="titles1" id="trigger-warnings">Trigger warnings</div>
    <div class="text mt-2">While one person might be turned on by dolls and clowns, another might not be able to stand it. The same goes for guns, needles, dentists, vomiting and everything in between.</div>
    <div class="text mt-2">So this is a warning as well as an invitation. Be aware that the films tackle many different themes and push many boundaries. We use post-porn as a platform to tell stories, express desire, protest and change our frames of reference. Sometimes it’s hot. Sometimes it’s uncomfortable.</div>
    <div class="text mt-2">Before each block begins, the programmer will give an introduction that should give you an idea of what to expect. Beyond that, if you are attending a block and have any specific triggers you’d like to check in on, please message us on Instagram. </div>
    <div class="text mt-2">Also feel free to contact the programmers during the day of the screening. You can ask at the bars of Cavia, TILLA TEC and the De Richel for them.</div>
    <br />
    <div ref="filmmaker"></div>
    <div class="titles1 mt-5" id="filmmaker-info">Filmmaker information</div>
    <div class="mb-2 d-flex align-items-center">
          <p class="text">
            Want to connect with a filmmaker or program their film? Check out the
            <a target="_blank"
            rel="noopener noreferrer" href="https://docs.google.com/document/d/1WYzKIIkl-Go5vbRsYPgXUMpS8fWHKOQzNGCV8wle89o/edit?tab=t.0" class="link">filmmaker contact form. </a></p>
        </div>

  </b-col>
    </b-row>

  </b-container>
</template>

<style>

.move-right {
  margin-left: 50px; /* Adjust the value as needed */
}

.main-image {
  width: 50%; /* Adjust width as needed */
  height: auto; /* Adjust height as needed */
}

.underline {
  text-decoration: underline;
}

.bold {
  font-weight: bold;
}

.program-color {
  background: #ECC2A1
}

a {
  color: black;
  text-decoration: none; /* Remove underline if not needed */
}

a:hover {
  color: black; /* Ensure it remains black on hover */
  text-decoration: underline; /* Optionally, add an underline on hover */
}


@media (max-width: 576px) {
  .titles {
    font-size: 1.5em; /* Smaller font size for mobile */
  }

  .titles1 {
    font-size: 1em; /* Smaller font size for mobile */
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
