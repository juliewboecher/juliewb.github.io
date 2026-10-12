const projects = [
  {
    id: 1,
    slug: "Vuuh, Optimerings-projekt",
    title: "Vuuh, Optimerings-projekt",
    year: "2026",
    summary: "En personlig portfolio bygget med React, Vite og GitHub Pages.",
    description:
      "De største optimeringmuligheder er ved “demo-ordre”, “succes-side”,“efter udfyldt formular” og “connect to Shopify”. De vigtigste problemer: Brugeren kan ikke selvstændigt komme videre - de rammer et standstill. Mangel på succes gør at brugeren ikke ved, om de er færdige eller om der er endnu et step.",
    tags: ["Figma Prototype", "User flow", "Onboarding"],
    image: `${import.meta.env.BASE_URL}Vuuhlogo2.png`,
    links: [
      {
        label: "Figma optimeret prototype",
        href: "https://www.figma.com/proto/MeZ6V3TVoAOar2gzLS52rb/Case-2---Vuuh?node-id=187-1116&viewport=214%2C341%2C0.05&t=ROdR9HOpFjPJyDFR-1&scaling=scale-down&content-scaling=fixed&starting-point-node-id=187%3A1116&page-id=102%3A2439",
      },
      {
        label: "UX Audit",
        href: "https://drive.google.com/file/d/1r6ZC2bulI5YFLgJ1n-_2rd0doWEptNk5/view?usp=sharing",
      },
    ],
    title2: "Udfordring",
    description2:
      "Overordnet vurdering: UX-Audit tager udgangspunkt i persona 1 og viser at onboarding udfordrer brugeroplevelsen, ved gentagne gange at efterlade brugeren uden vejledning til næste step. De største optimeringmuligheder er ved “demo-ordre”, “succes-side”, “efter udfyldt formular” og “connect to Shopify”. De vigtigste problemer: Brugeren kan ikke selvstændigt komme videre - de rammer et standstill. Mangel på succes gør at brugeren ikke ved, om de er færdige eller om der er endnu et step. Konsekvensen: Brugeren giver op før relevante steps er fuldført. Vuuh taber potentielle kunder, som kunne have været undgået ved vejledende onboarding.",
    title3: "Undersøgelse og prioritering",
    description3:
      "Muligheden: At appen kan opstilles selvstændigt. Minimere steps Tydeliggøre step for step, hvor brugeren skal klikke for at fortsætte. Eksempel: “Fjern",
    image2: `${import.meta.env.BASE_URL}Vuuhprio.png`,
    title4: "Løsning og dokumentation",
    title4a: "succes-side",
    description4a:
      "Vuuhs løsning: Det er uklart at brugeren skal åbne Vuuh app efter at succes-siden vises, da det ikke oplyses på siden. Brugeren kommer derfor muligvis ikke videre. Help and Documentation: Brugeren har brug for ekstra forklaring til af færdiggøre opgaven. Consistency and Standards: Siden ligner ikke andre, den opfylder ikke standarden for at “connecte to apps”. Optimeret Succes-side: Vi har taget højde for accessibility ift. brugerens indsat, ved at tydeliggøre hvad næste step er: Tilføjet en “click here”-knap som fører brugeren direkte til Vuuh. Fremhævet brugerens shopname, samt at det skal bruges til at connecte til Vuuh.",
    title4b: "Connect to Shopify",
    description4b:
      "Vuuhs løsning: Det kan skabe forvirring og tænkes som forkert navigering (brugere kan ske at trykke ud af siden). Brugeren trykker på en intuitiv grøn “connect to Shopify” knap og bliver videresendt til en ny side (output-side) med en helt masse nye muligheder ikke omhandlende shoppify. Optimeret succes-side: Løsningen indebærer, at brugeren bliver sendt direkte til en udfyldningsformular, fremfor at skulle gennem outputs.",
    title4c: "Efter udfyldt formular",
    description4c:
      "Vuuhs løsning:Start free trial kan indikere at brugeren er færdig med tilmelding og at man har nået målet. Efter tilmeldingen bliver brugeren sendt til en tom success-side uden en tydelig næste handling, hvilket skaber usikkerhed om, hvorvidt processen er gennemført. Det er ikke intuitivt, at man skal gå fra den ene fane til den anden, tilbage til den første. OG så klikke på næsten den samme knap som før. Vores løsning: Den optimerede løsning er bygget på guided steps, så brugeren ved præcis hvad næste skridt er, og hvordan man kommer fra side til side. Derfor er der information om næste handling på succes-siden samt en CTA med navigering til næste side. Næste side adskiller sig fra den tidligere, da der nu kun er et overlay, hvor man skal bekræfte connection.",
    title4d: "Test-ordre flow",
    description4d:
      "Vuuhs løsning: Vuuhs nuværende løsning giver brugeren ingen indikation til, at man skal lave en test-ordre*, efter man har sat Shopify op. Hvis dette step ikke bliver opfyldt, så kan brugeren ikke være sikker på, at Vuuh er opsat korrekt og brugeren får aldrig sin success oplevelse, med at have gennemført opsætningen. Vores løsning: Efter successfuldt download af test-ordre skal få brugeren en loading side for at forsikre brugeren om, at dette blot er en test-ordre, og at denne derfor ikke vil komme frem i deres webshop. Efter loading indikator, får man en pop-up Order is successfully downloaded!",
    title5: "Tværgående mønstre",
    description5:
      "Den nuværende onboarding består af alt for mange steps. Brugeren bliver ikke guided igennem, og et er ikke intuitivt, hvad næste step er. Brugeren støder gentagende gange på steps, som ser ud til at være det sidste og rammer standstill. Et gennemgående problem er at forhindre fejl. Der mangler guidence og færre steps. Det skal gøres så simpelt som muligt. Disse gennemgående problemer ligger sig op ad 2 heuristikker: 5 Error Prevention og 7 Flexibility and Efficiency of use. Det er vigtigt at få rettet op på for et gnidningsfrit flow",
    title6: "Fokus fremadrettet",
    description6:
      "Hvordan sørger man for at onboarding er accessible for både persona 1 og 2? Fremadrettet ville vi lægge fokus på hvordan erfarne brugere som persona 2 kan skippe mulige steps, for Flexibility and Efficiency of use, og dermed ramme en bredere målgruppe. Implementer guided-steps til resten af flow. Fremadrettet ser vi at vores forslag til guided-steps-onboarding implementeres til resten af flowet, eksempelvis ved de efterfølgende steps “connect to brands”. Forslag til gavn for begge personaer. En feature som kan gavne både persona 1 og 2 er en step-tracker som giver brugeren Visibility of System Status. En step tracker i toppen af interfacet, som viser hvor langt brugeren er i flowet, og hvilke steps der kommer næst.",
  },

  {
    id: 2,
    slug: "Mellemrum",
    title: "Mellemrum",
    year: "2026",
    summary: "En personlig portfolio bygget med React, Vite og GitHub Pages.",
    description:
      "Optimeringsprojekt med fokus på tilmeldningsflow og fetch af Supabase data. Fokus på fejlhåndtering i form af skeleton, 404 page og error page. Fokus på accessibility, i form af semantisk html.",
    tags: ["React", "Supabase", "Fejlhåndtering"],
    image: `${import.meta.env.BASE_URL}Mellemrumlogo2.png`,
    links: [
      {
        label: "Live site",
        href: "https://juliewboecher.github.io/mellemrum/",
      },
      {
        label: "GitHub repo",
        href: "https://github.com/juliewboecher/mellemrum.git",
      },
    ],
    title2: "Udfordring",
    title3: "Undersøgelse og prioritering",
    image2: `${import.meta.env.BASE_URL}Mellemrumprio.png`,
    title4: "Løsning og dokumentation",
    title4a: "Beskræftelse ved tilmelding",
    description4a:
      "Område: Robusthed - Fejlhåndtering og UI-states Fund og evidens. Tilmelding - Ingen bekræftigelse når man har trykket tilmeld. Forslag til løsning: Tilføj en succesmelding når man har trykket på tilmeld. Verifikation:Gennemfør tilmelding og se en “succes” besked vises ved tryk på “tilmeld”",
    title4b: "Fejlmelding ved mangler",
    description4b:
      "Område: Robusthed - Fejlhåndtering og UI-states. Fund og evidens: Tilmelding - Fejlmelding, hvis man mangler at udfylde enten mail eller navn, når man trykker på tilmeld. Forslag til løsning: Tilføj henholdsvis en melding ved indput til navn og indput til mail, som vises hvis der mangler at blive udfyldt. Verifikation:Gennemfør tilmelding og se en “succes” besked vises ved tryk på “tilmeld”",
    title4c: "Skeleton loading",
    description4c:
      "Område: Performance - Mål og verificér i praksis. Fund og evidens: Loading, fetching af kode. Især billeder og event cards. Forslag til løsning. Skeleton, viser et skelet for hvad der loades Verifikation:",
    title4d: "Utilities",
    description4d:
      "Område: Datamodel og relationer - Supabase. Fund og evidens: Genbrug af funktioner - Nogle funktioner og states genbruges på flere pages. Forslag til løsning: Opret services og utilities mappe med js fil til funktioner og states som genbruges, som så kan importeres hvor de skal bruges.Verifikation:",
    title5: "Tværgående mønstre",
    title6: "Fokus fremadrettet",
  },
  {
    id: 3,
    slug: "La Rouge, Secondhand subbrand",
    title: "La Rouge",
    year: "2026",
    summary: "En personlig portfolio bygget med React, Vite og GitHub Pages.",
    description:
      "Udvikling af koncept, subbrand og brugerflade for La Rouges nye og optimerede Re-commerce indsats.",
    tags: ["Designsystem", "Brandidentitet"],
    image: `${import.meta.env.BASE_URL}Larougelogo2.png`,
    links: [
      {
        label: "Live site",
        href: "https://juliewboecher.github.io/mellemrum/",
      },
      {
        label: "GitHub repo",
        href: "https://github.com/juliewboecher/mellemrum.git",
      },
    ],
    title2: "Udfordring",
    title3: "Undersøgelse og prioritering",
    description3: "Identifikation af problem og mulighed: Med subbrand kan la rouge gå all in på “rødstrømpe og power”-identiteten som de gerne vil, fordi der er plads til mere spræl. De kan have andet tøj end deres eget brand, som kan hjælpe med at få et mere “rødstrømpe”-agtigt udtryk. Kortlæggelse af hovedbrandets associationer: At det er en clean og chic hjemmeside som udståler highend og god kvalitet. At de står for at være sin egen person. House of Brands eller Branded House?Branded House --> Vores brand læner sig meget op ad La Rouge og trækker på deres værdier og er bygget på samme DNA. Definér subbrandets rolle i organisationen. Et sted til en lidt yngre målgruppe, som er en smule mere vovet, og en anden prisklasse og andet sæt værdier bag. Forbindelsen skal være ret tæt, det er synligt at det er et subbrand. Men der er tydelig forskel på både design, koncept og udtryk. Fx. taler til en anden målgruppe, mere konkret har de også andre mærker på siden. Sæt design på subbrandet og til broen til hovedbrandet “by larouge” farver (den mørkerøde) Dele af Tone of voice Logoets placering (i midten) Stadig noget af larouge eget tøj (secondhand). Hvordan bryder vi med larouge? Andre mærker Lidt mere legende, rebelske og udtryksfulde Visuelt: flere farver Mere vægt på den enkelte person (unikke items)",
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
