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
        <img id="shape-right" src="../assets/images/maxcoach-shape-13-96x96.png" alt="">
        <img id="round" src="../assets/images/artist-shape-03-201x300.png" alt="">
        <!-- titolo della sezione -->
        <div class="col-4 title">
                <h3>Upcoming Events</h3>
                <h2>Let's Work Together</h2>
        </div>
        <div class="row" v-for="event in store.upcomingEvent">
            <div class="col-6 cards" v-for="item in event.firstRow">
                <div class="col-6 bb">
                    <img :src="item.imageEvent" alt="immagine evento">
                </div>
                <div class="col-6 bb">
                    <h4>{{ item.dataEvent }}</h4>
                    <h3>{{ item.nameEvent }}</h3>
                    <span>
                        <i class="fa-solid fa-location-dot"></i>
                        {{ item.location }} 
                    </span>
                </div>
            </div>
            <div class="col-6 cards" v-for="item in event.secondRow">
                <div class="col-6 bb">
                    <h4>{{ item.dataEvent }}</h4>
                    <h3>{{ item.nameEvent }}</h3>
                    <span>
                        <i class="fa-solid fa-location-dot"></i>
                        {{ item.location }} 
                    </span>
                </div>
                <div class="col-6 bb">
                    <img :src="item.imageEvent" alt="immagine evento">
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
        margin-bottom: 5rem;
        #shape-left {
            transform: rotate(-150deg);
            position: absolute;
            left: -5px;
            bottom: 2px;
            filter: invert(100%);
            z-index: -100;
        }
        #shape-right, #round {
            height: 350px;
            transform: rotate(250deg);
            position: absolute;
            right: -5px;
            top: 2px;
            z-index: -100;
        }
        #shape-right {
            height: 150px;
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

        .row {
            padding: 0 7rem;
            margin: 0;
        }
        .cards {
            border:solid black 0.1px;
            display: flex;
        }
        .bb {
            background-color: pink;
            border: solid red ;
        }
    }


</style>