<script>
// import AppHeader from '../components/AppHeader.vue';

export default {
    name: "Contact",
    data() {
        return {
            form: {
                name: "",
                surname: "",
                email: "",
                phone: "",
                message: "",
            },
            isSent: false
        };
    },
    methods: {
        submitForm() {
            this.isSent = true;
            this.form = {
                name: "",
                surname: "",
                email: "",
                phone: "",
                message: "",
            };
            setTimeout(() => {
            this.isSent = false;
                
            }, 5000);
        },
    },
}
</script>

<template>
    <div class="container contact">
        <h6 class="text-center ok alert alert-success" :class="{ fade: isSent }" v-if="isSent">Messaggio inviato correttamente</h6>
       
        <div class="contact-form">
            <h2>Contact me</h2>
            <form netlify  @submit.prevent="submitForm" name="contact" method="POST">
                <div class="form-group">
                    <label for="name">Nome:</label>
                    <input type="text" id="name" v-model="form.name" required>
                </div>
                <div class="form-group">
                    <label for="surname">Cognome:</label>
                    <input type="text" id="surname" v-model="form.surname" required>
                </div>
                <div class="form-group">
                    <label for="email">Email:</label>
                    <input type="email" id="email" v-model="form.email" required>
                </div>
                <div class="form-group">
                    <label for="phone">Telefono:</label>
                    <input type="tel" id="phone" v-model="form.phone" required>
                </div>
                <div class="form-group">
                    <label for="message">Messaggio:</label>
                    <textarea id="message" v-model="form.message" required></textarea>
                </div>
                <button type="submit">Invia</button>
            </form>
        </div>
    </div>
</template>


<style lang="scss" scoped>
@use '../styles/partials/variables' as *;

@keyframes fadeOut {
  0% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
}

/* Applica l'animazione solo quando la classe .fade è presente */
.ok.fade {
  animation: fadeOut 5s ease-in;
}
.contact-form {
    max-width: 400px;
    margin: 40px auto;

    h2 {
        text-align: center;
    }

    form {
        display: flex;
        flex-direction: column;

        .form-group {
            margin-bottom: 1rem;
            display: flex;
            flex-direction: column;

            label {
                margin-bottom: 0.5rem;
            }

            input,
            textarea {
                padding: 0.5rem;
                border: 1px solid #ccc;
                border-radius: 4px;
            }

            textarea {
                resize: vertical;
            }
        }

        button {
            padding: 0.5rem;
            background-color: #007bff;
            color: #fff;
            border: none;
            border-radius: 4px;
            cursor: pointer;
        }
    }
}

/* Aggiungi regole SCSS per rendere il form responsive per i dispositivi mobili */
@media screen and (max-width: 600px) {
    .contact-form {
        max-width: 100%;
        padding: 1rem;

        form {
            .form-group {
                margin-bottom: 0.75rem;
            }

            button {
                margin-top: 1rem;
            }
        }
    }
}
</style>