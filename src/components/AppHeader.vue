<script >
export default {
    name: "AppHeader",
    watch: {
        // Questo watcher ascolta i cambiamenti nella route corrente
        $route() {
            this.isClicked = false; // Chiude il menu a tendina quando si cambia rotta
        }
    },
    data() {
        return {
            menuLinks: [
                {
                    label: "Home",
                    routeName: "home"
                },
                {
                    label: "Projects",
                    routeName: "projects"
                },
                {
                    label: "About",
                    routeName: "about"
                },
                {
                    label: "Contact",
                    routeName: "contact"
                }
            ],
            isClicked: false
        }

    },
    mounted() {
        // Aggiungi un event listener al clic globale
        document.addEventListener("click", this.handleClickOutside);
    },

    methods: {
        handleClickOutside(event) {
            // Controlla se l'elemento cliccato è dentro il menu o il pulsante del menu
            const menu = this.$refs.hamburgerMenu;
            const hamburger = this.$refs.hamburger;
            if (!menu.contains(event.target) && !hamburger.contains(event.target)) {
                // Chiudi il menu a tendina se si fa clic al di fuori
                this.isClicked = false;
            }
        },
        isCurrentRoute(routeName) {
            return this.$route.name === routeName;
        },
        toggleMenu() {
            this.isClicked = !this.isClicked;
        },
    },
}
</script>

<template>
    <section class="header">

        <div class=" container d-flex align-items-center justify-content-between text-white">
            <figure class="logo d-flex justify-content-center align-items-center">
                <a href="/">
                    <img src="../img/code.png" class="logo" alt="">
                </a>
            </figure>

            <nav class="d-none d-md-block">
                <ul class="d-flex nav-bar gap-3 list-unstyled">
                    <li class="nav-item" v-for="item in menuLinks">
                        <router-link :to="{ name: item.routeName }" class="nav-link "
                            :class="{ 'active': isCurrentRoute(item.routeName) }" aria-current="page">{{
                                item.label }}</router-link>
                    </li>
                </ul>
            </nav>

            <!-- hamburger menu -->
            <nav class="second d-md-none">
                <div id="hamburger" class="mx-5" ref="hamburger" @click="toggleMenu">
                    <!-- <img src="../img/Hamburgericon.svg.png" alt=""> -->
                    <i class="fa-solid fa-bars" style="color: #00FFC3;"></i>

                </div>
            </nav>
        </div>

        <ul v-show="isClicked" id="hamburger-menu" ref="hamburgerMenu" class="list-unstyled d-md-none">
            <li @click="isClicked = false" id="ics" class="d-flex justify-content-end me-3">
                &#x274C;
            </li>
            <li class="nav-item px-3" v-for="item in menuLinks" :key="item.routeName">
                <router-link :to="{ name: item.routeName }" class="nav-link"
                    :class="{ 'active': isCurrentRoute(item.routeName) }" aria-current="page"
                    style="display: inline-block; white-space: nowrap;">
                    {{ item.label }}
                </router-link>
            </li>
        </ul>
    </section>
</template>

<style lang="scss" scoped>
@use '../styles/partials/variables' as *;

.header {
    position: fixed;
    background-color: $header-bg;
    top: 0;
    left: 0;
    z-index: 99;
    right: 0;

    .logo {
        max-width: 150px;
    }

    #ics {
        cursor: pointer;
    }

    .nav-bar,
    #hamburger-menu {
        a {
            position: relative;
            color: #07e9b5;
            padding-inline: 0;

            &::before,
            &::after {
                content: "";
                position: absolute;
                bottom: -2px;
                width: 0;
                height: 2px;
                background-color: rgb(173, 251, 3);
                transition: width 0.3s ease;
            }

            &::before {
                left: 50%;
                transform: translateX(-50%);
            }

            &::after {
                right: 50%;
                transform: translateX(50%);
            }

            &:hover::before,
            &:hover::after,
            &.active::before,
            &.active::after {
                width: 100%;
            }

        }
    }

    #hamburger-menu {
        background-color: $header-bg;
        padding-bottom: 20px;
        position: relative;
        top: -9px;
        z-index: 55;
    }

    .second {
        #hamburger {
            cursor: pointer;
            color: #07E9B5;
            position: relative;
            img{
                width: 30px;
            }
        }
    }
}
</style>