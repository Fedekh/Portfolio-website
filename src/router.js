import { createRouter, createWebHistory } from "vue-router";
import HomePage from "./pages/HomePage.vue";
// import Projects from "./pages/Projects.vue";
// import About from "./pages/About.vue";
// import ContactPage from "./pages/Contact.vue";
// import NotFound from "./pages/NotFound.vue";


// il lazy loading significa che il componente viene caricato solo quando serve e occorre togliere l'import sopra 
//component: () => import('./pages/ProjectsPage.vue')

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            name: 'home',
            component: HomePage,
        },
        {
            path: '/projects',
            name: 'projects',
            component: () => import('./pages/Projects.vue')
        },
        {
            path: "/about",
            name: "about",
            component: () => import('./pages/About.vue') 
        },
        {
            path: "/contact",
            name: "contact",
            component: () => import('./pages/Contact.vue')  
        },
        //not found viene inserito sempre per ultimo
        // {
        //     path: '/:pathMatch(.*)*',
        //     name: 'not-found',
        //     component: NotFound 
        // }

    ]
});

export { router };
