<script>
export default {
    name: 'MartinGarrixAppHome.vue',
}

</script>


<template>
    <section class="container-fluid">

        <div class="container-md">

            <div class="row justify-content-between">

                <!-- contenuto sinistra -->
                <div class="col-4 text-center">

                    <div class="quote-img">
                        <img src="../assets/images/artist-quote-icon.png" alt="virgolette">

                    </div>

                    <h2 id="main-title">
                        I coach and mentor visual artists, like you, to Create Like You Mean It
                    </h2>

                    <h2 id="styled-title">
                        Martin Garrix
                    </h2>
                </div>

                <!-- contenuto destra -->
                <div class="col-6">
                    <p>
                        As a coach and mentor, my ultimate goal is to motivate visual artists toward inspired action. I help you get you back on track to being the productive, creative, meaningful and authentic artist you truly want to be.I support artists in crafting and living a creative life as well as feeling good about themselves and their art.
                    </p>

                    <p>
                        As an artist and an educator for nearly 30 years, I understand what it takes to create.
                    </p>

                    <button type="button" class="btn btn-primary">Get started today</button>

                </div>

            </div>
            
        </div>

    </section>
</template>


<style lang="scss" scoped>

@use '../styles/partials/variables' as *;

.container-md {
    margin-bottom: 50px;

    .col-4 {
        #main-title {
            font-size: 48px;
            margin: 30px 0;
            font-weight: bolder;
        }

        #styled-title {
            color: $light-blue;
            font-family: Rossela Signature Font Demo, sans-serif;
            letter-spacing: 0.1em;
            font-size: 40px;
        }
    }

    .col-6 {
        padding: 70px 0;

        p {
            font-size: 18px;
            color: #696969;
        }

        .btn-primary {
            background-color: rgb(252, 239, 232);
            color: $orange;
            padding:10px 30px;
            font-weight: bold;
            margin-top: 50px;
            border-color:  rgb(252, 239, 232);

            &:hover {
                background-color: $orange;
                border-color: $orange;
                color: white;
            }
        }
    }
}
</style>