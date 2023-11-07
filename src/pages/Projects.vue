<script>

export default {
    name: "Projects",
    data() {
        return {
            projects: [
                {
                    name: "Campo Minato",
                    description: "Minefield vanilla JS, no responsive",
                    image: ["https://i.imgur.com/SIM0rD0.png"],
                    link: "https://hilarious-madeleine-1063e6.netlify.app/",
                    github : "https://github.com/Fedekh/js-campominato-dom"
                },
                {
                    name: "SpotifyWeb-Responsive",
                    description: "Refactoring layout Spotify Web responsive",
                    image: ["https://i.imgur.com/3zsoNt6.png"],
                    link: "https://glistening-chimera-b079a0.netlify.app/",
                    github : "https://github.com/Fedekh/html-css-spotifyweb"

                },
                {
                    name: "Boolflix",
                    description: "Netflix clone",
                    image: ["https://i.imgur.com/hcmwrXo.png"],
                    link: "https://fantastic-bonbon-03e1a8.netlify.app/",
                    github : "https://github.com/Fedekh/vite-boolflix"

                },
                {
                    name: "API-front-end Card Yu-gi-oh",
                    description: "API front-end with Axios",
                    image: ["https://i.imgur.com/tALhj3R.png"],
                    link: "https://bejewelled-cat-206905.netlify.app/",
                    github : "https://github.com/Fedekh/vite-breaking-bad"

                },
                {
                    name: "BoolZap",
                    description: "WhastApp Web clone",
                    image: ["https://i.imgur.com/PcUlMVB.png"],
                    link: "https://golden-daifuku-49ca80.netlify.app/",
                    github : "https://github.com/Fedekh/vue-boolzapp"

                },
                {
                    name: "DeliveBOO client-side",
                    description: "Deliveroo clone",
                    github : "https://github.com/Fedekh/deliveboo-serverside-laravel",
                    image:
                        [
                            "https://i.imgur.com/UGiLckt.png",
                            "https://i.imgur.com/RUocBfI.png",
                            "https://i.imgur.com/4oaxqSu.png",
                            "https://i.imgur.com/sCzGTTl.png",
                            "https://i.imgur.com/MZ3Jyx2.png",
                            "https://i.imgur.com/QEO7VgI.png",
                        ],
                    link: "https://player.vimeo.com/video/848789609?h=b0db70858d"
                },
                {
                    name: "FotoAlbum WebApp Backend + Frontend\n",
                    description: "Admin's portal to manage their photos",
                    github : "https://github.com/Fedekh/net-il-mio-fotoalbum",
                    image:[
                            'https://i.postimg.cc/9fFZ6BC4/FotoApp.png',
                            'https://i.postimg.cc/9fFZ6BC4/FotoApp.png'
                            ],
                    link:'https://dai.ly/k5lFxfjM4Sjm8izChQR'
                }
            ],
            showDetails: false,
            selectedProject: null,
            currentImageIndex: 0
        };
    },
    methods: {
        getImagePath(imagePath) {
            return new URL(imagePath, import.meta.url).href;
        },
        showProjectDetails(project) {
            this.showDetails = true;
            this.selectedProject = project;
        },
        closeProjectDetails() {
            this.showDetails = false;
            this.selectedProject = null;
        },
        prevImage() {
            if (this.currentImageIndex > 0) {
                this.currentImageIndex--;
            } else {
                this.currentImageIndex = this.selectedProject.image.length - 1;
            }
        },
        nextImage() {
            if (this.currentImageIndex < this.selectedProject.image.length - 1) {
                this.currentImageIndex++;
            } else {
                this.currentImageIndex = 0;
            }
        },
    }
}
</script>

<template>
    <div class="projects container">
        <div v-for="project in projects" :key="project.name" class="project-card d-flex flex-column justify-content-between text-center p-2">
            <div class="">
                <div class="mx-2 text-end">
                    <button class="btn  btn-success my-2" @click="showProjectDetails(project)"><em>i</em></button>
                </div>
                <img :src="project.image[0]" alt="Project Image" class="project-image" />
                <h3 class="name-project">{{ project.name }}</h3>
                <p class="description">{{ project.description }}</p>
            </div>
                <div>
                    <div v-if="project.image.length > 1" class="d-flex justify-content-between align-items-end">
                        <a class="text-decoration-none link" :href="project.github" target="_blank">Repo github</a>
                        <a class="text-decoration-none link" :href="project.link" target="_blank">Demo (Video)</a>
                    </div>
                    <div v-else class="d-flex justify-content-between align-items-end">
                        <a class="text-decoration-none link" :href="project.github" target="_blank">Repo github</a>
                        <a class="text-decoration-none link" :href="project.link" target="_blank">Demo</a>
                    </div>
                </div>
        </div>
    </div>


    <div v-if="showDetails" class="overlay" @click="closeProjectDetails">
        <div class="project-details" @click.stop>
            <button class="btn btn-success mb-3" @click="closeProjectDetails">Chiudi</button>

            <!-- Carosello -->
            <div class="carousel">
                <img :src="selectedProject.image[currentImageIndex]" alt="Project Image" class="project-image" />

                <div v-if="selectedProject.image.length > 1"
                    class="carousel-buttons d-flex justify-content-center gap-1 mt-2">
                    <button class="carousel-btn" @click="prevImage">&#8249;</button>
                    <button class="carousel-btn" @click="nextImage">&#8250;</button>
                </div>
            </div>

            <h2 class="name-project">{{ selectedProject.name }}</h2>
            <p class="description">{{ selectedProject.description }}</p>
            <div>
                    <div v-if="selectedProject.image.length > 1" class="d-flex justify-content-between align-items-end">
                        <a class="text-decoration-none link" :href="selectedProject.github" target="_blank">Repo github</a>
                        <a class="text-decoration-none link" :href="selectedProject.link" target="_blank">Demo (Video)</a>
                    </div>
                    <div v-else class="d-flex justify-content-between align-items-end">
                        <a class="text-decoration-none link" :href="selectedProject.github" target="_blank">Repo github</a>
                        <a class="text-decoration-none link" :href="selectedProject.link" target="_blank">Demo</a>
                    </div>
                </div>
        </div>
    </div>
</template>


<style lang="scss" scoped>
@use '../styles/partials/variables' as *;


.projects {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 20px;
    margin-top: 50px;
}

.project-card {
    width: calc(100% / 3 - 20px);
    border: 1px solid #9797ba;
    border-radius: 10px;
    transition: box-shadow 0.3s ease;

    /* Aggiungiamo una transizione per effetto più gradevole */
    &:hover {
        box-shadow: 0 0 8px rgba(0, 0, 0, 0.3);
        /* Effetto ombra al passaggio del mouse */
    }

    .project-image {
        max-width: 100%;
    }

    // Responsive Styles
    @media screen and (max-width: 768px) {

        .project-card {
            width: 33%;
        }
    }

}



.name-project {
    font-size: 1.4rem;
    font-weight: bold;
    margin-top: 1rem;
    color: #c14444;
}

.description {
    font-size: 1rem;
    color: #00FFC3;
}

.link {
    font-size: 1rem;
    color: #c7c0bd;
    text-decoration: none;
    padding: 5px 10px;
    background-color: #157347;
    border-radius: 5px;
}

.btn-info {
    position: absolute;
    top: 10px;
    right: 10px;
    background-color: #28a745;
    border: none;
    color: #fff;
    font-size: 1rem;
    padding: 0.5rem 1rem;
    border-radius: 5px;
    cursor: pointer;
    transition: background-color 0.3s ease;

    &:hover {
        background-color: #218838;
    }
}


.carousel-btn {
    background-color: #007bff;
    border: none;
    color: #fff;
    font-size: 1rem;
    padding: 0.5rem 1rem;
    border-radius: 5px;
    cursor: pointer;
    transition: background-color 0.3s ease;

    &:hover {
        background-color: #0056b3;
    }
}

.overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.7);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 9999;
}

.project-details {
    background-color: rgb(41, 38, 54);
    padding: 20px;
    max-width: 80%;
    text-align: center;
    border-radius: 5px;

    img {
        max-width: 70%;
    }
}

@media screen and (max-width: 576px) {
    .project-card {
        width: 100%;
    }
}
</style>