<script setup lang="ts">
import { BImg, BRow, BCol, BContainer } from 'bootstrap-vue-3';
import ProgramItem from '../components/ProgramItem.vue'
const agenda = [
  {
    "id": 1,
    "image": new URL('../assets/ic1.png', import.meta.url).href,
    "title": "INDUSTRY & COMMUNITY DAY ",
    "time": "13:00",
    "place": "tilla tec",
    "text": `
        We believe that film festivals like ours are key to the development of a vibrant and diverse pornography scene. And so, for our second edition, we welcome our community to meet and talk around topics that ground our practices. 
    <br/>
     <br/>
    We will host three panels where filmmakers, content creators, performers and activists discuss kink and care, porn-making in the Netherlands, and the challenges and opportunities the internet brings to sex work and pornography.
    <br/>
    <br/>
    We will close the day with a speed-date, where we hope many beautiful projects and alliances will emerge.
    <br/>
    All accredited people have free access to the Industry & Community Day.
    <br/>
    <br/>
    Companies and the general audience are also welcome to join by purchasing a ticket.
     `,
    "description": `<p>
    </p>`,
    "duration": "",
    "imagelogo": new URL('../assets/tilla.png', import.meta.url).href,
    "ticket": "https://amsterdamalternative.nl/tickets/17564"
  }
]
</script>

<template>
  <b-container fluid class="program-color">
    <!-- Titles and Main Image -->
    <b-row class="mt-5">
      <b-col xs="12" lg="12" class="text-center">
        <div class="titles mt-5">Friday</div>
        <div class="titles">7 February 2025</div>
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

    <b-row class="mx-5 px-5">
      <b-col xs="12" lg="6" class="mx-4">
        <h4 style="font-weight: bold;">Agenda:</h4>
        <br/>
        <div class="mb-1">13:00 - 13:30 - Welcome drink & intro</div>
        <div class="mb-1">13:30 - 14:15 - <span style="font-weight: bold;">Panel 1</span> - Beyond After Care: A panel discussion on the importance of care throughout kink experiences</div>
        <div class="mb-1">14:15 - 14:30 - Break</div>
        <div class="mb-1">14:30 - 15:15 - <span style="font-weight: bold;">Panel 2</span> - The Digital Frontier of Desire</div>
        <div class="mb-1">15:15 - 15:30 - Break and performance by  <span style="font-weight: bold;">Déandrah - The Guilt After Orgasm. Blindfolded Voyeurism Into People’s Lives</span></div>
        <div class="mb-1">15:30 - 16:15 - <span style="font-weight: bold;">Panel 3</span> - Homegrown: Outlook on Dutch Postporn</div>
        <div class="mb-1">16:30 - 17:00 - Performance: a shibari showcase</div>
        <div class="mb-1">17:15 - 18:15 - Speed date</div>
      </b-col>
    </b-row>

    <b-row class="d-flex justify-content-center mx-5 px-5">
      <b-col xs="12" lg="6" class="text-center">
        <h2 style="font-weight: bold;">More details</h2>
      </b-col>
    </b-row>

    <b-row class="mx-5 px-5">
      <b-col xs="12" lg="12" class="mx-4">
        <br/>
        <h6> • <span style="font-weight: bold; text-decoration: underline;"> Panel 1 - Beyond After Care: A panel discussion on the importance of care throughout kink experiences</span></h6>
        <h6 style="font-weight: bold;">Hosted by Jessica van der Berg</h6>
        <p>
          There is far more to kink* than the rope kisses left behind after a kinbaku session or the promising allure of subspace. Kink has the ability to help us reach more spaces within ourselves than many other practices. Within this panel, we will discuss an essential element to successful, effective kink: care. 
        </p>
        <p>
          Care is fundamental to healthy kink exploration, serving as a cornerstone for both tops and bottoms in the dynamic. Not just after care, but care throughout the experience - from negotiation and dressing up to making mistakes and exploring new dynamics. 
        </p>
        <p>
          We will delve into the realities of navigating desires, building trust, avoiding the yucking of yums and creating safe spaces within ourselves and the kinky communities we are part of.
        </p>
        <p>
          *Care does not soften or lessen the power of kink.
        </p>
        <h6 style="font-weight: bold;">Panelists:</h6>
        <div><span style="font-weight: bold;">Countess Diamond </span> An award-winning, UK-based dominatrix with focuses on financial domination and humiliation </div>
        <div><span style="font-weight: bold;">Papilicious </span> A kinbaku practitioner and studio founder based in Amsterdam  </div>
        <div><span style="font-weight: bold;">Bear </span> Activist, educator, performer, kink practitioner and organiser for Porn Film Festival Amsterdam</div>
        <div><span style="font-weight: bold;">Chelsea Poe </span> Dutch/American professional BDSM submissive and highly-awarded pornographer </div>
      </b-col>
    </b-row>

    <b-row class="mx-5 px-5">
      <b-col xs="12" lg="12" class="mx-4">
        <br/>
        <h6> • <span style="font-weight: bold; text-decoration: underline;"> Panel 2 - The Digital Frontier of Desire</span></h6>
        <h6 style="font-weight: bold;">Hosted by Luisa González</h6>
        <p>
          The internet has undeniably introduced both significant challenges and exciting opportunities for sex work and the production and distribution of pornographic content. The landscape has evolved dramatically, from the early platforms that sold on-demand pornography to the emergence of tube sites and content creator platforms.  And from individuals camming straight from their bedrooms via Skype to the modern “studios” in Colombia and Romania, where hundreds of webcam models broadcast their pleasures in exchange for tokens.
        </p>
        <p>
          The arrival and widespread use of the internet have profoundly transformed the porn industry and the communities within it. In this panel, we will discuss the pros and cons of online platforms for sex work and pornography. It offers an opportunity to stay informed about the struggles faced by individuals working in the online space, while also considering the potential benefits.
        </p>
        <h6 style="font-weight: bold;">Panelists:</h6>
        <div><span style="font-weight: bold;">Christina Castalia</span> International, award-winning curvy cam model, creator and thought leader in erotica.</div>
        <div><span style="font-weight: bold;">Hanne Stegeman</span> Author of “Behind the Webcam. Contested Visibility in Online Sex Work in the Netherlands, Romania and the United Kingdom”</div>
        <div><span style="font-weight: bold;">Rébecca S Franco</span>  researcher on the regulation of online sex work and advocate for workers’ rights.</div>
        <div><span style="font-weight: bold;">Thany Sanches</span> Brazilian multimedia artist whose work is deeply influenced by her experiences as a cam model and her journey with partial blindness</div>
      </b-col>
    </b-row>

    <b-row class="mx-5 px-5">
      <b-col xs="12" lg="12" class="mx-4">
        <br/>
        <h6> • <span style="font-weight: bold; text-decoration: underline;"> Panel 3 - Homegrown: Outlook on Dutch Postporn</span></h6>
        <h6 style="font-weight: bold;">Hosted by Bear Silver</h6>
        <p>
          Join us for a transparent conversation with Amsterdam-based filmmakers exploring the evolving landscape of post-pornographic cinema in the Netherlands.
        </p>
        <p>
          'Homegrown' brings together local creators who are challenging traditional narratives and pushing artistic boundaries in adult filmmaking. Our panelists will discuss how Amsterdam's unique cultural climate has shaped their work  and the city's role in fostering experimental approaches to representing human sexuality. This candid dialogue will explore how local creators are redefining the genre through political perspectives, artistic innovation and ethical production practices.
        </p>
        <h6 style="font-weight: bold;">Panelists:</h6>
        <div><span style="font-weight: bold;">Vivi Stone</span> Editor, director, producer and actor based in Amsterdam</div>
        <div><span style="font-weight: bold;">Lilith the Midget</span> Creator with a different mindset, every size matters</div>
        <div><span style="font-weight: bold;">Jack P</span> Southeast Asian trans* artist making DIY queer porn, theater and zines</div>
        <div><span style="font-weight: bold;">Kiki Kazimi</span> Queer Irish-Dutch multi-sensory artist, lover and facilitator</div>
      </b-col>
    </b-row>

    <b-row class="mx-5 px-5">
      <b-col xs="12" lg="12" class="mx-4">
        <br/>
        <h6><span style="font-weight: bold; text-decoration: underline;"> Performances</span></h6>
        <h6> • <span style="font-weight: bold;"> The Guilt After Orgasm. Blindfolded Voyeurism Into People’s Lives - by Déandrah</span></h6>
        <p>Insights from research reveal patterns of addiction, where users often engage with multiple porn tabs simultaneously, mirroring the fragmented, dopamine-driven engagement seen in social media. Drawing a parallel between these digital habits and capitalist excess suggests that technology has commodified human interaction and artistic expression within pornography. By focusing on OnlyFans contributors, the project underscores a collective enthusiasm for banality and indifference, highlighting a troubling sense of replaceability in the digital age. </p>
      </b-col>
    </b-row>

    <b-row class="mx-5 px-5">
      <b-col xs="12" lg="12" class="mx-4">
        <br/>
        <h6> • <span style="font-weight: bold;"> Shibari showcase - by Papilicious </span></h6>
        <p>This captivating blend of artistry, vulnerability and connection is brought to you by Papilicious, a queer shibari rigger based in Amsterdam. Originating from the Japanese art of rope bondage, shibari transforms intricate knots and elegant ties into a dynamic, living sculpture. </p>
        <p>The interplay of tension and release creates a mesmerizing visual and emotional experience, inviting you to witness the beauty of human form and intimacy expressed through an ancient yet evolving craft. Join as we explore themes of trust, surrender and power. </p>
      </b-col>
    </b-row>


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

.program-color {
  background: #E2B4BF;
}
</style>
