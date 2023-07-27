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
                    Hi, I'm Federico, a JUNIOR FULLSTACK WEB DEVELOPER with a strong knowledge of various web technologies
                    and a detail-oriented approach. I'm dedicated to creating effective solutions for complex problems, with
                    a strong focus on professionalism and attention to detail.
                </p>
                <p>
                    My journey into the world of web development began with a strong curiosity to understand what lies
                    behind a website, its functioning, and the technologies involved. Throughout my training, I have
                    developed a solid understanding of design principles and usability, which I integrate into my web
                    creations to ensure a smooth and intuitive user experience.
                </p>
                <p>
                    My adventure in the world of web development has been driven by the curiosity to comprehend how websites
                    and employed technologies work. I have acquired skills in both front-end, using HTML, CSS, Bootstrap,
                    JavaScript, and VueJS, and back-end with PHP, MySQL, and Laravel.
                </p>
                <p>
                    In my portfolio, you will find a selection of my projects created during the training period, showcasing
                    my technical skills, problem-solving abilities, and attention to detail.
                </p>
                <p>
                    I'm passionate about professional growth and enjoy keeping up with the latest industry trends. If you
                    have exciting projects and are looking to collaborate with a passionate and motivated full-stack web
                    developer, feel free to contact me. Thank you!
                </p>




                <router-link :to="{ name: 'contact' }" class="btn btn-success m-4" aria-current="page">Contact
                    me</router-link>

            </div>
            <div class="lang text-center">

                <img class="my-3" src="../img/it.svg" alt="">
                <p>
                    Ciao, sono Federico, un JUNIOR FULLSTACK WEB DEVELOPER con una solida conoscenza di diverse tecnologie
                    web e un approccio orientato ai dettagli. Mi dedico a creare soluzioni efficaci per problemi complessi,
                    con una forte propensione alla professionalità e all'attenzione ai dettagli
                </p>
                <p>
                    La mia avventura nel mondo dello sviluppo web è iniziata con una forte curiosità nel capire cosa c'è
                    dietro un sito, il suo funzionamento e le tecnologie messe in atto.
                    Attraverso il mio percorso di formazione ho sviluppato una solida comprensione dei
                    principi di progettazione e dell'usabilità, che integro nelle mie realizzazioni web per garantire
                    un'esperienza utente fluida e intuitiva.
                </p>
                <p>
                    La mia avventura nel mondo dello sviluppo web è nata dalla curiosità di comprendere il funzionamento dei
                    siti e delle tecnologie impiegate. Ho acquisito competenze sia nel front-end, utilizzando HTML, CSS,
                    Bootstrap, JavaScript e VueJS, che nel back-end con PHP, MySQL e Laravel.
                </p>

                <p>
                    Nel mio portfolio troverai una selezione dei miei progetti creati durante il periodo di formazione, in
                    cui mostro le mie competenze tecniche, la
                    mia capacità di problem solving e la mia attenzione ai dettagli.

                </p>
                <p>
                    Sono appassionato di crescita professionale e mi piace tenere il passo con le ultime novità del settore.
                    Se hai progetti stimolanti e desideri collaborare con un full stack web developer appassionato e
                    motivato, non esitare a contattarmi. Grazie!

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
}</style>