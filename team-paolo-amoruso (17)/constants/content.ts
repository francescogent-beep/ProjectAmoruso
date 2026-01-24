export const SITE_CONTENT = {
  brand: {
    name: "TEAM AMORUSO",
    fullName: "TEAM PAOLO AMORUSO",
    initials: "TA",
    coach: "Paolo Amoruso",
    title: "Atleta IFBB Pro & Coach",
  },
  nav: [
    { label: "Home", href: "/" },
    { label: "Coaching", href: "/coaching" },
    { label: "Come funziona", href: "/processo" },
    { label: "Programmi", href: "/programmi" },
    { label: "Risultati", href: "/risultati" },
    { label: "Blog", href: "/blog" },
    { label: "FAQ", href: "/faq" },
    { label: "Chi sono", href: "/chi-sono" },
  ],
  hero: {
    badge: "Atleta IFBB Pro & Coach",
    title: "COSTRUISCI UN FISICO ESTETICO SERIO",
    description: "Il coaching online per chi vuole risultati veri, senza scuse. Ti aiuto a cambiare il tuo corpo con un metodo che funziona davvero nella vita di tutti i giorni.",
    cta: "Candidati Ora",
    bgImage: "https://i.imgur.com/7PeSnLE.jpeg"
  },
  authority: [
    { title: "IFBB PRO", subtitle: "Atleta Professionista" },
    { title: "CAMPIONE EUROPEO", subtitle: "Vincitore Pro Card" },
    { title: "CAMPIONE ITALIANO", subtitle: "Assoluto 2024" },
    { title: "CERTIFICATO CONI", subtitle: "Personal Trainer" },
  ],
  qualification: {
    title: "Fa per te?",
    forYou: {
      title: "Ti aspetto nel team se:",
      items: [
        "Vuoi mettere muscoli e vederti finalmente bene",
        "Vuoi qualcuno che ti guidi seriamente ogni giorno",
        "Hai bisogno di un piano che si incastri con la tua vita",
        "Sei pronto a metterci l'impegno necessario"
      ]
    },
    notForYou: {
      title: "Non scrivermi se:",
      items: [
        "Cerchi la bacchetta magica o pillole miracolose",
        "Non hai intenzione di essere costante",
        "Vuoi solo un programmino fatto col copia-incolla",
        "Non accetti consigli per migliorare"
      ]
    }
  },
  coaching: {
    title: "Coaching Online",
    accent: "Cambia il tuo corpo",
    description: "Lavoriamo insieme sul tuo fisico. Un percorso fatto su misura per te, dove metto a tua disposizione tutto quello che ho imparato arrivando tra i Pro.",
    features: [
      { label: "Allenamento", desc: "Schede fatte apposta per te che cambiano con te" },
      { label: "Dieta", desc: "Mangia bene senza impazzire o fare la fame" },
      { label: "Supporto", desc: "Chat diretta con me e controllo ogni settimana" },
      { label: "Qualità", desc: "Seguo poche persone per dare il massimo a tutti" }
    ],
    cta: "Candidati Ora",
    slotsBadge: "Solo 15 posti al mese",
    image: "https://i.imgur.com/i5OPvRV.jpeg"
  },
  method: {
    badge: "Il Metodo",
    title: "Come lavoriamo",
    steps: [
      { num: "01", title: "Raccontami di te", desc: "Compili il modulo per farmi capire chi sei e cosa vuoi ottenere." },
      { num: "02", title: "Capiamo dove sei", desc: "Analizziamo i tuoi obiettivi e come mangi e ti alleni oggi." },
      { num: "03", title: "Iniziamo!", desc: "Ricevi il tuo piano personalizzato e partiamo subito con il lavoro." },
      { num: "04", title: "Miglioriamo", desc: "Ci sentiamo ogni settimana per sistemare il tiro e andare avanti." },
    ]
  },
  entryProgram: {
    badge: "Per iniziare",
    title: "Programma Fisico Estetico",
    accent: "5 Settimane",
    description: "Perfetto se vuoi iniziare a muoverti da solo con un metodo serio. Ti do la base per allenarti bene e iniziare a vedere i primi cambiamenti.",
    features: [
      "Schede settimanali",
      "Guida su cosa mangiare",
      "Inizi subito dopo l'acquisto",
      "Video per non sbagliare gli esercizi",
      "Va bene sia per uomo che per donna"
    ],
    cta: "Prendi il Programma – €49",
    priceSubtext: "Paghi una volta sola",
    image: "https://i.imgur.com/yiMYBxg.jpeg",
    link: "https://buy.stripe.com/eVq28s5u9guf14nbCn9ws00"
  },
  socialProof: {
    title: "Risultati",
    subtitle: "I ragazzi che seguo",
    sideText: "Vittorie",
    quote: "Il fisico non mente. Quello che vedi allo specchio è il risultato di quanto ti sei impegnato.",
    items: [
      { url: "https://i.imgur.com/t3PYTT4.jpeg", label: "Trasformazione 01" },
      { url: "https://i.imgur.com/JWw39p3.jpeg", label: "Trasformazione 02" },
      { url: "https://i.imgur.com/tRLWTDL.jpeg", label: "Trasformazione 03" }
    ]
  },
  about: {
    badge: "La mia idea",
    title: "Risultati veri, zero scuse.",
    image: "https://i.imgur.com/IoHpM0K.jpeg",
    content: [
      "Sono Paolo Amoruso e la mia missione è semplice: aiutare chi è stanco di vedersi uguale a migliorare davvero. Uso la mia esperienza da Pro per darti risultati concreti, senza giri di parole.",
      "Il mio metodo non segue le mode. Si basa su quello che funziona per il corpo umano. Non ti vendo sogni, ti do un sistema per costruire un fisico di cui andare fiero."
    ],
    quote: "L'allenamento deve servire a farti vivere meglio, non deve essere un incubo. Se non è sostenibile, non serve a nulla."
  },
  faq: [
    {
      q: "Non sono un atleta, posso farcela?",
      a: "Certo! Anche se io gareggio tra i professionisti, i programmi che faccio sono adatti a te. Che tu lavori tutto il giorno o abbia poco tempo, troviamo il modo di farti ottenere il massimo.",
      category: "Requisiti"
    },
    {
      q: "Meglio il coaching online o il trainer in palestra?",
      a: "In palestra il trainer ti guarda per un'ora. Con me hai qualcuno che controlla tutto: come ti muovi, cosa mangi e come dormi, tutto il giorno. È un supporto completo, non solo un'ora di pesi.",
      category: "Metodo"
    },
    {
      q: "Come controlli se faccio bene gli esercizi?",
      a: "Semplice: mi mandi i video mentre ti alleni. Li guardo con attenzione e ti dico esattamente cosa correggere, mandandoti consigli audio o video per non farti sbagliare.",
      category: "Metodo"
    },
    {
      q: "Dovrò mangiare solo riso e pollo scondito?",
      a: "Assolutamente no. Ti insegno a mangiare in modo flessibile. Potrai goderti le cene fuori e la vita sociale senza rovinare i risultati. La dieta deve essere un piacere, non una prigione.",
      category: "Nutrizione"
    },
    {
      q: "Dopo quanto vedo i primi cambiamenti?",
      a: "Già dopo le prime due settimane inizierai a sentirti meglio. Per vedere un vero cambiamento allo specchio ci vogliono solitamente dai 3 ai 4 mesi di impegno costante.",
      category: "Risultati"
    },
    {
      q: "Mi consigli anche quali integratori prendere?",
      a: "Sì, ti dico io cosa serve davvero e cosa sono solo soldi buttati. L'integrazione serve a darti una mano, ma la base rimangono sempre i pesi e il cibo.",
      category: "Integrazione"
    },
    {
      q: "E se vado in vacanza o viaggio per lavoro?",
      a: "Nessun problema. Adattiamo il programma. Ti spiego come allenarti in hotel o come gestire i pasti se sei sempre fuori casa. Troviamo sempre una soluzione.",
      category: "Logistica"
    },
    {
      q: "Parlo davvero con Paolo o con qualcun altro?",
      a: "Parli solo ed esclusivamente con me. Non delego il mio lavoro a nessuno. Per questo seguo poche persone: voglio assicurarmi che ognuno di voi riceva il meglio.",
      category: "Esclusività"
    },
    {
      q: "Cosa mi serve per iniziare?",
      a: "L'ideale è una palestra normale. Se ti alleni a casa, dimmi cosa hai a disposizione e costruisco il piano su quello che hai.",
      category: "Requisiti"
    },
    {
      q: "Il prezzo è alto, perché dovrei investire?",
      a: "Perché stai comprando anni di esperienza e un risultato garantito se segui le mie indicazioni. Risparmi tempo, eviti di farti male e ottieni finalmente il corpo che desideri.",
      category: "Investimento"
    }
  ],
  blogPosts: [
    {
      slug: "biomeccanica-ipertrofia-reale",
      title: "Come muoversi bene per far crescere i muscoli",
      excerpt: "Molti si allenano a caso, ma per far crescere il muscolo servono i movimenti giusti. Scopri come non sprecare fatica in palestra.",
      date: "25 Maggio 2024",
      category: "Allenamento",
      image: "https://i.imgur.com/i5OPvRV.jpeg",
      content: `
        <p>In palestra si vede di tutto. Spesso ci si perde dietro a esercizi strani visti su Instagram.</p>
        <p>La verità è più semplice: <strong>devi imparare a muovere il peso nel modo giusto per colpire il muscolo.</strong></p>
        <p>Se non capisci come funziona il tuo corpo, rischi solo di stancarti senza vedere risultati.</p>
        <p>Allenarsi duro è importante, ma allenarsi bene è quello che fa la vera differenza tra chi cambia e chi resta uguale.</p>

        <h2>Perché senti il muscolo bruciare</h2>
        <p>Non basta sollevare un peso dal punto A al punto B.</p>
        <p><strong>Il muscolo deve essere sotto sforzo per tutto il tempo.</strong></p>
        <p>Questo significa controllare il movimento, specialmente quando torni alla posizione di partenza.</p>
        
        <blockquote>\"Muoversi bene non serve a fare meno fatica, ma a far lavorare di più il muscolo che vuoi far crescere.\"</blockquote>

        <h3>Smetti di allenare l'ego</h3>
        <p>Molti caricano troppo e poi usano slanci o movimenti sporchi per sollevare il peso.</p>
        <p>Facendo così, lo sforzo passa dai muscoli alle articolazioni. Risultato? <strong>Ti fai male e non cresci.</strong></p>
        
        <h2>Cosa guardiamo insieme</h2>
        <p>Nel mio coaching non guardo quanto peso sollevi, ma come lo fai. Analizziamo:</p>
        <ul>
          <li><strong>Come ti posizioni:</strong> Per non farti male a schiena e ginocchia.</li>
          <li><strong>La velocità:</strong> Niente movimenti a scatti, controllo totale.</li>
          <li><strong>Quanto allunghi il muscolo:</strong> Per farlo crescere al massimo.</li>
        </ul>
        
        <p>Smetti di allenarti solo per sudare. Inizia a dare al tuo corpo lo stimolo che gli serve davvero.</p>
        <p><em>Vuoi che controlli come ti alleni? <a href="/coaching">Candidati al Coaching</a> e iniziamo.</em></p>
      `
    },
    {
      slug: "nutrizione-flessibile-vs-dieta-verticale",
      title: "Dieta: devi per forza mangiare solo riso e pollo?",
      excerpt: "Possibile mangiare quello che ti piace e avere comunque un bel fisico? Vediamo come gestire il cibo senza impazzire.",
      date: "18 Maggio 2024",
      category: "Nutrizione",
      image: "https://i.imgur.com/7PeSnLE.jpeg",
      content: `
        <p>Il cibo è quello che ti dà la forma. Senza mangiare bene, la palestra serve a poco.</p>
        <p>Spesso però si pensa che per stare in forma si debba soffrire.</p>
        <p>La domanda tipica è: <strong>\"Paolo, devo mangiare solo riso e pollo ogni giorno?\".</strong></p>
        <p>La mia risposta è no. La costanza batte la restrizione estrema ogni volta.</p>

        <h2>Il segreto è la flessibilità</h2>
        <p>Il tuo corpo non sa se stai mangiando un alimento \"pulito\" o no. Lui vede proteine, grassi e carboidrati.</p>
        <p>Mangiare sempre le stesse 3 cose ti fa mollare dopo due settimane.</p>
        
        <blockquote>\"Una dieta che ti fa sentire in prigione è una dieta che non funzionerà mai.\"</blockquote>

        <h2>Come mangiano i ragazzi del mio team</h2>
        <p>Usiamo un approccio flessibile.</p>
        <p>Non vuol dire mangiare pizza ogni giorno, ma saper gestire gli imprevisti.</p>
        <p>L'80% di quello che mangi deve essere cibo sano, ma il restante 20% può essere quello che preferisci.</p>

        <hr />

        <h2>I carboidrati non sono il nemico</h2>
        <p>I carboidrati servono per allenarsi forte. Bisogna solo sapere quando mangiarli.</p>
        <p><strong>Mangiandoli vicino all'allenamento</strong> aiuti i muscoli a recuperare meglio.</p>
        
        <p>Ricorda: il tuo fisico è il risultato di quello che fai ogni giorno. Se vuoi risultati veri, devi avere un piano che puoi seguire per sempre.</p>
        <p><em>Vuoi una dieta che non ti faccia impazzire? <a href="/coaching">Scopri come lavoro.</a></em></p>
      `
    },
    {
      slug: "gestione-stress-guadagni-muscolari",
      title: "Perché se sei troppo stressato non cresci",
      excerpt: "Lo stress è il nemico numero uno dei tuoi muscoli. Scopri come il riposo ti aiuta a migliorare più della palestra.",
      date: "10 Maggio 2024",
      category: "Recupero",
      image: "https://i.imgur.com/IoHpM0K.jpeg",
      content: `
        <p>Siamo tutti sempre di corsa. Il lavoro, gli impegni e i problemi ci stressano continuamente.</p>
        <p>Molti pensano che basti spaccarsi di pesi, ma i muscoli crescono quando ti riposi.</p>
        <p><strong>In palestra distruggi il muscolo, a casa lo costruisci.</strong></p>

        <h2>Lo stress ti blocca</h2>
        <p>Quando sei troppo stressato, il tuo corpo produce cortisolo.</p>
        <p>Se ne produci troppo e per troppo tempo, i tuoi muscoli ne risentono.</p>
        
        <h3>Cosa succede se sei stressato:</h3>
        <ul>
          <li><strong>Perdi muscolo:</strong> Il corpo inizia a usare i muscoli come energia.</li>
          <li><strong>Meno forza:</strong> Ti senti sempre stanco e svogliato.</li>
          <li><strong>Ingrassi più facilmente:</strong> Gestisci peggio quello che mangi.</li>
        </ul>
        
        <blockquote>\"Puoi allenarti come un campione, ma se non dormi e sei sempre teso, il tuo corpo non cambierà mai.\"</blockquote>

        <h2>Il sonno è la tua medicina</h2>
        <p>Dormire poco non è una cosa di cui vantarsi. È un errore che rovina il tuo lavoro.</p>
        <p>Devi dormire almeno 7-8 ore di qualità. È lì che il corpo si ripara.</p>
        
        <p>Tratta il riposo con la stessa importanza che dai ai pesi. Solo così vedrai il tuo fisico cambiare davvero.</p>
        <p><em>Ti senti sempre stanco? <a href="/coaching">Vediamo insieme come sistemare il tuo stile di vita.</a></em></p>
      `
    },
    {
      slug: "cardio-e-bodybuilding-amico-o-nemico",
      title: "Il cardio fa perdere i muscoli?",
      excerpt: "Fare la corsa o la camminata rovina il lavoro fatto coi pesi? Vediamo come inserire il cardio nel modo giusto.",
      date: "02 Maggio 2024",
      category: "Allenamento",
      image: "https://i.imgur.com/tRLWTDL.jpeg",
      content: `
        <p>Si dice spesso che chi vuole i muscoli non debba fare cardio.</p>
        <p>\"La corsa ti brucia i muscoli\" è una frase che si sente sempre.</p>
        <p><strong>È vero?</strong> No, se sai come farlo.</p>

        <h2>A cosa serve davvero il cardio</h2>
        <p>Il cardio non serve solo a dimagrire, serve a far funzionare meglio il tuo corpo.</p>
        
        <blockquote>\"Il cardio non ti fa perdere muscoli. È mangiare troppo poco o non riposare che lo fa.\"</blockquote>

        <h2>Perché dovresti farlo anche tu</h2>
        <p>Anche chi vuole diventare enorme trae benefici dal cardio:</p>
        <ul>
          <li><strong>Cuore più forte:</strong> Per reggere allenamenti più intensi.</li>
          <li><strong>Recupero più veloce:</strong> I muscoli ricevono più nutrienti.</li>
          <li><strong>Meno grasso:</strong> Ti aiuta a restare più pulito mentre cresci.</li>
        </ul>
        
        <hr />

        <h2>Cosa scegliere?</h2>
        <p>Nel mio team preferiamo la camminata in pendenza. È facile da recuperare e non stanca troppo le gambe.</p>
        <p>La corsa intensa va bene, ma va gestita con molta cura per non togliere energie ai pesi.</p>
        
        <p>Nel coaching, decido io quanto cardio devi fare in base a come risponde il tuo corpo ogni settimana.</p>
        <p><em>Vuoi un piano che metta insieme pesi e cardio? <a href="/coaching">Vieni nel team.</a></em></p>
      `
    },
    {
      slug: "la-verita-sugli-integratori",
      title: "Integratori: cosa serve davvero e cosa no",
      excerpt: "Ti vendono di tutto, ma solo poche cose funzionano. Scopri come non buttare via i tuoi soldi.",
      date: "25 Aprile 2024",
      category: "Integrazione",
      image: "https://i.imgur.com/yiMYBxg.jpeg",
      content: `
        <p>L'industria degli integratori è gigantesca e ti fa credere che basti una polvere per cambiare.</p>
        <p>La realtà è diversa: <strong>gli integratori sono solo un piccolo aiuto.</strong></p>
        <p>Se non mangi bene e non ti alleni duro, non c'è polvere che tenga.</p>

        <h2>Prima le basi</h2>
        <p>Immagina una piramide: alla base c'è il cibo. Sopra l'allenamento. Sopra il riposo.</p>
        <p><strong>Solo alla fine ci sono gli integratori.</strong> Non ha senso spendere 100 euro in pillole se poi salti gli allenamenti.</p>
        
        <blockquote>\"Nessun barattolo di proteine sostituirà mai l'impegno di pesare il cibo e sollevare pesi pesanti.\"</blockquote>

        <h2>Cosa funziona davvero</h2>
        <p>Queste sono le poche cose che hanno senso:</p>
        <ul>
          <li><strong>Creatina:</strong> Ti aiuta ad avere più forza e muscoli più pieni.</li>
          <li><strong>Proteine in polvere:</strong> Comode per arrivare a quanto devi mangiare.</li>
          <li><strong>Caffeina:</strong> Per darti la carica prima dell'allenamento.</li>
        </ul>
        
        <hr />

        <h2>Cosa puoi evitare</h2>
        <p>Risparmia i tuoi soldi ed evita queste cose:</p>
        <ul>
          <li><strong>Bruciagrassi:</strong> Spesso sono solo caffè costoso.</li>
          <li><strong>BCAA:</strong> Se mangi abbastanza proteine, non servono a nulla.</li>
          <li><strong>Testo booster:</strong> Non cambiano nulla sui tuoi muscoli.</li>
        </ul>
        
        <p>Ti dirò io esattamente cosa prendere in base a quello che ti serve davvero.</p>
        <p><em>Vuoi un piano di integrazione serio? <a href="/coaching">Entra nel Team.</a></em></p>
      `
    },
    {
      slug: "mindset-pro-disciplina-atleta-ifbb",
      title: "La testa conta più dei muscoli",
      excerpt: "La motivazione finisce, la disciplina resta. Scopri come ragionare come un atleta per non mollare mai.",
      date: "15 Aprile 2024",
      category: "Mindset",
      image: "https://i.imgur.com/IoHpM0K.jpeg",
      content: `
        <p>Avere un bel fisico è difficile perché richiede tempo e costanza.</p>
        <p>La differenza tra chi ce la fa e chi molla non è la genetica.</p>
        <p>È la capacità di <strong>fare quello che devi fare anche quando non ne hai voglia.</strong></p>

        <h2>Non aspettare di avere voglia</h2>
        <p>La motivazione è un'emozione che va e viene. Non puoi affidarti a lei.</p>
        <p>La disciplina invece è un'abitudine. Ti alleni perché fa parte di te, non perché sei ispirato.</p>
        
        <blockquote>\"I risultati si vedono nei giorni in cui non vorresti nemmeno alzarti dal divano, ma ci vai lo stesso.\"</blockquote>

        <h2>Innamorati della fatica</h2>
        <p>Se vuoi un fisico fuori dal comune, devi fare cose fuori dal comune.</p>
        <p>Devi imparare a goderti il processo, la fatica in palestra e la precisione a tavola.</p>
        
        <hr />

        <h2>Pensa a lungo termine</h2>
        <p>Chiediti sempre: \"Mangiare questo mi aiuta ad avere il fisico che voglio?\".</p>
        <p>Se la risposta è no, sai cosa fare. Un atleta non cerca scuse, cerca soluzioni.</p>
        
        <p>Se sei pronto a cambiare testa, sei pronto a cambiare corpo.</p>
        <p><em>Vuoi fare il salto di qualità? <a href="/coaching">Entra nel Team Paolo Amoruso.</a></em></p>
      `
    }
  ],
  finalCta: {
    title: "Se vuoi un fisico fuori dal comune, devi fare cose fuori dal comune.",
    accent: "fuori dal comune,",
    subtitle: "Candidati oggi per iniziare il tuo percorso",
    cta: "Inizia il Coaching"
  },
  footer: {
    description: "Il coaching online di Paolo Amoruso per chi fa sul serio. Niente trucchi. Solo risultati.",
    email: "info@teamamoruso.com",
    instagram: "@paolo_amoruso_ifbbpro",
    instagramUrl: "https://www.instagram.com/paolo_amoruso_ifbbpro/",
    tiktokUrl: "https://www.tiktok.com/@paolo_amoruso_ifbb",
    facebookUrl: "https://www.facebook.com/people/Team-Amoruso/61586480129529/",
    copyright: "© 2024 TEAM PAOLO AMORUSO. Tutti i diritti riservati."
  }
};