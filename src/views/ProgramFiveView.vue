<script setup lang="ts">
import { BImg, BRow, BCol, BContainer } from 'bootstrap-vue-3';
import ProgramItem from '../components/ProgramItem.vue'
const agenda = [
  {
    "id": 1,
    "image": new URL('../assets/sun1.png', import.meta.url).href,
    "title": "PIXELS GONE WILD",
    "time": "13:00",
    "place": "DE RICHEL",
    "text": `
    <p>
    Do you remember your first crush? Was it on a cartoon character? Mine was Chel from The Road to El Dorado. 
    </p>
    <p>
    Animated porn offers a perceived safety and morality. In a world where pornography isn’t always ethically produced, the humanless aspect of animation helps it feel victimless and enables us to take less accountability for our tastes and sexual interests; offering additional freedom to explore different gendered and otherwise ostracised interests. 
    </p>
    <p>
    Animation simply allows us to explore with truly no limits; socialised or anatomical.
    </p>
    `,
    "description": `<p>
    <strong>Heartbeat Habitat</strong> | Sedanorapa - Collective: Midnight Turnip | 2024 | Italy | 2’ 
    <br/>
    <strong>La Biblia de Tijuana Vol.I</strong> | Gabo Armengol | 2024 | México  2’ 
     <br/>
    <strong>SOLITARY SEX & DISCOUNTS</strong> | The Annoying kids: Lokin and Yola | 2024 | Netherlands | 1’ 
     <br/>
    <strong>First 1000 Times</strong> | Guby Moon | 2024 | Spain | 2’  La Petite Mort | Julian Bell | 2017 | The UK | 1’
     <br/>
    <strong>Granny's Sexual Life</strong> | Urska Djukic, Emilie Pigeard | 2021 | Slovenia | 14’ 
     <br/>
    <strong>Vulvine, Reine d'extase</strong>| Clémence André, Nawel Bahamou, Ming Chieh Chang, Théo Guyot, and Mariia Yanko | 2022 | France | 8’ 
     <br/>
    <strong>Curly Brace: HACKED 1</strong> | Zedrin | 2017 | USA | 2’ 
    <br/>
    <strong>Camera and Toe Part 1</strong> | Suhyun Jeon | 2024 | South Korea | 4’ 
     <br/>
    <strong>Boxes | Wall & Yero</strong> | 2023 | Argentina | 2’ 
     <br/>
    <strong>The futility of quitting smoking</strong> | Sylvia Robyn Gionti | 2024 | Greece 2’ 
    <br/>
    <strong>Giant Oddly Shaped Object from Space</strong> | Kuba Tschierse | 2024 | Poland | 4’ 
    <br/>
    <strong>Camera and Toe Part 2</strong> | Suhyun Jeon | 2025 | South Korea | 4’ 
        <br/>
    <strong>She and Her Good Vibrations</strong> | Olivia Griselda, Sarah Cheok | 2023 | Singapore | 11’ 

    </p>`,
    "duration": "61 min",
    "imagelogo": new URL('../assets/richel.png', import.meta.url).href,
    "ticket": "https://amsterdamalternative.nl/tickets/17628"
  },
  {
    "id": 2,
    "image": new URL('../assets/sun2.png', import.meta.url).href,
    "title": "TUIN DER LUSTEN",
    "time": "13:30",
    "place": "Filmhuis CAVIA",
    "text": `
    <p>
    Between 1960 and 1972 Britain was a major production hub for rollers - short black and white hardcore 8mm films. Although the sale of hardcore was strictly forbidden in Britain, this did not stop shrewd producers who used semi-professional filmmaking equipment to produce their films. Enabled by corrupt members of London’s Metropolitan Police, they sold their products through Soho’s bookshops and mail-order, and smuggled them into Denmark, Germany and the Netherlands. Professor Oliver Carter presents the discoveries from his latest book Under the Counter: Britain’s Illicit Trade in 8mm Pornographic Films, and will screen a selection of rarely seen 8mm rollers on film to tell the story of this forgotten part of porn history.
    </p>
    `,
    "description": `<p>
      <strong>Talk</strong> | prof. Oliver Carter | 30’ 
      <strong>Screening</strong> | four 8mm films | 60’
      <br/>
      <br/>
      <strong>BIO</strong>
            <br/>
      Oliver Carter is a Professor of Creative Economies at Birmingham City University, UK. His research explores hidden screen economies
      <br/>
            <br/>
      Films curated by Oliver Carter from the <u>Under the Counter archive</u>, in collaboration with the Erotic Film Society.
    </p>`,
    "duration": "90 min",
    "imagelogo": new URL('../assets/CAVIA.png', import.meta.url).href,
    "ticket": "https://amsterdamalternative.nl/tickets/17630"
  },
  {
    "id": 3,
    "image": new URL('../assets/sun3.png', import.meta.url).href,
    "title": "CALL THE PLUMBER",
    "time": "15:30",
    "place": "DE RICHEL",
    "text": `
    <p>
    Think of the most stereotypical porn and chances are a tired trope will spring to mind. But what if we queer it up? The hot hitchhiker, the stranger at the door, the sweaty gardener and, of course, the plumber. They all come along in this selection, sometimes parodying but mostly elevating the traditional roles in porn. Because, let’s be honest, it’s not easy to invent ground-breaking plots when it comes down to explicit scenes, so why not spice up the classics? These steamy flicks reignite the thrill of the unexpected encounter.
    </p>
    `,
    "description": `<p>
    <strong>Heavy Load</strong> | Juan Saez | 2023 | Germany | 10’ 
          <br/>
    <strong>A Quick Fix</strong> | April Flores, Oran Julius & Manon Praline | 2024 | Germany | 7’ 
          <br/>
    <strong>The Wrong Airbnb</strong> | JinkLab | 2024 | France | 17’ 
          <br/>
    <strong>Summer Jobs/Summer Dreams</strong> | The Independent Butts Collective | 2024 | Spain/France | 17’  
    </p>`,
    "duration": "51 min + Q&A",
    "imagelogo": new URL('../assets/richel.png', import.meta.url).href,
    "ticket": "https://amsterdamalternative.nl/tickets/17631"
  },
  {
    "id": 4,
    "image": new URL('../assets/sun4.png', import.meta.url).href,
    "title": "LOVE ME (NOT SO) TENDER",
    "time": "16:00",
    "place": "Filmhuis CAVIA",
    "text": `
    <p>
    This block is a dedication to all those lovers, one-night stands, exes and crushes we simply cannot get out of our heads. Their touches, kisses, words, smells are now written in our bodies. Memories of these (possible) encounters resurface without warning, pulling us into intense sensual fantasies that feel impossible to escape. Yet, we know we must break free from these dreams. They are often stained by the dynamics of sexual and gendered power imbalances or are simply unattainable ghosts of passion that can never be recaptured in our beds.
    </p>
    `,
    "description": `<p>
    <strong>Cute as Fuck</strong> | Marcoestuvoaquí | 2024 | Chile | 15’ 
    <br/>
    <strong>Confess!</strong> | Mahx Capacity | 2024 | United States | 12’
    <br/>
    <strong>Palabras</strong> | Luisa González | 2008 | Colombia | 4’
    <br/>
    <strong>Goodbye Stranger</strong> | Michelle Rue | 2023 | Germany | 8’ 
    <br/>
    <strong>Anonymous Confession</strong>| Sakura Ardila Ortiz | 2024 | Colombia | 10’ 
    <br/>
    <strong>Again</strong> | Morena Barra | 2023 | Switzerland | 6’ 
    </p>`,
    "duration": "64 min + Q&A",
    "imagelogo": new URL('../assets/CAVIA.png', import.meta.url).href,
    "ticket": "https://amsterdamalternative.nl/tickets/17632"
  },
  {
    "id": 5,
    "image": new URL('../assets/sun5.png', import.meta.url).href,
    "title": "NO MONEY, NO HONEY",
    "time": "17:30",
    "place": "DE RICHEL",
    "text": `
    <p>
    Sex work is complex, often influenced by various social and legal factors. It encompasses a range of clients, providers and activities. In many countries it is a subject of legal debate, with laws impacting the rights and safety of sex workers. 
    </p>
        <p>
        Discussions about sex work should always be based in respect, recognize the diversity of experiences among those involved, and consider the varied contexts in which sex work takes place. This selection presents sex work/ers that we rarely imagine, offering endless prospects to those willing to yield to their desires.
    </p>
    `,
    "description": `<p>
      <strong>Call Me Mommy</strong> | Tara O’Callaghan | 2022 | Ireland | 15’ 
       <br/>
      <strong>Courage for (un-disabled) lust - A journey to self-worth through pleasure</strong> | Ben Nordmann | 2024 | Germany | 23’
       <br/>
      <strong>Safe Area in Turkey</strong> | Lcd Nina | Turkey | 15’ 
       <br/>
      <strong>No Democracy Here</strong> | Liad Hussein Kantorowicz | 2018 | 25’ 
       <br/>
      <strong>I Really Want To Get Fucked</strong> | Robin Astera | 2024 | Germany | 6’ 
    </p>`,
    "duration": "84 min",
    "imagelogo": new URL('../assets/richel.png', import.meta.url).href,
    "ticket": "https://amsterdamalternative.nl/tickets/17633"
  },
{
    "id": 6,
    "image": new URL('../assets/sun6.png', import.meta.url).href,
    "title":"INVOKING",
    "time": "18:30",
    "place": "Filmhuis CAVIA",
    "text": `
    <p>
    Have our Gods abandoned us, or did we abandon them? Is it time to reconsider the ideals we’ve followed and the stories that shaped us? These films all shed a new light upon the ancient myths that lie at the roots of modern Western societies, of capitalism and colonialism. We used to sit around the fire, sharing stories and myths, and calling upon entities from other planes for spiritual insights and healing. Today, our faces are lit by phone screens ‘invoking’ influencers, podcasts and YouTube tutorials for guidance. But if we’d summon those old European deities and mythical creatures once more, how would they speak to us?
    </p>
    `,
    "description": `<p>
      <strong>Ikaros Reborn | Menelas</strong> | 2024 | Greece | 7’ 
            <br/>
      <strong>O Suplicio de Gaia</strong> | Adriel Mad Seib | 2023 | Brasil | 16’ 
            <br/>
      <strong>The Summoning: The Faerie</strong> | Eve X and Sai Jaiden Lillith | 2024 | Australia | 18’ 
            <br/>
      <strong>Re-c(O)unting I. Self-exploring</strong> | pamela varela and ella hebendanz | 2023 | The Netherlands | 25’
    </p>`,
    "duration": "66 min + Q&A",
    "imagelogo": new URL('../assets/CAVIA.png', import.meta.url).href,
    "ticket": "https://amsterdamalternative.nl/tickets/17634"
  },
  {
    "id": 7,
    "image": new URL('../assets/sun7.png', import.meta.url).href,
    "title": "HOT CUMMY ROSE",
    "time": "19:45",
    "place": "DE RICHEL",
    "text": `
    <p>
    We aren’t just here to consume, but also to collaborate. By negotiating boundaries and placing trust in the audience, spectators will paint the living canvas fulfilling the artist’s fantasy of becoming a wet, cummy rose. Roses, nudity, trust and respect form the basis of this interactive, steamy experience
    </p>
    `,
    "description": `<p>
      <strong></strong>
      <br/>
    </p>`,
    "imagelogo": new URL('../assets/richel.png', import.meta.url).href,
  },
  {
    "id": 8,
    "image": new URL('../assets/sun8.png', import.meta.url).href,
    "title": "KINKYSTRAAT",
    "time": "20:00",
    "place": "DE RICHEL",
    "text": `
    <p>
    Power dynamics are woven through the tapestry of our daily lives, yet we often have little awareness of the forces at play. It can be difficult to express our desires due to societal restrictions placed around unconventional appetites. Kink and BDSM practices seek to oust the fears surrounding these yearnings. Consent is the foundation for these interactions, ensuring safe exploration of limits while highlighting the significance and sexiness of open communication. These films seek to enhance understanding of the sometimes complex narratives of kink, challenging conventional views of relationships. By using dominance, pain, submission, control and service as a way to achieve balance, we push ourselves and each other to the outermost physical limits as a way to explore our innermost personal depths.
    </p>
    `,
    "description": `<p>
      <strong>Tears of Desire</strong> | ella hebendanz and Nova Lov | 2024 | Germany/Belgium | 7’
      <br/>
      <strong>PT#1398</strong> | Luca Federici | 2023 | United Kingdom | 23’
      <br/>
      <strong>You Can't Find a Way to Make Your Bitch Bark?</strong> | Jamie Butine & Clac | 2024 | Belgium | 6’ 
      <br/>
      <strong>In Blood We Lust</strong> | Morgana Mayer | 2024 | Italy | 20’
      <br/>
      <strong>Licorice</strong> | Nicky Miller | 2024 | Germany | 6’
      <br/>
      <strong>Chronic Logical</strong> | Roxy Nova | 2025 | Scotland | 2’
      <br/>
      <strong>Shadow Wolf</strong> | Tash Casey | 2024 | South Africa | 11’
      <br/>
      <strong>Il Teatro del Supplizio</strong> | Amerigo Brini | 2024 | Italy | 9’

    </p>`,
    "duration": "84 min",
    "imagelogo": new URL('../assets/richel.png', import.meta.url).href,
    "ticket": "https://amsterdamalternative.nl/tickets/17635"
  },
  {
    "id": 9,
    "image": new URL('../assets/sun9.png', import.meta.url).href,
    "title": "YOUR BODY BABY ",
    "time": "21:00",
    "place": "Filmhuis CAVIA",
    "text": `
    <p>
    This body of yours. However much we change it, we all live in this one particular body, this flesh, these bones. It doesn’t always look the way we would like it to look or do what we want it to do, but let’s see if we can turn this stubborn thing into something that makes us feel at home. 
    </p>
        <p>
        Let’s explore our bodies; the ins and outs of our parts, the way our hair stands up when we meet someone new, the quantum connections we can’t see but feel all the same. The nerve endings, goosebumps, limbs, genitals, genders, energy, pleasure and pain.
    </p>
        <p>
        Let’s use our bodies to love ourselves, to redefine ourselves, to connect with others, with ourselves, with nature and with the world. 
    </p>
            <p>
            This block is for people with bodies. All are welcome.
    </p>
    `,
    "description": `<p>
    <strong>Cain</strong> | Tom Selmon | 2024 | United Kingdom | 5’ 
    <br/>
    <strong>Cis Toys - Trans Woman: pump episode</strong> | Molly Hope | 2023 | Germany | 8’ 
    <br/>
    <strong>Fluidité / Genderfluid</strong> | La Fille Renne, Elisa Monteil & Laure Giappiconi | 2021 | France | 7’ 
    <br/>
    <strong>I really want to get fucked | Robin Astera | 2024 | Germany | 6’
    <br/>
    <strong>CripPleasurePower</strong> | ari sinn | 2024 | The Netherlands & Italy | 10’
    <br/>
    <strong>Pulsatille Vulgaire</strong> | Mona Aethusa 2024 | France | 3’
    <br/>
    <strong>cheap slut artist</strong> | Sofía Papadópulos de Torres | 2022 | The Netherlands | 3’
    <br/>
    <strong>Shower Me</strong> | Mahx Capacity | 2023 | United States | 13’
    <br/>
    <strong>Strawberry and Lemon</strong> | Leilux Skandalo | 2024 | Argentina | 7’ 
    <br/>
    <strong>Mommy</strong> | Manon Praline | 2024 | United States |  9’
    </p>`,
    "duration": "64 min + Q&A",
    "imagelogo": new URL('../assets/CAVIA.png', import.meta.url).href,
    "ticket": "https://amsterdamalternative.nl/tickets/17636"
  }
]
</script>

<template>
  <b-container fluid class="program-color">
    <!-- Titles and Main Image -->
    <b-row class="mt-5">
      <b-col xs="12" lg="12" class="text-center">
        <div class="titles mt-5">Sunday</div>
        <div class="titles">9 February 2025</div>
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

.program-color {
  background: #ECC2A1;
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
