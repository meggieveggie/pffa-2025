<script setup lang="ts">
import { BImg, BRow, BCol, BContainer } from 'bootstrap-vue-3';
import ProgramItem from '../components/ProgramItem.vue'
const agenda = [
  {
    "id": 1,
    "image": new URL('../assets/friday1.png', import.meta.url).href,
    "title": "SEXPERIMENTAL FILM / guest curator",
    "time": "12:00",
    "place": "Filmhuis CAVIA",
    "text": `Film is a striptease – now you see it, now you don’t – film is about voyeurism and the desire to see more, to see what shouldn’t be seen. This selection of experimental 16mm and 35mm movies all work with different techniques and approaches in an effort to question the medium and to explore the textures and rhythms of the film material. Nudity and pornography have been a mainstream of the medium since its beginnings, as well as its censorship. Showing pornography on older film formats recalls the medium's underground origins, in which experimentation flourishes outside of commercial constraints. Such screenings become acts of cultural archaeology, connecting audiences to the medium’s layered histories while fostering critical discourse on representation, agency, and the politics of desire. `,
    "description": `<p>
      <strong>Camera and Toe Part 1</strong> | Suhyun Jeon | 2024 | South Korea | 4’ | 16mm with separate sound
      <br/>
      <strong>Color of Love</strong> | Peggy Ahwesh | 1994 | United States | 10’ | 16mm  
      <br/>
      <strong>Fuses</strong> | Carolee Schneemann | 1967 | United States | 25’ | 16mm  
      <br/>
      <strong>All You Can Eat</strong> | Michael Brynntrup | 1993 | Germany | 5’ | 35mm
      <br/>
     <strong>Sexe-Thym</strong> | Harran Sexe | 1993 | France | 1’ | 16mm
      <br/>
      <strong>Four Letter Heaven</strong> | Cecily Rose Brown | 1995 | United Kingdom | 2’30” | 16mm
      <br/>
      <strong>Noema</strong> | Scott Stark | 1998 | United States | 11’ | 16mm
      <br/>
      <strong>The Exquisite Corpus</strong> | Peter Tscherkassky | 2015 | Austria | 19’ | 35mm 
      <br/>
      <br/>
      Programed by Pip Chodorov re-voir.com/pip
    </p>`,
    "duration": "78 min",
    "imagelogo": new URL('../assets/CAVIA.png', import.meta.url).href,
    "ticket": "https://amsterdamalternative.nl/tickets/17580"
  },
  {
    "id": 2,
    "image": new URL('../assets/friday2.png', import.meta.url).href,
    "title": "GAZE",
    "time": "14:30",
    "place": "Filmhuis CAVIA",
    "text": `Is it the watcher or the watched that leads the dance? The films in this selection break up the cinematic illusion, gazing directly into the audience's eyes and asking: Am I what you see? Or is it your own projection that you perceive? In this exchange, innocence cannot be claimed: both performer and viewer know they create a shadow play. This is an exploration of the power behind images, of pornographic ways of seeing.  `,
    "description": `<p>
      <strong>Prima vista</strong> | Cornpop Bright & Squareheart | 2024 | Greece | 3’ 
      <br/>
      <strong>No Man Like Me</strong> | Jaq Quicksilver | 2022 | USA | 4’ 
      <br/>
      <strong>4 Walls</strong> | Patricia Puentes, Bartłomiej Bywalec & Andrzej Frankowski | 2024 | Poland | 6’ 
      <br/>
      <strong>Porno (deconstructed)</strong> | Welcome | 2023 | USA | 4’ 
      <br/>
      <strong>Scatto in Avanti V</strong> | Werther Germondari | 2024 | Italy | 5’
      <br/>  
      <strong>Le Kland</strong> | Fennek Film | 2023 | Sweden | 8’ 
      <br/>
      <strong>I'm not mothering sick motherfuckers</strong> | Pussy Willow | 2023 | Poland | 1’
      <br/>
      <strong>What a Body Could Do</strong> | Hadrian Daigneault-Roy & Mila Starosta | 2024 | Germany | 11’ 
      <br/>
      <strong>À Guichet Fermé (Sold Out)</strong> | Manon Praline | 2024 | Germany | 17’
    </p>`,
    "duration": "59 min + Q&A",
    "imagelogo": new URL('../assets/CAVIA.png', import.meta.url).href,
    "ticket": "https://amsterdamalternative.nl/tickets/17570"
  },
  {
    "id": 3,
    "image": new URL('../assets/friday3.png', import.meta.url).href,
    "title": "OUR PRECIOUS BODILY FLUIDS",
    "time": "16:30",
    "place": "Filmhuis CAVIA",
    "text": `
    ACHOO!
    <br/>
    *Sniff, sniff.*
    <br/>
I’m sorry everyone, *blows nose loudly* I'm trying to be professional and introduce this block about bodily fluids, but it seems the February cold in Amsterdam has left me flu-stricken. I’m sweating, sneezing, blowing my nose, and running to the bathroom almost non-stop. I really wanted to be “spitting” facts to you about how the fluids in our bodies work, but.… ACHOO…!! I’ll save you the details for now, they will come up in this block anyway. *blows nose loudly*. Ugh, where are my “bloody’’ aspirins…?
    `,
    "description": `<p>
      <strong>Impurity</strong> | Anna Solecka | 2024 | Poland | 2’ 
      <br/>
      <strong>Berlin fucktape: Spit+Latex</strong> | Mahx Capacity | 2023 | Germany/USA | 9’
      <br/>
      <strong>Gamètes</strong> | CLAP! Collectif - Nova Luv | 2024 | Belgium | 16’
      <br/>
      <strong>Grace</strong> | abcde Flash | 2022 | Switzerland | 6’
      <br/>
      <strong>Human cocktail</strong> | Jade Escrivá & Anna/Jill Portmann | 2024 | Switzerland | 17’ 
      <br/>
      <strong>Sip of gold</strong> | Director Kapture (Ross), co-director Kaadesh | 2024 | Germany | 3’
      <br/>
      <strong>Oda a la alegría</strong> | Lola Pistola | 2024 | Catalonia/Spain | 3’ 
      <br/>
      <strong>In blood we lust</strong> | Morgana Mayer | 2024 | Italy | 20’
    </p>`,
    "duration": "76 min + Q&A",
    "imagelogo": new URL('../assets/CAVIA.png', import.meta.url).href,
    "ticket": "https://amsterdamalternative.nl/tickets/17588"
  },
  {
    "id": 4,
    "image": new URL('../assets/friday4.png', import.meta.url).href,
    "title": "CRIPPING PLEASURE",
    "time": "18:30",
    "place": "tilla tec",
    "text": `Who imposes sex and its culture on which body? How many gendered, aged, racialised and disabled bodies are excluded from heteronormative love as the sole and default expression of intimacy? Listening to the beautiful words of Sami Schalk, “we would all benefit from an approach that takes each other's body, each sexual interaction, as new, figuring out what is best with this person in this moment, given how their body feels and what's on their mind.”
Cripping Pleasure invites us to experience crip time in cinema. Can we, through film, reimagine our notions of what can and should happen in time? Can we change the expectations we’ve learned to take for granted with our own bodies?`,
    "description": `<p>

    <strong>CripPleasurePower</strong> | ari sinn | 2024 | Netherlands, Italy | 10’ 
    <br/>
    <strong>Courage for (un-disabled) lust - A journey to self-worth through pleasure</strong> | Ben Nordmann | 2024 | Germany | 23’
    <br/>
    <strong>Cane</strong> | Bendix Mignon | 2024 | Germany | 5’ 
    <br/>
    <strong>Riesgo</strong> | Muluk | 2022 | Chile | 19’
    </p>`,
    "duration": "57 min + Talk with Karin, sex care worker and member of Prostitution Information Center.",
    "imagelogo": new URL('../assets/tilla.png', import.meta.url).href,
    "ticket": "https://amsterdamalternative.nl/tickets/17591"
  },
  {
    "id": 5,
    "image": new URL('../assets/friday5.png', import.meta.url).href,
    "title": "OS HOMENS QUE EU TIVE (THE MEN I LOVED)",
    "time": "19:00",
    "place": "Filmhuis CAVIA",
    "text": `
    During Brazil’s military dictatorship (1964–1985), censorship stifled creative freedom, yet some filmmakers found ways to subvert it. The pornochanchada, a B-movie genre known for its blend of eroticism and comedy, often served as a smokescreen for more daring narratives. The recently rediscovered Os Homens Que Eu Tive is one such remarkable work, disguised as a lighthearted erotic film hiding a bold feminist core.
     <br/>
     <br/>
    Written, edited, and directed by Tereza Trautman, the film was censored after just six weeks of screening and later re-released in 1980 under the title Os Homens e Eu. Its open exploration of female sexuality, free love, and other taboo topics posed a direct challenge to the patriarchal bourgeois ideals of the time, branding it a “moral threat.”
    <br/>
    <br/>
    Curated by Amsterdam Film Meeting (AMFM)
    `,
    "description": `<p>
    <strong>Os Homens Que Eu Tive</strong>  | Tereza Trautman | 1973 | Brazil | 80’
    </p>`,
    "duration": "80 min",
    "imagelogo": new URL('../assets/CAVIA.png', import.meta.url).href,
    "ticket": "https://amsterdamalternative.nl/tickets/17590"
  },
  {
    "id": 6,
    "image": new URL('../assets/friday6.png', import.meta.url).href,
    "title": "OBJECT SENSUALITY",
    "time": "21:00",
    "place": "tilla tec",
    "text": `
    According to the Four Pillars of Destiny, an ancient East Asian astrology, our fortune is made of five elements: wood, fire, earth, metal and water. But no one’s fortune is full, there is always one or more elements missing. To overcome this, we need to find our missing elements outside, by making kinship with objects that contain the missing elements, pleasing ourselves with them. 
    <br/>
    <br/>
    In this block, you can see how objects can create not simply slimy, squishy or piercing imagery but evoke social emotions that are carried through our bodymind - cheeky, dreamy or toxic. By following the advice of a vibrator, the sprinkle of a cherry on top or a confession of an eargasm, you may find that objects counterbalance a lack in our fortune. It is a beautiful way of acknowledging that nothing is perfect and we all have to co-constitute relationships between flesh and environment.`,
    "description": `<p>

    <strong>Tompussy</strong> | Lokin and Yola, aka the Annoying kids | 2024 | Netherlands | 3’
    <br/>
    <strong>Cis Toys - Trans Woman 1, 2</strong> | Molly Hope | 2024 | Germany | 13’
    <br/>
    <strong>Boxes</strong> |  Wall & Yero | 2023 | Argentina | 2’
    <br/>
    <strong>Cane</strong> | Bendix Mignon | 2024 | Germany | 5’
    <br/>
    <strong>Ohrwurm</strong> | abcde Flash | 2022 | Switzerland | 14’
    <br/>
    <strong>Kuku’s Playdate</strong> | Amerigo Brini | 2022 | Italy | 15’
    <br/>
    <strong>The futility of quitting smoking</strong> | Sylvia Robyn Gionti | 2024 | Greece | 2’
    <br/>
    <strong>Active/Passive</strong> | Jana Górska | 2024 | Poland | 4’
    <br/>
    <strong>Fruity warming</strong> | Said Isaac | 2024 | Panama | 1’
    <br/>
    <strong>She and Her Good Vibrations</strong> | Olivia Griselda, Sarah Cheok | 2023 | Singapore | 11’
    </p>`,
    "duration": "68 min",
    "imagelogo": new URL('../assets/tilla.png', import.meta.url).href,
    "ticket": "https://amsterdamalternative.nl/tickets/17592"
  },
  {
    "id": 7,
    "image": new URL('../assets/friday7.png', import.meta.url).href,
    "title": "EROS",
    "time": "21:30",
    "place": "Filmhuis CAVIA",
    "text": `
    Brazil's love motels are a haven where fantasy becomes reality. When the filmmaker's own date never shows up, she gets a fresh idea for a film instead.
    <br/>
    <br/>
    Filmed by the protagonists themselves, Eros presents a unique glimpse into the singular stories of people living their intimacy and romance in the privacy of motels, while these behaviours reflect broad social realities. Highly personal and often explicit, the result is a kaleidoscopic insight into a parallel world of human desire.
    <br/>
    <br/>
    <strong>Rachel Daisy Ellis,</strong>
    born in the UK, migrated to Brazil in 2004. In 2010, she co-founded Desvia, a Brazilian production company. Rachel is a creative producer and director with extensive international co-production experience. Her productions have competed at Cannes, Sundance, IDFA, Venice, Locarno, and Toronto.
    `,
    "description": `<p>
    <strong>Eros | Rachel Daisy Ellis</strong>  | 2024 | Brazil | 107’
    </p>`,
    "duration": "107 min",
    "imagelogo": new URL('../assets/CAVIA.png', import.meta.url).href,
    "ticket": "https://amsterdamalternative.nl/tickets/17593"
  },
  {
    "id": 8,
    "image": new URL('../assets/friday8.png', import.meta.url).href,
    "title": "THE VISITOR",
    "time": "22:00",
    "place": "DE RICHEL",
    "text": `
      A refugee arrives in London inside a suitcase, carried by the river’s current. An upper-class family hires the newcomer as a servant, unaware that their world will soon be turned upside down. The enigmatic employee (Bishop Black) seduces each member of the family, sowing jealousy and obsession. 
      <br/>
      <br/>
      Bruce LaBruce reimagines Pier Paolo Pasolini's Teorema as an erotic spectacle, blending steamy sex scenes with a political call to dismantle all borders. In The Visitor attraction dissolves any self-imposed limit because, as one of the slogans during the film says: ‘Sex Has No Borders!’
     `,
    "description": `<p>
    <strong>The Visitor</strong>  | Bruce LaBruce | 2024 | United Kingdom | 101’ 
    </p>`,
    "duration": "101 min",
    "imagelogo": new URL('../assets/richel.png', import.meta.url).href,
    "ticket": "https://amsterdamalternative.nl/tickets/17594"
  },
  {
    "id": 9,
    "image": new URL('../assets/friday9.png', import.meta.url).href,
    "title": "DIRTY PHONE CALL  / workshop",
    "time": "12:00 - 14:00",
    "place": "PIC",
    "text": `
      Step into the world of sonic eroticism with the "Dirty Phone Call" workshop. Participants will explore the art of audio pornography by creating and recording their own phone sex scenes. These recordings will later be featured in an immersive sound installation, where a vintage rotary phone will play the stories to anyone who picks up the receiver.
      <br/>
      <br/>
      Limited to 10 participants, this workshop offers hands-on experience in writing sensual, provocative scripts and bringing them to life through sound. You’ll experiment with voice work, sound effects, and music choices to craft intimate, evocative audio narratives. Whether you're new to audio creation or a seasoned storyteller, come explore the erotic potential of sound.
       <br/>
      <br/>
      Let your voice be heard! And enjoyed.
     `,
    "description": `<p>
    <strong>BIO</strong>
    <br/>
    Cocotte is an ass-obsessed performance artist. Along with their crew, "les salopes autogéréx," they've already made waves (and more) in Paris and Brussels. Now, Cocotte is heading solo to Amsterdam for the Porn Film Festival and is determined to make your ears wet.
    <br/>
    @cocotteisindaradio
    </p>`,
    "imagelogo": new URL('../assets/PIC.png', import.meta.url).href,
    "ticket": "https://amsterdamalternative.nl/tickets/17587"
  },
  {
    "id": 10,
    "image": new URL('../assets/friday10.png', import.meta.url).href,
    "title": "DIRTY PHONE CALL  / workshop",
    "time": "12:00 - 14:00",
    "place": "PIC",
    "text": `
      Cruising queers comes in two parts. We kick off with a creative personal ad-crafting workshop on Friday at PIC. The second part is an intimate collective reading session during the film block CRUISING THE CITY (Saturday 8th, 15:00, Theater De Richel).
      <br/>
      <br/>
      On Friday we invite participants to get creative with filth, scissors and stationery to craft their own smutty personal-ads on paper cards. Guided by Sára and Katinka and Eddie, we will read together, write together, share fantasies, markers and glue sticks. Each person can bring something that they want to use in their personal ad – a talisman that speaks to their sexuality or desire. The aim is to create a ‘cruising wall’; or message board that will display the finished cards on site at PFFA where visitors can read/respond to them.
       <br/>
      <br/>
      Maximum participants: 12
     `,
    "description": `<p>
    <strong>BIO</strong>
    <br/>
    Sára Iványi, Katinka van Gorkum and Eddie Azulay are three queer writer~artists who became acquainted though a queer dating app. Our collaboration for this workshop stems from our shared interest in language, and how reading between the lines and expressing oneself and one’s fantasies freely to strangers can become an interpersonal site for desire and sexuality - a site for cruising.
    </p>`,
    "imagelogo": new URL('../assets/PIC.png', import.meta.url).href,
    "ticket": "https://amsterdamalternative.nl/tickets/17589"
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
        v-for="(item, index) in agenda.slice(0, 8)"
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

      <b-row class="mt-5">
      <b-col xs="12" lg="12" class="text-center">
        <div class="titles mt-5">Workshops</div>
      </b-col>
    </b-row>

    <program-item 
        v-for="(item, index) in agenda.slice(8)" 
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

.program-color {
  background: #878FB1;
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
