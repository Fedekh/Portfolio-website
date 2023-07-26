<script>

export default {
    name: "Projects",
    data() {
        return {
            projects: [
                {
                    name: "Campo Minato",
                    description: "Campo minato con vanilla JS, no responsive layout",
                    image: ["../img/campo minato.png"],
                    link: "https://hilarious-madeleine-1063e6.netlify.app/",
                },
                {
                    name: "SpotifyWeb-Responsive",
                    description: "Refactoring layout Spotify Web responsive",
                    image: ["../img/SpotifyWeb.png"],
                    link: "https://glistening-chimera-b079a0.netlify.app/",
                },
                {
                    name: "Boolflix",
                    description: "Clone della webApp Netflix",
                    image: ["../img/Boolflix.png"],
                    link: "https://fantastic-bonbon-03e1a8.netlify.app/",
                },
                {
                    name: "API-front-end Card Yu-gi-oh",
                    description: "Chiamate API lato front-end con Axios",
                    image: ["../img/Api Front-end.png"],
                    link: "https://bejewelled-cat-206905.netlify.app/",
                },
                {
                    name: "BoolZap",
                    description: "Clone della webApp WhastApp Web",
                    image: ["../img/Boolzap.png"],
                    link: "https://golden-daifuku-49ca80.netlify.app/",
                },
                {
                    name: "DeliveBOO client-side",
                    description: "Clone del famoso deliveroo, client-side",
                    image:
                        [
                            "../img/Deliveboo 2.png",
                            "../img/Deliveboo 1.png",
                            "../img/Deliveboo 3.png",
                            "../img/Deliveboo 4.png",
                            "../img/Deliveboo 5.png",
                            "../img/Deliveboo 6.png",
                        ],
                    link: "https://player.vimeo.com/video/848789609?h=b0db70858d"
                }
            ],
            showDetails: false,
            selectedProject: null,
            currentImageIndex: 0
        };
    },
    methods: {
        getImagePath(imagePath) {
            return new URL(imagePath, import.meta.url).toString();
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
        <div v-for="project in projects" :key="project.name" class="project-card">
            <button class="btn btn-success my-2" @click="showProjectDetails(project)"><em>i</em></button>
            <img :src="getImagePath(project.image[0])" alt="Project Image" class="project-image" />
            <h3 class="name-project">{{ project.name }}</h3>
            <p class="description">{{ project.description }}</p>
            <a class="text-decoration-none link" :href="project.link" target="_blank">Try this</a>
        </div>
    </div>


    <div v-if="showDetails" class="overlay" @click="closeProjectDetails">
        <div class="project-details" @click.stop>
            <button class="btn btn-success mb-3" @click="closeProjectDetails">Chiudi</button>

            <!-- Carosello -->
            <div class="carousel">
                <img :src="getImagePath(selectedProject.image[currentImageIndex])" alt="Project Image"
                    class="project-image" />

                <div v-if="selectedProject.image.length > 1" class="carousel-buttons d-flex justify-content-center gap-1 mt-2">
                    <button class="carousel-btn" @click="prevImage">&#8249;</button>
                    <button class="carousel-btn" @click="nextImage">&#8250;</button>
                </div>
            </div>

            <h2 class="name-project">{{ selectedProject.name }}</h2>
            <p class="description">{{ selectedProject.description }}</p>
            <a class="text-decoration-none link" :href="selectedProject.link" target="_blank">Try this</a>
        </div>
    </div>
</template>


<style lang="scss" scoped>
@use '../styles/partials/variables' as *;

.projects {
    display: flex;
    flex-wrap: wrap;
}

.project-card {
    width: 30%;
    margin: 1rem;
    padding: 1rem;
    border: 1px solid #7bd908;
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
            width: 45%;
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
    color: #887ed1;
}

.link {
    font-size: 1rem;
    color: #007bff;
    text-decoration: none;

    &:hover {
        text-decoration: underline;
    }
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
}</style>