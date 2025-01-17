<script setup lang="ts">
import { BImg, BRow, BCol, BContainer } from 'bootstrap-vue-3';
const logo = new URL('../assets/main_image.png', import.meta.url).href;

const principles = [
  {
    title: 'Plurality',
    description:
      'Many have been made invisible by the leading culture. Many others have been objectified by it. Here they take the lead and bring their own desires and legacy to the fore. We provide a stage to assemble these very diverse perspectives and explore together the untold territories of sexuality.'
  },
  {
    title: 'Art',
    description:
      'Porn is a film genre and as such it demands artistic value. Cinema illuminates, expands and defies reality with its endless stream of perceptions. We reclaim porn as a field of aesthetic experimentation.'
  },
  {
    title: 'Pleasure',
    description:
      'Porn enriches our sex life and helps us explore fantasies. Desire is extremely layered and ambiguous and we need others to know ourselves better. We strive to create an open environment in which shame gives place to playfulness.'
  },
  {
    title: 'Community',
    description:
      'We live in a city which, while calling itself tolerant, makes it increasingly hard for many to stay. We believe in the potential of real-life encounters to challenge and reconquer the public space.'
  }
];

const teamMembers = [
  {
    name: 'Bear Silver (He/They)',
    description:
      'is an activist and performer who has been involved in various grassroots initiatives in Amsterdam since 1999. Since 2016, Bear has been involved in ethical pornography. Bear creates post-porn films as a way to open our eyes to other ways of being and to counter repressive politics.'
  },
  {
    name: 'Erik ter Veld (He/Him)',
    description:
      'is a filmmaker from Groningen whose work focuses on the challenges of body and mind, and resilience and passion in the face of adversity. He works primarily in healthcare, education, and independent film production. He has also been a volunteer coordinator for the Transcreen Amsterdam Transgender Filmfestival and the Queer.Red Sex Workers Film and Arts festival in Amsterdam. '
  },
  {
    name: 'franka bauwens (She/They)',
    description:
      "was born and raised in Amsterdam and has been active at Filmhuis Cavia for a few years. She completed a research master's in philosophy, has organized several interdisciplinary events, and currently works in education and as an editor at a theater publishing house. She joined the festival team during the last edition and is particularly interested in the interplay between sexual fantasy and taboo."
  },
  {
    name: 'hyeisoos (She/Her)',
    description:
      'is an artist from South Korea living in the Netherlands. She currently follows a Research Master in Cultural Analysis at the University of Amsterdam, in her writing about post pornography she explores an autobiographical approach. During the last two years, she has organized a monthly sex-positive program at Filmhuis Cavia, Kissable Screens, as an opportunity to engage in collective care and learn from our own story.'
  },
  {
    name: 'Jessica van der Berg (She/Her)',
    description:
      'is from Johannesburg, South Africa. As a copywriter and recent graduate of Sextech School, she has given lectures on masturbation, vulvas and ethical pornography. As a marketer, her company After Dark focuses on sex and intimacy-oriented projects. She is driven to create safe spaces and contribute to breaking down shame. She has been living in Amsterdam for 3 years.'
  },
  {
    name: 'Luisa González (She/They)',
    description:
      'is a film programmer with over fourteen years of experience. She is Colombian and lives in Amsterdam. Currently, she is completing her PhD research at the University of Amsterdam on underground alternative film production, including pornography.'
  },
  {
    name: 'Samuel Witteveen (He/They)',
    description:
      'has been part of the programming team at Filmhuis Cavia for over six years. He is a writer and journalist and works currently as researcher at VPRO. He has a background in philosophy. Born and raised in Spain, he has been living in Amsterdam for about ten years. '
  }
];
</script>

<template>
  <b-container fluid>
    <b-row class="mt-5 move-right">
      <!-- Left Grid: Content -->
      <div class="titles mt-5">About Us</div>
      <p class="text">
        Porn Film Festival Amsterdam aims to create a safe and accessible space where marginalised voices can be heard, and where the community can come together to explore, reclaim and celebrate their autonomy and art.
      </p>

      <div>
        <div class="titles1 mb-4">Our Guiding Principles</div>
        <b-row class="align-items-center">
          <!-- Left Grid: Four Blocks -->
          <b-col xs="12" lg="8">
            <b-row class="four-blocks mb-4">
              <b-col v-for="(principle, index) in principles" :key="index" xs="12" sm="5">
                <div class="block">{{ principle.title }}</div>
                <p class="text">{{ principle.description }}</p>
              </b-col>
            </b-row>
          </b-col>

          <!-- Right Grid: Image -->
          <b-col xs="12" lg="3" class="d-flex justify-content-center align-items-center">
            <b-img fluid :src="logo" class="main-image"></b-img>
          </b-col>
        </b-row>
      </div>

      <p class="text">
        Moreover, the 2025 edition of the festival recognises the nature of the new Dutch government as it stands openly against plurality in all its forms and raises taxes on cultural events, theaters, books, newspapers, thereby making them less accessible.
      </p>

      <p class="text">
        Porn Film Festival Amsterdam stands as a beacon of resistance against these changes, offering a platform for artistic and sexual exploration.
      </p>

      <div>
        <div class="titles1 mb-4">How we curate PFFA</div>
        <b-row>
          <p class="text">
            For each edition, our festival receives more than 200 movies, mostly short films. Through the viewing process, we notice topics or themes that create dialogues between one film and the other. These findings are of course crossed by our personal paths, and what we find as a group important to share with the local audience. 
          </p>

          <p class="text">
            We are open to receiving films that were screened already at other porn film festivals or films from different times. Our local audience might not have seen it, so please send us also those older films!
          </p>

          <p class="text">
            Besides the curatorial work that the core-team of the festival puts together, we also invite guest curators. They present programs focused on countries, movements, archives, and others.
          </p>

        </b-row>
      </div>

      <div>
        <div class="titles1 mb-4">Who are we and how did we get here?</div>
        <b-row>
          <p class="text">
            We are a group of debauchees, cinephiles, activists, filmmakers, media scholars, and sex worker(s). Most of us met some years ago at Filmhuis Cavia in Amsterdam, a community-run cinema funded by the squatters movement of the 80s. There, we started to dream about doing a porn film festival. We would sometimes host screenings, which were very successful and enriching for our community. These screenings are now called Kissable Screens. 
          </p>
          <p class="text">
            Finally, in 2024, our festival came to life with the tremendous support of the local and global porn community, as well as the trust of local funds and cultural grassroots venues Two new people joined the gang, helping us greatly with our digital outreach and co-ordinating the lovely team of volunteers who make this festival possible.
          </p>
        </b-row>
      </div>

      <div>
        <div class="titles1 mb-4">Who Are We Really?</div>
        <b-row>
          <b-col v-for="(member, index) in teamMembers" :key="index" xs="12" sm="12">
            <p class="text mb-4">
              <span class="bold">{{ member.name }}</span> {{ member.description }}
            </p>
          </b-col>
        </b-row>
      </div>

    

    </b-row>
  </b-container>
</template>

<style scoped>
.bold {
  font-weight: bold;
}

.block {
  font-weight: 500;
  font-size: 1.3em;
}

.main-image {
  width: 75%;
  height: auto;
}

.move-right {
  margin-left: 25px; /* Adjust the value as needed */
}

@media (max-width: 576px) {
  .titles {
    font-size: 1.5em;
  }

  .block {
    font-size: 1.1em;
  }

  .text {
    font-size: 0.9em;
  }
}
</style>