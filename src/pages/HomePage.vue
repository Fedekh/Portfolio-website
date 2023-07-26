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
                    <figure :class="{ 'me-enter-active me-enter': isMeVisible }"
                        class="main-figure d-flex flex-column align-items-center gap-5 me">
                        <img class="rounded rounded-pill" src="../img/me1.jpg" alt="" />
                        <figure class="skills my-5 code d-flex gap-4 flex-row align-items-end justify-content-center"
                            :class="{ 'skills-enter-active skills-enter': isSkillsVisible }">
                            <div class="tooltipp" data-tooltip="Html5">
                                <img src="../img/html.png" alt="">
                            </div>
                            <div class="tooltipp" data-tooltip="Css3">
                                <img src="../img//css.png" alt="">
                            </div>
                            <div class="tooltipp" data-tooltip="JavaScript">
                                <img src="../img/js.png" alt="">
                            </div>
                            <div class="tooltipp" data-tooltip="Bootstrap">
                                <img src="../img/bootstrrap.png" alt="">
                            </div>
                            <div class="tooltipp" data-tooltip="Vue.Js">
                                <img src="../img/vue.png" alt="">
                            </div>
                            <div class="tooltipp" data-tooltip="VITE">
                                <img src="../img/vite.svg" alt="">
                            </div>
                            <div class="tooltipp" data-tooltip="MySql">
                                <img src="../img/mysql2.jpg" alt="">
                            </div>
                            <div class="tooltipp" data-tooltip="PHP">
                                <img src="../img/php.png" alt="">
                            </div>
                            <div class="tooltipp" data-tooltip="Laravel">
                                <img src="../img/laravel.png" alt="">
                            </div>

                        </figure>
                    </figure>

                    <section :class="{ 'welcome-enter-active welcome-enter': isWelcomeVisible }"
                        class="my-5 welcome">
                        <h1>
                            HELLO WORLD! <br> <span class="name">I'm Federico,</span><br> <span class="highlight">Full Stack
                                Web Developer</span>
                        </h1>
                        <router-link :to="{ name: 'projects' }" class="btn btn-success m-4" aria-current="page">Projects</router-link>
                        <router-link :to="{ name: 'about' }" class="btn btn-info" aria-current="page">About me</router-link>
                    </section>
                </div>
            </div>

            <div :class="{ 'social-enter-active social-enter': isSocialVisible }" class="social">
                <ul class="d-flex gap-3 justify-content-sm-center justify-content-md-end list-unstyled">
                    <li>
                        <a href="https://www.instagram.com/fedekh_/" target="_blank">
                            <img src="../img/instagram.png" alt="">
                        </a>
                    </li>
                    <li>
                        <a href="https://www.linkedin.com/in/federico-ceteroni-dev/" target="_blank">
                            <img src="../img/linkedin.png" alt="">
                        </a>
                    </li>
                    <li>
                        <a href="https://github.com/Fedekh?tab=repositories" target="_blank">
                            <img src="../img/github.png" alt="">
                        </a>
                    </li>
                    <li>
                        <a href="https://wa.me/qr/UXWDX7A6BJXKC1" target="_blank">
                            <img src="../img/whatsapp.png" alt="">
                        </a>
                    </li>
                    <li>
                        <a href="mailto:federicocet@gmail.com" target="_blank">
                            <img src="../img/gmail.png" alt="">
                        </a>
                    </li>

                    <li>
                        <a href="https://discord.gg/eaKFCHrV" target="_blank">
                            <img src="../img/discord.png" alt="">
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

        img {
            width: 20px;
        }
    }

    .me {
        img {
            max-width: 50%;
        }
    }

    .tooltipp {
        position: relative;

        img {
            width: 50px;
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



    @media screen and (max-width: 768px) {
        .container {
            .skills {
                position: relative;
                top: 150px;
            }

            .welcome {
                position: relative !important;
                bottom: 200px !important;
            }

            .social {
                position: relative;
                bottom: 100px;
            }
        }
    }

    @media screen and (max-width: 992px) {
        .container {
            display: flex !important;
            flex-direction: column !important;

            .skills {
                display: flex !important;
                gap: 15px !important;
            }

            .welcome {
                text-align: center;

                h1 {
                    font-size: 1rem !important;
                }
            }

            .social {
                display: flex;
                justify-content: center;
            }
        }

    }
}
</style>
