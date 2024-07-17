<script>
    import ArtistCoachingCard from './ArtistCoachingCard.vue';

    export default{
        name: 'ArtistCoachingAppHome',

        components:{
            ArtistCoachingCard,
        }
    }

</script>

<template>

    <section>

        <img id="background-image" src="../assets/images/maxcoach-shape-14-1536x343.png" alt="decorazione sfondo">
        <img id="artitst-shape-left" src="../assets/images/artist-shape-01-600x577.png" alt="decorazione sfondo">
        <img id="circle-background-decoration" src="../assets/images/maxcoach-shape-13.png" alt="decorazione sfondo">

        <div class="container-md">
            <!-- titolo sezione -->
            <div class="section-title">
                <h3>Artist Coaching</h3>
                <h2>I understand what it takes to create. I can help you with</h2>
            </div>

            <div class="row">
                <ArtistCoachingCard/>
            </div>

        </div>
    </section>

</template>

<style lang="scss" scoped>
    @use '../styles/partials/variables' as *;

    section{
        padding: 3em 0;
        position: relative;
        overflow: hidden;
        width: 100vw;
        // debug
        // height: 800px;
        // background-color: black;

        .container-md{
            // border: 2px solid black;
            height: 100%;

            .section-title{
                text-align: center;
                padding: 0 24em;

                h3{
                    font-family: Rossela Signature Font Demo, sans-serif;
                    color: $light-blue;
                    letter-spacing: 0.1em;
                    font-size: 40px;
                }
            }

        }

        #background-image{
            z-index: 1;
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
        }

        #artitst-shape-left{
            height: 500px;
            transform: rotate(250deg);
            position: absolute;
            left: -8%;
            top: 30px;
        }

        #circle-background-decoration{
            position: absolute;
            right: -2%;
            top: 50%;
            transform: translate(0, -50%);
        }
    }
</style>