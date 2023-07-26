<script>
// import AppHeader from '../components/AppHeader.vue';

export default {
    name: "About",
    // components: {
    // AppHeader
    // },
}
</script>

<template>
    <div class="about">
        <div class="container ">
            <figure class="mx-auto">
                <img class="rounded rounded-pill" src="../img/me1.jpg" alt="">
            </figure>

            <div class="lang text-center">

                <img class="my-3" src="../img/en.svg" alt="">
                <p>
                    Hi, I'm Federico, a JUNIOR FULLSTACK WEB DEVELOPER.
                    With a strong knowledge of various web technologies and a detail-oriented approach, I dedicate myself to
                    creating effective solutions for complex problems, with a strong emphasis on professionalism and
                    attention to detail.
                </p>
                <p>
                    My journey into the world of web development began with a strong curiosity to understand what lies
                    behind a website, its functioning, and the technologies implemented. Through my training, I have
                    developed a solid understanding of design principles and usability, which I integrate into my web
                    creations to ensure a smooth and intuitive user experience.
                </p>
                <p>
                    My technical skills encompass a variety of programming languages, including HTML, CSS, and Bootstrap for
                    the front-end. Moreover, I am proficient in JavaScript and VueJS for front-end development, but I am
                    also capable of working with back-end technologies such as PHP, MySQL, and Laravel. I believe I have a
                    strong inclination towards backend development, yet I am passionate about the entire full-stack logic,
                    both front-end and back-end.
                </p>
                <p>
                    I am always looking for new challenges to expand my skills and enhance my problem-solving abilities. I
                    am constantly curious about learning new technologies and keeping up with the latest developments in the
                    field of web development, as well as blockchain and software development. I am a highly organized
                    individual capable of working independently as well as in a team. I can effectively communicate with
                    clients and colleagues to ensure collaboration and the achievement of common goals.
                </p>
                <p>
                    In my portfolio, you will find a selection of projects created during my training period, showcasing my
                    technical skills, problem-solving ability, and attention to detail. Each project is the result of an
                    iterative process of design, development, and testing, aimed at delivering high-quality solutions and
                    meeting the needs of users.
                </p>
                <p>
                    I am excited to grow as a web developer and contribute to the success of challenging projects. If you
                    are looking for a passionate, motivated, and ready-to-take-on-challenges full-stack web developer, do
                    not hesitate to contact me. It would be a pleasure to collaborate with you to bring your ideas to life
                    and create extraordinary digital experiences.
                </p>



                <router-link :to="{ name: 'contact' }" class="btn btn-success m-4" aria-current="page">Contact
                    me</router-link>

            </div>
            <div class="lang text-center">

                <img class="my-3" src="../img/it.svg" alt="">
                <p>
                    Ciao, sono Federico, un JUNIOR FULLSTACK WEB DEVELOPER.
                    Con una solida conoscenza di diverse tecnologie web e un approccio orientato ai dettagli, mi dedico a
                    creare soluzioni efficaci per problemi complessi, con una forte propensione alla professionalità e
                    attenzione ai dettagli.
                </p>
                <p>
                    La mia avventura nel mondo dello sviluppo web è iniziata con una forte curiosità nel capire cosa c'è
                    dietro un sito, il suo funzionamento e le tecnologie messe in atto.
                    Attraverso il mio percorso di formazione ho sviluppato una solida comprensione dei
                    principi di progettazione e dell'usabilità, che integro nelle mie realizzazioni web per garantire
                    un'esperienza utente fluida e intuitiva.
                </p>
                <p>
                    Le mie competenze tecniche comprendono una varietà di linguaggi di programmazione, tra cui HTML, CSS e
                    Bootstrap,
                    JavaScript e VueJS per quanto riguarda il front-end, ma sono anche in grado di lavorare con tecnologie
                    back-end
                    come PHP, MySQLe Laravel, per cui, tra l'altro penso di avere una forte propensione; ma ciò nonstante mi
                    appassiona tutta la logica
                    full-stack, sia front-end che back-end.
                </p>
                <p>
                    Sono sempre alla ricerca di nuove sfide per ampliare le mie competenze e migliorare le mie capacità di
                    problem solving. Sono sempre curioso di imparare nuove tecnologie e di tenere il passo con gli sviluppi
                    più
                    recenti nel campo dello sviluppo web, e non solo (anche sviluppo block-chain e software).
                    Sono un individuo altamente organizzato e in grado di lavorare sia in autonomia che in team.
                    Sono in grado di comunicare efficacemente con i clienti e i colleghi per garantire la collaborazione e
                    il raggiungimento degli obiettivi comuni.
                </p>
                <p>
                    Nel mio portfolio troverai una selezione dei miei progetti creati durante il periodo di formazione, in
                    cui mostro le mie competenze tecniche, la
                    mia capacità di problem solving e la mia attenzione ai dettagli.
                    Ogni progetto è il risultato di un processo iterativo di progettazione, sviluppo e test, mirato a
                    offrire soluzioni di alta qualità e rispettare le esigenze
                    degli utenti.
                </p>
                <p>
                    Sono entusiasta di crescere come sviluppatore web e contribuire al successo dei progetti sfidanti. Se
                    cerchi un full stack web developer che sia appassionato, motivato e pronto a mettersi in gioco, non
                    esitare
                    a contattarmi. Sarebbe un piacere collaborare con te per portare avanti le tue idee e creare esperienze
                    digitali straordinarie.

                </p>
                <router-link :to="{ name: 'contact' }" class="btn btn-success m-4" aria-current="page">Contact
                    me</router-link>

            </div>

            <a href="#" data-tooltip="Up" class="up"><i class="fa-solid fa-arrow-up" style="color: #07e9b5;"></i></a>

        </div>
    </div>
</template>


<style lang="scss" scoped>
@use '../styles/partials/variables' as *;

.about {
    color: $about-color;
    width: 100%;
    text-align: center;
    padding: 10px;
    position: relative;

    figure {

        img {
            max-width: 150px;
        }
    }

    .lang {

        img {
            max-width: 50px;
        }
    }

    .up {
        position: absolute;
        right: 20px;
        bottom: 10px;
        margin-bottom: 20px;
        font-size: 1.4rem;

        &::before {
            content: attr(data-tooltip);
            position: absolute;
            bottom: 100%;
            left: 50%;
            transform: translateX(-50%);
            padding: 4px 8px;
            background-color: #07e9b5;
            color: white;
            border-radius: 4px;
            font-size: 0.8rem;
            opacity: 0;
            visibility: hidden;
            transition: opacity 0.3s ease, visibility 0.3s ease;
        }

        &:hover::before {
            opacity: 1;
            visibility: visible;
        }
    }
}
</style>