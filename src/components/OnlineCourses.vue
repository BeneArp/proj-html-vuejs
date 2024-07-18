<script>
    import {store} from '../store'
    export default {
        name: 'OnlineCourses',
        data(){
        return{
            store,
            // router,
        }
        }
    }

</script>

<template>
    <section class="container-fluid">
               
        <section class="container">
            <!-- immagini di background -->
            <img id="shape-left" src="../assets/images/artist-shape-01-600x577.png" alt="">
            <img id="shape-right" src="../assets/images/artist-shape-01-600x577.png" alt="">
            <!-- titolo della sezione -->
            <div class="col-4 title">
                    <h3>Artist coaching</h3>
                    <h2>Latest Online Courses</h2>
            </div>
            <!-- cards delle opere d'arte -->
            <div class="row">

                <div class="col-3" v-for="lesson in store.lessonsOnline">
                    <div class="img-art">
                        <img :src="lesson.imageCor" class="artwork" alt="">
                    </div>
                    <div class="info-art">
                        <h4 class="price">{{ lesson.price }}</h4>
                        <h4 class="artwork-title">{{ lesson.className }}</h4>
                        <div class="icon-lessons">
                            <div>
                                <i :class="lesson.iconLessons"></i>
                                <span>{{ lesson.numberLessons }}</span>
                            </div>
                            <div>
                                <i :class="lesson.iconStudent"></i>
                                <span>{{ lesson.numberStudent }}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-1 bottone">
                <button>View all courses <i class="fa-solid fa-arrow-right"></i> </button>
            </div>
        </section>
    </section>
</template>

<style lang="scss" scoped>
@use '../styles/partials/variables' as *;
@use "@fortawesome/fontawesome-free/css/all.min.css" as *;
    .container-fluid {
        position: relative;
        overflow: hidden;
        #shape-left {
            height: 600px;
            transform: rotate(-10deg);
            position: absolute;
            left: -300px;
            bottom: 200px;
            filter: invert(100%);
        }
        #shape-right {
            height: 680px;
            transform: rotate(250deg);
            position: absolute;
            right: -350px;
            top: 200px;
        }
    }
    .container {
        // background-color: pink;
        // min-height: 200px;
        padding: 5rem 0;
        .title{
            margin: 3rem auto;
            h3{
                font-family: Rossela Signature Font Demo, sans-serif;
                color: $light-blue;
                letter-spacing: 0.1em;
                font-size: 40px;
                text-align: center;
            }
            h2 {
                text-align: center;
                font-weight: bold;
            }
        }
        .col-3 {
            // border: solid black 0.01px;
            min-height: 100px;
            margin-bottom: 2rem;
            position: relative;
            .info-art {
                width: 90%;
                padding: 1.8rem;
                &:hover {
                    outline: solid $orange 0.1rem;
                }
                .price, .artwork-title  {
                    font-size: 1.2rem;
                    font-weight: bold;
                }
                .price{
                    color: $orange;
                }
                .artwork-title {
                    margin: 1.3rem 0;
                    &:hover{
                        color: $orange;
                    }
                }
                .icon-lessons {
                    font-size: 0.9rem;
                    color: grey;
                    display: flex;
                    gap: 1rem;
                    i {
                        margin-right:1rem ;
                    }
                }
            }
            .img-art {
                width: 100%;
                overflow: hidden;
                .artwork {
                transition: all 2s;
                    &:hover{
                        scale: 1.1;
                    }
                }
            }

        }
        .bottone {
            margin: auto;
            button {
            align-self: center;
            width: 13rem;
            padding:1rem;
            font-size: 0.9rem;
            border: none;
            background-color: rgb(239, 111, 49, 0.1);
            border-radius: 5px;
            color: $orange;
            translate: -50% ;
            font-weight: bold;
            transition: 1s;
            
            &:hover {
                background-color: $orange;
                color: white;
            }
            }
        }
    }
</style>