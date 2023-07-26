<script>
// import AppHeader from '../components/AppHeader.vue';

export default {
    name: "Contact",
    // components: {
    // AppHeader
    // },
}
</script>

<template>
    <div class="contact my-5">
        <div class="container">
            <div class="what-is-up">

                <div class="spinny-cogs">
                    <i class="fa fa-cog" aria-hidden="true"></i>
                    <i class="fa fa-5x fa-cog fa-spin" aria-hidden="true"></i>
                    <i class="fa fa-3x fa-cog" aria-hidden="true"></i>
                </div>
                <h1 class="maintenance">Under Maintenance</h1>
                <h2>Our developers are hard at work updating your system. Please wait while we do this. We have also made
                    the spinning cogs to distract you.</h2>
            </div>
        </div>
    </div>
</template>


<style lang="scss" scoped>
@use '../styles/partials/variables' as *;

.contact {


    .maintenance {
        text-transform: uppercase;
        margin-bottom: 1rem;
        font-size: 3rem;

        /* Media query per Tablet */
        @media only screen and (max-width: 768px) {
            .contact {
                .maintenance {
                    font-size: 2rem;
                    /* Riduzione del font per tablet */
                }
            }
        }

        /* Media query per Smartphone */
        @media only screen and (max-width: 480px) {
            .contact {
                .maintenance {
                    font-size: 1.5rem;
                    /* Riduzione del font per smartphone */
                }
            }

        }

        .container {
            display: table;
            margin: 0 auto;
            max-width: 1024px;
            width: 100%;
            height: 100%;
            align-content: center;
            position: relative;
            box-sizing: border-box;

            .what-is-up {
                position: absolute;
                width: 100%;
                top: 50%;
                transform: translateY(-50%);
                display: block;
                text-align: center;
                box-sizing: border-box;

                .spinny-cogs {
                    display: block;
                    margin-bottom: 2rem;

                    .fa {
                        &:nth-of-type(1) {
                            @extend .fa-spin-one;
                        }

                        &:nth-of-type(3) {
                            @extend .fa-spin-two;
                        }
                    }
                }
            }
        }

        @-webkit-keyframes fa-spin-one {
            0% {
                -webkit-transform: translateY(-2rem) rotate(0deg);
                transform: translateY(-2rem) rotate(0deg);
            }

            100% {
                -webkit-transform: translateY(-2rem) rotate(-359deg);
                transform: translateY(-2rem) rotate(-359deg);
            }
        }

        @keyframes fa-spin-one {
            0% {
                -webkit-transform: translateY(-2rem) rotate(0deg);
                transform: translateY(-2rem) rotate(0deg);
            }

            100% {
                -webkit-transform: translateY(-2rem) rotate(-359deg);
                transform: translateY(-2rem) rotate(-359deg);
            }
        }

        .fa-spin-one {
            -webkit-animation: fa-spin-one 1s infinite linear;
            animation: fa-spin-one 1s infinite linear;
        }

        @-webkit-keyframes fa-spin-two {
            0% {
                -webkit-transform: translateY(-.5rem) translateY(1rem) rotate(0deg);
                transform: translateY(-.5rem) translateY(1rem) rotate(0deg);
            }

            100% {
                -webkit-transform: translateY(-.5rem) translateY(1rem) rotate(-359deg);
                transform: translateY(-.5rem) translateY(1rem) rotate(-359deg);
            }
        }

        @keyframes fa-spin-two {
            0% {
                -webkit-transform: translateY(-.5rem) translateY(1rem) rotate(0deg);
                transform: translateY(-.5rem) translateY(1rem) rotate(0deg);
            }

            100% {
                -webkit-transform: translateY(-.5rem) translateY(1rem) rotate(-359deg);
                transform: translateY(-.5rem) translateY(1rem) rotate(-359deg);
            }
        }

        .fa-spin-two {
            -webkit-animation: fa-spin-two 2s infinite linear;
            animation: fa-spin-two 2s infinite linear;
        }

        .made-by-me {
            position: fixed;
            text-decoration: none;
            box-sizing: border-box;
            right: 16px;
            bottom: 16px;
            width: 44px;
            height: 44px;
            display: block;
            border-radius: 100%;
            border: 2px solid white;
            box-shadow: 0 0 30px 0 rgba(black, .3);
            font-size: 0px;
            background: url("https://assets.codepen.io/50099/internal/avatars/users/default.png") no-repeat center;
            background-size: cover;
        }

    }}
</style>