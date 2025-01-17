<script setup lang="ts">
import { BImg, BRow, BCol, BContainer } from 'bootstrap-vue-3';
import ProgramItem from '../components/ProgramItem.vue'
const agenda = [
  {
    "id": 1,
    "image": new URL('../assets/thursday1.png', import.meta.url).href,
    "title": "CHEEKY SNEAK PEAK",
    "time": "16:00",
    "place": "Filmhuis CAVIA",
    "text": `Hi, is this your first time here? A bit overwhelmed by all the options? This sure is a vibrant place where you easily get lost. If you feel you need a tour guide to show you around, we’ve got you covered. Hop in the back and take a spin with us past all our favorite hot spots and steamy back alleys. We’ll let you peek into the secret lives of bedrooms, offices, clinics and kitchens. After that you’ll know enough to navigate this town on your own. Please fasten your seatbelts, our driver loves to hit the gas and might climb some curbs along the way. `,
    "description": `<p>
      <strong>Tompussy</strong> | Lokin and Yola, aka the Annoying kids | 2024 | The Netherlands | 3’
      <br/>
      <strong>The Man Who Perceives All</strong> | Emre Busse | 2024 | Germany | 8’ 
      <br/>
      <strong>Acts of The Sacred Heart</strong> | kiki kazimi | 2024 | The Netherlands | 11’ 
      <br/>
      <strong>CripPleasurePower</strong> | ari sinn | 2024 | The Netherlands, Italy | 10’ 
      <br/>
      <strong>I'm not mothering sick motherfuckers</strong> | Pussy Willow | 2023 | Poland | 1’ 
      <br/>
      <strong>Cute as Fuck</strong> | Marcoestuvoaquí | 2024 | Chile | 15’
      <br/>
      <strong>Gamètes</strong> | CLAP! Collectif - Nova Luv | 2024 | Belgium | 16’ 
      <br/>
      <strong>Dancing Bodies</strong> | La Fille Renne, Elisa Monteil & Laure Giappiconi | 2019 | France | 6’
      <br/>
      <strong>Friend Zone</strong> | Sakura Ardila Ortiz | 2023 | Colombia | 10’I really want to get fucked | Robin Astera | 2024 | Germany | 6’
      <br/>
      <strong>The Lesbian Alien Darkroom Fisting Operetta on Venus</strong> | Lasse Långström & The homosex syndicate of precarious avantgarde artists | 2024 | Germany/Sweden | 14’
    </p>`,
    "duration": "81 min",
    "imagelogo": new URL('../assets/CAVIA.png', import.meta.url).href,
    "ticket": "https://amsterdamalternative.nl/tickets/17639"
  },
  {
    "id": 2,
    "image": new URL('../assets/thursday2.png', import.meta.url).href,
    "title": "PORN, PEACE, POLITICS",
    "time": "18:00",
    "place": "Filmhuis CAVIA",
    "text": `When we launched the open call for the second edition of our festival, a right-wing government had just been elected in the Netherlands, intensifying threats to already vulnerable sectors of society. This local unrest intersects with global crises: the ongoing genocide in Palestine, the war in Ukraine, the murder of thousands for resource extraction in the Amazon, Congo and other regions, and the relentless destruction of nature.
The films in this block originate from diverse contexts and come together to create a collective, choral-like voice addressing these turbulent times. They form a unified critique of what the indigenous Nasa people (Páez people) in Colombia describe as the "death project" - a system that perpetuates violence, exploitation and environmental devastation.`,
    "description": `<p>
      <strong>PE ATAJU JUMALI / HOT AIR</strong> | Margarita Weweli-Lukana, Juma Pariri, Frê Arvora, Gurcius Gewdner, Amaya Torres, Jules Zinn, Juan Camilo Herrera Casilimas e Juliana Pongutá Forero | 2023 | Brazil, Colombia, USA, Canada | 25’
      <br/>
      <strong>How to Eat a Whole Watermelon and Get Away with It</strong> | Iris Glitzer | 2024 | Germany, Greece | 7’ 
      <br/>
      <strong>Pornographic practices against death drive | 2024 | Spain, Chile | 22’ 
      <br/>
      <strong>Slut in the military circus</strong> | AntiGonna</strong> | 2024 | Ukraine, Poland | 13’
      <br/>
      <strong>Oda a la alegría (Ode to joy)</strong> | Lola Pistola | 2024 | Catalunya | 4’
      <br/>
    </p>`,
    "duration": "71 min + Q&A",
    "imagelogo": new URL('../assets/CAVIA.png', import.meta.url).href,
    "ticket": "https://www.amsterdamalternative.nl/agenda/17565/porn-peace-politics"
  },
  {
    "id": 3,
    "image": new URL('../assets/thursday3.png', import.meta.url).href,
    "title": "SOLO",
    "time": "20:30",
    "place": "Filmhuis CAVIA",
    "text": '',
    "description": `<p>
      <strong>Holy Time</strong> Andrés Valenzuela | 2019 | 7 min
      <br/>
      “Holy Time” is a post-porn, anti-clerical, elegant, and folkloric video performance. It includes BDSM practices. The action is a ritual of profound love, complicity, and submission between Mistress Miranda, her friend and apprentice Maracx Bastardx, and the new submissive, Mass. It was performed live on April 12, 2019, at the BDSM Auch event in Santiago, Chile.
      <br/>
      <br/>
      <strong>SOLO</strong> | Andrés Valenzuela | 2024 | Chile | 63’ 
      <br/>
      Through the life of Ed, an erotic performer from Chile, Andrés Valenzuela crafts a homage to anal pleasure and to the queer community at the heart of Chile’s post-porn scene. SOLO is a film that explores worlds and bodies in flux—contracting and expanding, inviting communal encounters, yet at times seeking solitude, to simply be "solo."
      <br/>
      <br/>
      <strong>Andrés Valenzuela</strong>: Santiago, Chile, 1982. Based in Buenos Aires, Argentina.
      Multidisciplinary "marika" artist. Creator of the web archive registrocontracultural.com, a platform dedicated to the digital preservation of Latin American, sex-dissident artistic memories. 
      Valenzuela works with members of the LGBTQI+ community and allies in both Chile and Argentina, supporting an activist and integrative approach toward collective development within society. Since 2019, they have collaborated with various artists and collectives, establishing a consistent work as a videographer and filmmaker documenting artistic expressions from the local transfeminist scene and sexual dissidence activism.
      andresvalenzuela.cl
    </p>`,
    "duration": "70 min + Virtual Q&A with Andrés Valenzuela",
    "imagelogo": new URL('../assets/CAVIA.png', import.meta.url).href,
    "ticket": "https://amsterdamalternative.nl/tickets/17569"
  },
  {
    "id": 4,
    "image": new URL('../assets/thursday4.png', import.meta.url).href,
    "title": "OPENING PARTY",
    "time": "21:00",
    "place": "Vrankrijk",
    "text": 'PFFA turns two, time for a party! A hot night of performances and DJ’s will launch us right into the second edition of the festival. Join us at the Vrankrijk as we’ll spend the night dancing and celebrating all the love and support we’ve received from you this year. Dress up or strip down, be as extravagant as you feel.',
    "description": `<p>
      <u><strong>Performances</strong></u>
      <br/>
      • <strong>Seca y hasta el coño // (dry and fucked)</strong> - Lola Pistola - @lolapistolax
      <br/>
      • <strong>Joep there it is</strong> @joep.there.it.is
      <br/>
      <br/> 
      <br/>
      Entrance on donation. Cash only, no cards.
    </p>`,
    "imagelogo": new URL('../assets/Vrankrijk.png', import.meta.url).href,
  }
]
</script>

<template>
  <b-container fluid>
    <!-- Titles and Main Image -->
    <b-row class="mt-5">
      <b-col xs="12" lg="12" class="text-center">
        <div class="titles mt-5">Thursday</div>
        <div class="titles">6 February 2025</div>
      </b-col>
    </b-row>

    <program-item 
        v-for="item in agenda" 
        :key="item.id" 
        :image="item.image"
        :title="item.title"
        :time="item.time"
        :place="item.place"
        :description="item.description"
        :duration="item.duration"
        :text="item.text"
        :imagelogo="item.imagelogo"
        :ticket="item.ticket"
      />
  </b-container>
</template>

<style scoped>
/* Main titles style */
.titles {
  font-size: 3em;
  font-weight: bold;
}

/* Paragraph style */
.paragraph {
  margin-bottom: 1em;
}

/* Responsive adjustments */
@media (max-width: 576px) {
  .titles {
    font-size: 1.5em;
  }

  .paragraph {
    font-size: 0.9em;
  }
}
</style>
