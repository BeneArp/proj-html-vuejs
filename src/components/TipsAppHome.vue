<script>
    import TipsSideCard from '../components/TipsSideCard.vue'

    export default{
        name: "TipsAppHome",

        components:{
            TipsSideCard,
        }
    }

</script>

<template>

    <section class="tips">
        <!-- immagini decorative sfondo -->
        <img id="tips-background-decoration" src="../assets/images/maxcoach-shape-03.png" alt="decorazione sfondo">

        <div id="section-title">
            <h3>Articles and Tips</h3>
            <h2>Latest From The Blog</h2>
        </div>

        <!-- card centrale -->
        <div id="big-card">
            <a href="#">
                <!-- cover -->
                <img src="../assets/images/artist-blog-02-500x680.jpg" alt="post cover">
                <!-- effetto ombra -->
                <div class="shadow"></div>

                <div class="description">
                    <span>ARTIST</span>
                    <h2>Connection Between Self-Portraits and Identity</h2>
                    <span><i class="fa-regular fa-calendar"></i>May 15, 2020</span>
                    <span><i class="fa-regular fa-eye"></i>6,901 views</span>
                </div>
            </a>
        </div>

        <!-- card laterali -->
        <div>
            <div class="container-md">
                <div class="row justify-content-between align-items-center">
                    <TipsSideCard/>
                </div>
            </div>
        </div>

        <div id="more-post">
            <span>
                Get into details now?​ <strong><a href="#">View all posts
                    <!-- animazione in hover -->
                    <div class="dynamic-border-bottom"></div>

                <!-- icona -->
                <i class="fa-solid fa-arrow-right"></i></a></strong>
            </span>
        </div>
    </section>

</template>

<style lang="scss" scoped>
    @use '../styles/partials/variables' as *;
    @use "@fortawesome/fontawesome-free/css/all.min.css";

    .tips{
        background-color: $light-grey;
        position: relative;
        padding: 4em 0;

        #tips-background-decoration{
            z-index: 0;
            width: 100%;
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
        }

        #section-title{
            width: 40%;
            margin: 0 auto;
            text-align: center;
        }

        h3{
            font-family: Rossela Signature Font Demo, sans-serif;
            color: $light-blue;
            letter-spacing: 0.1em;
            font-size: 40px;
        }

        #big-card{
            width: 20%;
            height: 700px;
            margin: 6em auto;
            position: relative;
            overflow: hidden;
            z-index: 200;
            // debug
            background-color: red;

            img{
                width: 100%;
                height: 100%;
                object-fit: cover;
                transition: all 1.5s;
            }

            .shadow{
                width: 100%;
                height: 700px;
                position: absolute;
                top: 0;
                left: 0;
                background: linear-gradient(transparent, black);
                opacity: 0.3;
            }

            &:hover img{
                scale: 1.1;
            }

            .description{
                position: absolute;
                bottom: 0;
                padding: 2em;
                color: $white;

                span{
                    margin-right: 2em;
                }

                i{
                    margin-right: 0.8em;
                }
            }
        }

        .container-md{
            z-index: 0;
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            // debug
            // background-color: yellow;
            height: 600px;

            .row{
                height: 100%;
            }
        }

        #more-post{
            width: fit-content;
            margin: 0 auto;

            a{
                text-decoration: none;
                color: $orange;
                position: relative;

                .dynamic-border-bottom{
                    position: absolute;
                    width: 0;
                    height: 2px;
                    background-color: $orange;
                    left: 0;
                    transition: all 1s;
                }

                &:hover .dynamic-border-bottom{
                    width: 120px;
                }
            }
        }
    }


</style>