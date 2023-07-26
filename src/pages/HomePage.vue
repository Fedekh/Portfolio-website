<script>
// import AppHeader from '../components/AppHeader.vue';

export default {
    name: "HomePage",
    components: {

    },
    data() {
        return {
            isMeVisible: false,
            isSkillsVisible: false,
            isWelcomeVisible: false,
            isSocialVisible: false,
        };
    },

    mounted() {
        setTimeout(() => {
            this.isMeVisible = true;
        }, 1500);

        setTimeout(() => {
            this.isSkillsVisible = true;
        }, 3500);

        setTimeout(() => {
            this.isWelcomeVisible = true;
        }, 2500);

        setTimeout(() => {
            this.isSocialVisible = true;
        }, 4500);
    },
};
</script>

<template>
    <div class="homepage">
        <div class="container">
            <div class="wrapper mt-5">
                <div class="row row-cols-sm-1 row-cols-md-2">
                    <figure :class="{ 'me-enter-active': isMeVisible, 'me-enter': isMeVisible }"
                        class="main-figure d-flex flex-column align-items-center gap-5 me">
                        <img class="rounded rounded-pill" src="../img/me (1).jpg" alt="" />
                        <figure class="skills my-5 code d-flex gap-4 flex-row align-items-end justify-content-center"
                            :class="{ 'skills-enter-active': isSkillsVisible, 'skills-enter': isSkillsVisible }">
                            <div class="tooltipp" data-tooltip="Html5">
                                <i class="fa-brands fa-html5" style="color: #f53d00;"></i>
                            </div>
                            <div class="tooltipp" data-tooltip="Css3">
                                <i class="fa-brands fa-css3-alt" style="color: #0353dd;"></i>
                            </div>
                            <div class="tooltipp" data-tooltip="JavaScript">
                                <i class="fa-brands fa-square-js" style="color: #f7ef02;"></i>
                            </div>
                            <div class="tooltipp" data-tooltip="Bootstrap">
                                <i class="fa-brands fa-bootstrap" style="color: #702CF7;"></i>
                            </div>
                            <div class="tooltipp" data-tooltip="Vue.Js">
                                <i class="fa-brands fa-vuejs" style="color: #327859;"></i>
                            </div>
                            <div class="tooltipp" data-tooltip="VITE">
                                <i class="fa-brands fa-vuejs" style="color: #8966F2;"></i>
                            </div>
                            <div class="tooltipp" data-tooltip="MySql">
                                <i class="fa-solid fa-database" style="color: #00758F;"></i>
                            </div>
                            <div class="tooltipp" data-tooltip="PHP">
                                <i class="fa-brands fa-php" style="color: #7A86B8;"></i>
                            </div>
                            <div class="tooltipp" data-tooltip="Laravel">
                                <i class="fa-brands fa-laravel" style="color: #EF3E30;"></i>
                            </div>

                        </figure>
                    </figure>

                    <section :class="{ 'welcome-enter-active': isWelcomeVisible, 'welcome-enter': isWelcomeVisible }"
                        class="my-5 welcome">
                        <h1>
                            HELLO WORLD! <br> <span class="name">I'm Federico,</span><br> <span class="highlight">Full Stack Web Developer</span>
                        </h1>
                        <router-link :to="{ name: 'contact' }" class="btn btn-success m-4" aria-current="page">Contact me</router-link>
                        <router-link :to="{ name: 'about'}" class="btn btn-info" aria-current="page">About me</router-link>
                    </section>
                </div>
            </div>

            <div :class="{ 'social-enter-active': isSocialVisible, 'social-enter': isSocialVisible }" class="social">
                <ul class="d-flex gap-3 justify-content-sm-center justify-content-md-end list-unstyled">
                    <li class="">
                        <a href="https://www.instagram.com/fedekh_/" blan>
                            <i class="fa-brands fa-instagram"></i>
                        </a>
                    </li>
                    <li class="">
                        <a href="https://www.linkedin.com/in/federico-ceteron4a91b2/">
                            <i class="fa-brands fa-linkedin"></i>
                        </a>
                    </li>
                    <li class="">
                        <a href="https://github.com/Fedekh?tab=repositories">
                            <i class="fa-brands fa-github"></i>
                        </a>
                    </li>
                    <li class="">
                        <a href="https://wa.me/qr/UXWDX7A6BJXKC1">
                            <i class="fa-brands fa-whatsapp"></i>
                        </a>
                    </li>
                    <li class="">
                        <a mailTo="federicocet@gmail.com" href="https://discord.gg/eaKFCHrV">
                            <i class="fa-brands fa-slack"></i>
                        </a>
                    </li>
                    <li class="">
                        <a href="https://discord.gg/eaKFCHrV">
                            <i class="fa-brands fa-discord"></i>
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>
  
  
  

<style lang="scss" scoped>
@use '../styles/partials/variables' as *;

.homepage {
    overflow: hidden;
    padding-top: 50px;

    .social {
        font-size: 18px;
        color: #07E9B5;
    }

    .me {
        img {
            max-width: 50%;
        }
    }

    .tooltipp {
        position: relative;

        i {
            font-size: 20px;
        }

        &:before {
            content: attr(data-tooltip);
            position: absolute;
            bottom: 120%;
            left: 50%;
            transform: translateX(-50%);
            padding: 5px 10px;
            background-color: #f09e07;
            color: #fff;
            border-radius: 5px;
            opacity: 0;
            visibility: hidden;
            transition: opacity 0.3s ease, visibility 0.3s ease;
        }

        &:hover:before {
            opacity: 1;
            visibility: visible;
        }
    }

    .main-figure,
    .skills {
        opacity: 0;
        transform: translateX(-100%);
    }

    .welcome,
    .social {
        opacity: 0;
        transform: translateX(100%);
    }

    /* Aggiungiamo le transizioni per i blocchi */
    .me-enter-active,
    .skills-enter-active,
    .welcome-enter-active,
    .social-enter-active {
        transition: opacity 1.5s, transform 1.5s;
    }

    .me-enter,
    .skills-enter-active {
        opacity: 1;
        transform: translateX(0%);
    }

    .welcome-enter,
    .social-enter-active {
        opacity: 1;
        transform: translateX(0%);
    }

    @media screen and (max-width: 992px) {
       .container{
        display: flex !important;
        flex-direction: column !important;
        .skills{
            display: flex !important;
            gap: 15px !important;
        }
        .welcome{
            text-align: center;
            h1{
                font-size: 1rem !important;
            }
        }
        .social{
            display: flex;
            justify-content: center;
        }
       }
    }
}
</style>
