<script>
import AppHeader from '../components/AppHeader.vue';

export default {
    name: "AboutPage",
    components: {
        AppHeader
    },
}
</script>

<template>
    <div class="wrapper container">
        <div class="alert text-center alert-success">
        </div>
        <div class="row row-cols-sm-1 row-cols-md-2">
            <figure class="main-figure">
                <img class="rounded rounded-pill" src="../img/me (1).jpg" alt="">
                <figure class="container my-5 code d-flex gap-2 flex-row align-items-end justify-content-between ">
                    <div class="tooltipp" data-tooltip="HTML">
                        <i class="fa-brands fa-html5" style="color: #f53d00;"></i>
                    </div>
                    <div class="tooltipp" data-tooltip="CSS">
                        <i class="fa-brands fa-css3-alt" style="color: #0353dd;"></i>
                    </div>
                    <div class="tooltipp" data-tooltip="BOOTSTRAP">
                        <i class="fa-brands fa-bootstrap" style="color: #a90dfd;"></i>
                    </div>
                    <div class="tooltipp" data-tooltip="JAVASCRIPT">
                        <i class="fa-brands fa-square-js" style="color: #edf104;"></i>
                    </div>
                    <div class="tooltipp" data-tooltip="VUE">
                        <i class="fa-brands fa-vuejs" style="color: #3FB984;"></i>
                    </div>
                    <div class="tooltipp" data-tooltip="VITE">
                        <i class="fa-brands fa-vuejs" style="color: #8966F2;"></i>
                    </div>
                    <div class="tooltipp" data-tooltip="SCSS">
                        <i class="fa-brands fa-sass" style="color: #fd444d;"></i>
                    </div>
                    <div class="tooltipp" data-tooltip="PHP">
                        <i class="fa-brands fa-php" style="color: #787CB4;"></i>
                    </div>
                    <div class="tooltipp" data-tooltip="MYSQL">
                        <i class="fa-solid fa-database" style="color: #417399;"></i>
                    </div>
                    <div class="tooltipp" data-tooltip="LARAVEL">
                        <i class="fa-brands fa-laravel" style="color:#F2271C"></i>
                    </div>
                </figure>
            </figure>
            <section class="bio my-5">
                <h1 class="welcome">Welcome! <span class="name">I'm Federico,</span> <span class="role">Junior <span
                            class="highlight">Full Stack</span> Web Developer</span></h1>
                <a href="/links/contact" class="btn btn-success my-4">Contac me</a>
                <a href="/links/about" class="btn btn-primary my-4">About me</a>
            </section>
        </div>
    </div>

    <div class="container">
        <ul class="d-flex social gap-3 justify-content-sm-center justify-content-md-end">
            <li class="my-2">
                <a href="https://www.instagram.com/fedekh_/">
                    <i class="fa-brands fa-instagram"></i>
                </a>
            </li>
            <li class="my-2">
                <a href="https://www.linkedin.com/in/federico-ceteron4a91b2/">
                    <i class="fa-brands fa-linkedin"></i>
                </a>
            </li>
            <li class="my-2">
                <a href="https://github.com/Fedekh?tab=repositories">
                    <i class="fa-brands fa-github"></i>
                </a>
            </li>
            <li class="my-2">
                <a href="https://wa.me/qr/UXWDX7A6BJXKC1">
                    <i class="fa-brands fa-whatsapp"></i>
                </a>
            </li>
            <li class="my-2">
                <a mailTo="federicocet@gmail.com" href="https://discord.gg/eaKFCHrV">
                    <i class="fa-brands fa-slack"></i>
                </a>
            </li>
            <li class="my-2">
                <a href="https://discord.gg/eaKFCHrV">
                    <i class="fa-brands fa-discord"></i>
                </a>
            </li>
        </ul>

    </div>
</template>


<style lang="scss" scoped></style>