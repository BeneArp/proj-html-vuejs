<script>
    import { store } from '../../store';

    export default{
        name: 'AboutSlider',

        data(){
            return{
                store,
                activeSlide: 0,
                slide: '',
            }
        },

        methods:{
            getImagePath: function(imgPath){
                return new URL(imgPath, import.meta.url).href;
            },

            changeActiveSlide(numeroIndice){

                // if(numeroIndice > this.activeSlide){
                //     this.slide = 'forward'
                // }else if (numeroIndice < this.activeSlide){
                //     this.slide = 'backwords'
                // }

                this.activeSlide = numeroIndice

                // setTimeout(() => {
                    
                // }, 1000);
            },
        },
    }

</script>

<template>

    <div class="container-lg">
        <div id="slider-title">
            <span>EQUIP YOURSELF WITH THE POWER OF EDUCATION</span>
            <h2><strong>Learn the secrets to</strong> Life Success<strong> , these people have got the key.</strong></h2>
        </div>

        <div id="slider-wrapper">
            <div class="container-fluid">
                <div class="row flex-nowrap align-items-center">

                    <div class="col-6 p-4" v-for="(review, index) in store.AboutSlider" :key="index" :class="this.activeSlide === 1 ? 'swipe-forward' : '' || this.activeSlide === 2 ? 'swipe-forward-two' : '' || this.activeSlide === 3 ? 'swipe-forward-three' : '' ">
                        <!-- v-show="this.activeSlide === index || index === this.activeSlide + 1" -->

                        <div class="ms-box">
                            <!-- dati utente -->
                            <div class="user">
                                <!-- immagine profilo -->
                                <div class="pic">
                                    <img :src="getImagePath(`../assets/${review.image}`)" :alt="review.name">
                                </div>
                                <i v-for="star in 5" class="fa-solid fa-star"></i>
                                <span class="user-name">{{review.name}}</span>
                                <span class="role">{{review.role}}</span>
                            </div>
                            <!-- paragrafo recensione -->
                            <p>
                                {{review.text}}
                            </p>
                        </div>

                    </div>

                </div>

                <!-- comandi slider -->
                <div id="change-slide-wrapper">
                    <div class="change-slide" v-for="(item, index) in 4" :class="index === this.activeSlide ? 'active' : '' " @click="changeActiveSlide(index)"></div>
                </div>

            </div>
        </div>
    </div>

</template>

<style lang="scss" scoped>
@use '../../styles/partials/variables' as *;
@use '../../styles/partials/mixins' as *;
@use "@fortawesome/fontawesome-free/css/all.min.css";

    #slider-title{
        padding: 5em 0 3em 0;
        text-align: center;
        width: 40%;
        margin: 0 auto;
    }

    #slider-wrapper{
        overflow: hidden;
        padding: 2em 0;

        .row{
            position: relative;
            height: 300px;
        }

        .col-6{
            transition: all 1s;

            .ms-box{
                box-shadow: 0 0 20px rgba(51, 51, 51, 0.1);
                background-color: $white;
                height: 100%;
                padding: 1em 2em;
                
                .user{
                    margin-bottom: 2em;

                    .fa-star{
                        color: #ffbb00;
                    }

                    .user-name{
                        text-transform: uppercase;
                        font-weight: bold;
                        margin: 0 0.5em;
                    }

                    .role{
                        font-size: 15px;
                        color: #8d8d8d;
                    }
                }

                .pic{
                    vertical-align: middle;
                    display: inline-block;
                    margin-right: 2em;
                    width: 20%;
                    border-radius: 50%;
                    overflow: hidden;
                }
            }
        }
    }

    #change-slide-wrapper{
        width: fit-content;
        margin: 1em auto;
        gap: 1em;
        @include flex;

            .change-slide{
            height: 8px;
            width: 8px;
            background-color: rgb(220 219 227);
            border-radius: 50%;

            &:hover{
                height: 12px;
                width: 12px;
                background-color: $black;
            }
        }

        .active{
            height: 12px;
            width: 12px;
            background-color: $black;
        }
    }

    .swipe-forward{
        transform: translateX(-650px);
    }

    .swipe-forward-two{
        transform: translateX(-1300px);
    }

    .swipe-forward-three{
        transform: translateX(-1950px);
    }

    .swipe-backwords{
        transform: translateX(0px);
    }

    h2{
        color: #20ad96;

        strong{
            color: $black
        }
    }


</style>