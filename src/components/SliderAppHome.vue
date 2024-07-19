<script>
import {store} from '../store';
// Import all of Bootstrap's JS
// import * as bootstrap from 'bootstrap';

export default {
    name: 'SliderAppHome.vue',

    data(){
        return{
            store,

            // creo proprietà per immagine di partenza
            activeSlide: 0,


        }
    },
    methods: {
        // funzione per click su thumbnail
        showImage(currentImage) {
            this.activeSlide = currentImage;
        },
    }
}
</script>


<template>
<section class="container-fluid">

    <div class="container-md">

        <!-- titolo -->
        <div class="text-center">
            <h2 id="styled-title">
                Testimonials
            </h2>

            <h2 id="main-title">
                Why do people love me?
            </h2>

        </div>
        
    </div>

    <!-- slider -->
    <div id="slider-wrapper">
        <div class="col-11">


            <!-- slider cards -->
            <div class="row flex-nowrap align-items-center">

                

                <!-- slider statico -->
                <div class="ms-card">

                    <div class="text">
                        <h4>{{ store.testimonials[activeSlide].title }}</h4>
                        <p>{{ store.testimonials[activeSlide].text }}</p>
                    </div>

                    <div class="info d-flex align-items-center">
                        <div class="info-img">
                            <img :src="store.testimonials[activeSlide].image" :alt="store.testimonials[activeSlide].name">
                        </div>

                        <div class="info-text">
                            <h5>{{store.testimonials[activeSlide].name}}</h5>
                            <p>{{store.testimonials[activeSlide].job}}</p>

                        </div>
                    </div>

                </div>

            </div>

            <!-- controlli -->
            <div class="controls d-flex justify-content-center">
                <span class="dot" v-for="(dot, index) in store.testimonials" :key="index" @click="showImage(index)"  :class="activeSlide === index ? 'dot-active' : ''">
                    <i class="fa-solid fa-circle"></i>
                </span>

            </div>

        </div>
        
        
    </div>

</section>
</template>


<style lang="scss" scoped>
// @use '../styles/general.scss';
@use '../styles/partials/variables' as *;
@use "@fortawesome/fontawesome-free/css/all.min.css" as *;

section {
    background-color: $light-grey;
    

    #main-title {
        font-size: 34px;
        margin: 30px 0;
        font-weight: bolder;
    }

    #styled-title {
        color: $light-blue;
        font-family: Rossela Signature Font Demo, sans-serif;
        letter-spacing: 0.1em;
        font-size: 40px;
    }

    #slider-wrapper{
        overflow: hidden;
        padding: 2em 0;
    }
    .col-11 {
        // background-color: green;
        // height: 400px;
        

        .row {
            position: relative;
            // background-color: bisque;
            gap: 20px;

            .ms-card {
                flex-basis: calc(100% / 3 - 20px);
                height: 400px;
                flex-shrink: 0;
                padding: 30px;
                transition: transform 0.5s ease;
                background-color: white;
                border-radius: 5px;

                // background-color: blue;
                // border: 1px solid red;

                .text {
                    margin-bottom: 50px;

                    h4 {
                        font-weight: bold;
                        margin-bottom: 20px;
                    }

                    p {
                        font-weight: bold;
                        color: #696969;
                    }
                }

                .info-img {
                    width: 20%;
                    margin-right: 20px;

                    img {
                        max-width: 100%;
                        border-radius: 50%;
                    }
                }

                .info-text {
                    h5 {
                        font-weight: bold;
                    }

                    p {
                        color: #696969;
                    }
                }
            }

            .active {
                background-color: blue;
                transform: translateX(100%);
            }

            .no-display {
                background-color: yellow;
                opacity: 0.5;
                transform: translateX(100%);
            }
        }

        .controls {
            padding: 50px 0;
            // background-color: black;

            .dot {
                display: inline-block;
                font-size: 10px;
                padding: 0 10px;
                color: #d8d8d8;
                cursor: pointer;

                &:hover {
                    color: $black;
                    scale: 1.5;
                }
            }

            .dot-active {
                color: $black;
                scale: 1.5;  
            }
        }
    }
    
}





</style>