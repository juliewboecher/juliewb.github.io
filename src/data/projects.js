const projects = [
  {
    id: 1,
    slug: "Vuuh, Optimering af onboarding",
    title: "Vuuh, Optimering af onboarding",
    year: "2026",
    summary: "En personlig portfolio bygget med React, Vite og GitHub Pages.",
    description:
      "Vuuh oplever at deres brugere oplever problemer under onboarding, og derfor mangler de en klar vejledning for at komme i mål. Vi har udviklet en optimeret onboarding proces, i form af en interaktiv prototype, der guider brugerne gennem essentielle dele af onboarding.",
    tags: ["Figma Prototype", "User flow", "Onboarding"],
    image: `${import.meta.env.BASE_URL}Vuuhmockup.png`,
    links: [
      {
        label: "Figma optimeret prototype",
        href: "https://www.figma.com/proto/MeZ6V3TVoAOar2gzLS52rb/Case-2---Vuuh?node-id=187-1116&viewport=214%2C341%2C0.05&t=ROdR9HOpFjPJyDFR-1&scaling=scale-down&content-scaling=fixed&starting-point-node-id=187%3A1116&page-id=102%3A2439",
      },
      {
        label: "UX Audit Summary",
        href: "https://drive.google.com/file/d/1r6ZC2bulI5YFLgJ1n-_2rd0doWEptNk5/view?usp=sharing",
      },
    ],
    title2: "Udfordring",
    description2:
      "Den overordnede udfordring er, at onboarding udfordrer brugeroplevelsen, ved gentagne gange at efterlade brugeren uden vejledning til næste step. De største optimeringmuligheder er ved “demo-ordre”, “succes-side”, “efter udfyldt formular” og “connect to Shopify”. De vigtigste problemer er, at brugeren ikke selvstændigt kan komme videre og rammer et standstill. Mangel på succes gør at brugeren ikke ved, om de er færdige eller om der er endnu et step. Konsekvensen kan være, at brugeren giver op før relevante steps er fuldført. Vuuh taber potentielle kunder, som kunne have været undgået ved vejledende onboarding.",
    title3: "Undersøgelse og prioritering",
    description3:
      "Målet er, at appen kan opstilles selvstændigt. Vi vil minimere steps og tydeliggøre steps. Eksempelvis ved at fjerne unødvendige klik fra guiden, så brugeren undgår unødvendige indtryk og oplever en enkel og overskuelig proces.",
    image2: `${import.meta.env.BASE_URL}Vuuhprio.png`,
    title4: "Løsning og dokumentation",
    title4a: "succes-side",
    description4a:
      "Problemet med Vuuh's nuværende succes-side er, at det er uklart at brugeren skal åbne Vuuh app efter at succes-siden vises, da det ikke oplyses på siden. Brugeren kommer derfor muligvis ikke videre. Brugeren har brug for ekstra forklaring til af færdiggøre opgaven. Siden ligner desuden ikke andre, og opfylder altså ikke standarden for at “connecte to apps”. På vores optimerede succes-side har vi taget højde for accessibility ift. brugerens indsat, ved at tydeliggøre hvad næste step er. Vi har tilføjet en “click here”-knap som fører brugeren direkte til Vuuh. Vi har fremhævet brugerens shopname, samt at det skal bruges til at connecte til Vuuh.",
    image4a: `${import.meta.env.BASE_URL}Vuuhsuccesside.png`,
    title4b: "Connect to Shopify",
    description4b:
      "Vuuhs løsning på “connect to Shopify“-steppet kan skabe forvirring og opfattes som forkert navigering for brugeren. Brugeren trykker på en intuitiv grøn “connect to Shopify”-knap og bliver videresendt til en ny side (outputs) med en helt masse nye muligheder ikke omhandlende Shopify. Vores optimerede “succes-side“ indebærer, at brugeren bliver sendt direkte til en udfyldningsformular, fremfor at skulle gennem siden “outputs“. Sådan sikrer vi at brugeren ved, at de er på sporet, og er motiveret til at fortsætte.",
    image4b: `${import.meta.env.BASE_URL}Vuuhconnect.png`,
    title4c: "Efter udfyldt formular",
    description4c:
      "Det nuværende modal med “Start free trial“ kan indikere at brugeren er færdig med tilmelding og at man har nået målet. Efter tilmeldingen bliver brugeren sendt til en tom success-side uden en tydelig guide til næste handling. Dette skaber usikkerhed om, hvorvidt processen er gennemført eller ej. Det er ikke intuitivt, for brugeren at de skal gå fra den ene fane til den anden, for at udføre næste step. Desuden skal brugeren klikke på en næsten identisk knap for at bekræfte til sidst. Det skaber forvirring, fordi brugeren tror de allerede har udført det step. Vores optimerede løsning er bygget på guided steps, så brugeren ved præcis hvad næste skridt er, og hvordan man kommer fra side til side. Derfor er der information om næste handling på “succes-siden“ samt en CTA med navigering til næste side. Næste side adskiller sig fra den tidligere, da der nu kun er et overlay, hvor man skal bekræfte connection. På den måde sikrer vi et gridningsfrit brugerflow gennem hele processen.",
    image4c: `${import.meta.env.BASE_URL}Vuuhformular.png`,
    title4d: "Test-ordre flow",
    description4d:
      "Vuuhs nuværende “test-ordre flow” giver ingen indikation til, at man skal lave en test-ordre, efter man har connected Vuuh med Shopify. Hvis dette step ikke bliver opfyldt, kan hverken Vuuh eller brugeren være sikker på, at det rent teknisk er opsat korrekt. I vores optimerede “test-ordre flow” får brugeren en loading side efter successfuldt download af test-ordre. Sådan sikrer vi brugeren om, at dette blot er en test-ordre, og at den derfor ikke vil blive vist i deres webshop. Efter en loading-indikator, vises et overlay med “Order is successfully downloaded!“.",
    image4d: `${import.meta.env.BASE_URL}Vuuhtestordre.png`,
    title5: "Tværgående mønstre",
    description5:
      "Den nuværende onboarding består af alt for mange steps. Brugeren bliver ikke guided nok og det er ikke intuitivt, hvad næste step er. Især ikke for ikke-erfarne brugere. Brugeren støder gentagende gange på steps, som ser ud til at være det sidste og rammer standstill. Et gennemgående problem er at forhindre fejl. Der mangler guidence og færre steps. Det skal gøres så simpelt som muligt. Vuuhs onboarding tager heller ikke nok hensyn til forskellige typer brugere og deres erfaring. Vi overvejede undervejs at tilføje en step-tracker, som kunne give brugeren et overblik over processen. Vi blev dog enige med Vuuh om, at det ikke var nødvendigt, og at vores guided steps står stærkt i sig selv.",
    title6: "Fokus fremadrettet",
    description6:
      "Hvordan sørger man for, at onboarding er tilgængelig for både erfarne og ikke-erfarne brugere? Fremadrettet ville vi lægge fokus på hvordan erfarne brugere kan skippe mulige steps, for fleksibilitet og effektivitet, og dermed ramme en bredere målgruppe. Fremadrettet ser vi at vores forslag til guided-steps-onboarding implementeres til resten af flowet, eksempelvis ved de efterfølgende steps med “connect to brands”.",
  },

  {
    id: 2,
    slug: "Mellemrum, fejlhåndtering af data",
    title: "Mellemrum, fejlhåndtering af data",
    year: "2026",
    summary: "En personlig portfolio bygget med React, Vite og GitHub Pages.",
    description:
      "Mellemrum er en fiktiv webapp, designet til at samle koncerter, talks, workshops og fællesskaber, så du lettere kan opdage noget, du ikke allerede kendte.",
    tags: ["React", "Supabase", "Fejlhåndtering"],
    image: `${import.meta.env.BASE_URL}Mellemrummockup.png`,
    links: [
      {
        label: "Live Site",
        href: "https://juliewboecher.github.io/mellemrum/",
      },
      {
        label: "GitHub Repository",
        href: "https://github.com/juliewboecher/mellemrum.git",
      },
      {
        label: "Teknisk Audit",
        href: "https://drive.google.com/file/d/1miw44MEK-2fqgR7NK-7q3QrIb94hoSzQ/view?usp=sharing",
      },
    ],
    title2: "Udfordring",
    description2:
      "Det største problem med Mellemrum var tilmeldingsflowet. Tilmeldinger blev ikke gemt i en database. Brugeren modtog heller ingen bekræftelse ved tilmelding, og der var ingen måde at se sin tilmelding på efterfølgende. Derudover manglede der forebyggende fejlhåndtering, hvis der opstod fejl under hentning af data eller under tilmelding. Disse fejl ville gøre brugeren utryg og forvirret ved brug af appen, og derfor ikke gøre processen nemmere for brugeren, som egentlig er meningen med appen.",
    title3: "Undersøgelse og prioritering",
    description3:
      "Jeg har valgt at fremhæve 4 optimeringer, men alle optimeringer kan ses i “Teknisk Audit“ eller i “GitHub Repository“. Optimeringerne er fundet ud fra en teknisk gennemgang af koden samt den deployet løsning, hvor jeg slog ned på de største problemer i flowet. Jeg har prioriteret optimeringerne ud fra, hvilke der vil have størst effekt på brugeroplevelsen.",
    image2: `${import.meta.env.BASE_URL}Mellemrumprio.png`,
    title4: "Løsning og dokumentation",
    title4a: "Beskræftelse ved tilmelding",
    description4a:
      "Her var mit fokus at skabe robusthed og fejlhåndtering af UI-states. Ved tilmelding fik brugeren ingen bekræftigelse efter tryk på tilmeld. Min løsning til dette var at tilføje en succesmelding når man har trykket på tilmeld. Det kan ses inplementeret ved at tilmelde sig og derefter se en bekræftelse. På den måde er brugeren ikke i tvivl om de fik trykket på tilmeld.",
    image4a: `${import.meta.env.BASE_URL}Mellemrumtilmelding.png`,
    title4b: "Fejlmelding ved mangler",
    description4b:
      "Her er problemet igen indefor området robusthed og sikker fejlhåndtering af UI-states. Hvis brugeren manglede at udfylde enten mail eller navn, når de trykkede på tilmeld, var der ingen fejlmelding af dette. Min løsning var at tilføje henholdsvis en fejlmelding ved indput til navn og indput til mail, som vises hvis der mangler at blive udfyldt. Nu efterlades brugeren ikke med tvivl om, hvorvidt de har udfyldt de nødvendige felter.",
    image4b: `${import.meta.env.BASE_URL}Mellemrummangler.png`,
    title4c: "Skeleton loading",
    description4c:
      "Indenfor performance af koden fandt jeg en usikker håndtering af loading og fetching af kode. Ved loading af billeder og event cards, var der ingen indikation af at noget var ved at blive hentet. Derfor implementerede jeg skeleton loading, som viser et skelet for hvad der loades. Derfor er brugeren ikke længere i tvivl om, at noget bliver hentet, hvis netværket er svagt, eller der sker en anden fejl i hentning af data.",
    image4c: `${import.meta.env.BASE_URL}Mellemrumskeletonkode.png`,
    title4d: "Automatisering af opdatering af data",
    description4d:
      "Her fandt jeg indenfor relationen til Supabase et potentiale for at automatisere opdateringen af data. Hvis en venue opdaterer sit navn eller url til website, så ændres det ikke automatisk alle steder hvor den venue optræder. For at løse dette, implementerede jeg både i HomePage.jsx og EventPage.jsx, en fetching der lytter efter ændringer i venue data og automatisk opdaterer alle steder, hvor denne venue data bliver brugt.",
    image4d: `${import.meta.env.BASE_URL}Mellemrumauto.png`,
    title5: "Tværgående mønstre",
    description5:
      "Overordnet fandt jeg ud af, at Mellemrum manglede overblik til brugeren og bekræftelse og tryghed ved tilmelding. Derudover manglede der en sikker håndtering af fejl i dataflowet. Disse mangler gjorde det usikkert for brugeren at bruge appen.",
    title6: "Fokus fremadrettet",
    description6:
      "Fremadrettet ville jeg implementere resten af mine findings fra “Teknisk Audit“. Derudover ville jeg implementere en log-ind-funktion, både for brugeren og for venues. På den måde kan jeg skjule tilmeldinger for brugerne, så de kun kan se antal tilmeldinger, frem for at vise brugeres data på en offentlig side.",
  },
  {
    id: 3,
    slug: "La Rouge, Secondhand subbrand",
    title: "La Rouge, Secondhand subbrand",
    year: "2026",
    summary: "En personlig portfolio bygget med React, Vite og GitHub Pages.",
    description:
      "Udvikling af koncept, subbrand og brugerflade for La Rouges nye og optimerede Re-commerce indsats.",
    tags: ["Designsystem", "Brandidentitet"],
    image: `${import.meta.env.BASE_URL}Larougemockup.png`,
    links: [
      {
        label: "Figma Prototype",
        href: "https://juliewboecher.github.io/mellemrum/",
      },
      {
        label: "Branddeck",
        href: "https://github.com/juliewboecher/mellemrum.git",
      },
      {
        label: "Koncept & Løsning",
        href: "https://github.com/juliewboecher/mellemrum.git",
      },
    ],
    title2: "Udfordring",
    title3: "Undersøgelse og prioritering",
    description3:
      "Identifikation af problem og mulighed: Med subbrand kan la rouge gå all in på “rødstrømpe og power”-identiteten som de gerne vil, fordi der er plads til mere spræl. De kan have andet tøj end deres eget brand, som kan hjælpe med at få et mere “rødstrømpe”-agtigt udtryk. Kortlæggelse af hovedbrandets associationer: At det er en clean og chic hjemmeside som udståler highend og god kvalitet. At de står for at være sin egen person. House of Brands eller Branded House?Branded House --> Vores brand læner sig meget op ad La Rouge og trækker på deres værdier og er bygget på samme DNA. Definér subbrandets rolle i organisationen. Et sted til en lidt yngre målgruppe, som er en smule mere vovet, og en anden prisklasse og andet sæt værdier bag. Forbindelsen skal være ret tæt, det er synligt at det er et subbrand. Men der er tydelig forskel på både design, koncept og udtryk. Fx. taler til en anden målgruppe, mere konkret har de også andre mærker på siden. Sæt design på subbrandet og til broen til hovedbrandet “by larouge” farver (den mørkerøde) Dele af Tone of voice Logoets placering (i midten) Stadig noget af larouge eget tøj (secondhand). Hvordan bryder vi med larouge? Andre mærker Lidt mere legende, rebelske og udtryksfulde Visuelt: flere farver Mere vægt på den enkelte person (unikke items)",
    image2: `${import.meta.env.BASE_URL}Larougeprio.png`,
    title4: "Løsning og dokumentation",
    title5: "Tærgående mønstre",
    title6: "Fokus fremadrettet",
  },
  {
    id: 4,
    slug: "Social Media Manager",
    title: "Social Media Manager",
    year: "2026",
    summary:
      "Et projektkort, som du kan kopiere og ændre til dit eget projekt.",
    description:
      "I mit arbejde som SoMe Manager, planlægger jeg, i dialog med Café Smagløs driftschef, hvad og hvornår indhold deles. Jeg er komfortabel i at have en stor del af ansvaret i planlægningen og eksekveringen. Tilgang: Hvordan kan jeg skabe en rød tråd gennem caféens optræden på sociale medier? Og hvordan kan jeg skabe indhold på virksomhedens sociale medier, som skaber værdi for seerne og giver dem lyst til at besøge caféen?",
    tags: ["Content Creation", "Videoredigering", "Performance-analyse"],
    image: `${import.meta.env.BASE_URL}smaglos.svg`,
    links: [
      {
        label: "Cafe Smagløs Instagram",
        href: "https://www.instagram.com/cafesmaglos?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw%3D%3D",
      },
      {
        label: "Testimonial",
        href: "https://drive.google.com/file/d/1Yin8p9XTVMgYHOkbEpmXosZn7GSUySH5/view?usp=sharing",
      },
    ],
  },
  {
    id: 5,
    slug: "Gemly",
    title: "Gemly",
    year: "2026",
    summary:
      "Et projektkort, som du kan kopiere og ændre til dit eget projekt.",
    description:
      "Beskriv problemet, Gemly er en webapp som samler søgning og filtrering, organisering af fundne steder, rutevejledning og deling af de skjulte perler, de selv finder.“Hvordan kan vi hjælpe vores målgruppe i deres research og planlægning efter at finde mindre kendte steder at besøge, når de rejser? Og hvordan skaber vi en brandidentitet som giver appen værdi for brugerne?”, din rolle, de vigtigste valg og hvad du lærte. Gør projektet konkret, så andre kan forstå dit arbejde.",
    tags: ["Konceptudvikling", "React", "Brandidentitet", "Onboarding"],
    image: `${import.meta.env.BASE_URL}gemly.svg`,
    links: [
      {
        label: "Live site",
        href: "https://mohammadkamell.github.io/gemly-project-webapplication/",
      },
      {
        label: "GitHub repo",
        href: "https://github.com/mohammadkamell/gemly-project-webapplication",
      },
    ],
  },
  {
    id: 6,
    slug: "Story Hangers",
    title: "Story Hangers",
    year: "2026",
    summary:
      "Et projektkort, som du kan kopiere og ændre til dit eget projekt.",
    description:
      "Story Hangers er et projekt, der fokuserer på at forbedre kundeoplevelsen i detailhandlen ved hjælp af innovative designløsninger.",
    tags: ["User Research", "Kundeoplevelse", "React"],
    image: `${import.meta.env.BASE_URL}story.svg`,
    links: [
      {
        label: "Live site",
        href: "https://juliewboecher.github.io/customer-experience-exam/",
      },
      {
        label: "GitHub repo",
        href: "https://github.com/juliewboecher/customer-experience-exam.git",
      },
      {
        label: "Figma Prototype",
        href: "https://www.figma.com/proto/ry3SWKjxsmnVtiojCvEkmU/Story-Hangers-Eksamensprojekt?page-id=1103%3A4106&node-id=828-1679&viewport=293%2C214%2C0.14&t=LXtMGLUnzVZn21q9-1&scaling=min-zoom&content-scaling=fixed&starting-point-node-id=828%3A1679",
      },
    ],
  },
];

export default projects;
