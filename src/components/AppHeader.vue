<script >
export default {
    name: "AppHeader",
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
                    label: "About me",
                    routeName: "about"
                },
                {
                    label: "Contact us",
                    routeName: "contact"
                }
            ]
        }
    }
}
</script>

<template>
    <div class="header container py-3 d-flex align-items-center justify-content-between text-white">
        <figure class="logo d-flex justify-content-center align-items-center">
            <a href="/">
                <img src="../img/code.png" class="w-25" alt="">
            </a>
        </figure>
        <nav class="d-none d-md-block">
            <ul class="d-flex nav-bar gap-3 list-unstyled">
                <li class="nav-item" v-for="item in menuItems">
                    <router-link :to="{ name: item.routeName }" class="nav-link active" aria-current="page">{{
                        item.label }}gfdff</router-link>
                </li>
            </ul>
        </nav>
        <nav class="second d-block d-md-none">
            <div id="hamburger">
                <i id="fa-bar" class="fa-solid fa-bars"></i>
                <ul id="hamburger-menu">
                    <li><i id="close" class="fa-solid  fa-xmark" style="color: #07e9b5;"></i></li>
                    <li><a href="/">Home</a></li>
                    <li><a href="/links/projects">Projects</a></li>
                    <li><a href="/links/about">About</a></li>
                    <li><a href="/links/contact">Contact</a></li>
                </ul>
            </div>
        </nav>
    </div>
</template>


<style lang="scss" scoped>
@use '../styles/partials/variables' as *;

.nav-bar,
#hamburger-menu {
    a {
        position: relative;
        color: #07e9b5;

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

.second {
    #hamburger {
        cursor: pointer;
        color: #07E9B5;
        position: relative;
        top: -20px;

        #hamburger-menu {
            display: none;
            position: relative;
            top: 30px;

            i {
                position: relative;
                right: -50px;
            }
        }
    }
}
</style>