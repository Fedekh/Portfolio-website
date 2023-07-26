<script>

export default {
    name: "Projects",
    data() {
        return {
            projects: [
                {
                    name: "Project 1",
                    description: "Description of Project 1",
                    image: "path/to/project1/image.jpg",
                    githubLink: "https://github.com/yourusername/project1",
                },
                {
                    name: "Project 2",
                    description: "Description of Project 2",
                    image: "path/to/project2/image.jpg",
                    githubLink: "https://github.com/yourusername/project2",
                },
                // Add more projects here
            ],
        };
    },
}
</script>

<template>
    <div class="projects">
        <div v-for="project in projects" :key="project.name" class="project-card">
            <img :src="project.image" alt="Project Image" class="project-image" />
            <h3>{{ project.name }}</h3>
            <p>{{ project.description }}</p>
            <a :href="project.githubLink" target="_blank">GitHub Repo</a>
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
    border: 1px solid #ccc;
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

@media screen and (max-width: 576px) {
    .project-card {
        width: 100%;
    }
}
</style>