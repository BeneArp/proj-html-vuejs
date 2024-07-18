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
    <div class="row justify-content-center">
        <div class="col-11">


            <!-- slider cards -->
            <div class="col-12 d-flex justify-content-center">

                <div class="ms-card" v-for="(card, i) in store.testimonials" :key="i" :class="activeSlide === i ? 'active' : 'no-display'">
                    <p>{{ card.name }}</p>

                </div>

            </div>

            <!-- controlli -->
            <div class="controls d-flex justify-content-center">
                <span class="dot" v-for="(dot, index) in store.testimonials" :key="index" @click="showImage(index)">
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
    height: 500px;
    background-color: $light-grey;
    margin-bottom: 100px;

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

    .col-11 {
        background-color: green;
        // height: 400px;
        

        .col-12 {
            
            background-color: bisque;
            gap: 20px;
            overflow: hidden;

            .ms-card {
                flex-basis: calc(100% / 3 - 20px);
                flex-shrink: 0;
                height: 300px;
                transition: transform 0.5s ease;

                // background-color: blue;
                border: 1px solid red;
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
            
            background-color: black;

            .dot {
                display: inline-block;
                padding: 0 10px;
                color: #d8d8d8;
                cursor: pointer;
            }
        }
    }
    
}





</style>