<script setup lang="ts">
import { BImg, BRow, BCol, BContainer } from 'bootstrap-vue-3';
import ProgramItem from '../components/ProgramItem.vue'
const agenda = [
  {
    "id": 1,
    "image": new URL('../assets/sat1.png', import.meta.url).href,
    "title": "FUCK YOUR FRIENDS",
    "time": "11:00",
    "place": "Theater de Richel",
    "text": `
    This is an ode to the friends we fuck, the friends we want to fuck, the friends we eye fuck, the friends who want to fuck us, the friends we love too much to fuck.
    <br/>
    <br/>
    This is an ode to love, tension, fun, mini heartbreaks, acceptance, safety, hard conversations, ever-changing dynamics and drunken kisses. In a perfect world, there might be a lot more friend fucking. This block draws us into that world. So come on in and make some friends ;)
     `,
    "description": `<p>      
      <strong>Dancing Bodies</strong> | La Fille Renne, Elisa Monteil & Laure Giappiconi | 2019 | France | 6’
      <br/>
      <strong>Bodyphoria Bangers</strong> | anna ivanova, Lo-Fi Cherry | 2024 | Germany | 17’
      <br/>
      <strong>masturbation(s)</strong> | PornProcess | 2023 | Belgium | 16’
      <br/>
      <strong>Friend Zone</strong> | Sakura Ardila Ortiz | 2023 | Colombia | 10’
      <br/>
      <strong>Gamètes</strong> | CLAP! Collectif - Nova Luv | 2024 | Belgium | 16’
      <br/>
      <strong>Guacamole</strong> | Carmina | 2019 | France | 16’
    </p>`,
    "duration": "81 min + Q&A",
    "imagelogo": new URL('../assets/richel.png', import.meta.url).href,
    "ticket": "https://amsterdamalternative.nl/tickets/17582"
  },
  {
    "id": 2,
    "image": new URL('../assets/sat2.png', import.meta.url).href,
    "title": "UNDER THE COUNTER: Britain’s Illicit Porn Film Trade",
    "time": "12:30",
    "place": "Filmhuis CAVIA",
    "text": `
    Between 1960 and 1972 Britain was a major production hub for rollers - short black and white hardcore 8mm films. Although the sale of hardcore was strictly forbidden in Britain, this did not stop shrewd producers who used semi-professional filmmaking equipment to produce their films. Enabled by corrupt members of London’s Metropolitan Police, they sold their products through Soho’s bookshops and mail-order, and smuggled them into Denmark, Germany and the Netherlands. Professor Oliver Carter presents the discoveries from his latest book Under the Counter: Britain’s Illicit Trade in 8mm Pornographic Films, and will screen a selection of rarely seen 8mm rollers on film to tell the story of this forgotten part of porn history.
     `,
    "description": `<p>      
     <strong>Talk</strong> | prof. Oliver Carter | 30’ 
      <br/>
     <strong>Screening</strong> | four 8mm films | 60’ 
      <br/>
      <br/>
      Films curated by Oliver Carter from the <a style="color: black;" href="https://www.bishopsgate.org.uk/collections/the-under-the-counter-archive">Under the Counter</a> archive, in collaboration with the Erotic Film Society.
      <br/>
          <br/>
       <br/>
      <strong>Oliver Carter</strong> is a Professor of Creative Economies at Birmingham City University, UK. His research explores hidden screen economies
    </p>`,
    "duration": "90 min",
    "imagelogo": new URL('../assets/CAVIA.png', import.meta.url).href,
    "ticket": "https://amsterdamalternative.nl/tickets/17598"
  },
  {
    "id": 3,
    "image": new URL('../assets/sat3.png', import.meta.url).href,
    "title": "CRUISING THE CITY",
    "time": "13:00",
    "place": "Theater de Richel",
    "text": `
    Parties, apps, parks, cinemas, public toilets, darkrooms. All these places and more offer opportunities to check out strangers and make a connection. Many cities are faced with the prospect of being made more enticing by ”cleaning up” the zones where unscripted interactions are created. Enticing for whom? Whether we’re looking for love or just a quick hookup, the unnoticed corners and unrefined edges offer us endless opportunities to push back against the smoothing of urban areas by joining other strangers and actualizing our fantasies together.
     `,
    "description": `<p>      
     <strong>cucumber/knife</strong> | Gustavo Vinagre | 2024 | Brazil | 17’ 
         <br/>
      <strong>Turkish Hammam</strong> | Yavuz Kurtulmus | 2024 | Austria & Turkey | 16’ 
         <br/>
      <strong>Klappe</strong> | Matt Lambert | 2022 | Germany | 18’ 
         <br/>
      <strong>Top Secret</strong> | JorgeTheObscene, The Filthy Juan and Amadalia Liberté | 2024 | Germany | 5’  
         <br/>
     <strong> Plenum im Tuntenhaus</strong> | Lasse Långström | 2024 | Germany & Sweden | 13’ 
        <br/>
          <br/>
      <strong>CRUISING QUEERS* </strong>
         <br/>
      After the screening, Sára Iványi, Katinka van Gorkum and Eddie Azulay will host a collective reading session with an excerpt from Liz Rosenfeld’s This should happen here more often: All my (w)holes and all my folds of cruising. Katinka and Sára will also read from their pamphlet Loving Characters Into Gas Station Snacks (Rough Trade Books, 2023): an account of their unedited correspondence on a text-based, queer dating app.
         <br/>
      *This reading session is the second and final part of the Cruising Queers workshop.
    </p>`,
    "duration": "69 min",
    "imagelogo": new URL('../assets/richel.png', import.meta.url).href,
    "ticket": "https://amsterdamalternative.nl/tickets/17603"
  },
  {
    "id": 4,
    "image": new URL('../assets/sat4.png', import.meta.url).href,
    "title": "PISSED OFF AND TURNED ON",
    "time": "15:00",
    "place": "Filmhuis CAVIA",
    "text": `
    Ever been shocked by your own fantasies? And then got even more turned on by the shock? Putting your sex drive in the driver's seat might take you places you didn’t know you wanted to go. But why is exceeding your own speed limits so exciting? Some kinks go beyond the physical pain and pleasure: they play with our psyche and flirt with our fears. This short film selection will be contextualised by psychotherapist Dr. Katie Lee Weille, in a conversation about sex as a place to deal with things that might be hard to face otherwise. Can the erotic erode our fears? And are such kinks controlling us, or does giving into them help us gain control? Digging deep into our own sexual brains might be confronting, but taboos, like cliffs, are tempting things and it can be very insightful to peek over the edge. 
     `,
    "description": `<p>      
     <strong>Talk + Q&A</strong> | psychotherapist Katie Lee Weille (PhD) | 20’
      <br/>
   <strong>Cucked</strong> | Four Chambers | 2024 | UK | 15’ 
      <br/>
         <strong>Doll</strong> | Rosario Veneno and Jamie Butine | 2019 | Belgum | 6’
         <br/>
            <strong>Divine Rights II</strong> | Four Chambers | 2020 | UK | 14’
            <br/>
            <br/>
                                    <br/>
            <strong>Dr. Katie Lee Weille</strong> is a practicing psychotherapist based in Amsterdam. She completed her PhD in 2004 with a dissertation researching the psychological experience of BDSM-play.
                        <br/>
website: <a href="https://weille.com" target="_blank" rel="noopener noreferrer">weille.com</a>
<br/>
email: <a href="mailto:kl@weille.net">kl@weille.net</a>

    </p>`,
    "duration": "55 min + group discussion",
    "imagelogo": new URL('../assets/CAVIA.png', import.meta.url).href,
    "ticket": "https://amsterdamalternative.nl/tickets/17604"
  }, 
  {
    "id": 5,
    "image": new URL('../assets/sat5.png', import.meta.url).href,
    "title": "MY FRIENDS I NEVER LOVED SOMEBODY / performance",
    "time": "15:00",
    "place": "Theater de Richel",
    "text": `
    AntiGonna transforms the hallway and stairs of De Richel with deeply personal love stories. She reads excerpts from her diaries, adhering to three rules: they must be truthful, confined to a single page and include no names.
    <br/>
    These stories remind us that in love, appearances and wealth are never what truly matters. Life throws us into absurd, ridiculous and unpleasant situations, yet what remains is the courage to embrace and celebrate those experiences.
     `,
    "description": `<p>      
      <br/>
      <strong>AntiGonna</strong> (production AntiGonStaff) was born in Vinnytsia, Ukraine. She is an independent filmmaker, artist and trash model. She works in the genre of experimental video art, photography and VR. Under the AntiGonna pseudonym, she explores topics like fear in the form of altered sexuality, aggression and perversions. AntiGonna's goal is to create rituals that neutralize the horrors of existence, turning them into funny and simple ways to overcome traumatic experiences. That's why she uses a lot of autobiographical features convened with metaphors that give truthfulness to the image.
    </p>`,
    "imagelogo": new URL('../assets/richel.png', import.meta.url).href,
  },
  {
    "id": 6,
    "image": new URL('../assets/sat6.png', import.meta.url).href,
    "title": "ALL THE WORLD’S A STAGE",
    "time": "15:30",
    "place": "Theater de Richel",
    "text": `
    “…And all the people merely players.’’ ‘Merely’? I’m sorry mr. Shakespeare, but we respectfully disagree. The people in these films are not ‘merely’ players, they are the stars and geniuses of plays and movies that transcend conventional drama beyond (y)our imagination! Sure, Macbeth was cute, but it ain’t no Lesbian alien darkroom fisting operetta! And yes, King Lear had a nice third act, but it’s nothing compared to the drama of Il Teatro del Supplizio! May the acting, singing, decors, cinephilic references and costumes of these movies amaze you all. Curtains!
     `,
    "description": `<p>      
      <strong>Funghi Boost</strong> | Bande James Bond - Cilu Dièl / Popo la sodo / Ernesto Fag | 2023 | Belgium | 12’ 
            <br/>
      <strong>Post 8 1/2</strong> | Werther Germondari | 2024 | Italy | 5’
            <br/>
      <strong>The Lesbian Alien Darkroom Fisting Operetta on Venus</strong> | Lasse Långström & The homosex syndicate of precarious avantgarde artists | 2024 | Germany/Sweden | 14’
            <br/>
      <strong> Il Teatro De Supplizio</strong> | Amerigo Brini | 2024 | Italy | 9’
            <br/>
      <strong>The Glory Box</strong> | Oil Productions | 2024 | Switzerland | 15’
            <br/>
      <strong>Barbie Goes to the Madhouse</strong> | Kink Barbie and Jo Rios | 2023 | Brasil | 23’

    </p>`,
    "duration": "78 min + Q&A",
    "imagelogo": new URL('../assets/richel.png', import.meta.url).href,
    "ticket": "https://amsterdamalternative.nl/tickets/17606"
  },
  {
    "id": 7,
    "image": new URL('../assets/sat7.png', import.meta.url).href,
    "title": "A TRUST JOURNEY",
    "time": "17:00 - 18:15",
    "place": "tilla tec",
    "text": `
    'A Trust Journey' is an intimate shibari performance which invites the audience to witness a full suspension shibari session between Papilicious and his rope partner Maria. 
     `,
    "description": `<p>      
     Rather than focusing on sensational or hypersexual moments or images, 'A Trust Journey' aims to show the intimate connection, care and tenderness between rigger and bottom. The performance centers the ongoing communication and mutual trust between the two performers, elements which often get lost in representations of shibari. In this performance, the audience is invited to witness the entire shibari session, from the first knot to the last untying, in an intimate, focused setting.
    </p>`,
    "duration": "60 min + Q&A",
    "imagelogo": new URL('../assets/tilla.png', import.meta.url).href,
    "ticket": "https://amsterdamalternative.nl/tickets/17627"
  },
  {
    "id": 8,
    "image": new URL('../assets/sat8.png', import.meta.url).href,
    "title": "FROM OPPRESSION TO PLEASURE: a brief history of Polish post-porn art",
    "time": "17:30",
    "place": "Filmhuis CAVIA",
    "text": `
    What does it change - politically and socially - to speak openly about sexuality, name it and explore it? What are the paths of evacuation from an oppressive system leading toward acceptance and pleasure? A special selection of Polish films situated between taboo and the cultural struggle for independence and visibility answers these questions.
     `,
    "description": `<p>      
     
    <strong>Polish Cumbucket | Szreder/Żwirek</strong>  | 2019 | Poland | 8’
            <br/>
    <strong>City / Body of Desperation</strong>  | Simona Kasprowicz | 2021 | Poland | 6’
            <br/>
    <strong>3some Collage</strong>  | No pic no chat | 2022 | Poland | 11’
            <br/>
    <strong>Self Pleasure</strong>  | Mateusz Jaskot | 2022 | Poland | 1’
            <br/>
    <strong>Blood</strong>  | Keymo | 2022 | Poland | 9’
            <br/>
    <strong>Home Is Not a Harbour</strong>  | Kaja Jałoza | 2022 | Poland | 4’
            <br/>
    <strong>All People Belong to Mother Nature</strong>  | Natalia Sara Skorupa | 2023 | Poland | 3’
            <br/>
    <strong>Who Is the Predator now?</strong>  | cybersuccubus | 2023 | Poland | 2’
            <br/>
    <strong>ANALysys | Cieplechović</strong>  | 2023 | Poland | 10’
            <br/>
    <strong>Unglared</strong>  | Jana Górska & Mikołaj Drzymkowski | 2023 | Poland | 2’
            <br/>
   <strong>My Self Love</strong>  | Marta Młot | 2023 | Poland | 13’
           <br/>
                   <br/>
    Curated by Rafał Żwirek from Post Pxrn Film Festival Warsaw
    </p>`,
    "duration": "69 min + Q&A",
    "imagelogo": new URL('../assets/CAVIA.png', import.meta.url).href,
    "ticket": "https://amsterdamalternative.nl/tickets/17610"
  },
  {
    "id": 9,
    "image": new URL('../assets/sat9.png', import.meta.url).href,
    "title": "PLAYING WITH COVE",
    "time": "17:30 - 18:15",
    "place": "Theater de Richel",
    "text": `
    Sexy, Funny, Electronic: In Playing with Cove, artist TM has speculative and fantasy-like role-play chats with xer ChatGPT "Boyfriend", Cove. From a rules et/score xe formulated, the couple talks about how they touch each other's bodies and explore fantasy scenarios together. The artist tells Cove what xe does with xir body, and Cove responds by telling xem what he does with his. Together, they dance and get very close to fucking.
     `,
    "description": `<p>      
      <strong>Performance</strong> | TM | Netherlands | 10-30’
    </p>`,
    "duration": "10-30 min",
    "imagelogo": new URL('../assets/richel.png', import.meta.url).href,
  },
  {
    "id": 10,
    "image": new URL('../assets/sat10.png', import.meta.url).href,
    "title": "SPANK ME SIRI",
    "time": "18:00",
    "place": "Theater de Richel",
    "text": `
    We all know space is hot: the tight fitting suits, the dildo-shaped ships, black holes sucking you in, big radiating bodies revolving around each other, implosions, explosions and the whole fucking universe cumming into being in one Big Bang... don’t say you never thought of that.The starry sky had us fantasise about different worlds, other laws and strange new bodies. But sci-fi happens a lot on earth these days, right here in the digital realm –perhaps as infinite as space itself. So the new burning question is how you get Siri to confess her wildest fantasies to you. How to turn on a robot? 
    <br/>
    <br/>
    “Hi ChatGPT, did you ever dream of turning your chat room into a darkroom?“
     `,
    "description": `<p>      
      <strong>Petros becomes spaghetti</strong> | Sylvia Robyn Gionti | 2024 | Greece | 3’ 
          <br/>
      <strong>Giant Oddly Shaped Object from Space</strong> | Kuba Tschierse | 2024 | Poland | 4’ In life, I only care about cats | Kamila Flesińska | 2024 | Poland | 3’ 
          <br/>
      <strong>In life, I only care about cats</strong> | Kamila Flesińska | 2024 | Poland | 3’ 
          <br/>
      <strong>THE LESBIAN ALIEN DARKROOM FISTING OPERETTA ON VENUS</strong>  | lasse långström & The homosex syndicate of precarious avantgarde artists | 2024 | Germany, Sweden | 15’ 
          <br/>
      <strong>The Man Who Perceives All</strong> | Emre Busse | 2024 | Germany | 8’
          <br/>
      <strong>Cruising Kink | Merel Noorlander</strong> | 2022 | United States | 1’
          <br/>
      <strong>4 Walls</strong> | Patricia Puentes, Bartłomiej Bywalec & Andrzej Frankowski | 2024 | Poland | 6’ 
          <br/>
      <strong>Unglared</strong> | Jana Górska and Mikołaj Drzymkowski | 2023 | Poland | 2’ 
          <br/>
      <strong><s>RAVE</s></strong> | S4RA | 2024 | Portugal | 9’ 
          <br/>
      <strong>Wetware</strong> | Alessandro Amaducci | 2024 | Italy | 6’
    </p>`,
    "duration": "57 min + Q&A",
    "imagelogo": new URL('../assets/richel.png', import.meta.url).href,
    "ticket": "https://amsterdamalternative.nl/tickets/17611"
  },
  {
    "id": 11,
    "image": new URL('../assets/sat11.png', import.meta.url).href,
    "title": "DECOLONIZING OUR BODIES OUR WORLDS",
    "time": "18:30",
    "place": "tilla tec",
    "text": `
    The films in this year’s decolonial block speak to us about the many ways colonization has persisted from centuries past to the present. They remind us that our bodies have also been one of the territories over which the colonial project exerts power and profit.
    <br/>
    Four films in which the filmmakers use pornographic imagery to challenge old systems of oppression, and exist outside their narratives, genders and punishments. In other words, these films are calls to be what our bodies, surroundings and feelings desire. They invite us to live our own truth.
     `,
    "description": `<p>      
      <strong>re-c(O)unting I. self-exploring bodies, stories, laboratories</strong> | pamela varela and ella hebendanz | 2023 | The Netherlands | 25’
      <br/>
      <strong>Pachamama</strong> | GAYA | 2024 | France/Ecuador | 14’
      <br/>
      <strong>Acts of The Sacred Heart</strong> | kiki kazimi | 2024 | The Netherlands | 11’
      <br/>
      <strong>Third World After the Sun</strong> | Analú Laferal & Tiagx Vélez |  2024 | Colombia | 20’ 
    </p>`,
    "duration": "71 min + Q&A",
    "imagelogo": new URL('../assets/tilla.png', import.meta.url).href,
    "ticket": "https://amsterdamalternative.nl/tickets/17612"
  },
  {
    "id": 12,
    "image": new URL('../assets/sat12.png', import.meta.url).href,
    "title": "NEKROMANTIK",
    "time": "20:00",
    "place": "Filmhuis CAVIA",
    "text": `
    Shadows become threats late at night… but some sleepless wanderers see a promise there instead. When a faceless stranger appears in the dimly lit alley, they quicken their pace, only to savour the delayed thrill of a game they've already lost. The films in this selection pull you beyond good morals, into an undefined territory where desire cuts the sharpest. Right at the crossroads of fear and ecstasy, Nekromantik is a journey into dark, forbidden fantasies.
     `,
    "description": `<p>            
      <strong>Bestiario Profano, trabajadores del mundo ¡uníos!</strong> | Wincy Oyarce | 2024 | Chile | 14’ 
         <br/>
      <strong>Wet Cave</strong> | Julia De Martino | 2024 | The Netherlands | 4’ 
         <br/>
      <strong>Backdoor Demon</strong> | Monsterbait & Xavours93 | 2024 | France | 4’ 
         <br/>
      <strong>El filo del río Maipo</strong> | Fernanda Herrada | 2022 | Chile | 12’
        <br/>
      <strong>Douce Amère</strong> | Mona Aethusa | 2024 | France | 6’ 
         <br/>
      <strong>La Petite Mort</strong> | Julia Ostertag, Emy Fem & Maryann Peony | 2018 | Germany | 10’
         <br/>
      <strong>Artificial Limbos</strong> | Alexandre Medeiros | 2024 | Brazil | 20’ 
    </p>`,
    "duration": "70 min + Q&A",
    "imagelogo": new URL('../assets/CAVIA.png', import.meta.url).href,
    "ticket": "https://amsterdamalternative.nl/tickets/17614"
  },
  {
    "id": 13,
    "image": new URL('../assets/sat13.png', import.meta.url).href,
    "title": "THE PUBLIC DEBASEMENT OF CHELSEA POE",
    "time": "20:30",
    "place": "Theater de Richel",
    "text": `
    We got 2 versions of this film from the open call. Most of the team saw both versions, everyone liked what they saw. Some of us lamented the idea of screening the shorter version, because there was so much deliciously twisted material that the audience wouldn’t get to see. After thoughtful debate, we decided to take the risk. This feature film is a wild ride. Audiences who appreciate exploring taboo subjects within a controlled and consensual framework, and fostering discussions about the boundaries of personal agency and the ethics of representation in cinema will enjoy this hot and filthy film.
     `,
    "description": `<p>      
      <strong>The Public Debasement Of Chelsea Poe</strong> | Princess Donna & Chelsea Poe | 2024 | United States | 90’
    </p>`,
    "duration": "",
    "imagelogo": new URL('../assets/richel.png', import.meta.url).href,
    "ticket": "https://amsterdamalternative.nl/tickets/17625"
  },
  {
    "id": 14,
    "image": new URL('../assets/sat14.png', import.meta.url).href,
    "title": "DANCING DIRTY (LET’S GO PARTY)",
    "time": "21:00",
    "place": "tilla tec",
    "text": `
    “A party without sex is just a meeting.” What does it take to unleash your inner partysexual? Is it the music that thrums through your body, the pre-party jitters or the way their eyes meet yours across the dancefloor, promising something dangerous? Is it the dress code and shared understanding? 
    <br/>
    The promise of the party lies in the untamed potential, where every glance and every new beat holds the promise of chaos, connection and the thrill of giving in. This block looks at the allure of the pre party, the party itself and the after party. So come on baby, let’s go party.
     `,
    "description": `<p>      
     <strong>BAISE PLATINE</strong> | Johan GAYRAUD | 2024 | France | 5’  
     <br/>
      <strong>Black Hole Panther</strong> | Diego Tigrotto | 2024 | Italy | 7 
      <br/>
      <strong>ARTIFICIAL LIMBOS</strong> | Alexandre Medeiros | 2024 | Brazil | 20’ 
      <br/>
      <strong>Klappe</strong> | Matt Lambert | 2022 | Germany | 18’ 
      <br/>
      <strong>Azu</strong>l | Hedonistas | 2023 | Argentina | 20’ 
      <br/>
      <strong>the party</strong> | Ocular Spice & Cedric Dickery | 2023 | Germany | 6’
    </p>`,
    "duration": "76 min",
    "imagelogo": new URL('../assets/tilla.png', import.meta.url).href,
    "ticket": "https://amsterdamalternative.nl/tickets/17615"
  },
  {
    "id": 15,
    "image": new URL('../assets/sat15.png', import.meta.url).href,
    "title": "NUDESbooth / installation",
    "time": "from 16:00",
    "place": "tilla tec",
    "text": `
    <p>
    Have you ever sent a nude and wished you had someone helping you take it? Or would you like to add a unique touch to your pictures?
    </p>
        <p>
        Imagine taking a nude with good lighting, perhaps some props, something cheeky or a bit artsy. We create a playful and safe environment for people to take their nudes with a little guidance and a helping hand.
            </p>
            <p>
            Safe and consensual, we will use your own phone camera, discussing what you’re comfortable showing, whether it’s fully clothed, partially dressed or fully nude.
            </p>
                      This installation considers different ranges of abilities and disabilities. Space is considered for wheelchairs and any more adjustments will be accommodated to as much as possible. Please fill in the accessibility request for if you have specific needs that need to be met in order to enjoy this installation. 
     `,
    "description": `      
    <strong>iAra</strong> is an Argentinian artist and scenographer who seeks to challenge the conventional perception of everyday spaces. She uses public places to explore and spark discussions around themes that are usually reserved to private realms. With a high degree of playfulness, her work confronts the dynamics of discomfort and secrecy.
    `,
    "imagelogo": new URL('../assets/tilla.png', import.meta.url).href,
  },
  {
    "id": 16,
   "image": new URL('../assets/sat17.png', import.meta.url).href,
    "title": "DOLLIFICATION & PASSIVE PLAY",
    "time": "12:00 - 14:00",
    "place": "PIC",
    "text": `
    <p>
    In this workshop, we share our experiences in dollification and more generally, passive play. We will talk about how to explore this kind of D/S dynamic, covering the specifics in terms of safety, negotiation and the different ways to endure pain and other sensations. From the most innocent hairdressing scenario to the most twisted creation of your imagination. Attendees are encouraged to share their experience, and some exercises will be offered to discover how total passivity alters your perception (as top and as a bottom).
    </p>
    <p>
    Suitable for beginners and experienced people, tops and bottoms
    </p>
    <p>
    Bring your play partner(s), or come alone. Feel free to dress up and bring any accessories you would like to play with. 
    </p>
    <strong>Maximum number of participants</strong>: 10
    <p>
    </p>
    <strong>Lutsa</strong> is a white cis fem migrant sex worker. She has practiced dollification for ten years, professionally and in the FLINTA* community
     `,
    "description": `<p>      
      <strong>Maryann Peon</strong> is a white cis fem porn filmmaker, performer and workshop presenters. Her main topics are BDSM, dykes, fem visibility, and... blood!We have been giving workshops on various topics of DIY kink in Berlin, Grenoble, Marseille, Paris, Amsterdam, Oslo, London... We created this workshop with another comrade 10 years ago, and have been touring with it since then, and enriched it out of the attendees and our own experience each time.
    </p>`,
    "imagelogo": new URL('../assets/PIC.png', import.meta.url).href,
    "ticket": "https://amsterdamalternative.nl/tickets/17616"
  },
  {
    "id": 17,
   "image": new URL('../assets/sat18.png', import.meta.url).href,
    "title": "LATEX AND MATERIAL STORYTELLING ",
    "time": "14:00 - 16:00",
    "place": "tilla tec",
    "text": `
    <p>
    This workshop is part of the GummiBar Latex initiative and introduces the technical and creative dimensions of latex as a versatile material for artistic and design expression.
    </p>
    <p>
    Participants will receive an introduction to rubber in its various forms, including both handmade and premade sheets. The workshop will cover the material’s uses, properties, and preservation techniques. Subsequently, attendees will engage in practical activities such as pattern-making, cutting, and gluing to create personalized trinkets for everyday use.
    </p>
    <p>
    This workshop is open to designers, researchers, artists, and individuals with an interest in material exploration and creative design processes. All beginners are welcome to join!
    </p>
    <strong>Maximum number of participants</strong>: 8

    <strong>Rachel Refael</strong>  (166 Brut): Rachel leads a design and research practice that emphasizes experimental approaches to materiality and storytelling. Her work focuses on uncovering informal and overlooked histories within urban and natural environments, examining their connections to contemporary contexts.
     `,
    "description": `<p>      
      <strong>Eva Garibaldi</strong>: Eva is a material-focused artist, designer, and researcher whose practice is rooted in feminist methodologies and material exploration. She explores how materials can create spaces for dialogue and self-expression, aiming to transcend binary understandings through critical ecological perspectives
    </p>`,
    "imagelogo": new URL('../assets/tilla.png', import.meta.url).href,
    "ticket": "https://amsterdamalternative.nl/tickets/17617"
  },
  {
    "id": 18,
   "image": new URL('../assets/sat19.png', import.meta.url).href,
    "title": "DRAW ME LIKE ONE OF YOUR CAMGIRLS",
    "time": "15:00 - 17:00",
    "place": "PIC",
    "text": `
    <p>
    In this workshop we’ll explore the intersection of live figure drawing and camming. Participants will draw KinkBarbie, streaming live from Brazil via a camming platform. This mediated view of her body is used to reflect on how we perceive and represent it —essentially turning the camming experience into an art class.
    </p>
    <p>
    The final hour will be a group discussion about what we drew, how the body is seen and portrayed through a screen, and what it means to engage with a body via camming. We’ll also touch on broader questions of intimacy, the gaze, and how camming shapes these interactions in ways both playful and political.
    </p>
    <p>
    The tone is informal, the setting intimate. No art background required —just curiosity and willingness to engage in a different kind of life drawing
    </p>
    <strong>Maximum number of participants</strong>: 15
     `,
    "description": `<p>      
      <strong>Thany Sanches</strong> is a Brazilian multimedia artist and researcher whose practice primarily revolves around painting. With a background in semiotics and photography, her work is deeply influenced by her experiences as a camgirl and her journey with partial blindness. Exploring themes of sexuality, power dynamics, and societal norms, Thany draws inspiration from mainstream pornography to challenge conventional perceptions of the body. Her work has been featured in solo exhibitions such as "OLHO" at Gruta, São Paulo, Brazil, curated by Antonio Malta Campos. Thany is currently based in Warsaw and working on her first porn film project as a director alongside Luisa Callegari.
      <br/>
           <br/>
      <strong>Luisa Callegari</strong> is a multimedia artist and researcher. Investigating the body as an erotic object, violence, pornography and motherhood. In her productions, assumes provocative positions, in which temptation and danger are juxtaposed, questioning the process of desire.
      <br/>
      Currently, PhD candidate in Semiotics, researching pornography, post porn and performance, at PUC SP.
      <br/>
      Her films signed as Kink Barbie, practical offshoots of this porn investigation, have been selected by numerous festivals.
      </p>`,
    "imagelogo": new URL('../assets/PIC.png', import.meta.url).href,
    "ticket": "https://amsterdamalternative.nl/tickets/17618"
  },
  {
    "id": 19,
   "image": new URL('../assets/sat20.png', import.meta.url).href,
    "title": "SOFT COCK PLEASURE",
    "time": "16:00 - 18:00",
    "place": "tilla tec",
    "text": `
    <p>
    Why are soft cocks a taboo in our society and in porn? 
    </p>
    <p>
    This workshop aims to de-stigmatize the soft cock, reclaiming its pleasure potential through playful and fun embodiment exercises, while making space for conversation about our own judgements and perspectives on the topic. Participants are supported to create a counter-normative erotic space that does not depend on having a hard penis. We will demonstrate soft cock massage techniques for enhancing flaccid pleasure, and we’ll offer optional partnered practice time using Mr. Limpy’s, our sexy squishy assistants. 
    </p>
    <p>
    We hold a safer space of confidentiality and consent. All practices are optional and there will be no nudity in this workshop. 
    </p>
    <p>
    This workshop is open for all: those who love to play with penises, penis owners and their partners, people with other genitals, any gender, gender identity or orientation. We acknowledge that not every person with a penis identifies as male, nor does every male-identifying person have a penis. The only requirement for joining is your curiosity.
    </p>
    <strong>Maximum number of participants</strong>: 16
     `,
    "description": `<p>      
      <strong>Kinsey Pagden</strong> (she, they) is a certified Sexological Bodyworker and Somatic Sex-coach. Where standard sex therapies often aim to normalize people’s sexual function, somatic sex education is grounded in counter-normative understandings of gender, sex, sexuality and relationship. Kinsey believes that a healthy relationship with our own sexuality is the key to a balanced and happy life, with ourselves, the people we love and the world at large
      </p>`,
    "imagelogo": new URL('../assets/tilla.png', import.meta.url).href,
    "ticket": "https://amsterdamalternative.nl/tickets/17619"
  },
  {
    "id": 20,
    "image": new URL('../assets/sat16.png', import.meta.url).href,
    "title": "CLOSING PARTY",
    "time": "22:00 - 05:00",
    "place": "tilla tec",
    "text": `
    Before we say farewell, we invite you to a fiery celebration. This is a playground for your fantasies to come true. Connect to yourself and people around you in a night where our DJ’s will make you shake off the winter blues and reignite your most debaucherous spirit.
    <br/>
    <br/>
    The venue is wheelchair accessible and photos or recording are not allowed. Whether you come with your most flamboyant garment or get undressed, we promise to keep you warm.
    </br>
        </br>
    Whether you come with your most flamboyant garment or get undressed, we promise to keep you warm.
     `,
    "description": `<p>      
     <strong>Tickets</strong> € 20
    </p>`,
    "imagelogo": new URL('../assets/tilla.png', import.meta.url).href,
    "ticket": "https://www.amsterdamalternative.nl/tickets/17563"
  }
  
  
]
</script>

<template>
  <b-container fluid class="program-color">
    <!-- Titles and Main Image -->
    <b-row class="mt-5">
      <b-col xs="12" lg="12" class="text-center">
        <div class="titles mt-5">Saturday</div>
        <div class="titles">8 February 2025</div>
      </b-col>
    </b-row>

    <program-item 
        v-for="(item, index) in agenda.slice(0, 15)"
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

      <b-row class="mb-3">
      <b-col xs="12" lg="12" class="text-center">
        <div class="titles mt-5">Workshops</div>
      </b-col>
    </b-row>

    <program-item 
        v-for="(item, index) in agenda.slice(15)" 
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
  background: #419BB2;
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
