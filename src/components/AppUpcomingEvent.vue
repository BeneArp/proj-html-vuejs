<script>
    import {store} from '../store'
    export default {
        name: 'AppUpcomingEvent',
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
        <!-- immagini di background -->
        <img id="shape-left" src="../assets/images/artist-shape-01.png" alt="">
        <img id="round" src="../assets/images/maxcoach-shape-13-96x96.png" alt="">
        <img id="shape-right" src="../assets/images/artist-shape-03-201x300.png" alt="">
        <!-- titolo della sezione -->
        <div class="col-4 title">
                <h3>Upcoming Events</h3>
                <h2>Let's Work Together</h2>
        </div>
        <div class="row" v-for="event in store.upcomingEvent">
            <div class="col-6 cards" v-for="item in event.firstRow">
                <div class="col-5 image">
                    <img :src="item.imageEvent" alt="immagine evento">
                </div>
                <div class="col-5 info-event">
                    <h4>{{ item.dataEvent }}</h4>
                    <h3>{{ item.nameEvent }}</h3>
                    <span>
                        <i class="fa-solid fa-location-dot"></i>
                        {{ item.location }} 
                    </span>
                </div>
            </div>
            <div class="col-6 cards invers" v-for="item in event.secondRow">
                <div class="col-5 image">
                    <img :src="item.imageEvent" alt="immagine evento">
                </div>
                <div class="col-5 info-event">
                    <h4>{{ item.dataEvent }}</h4>
                    <h3>{{ item.nameEvent }}</h3>
                    <span>
                        <i class="fa-solid fa-location-dot"></i>
                        {{ item.location }} 
                    </span>
                </div>
            </div>
        </div>           
    </section>
</template>

<style lang="scss" scoped>
    @use '../styles/partials/variables' as *;
    @use "@fortawesome/fontawesome-free/css/all.min.css" as *;
    
    .container-fluid {
        position: relative;
        overflow: hidden;

        #shape-left {
            transform: rotate(-130deg);
            position: absolute;
            left: -300px;
            bottom: -300px;
            z-index: -100;
        }
        #shape-right, #round {
            height: 450px;
            transform: rotate(250deg);
            position: absolute;
            right: -150px;
            top: 0;
            z-index: -200;
        }
        #round {
            height: 150px;
            transform: rotate(250deg);
            position: absolute;
            right: 20px;
            top: 90px;
            z-index: -100;
        }
        .title {
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
        .info-event {
            display: flex;
            flex-direction: column;
            justify-content: center;
            h4, span {
                color: gray;
            }
            h4 {
                font-size: 1rem;
                font-weight: bold;
            }
            h3 {
                font-size: 1.2rem;
            }
            span {
                font-size: 0.8rem;
            }
        }
        .row {
            padding: 0 10rem;
            margin: 0;
            margin-bottom: 5rem;
        }
        .cards {
            display: flex;
            justify-content: space-around;
        }
        .image {
            overflow: hidden;
            img {
                transition: all 2s;
                &:hover {
                    scale: 1.1;
                }
            }
        }
        .invers {
            flex-direction: row-reverse;
            h3, h4, span {
                text-align: end;

            }
        }
    }


</style>