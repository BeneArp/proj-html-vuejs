<script>
    export default {
        name: 'Countdown',
        data(){
            return{
                countdownEvent: [{
                    title: 'Start TOMORROW! Our biggest event of the year...',
                    time: '01:22:40:45',
                    linkticket: '#'

                }]
            }
        }
    }

</script>

<template>  
    <!-- countdown inizio evento -->
    <section class="container">
        <div class="row"  v-for="event in countdownEvent">
            <!-- lable -->
            <div class="col-6">
                <h4>{{ event.title }}</h4>
            </div>
            <!-- timer -->
            <div class="col-3 clock">
                <i class="fa-regular fa-clock"></i>
                <div class="countdown">{{ event.time }}</div>
            </div>
            <!-- bottone biglietti -->
            <div class="col-3">
                <button> Get ticket</button>
            </div>
        </div>
    </section>
</template>

<style lang="scss" scoped>
    @use '../styles/partials/variables' as *;
    @use "@fortawesome/fontawesome-free/css/all.min.css";


    section {
        height: 50px;
        .row {
            width: 60%;
            height: 100%;
            justify-content: space-between;
            margin: auto;
            align-items: center;
            h4 {
                font-size: 0.9rem;
                color: gray;
            }

            .countdown {
                display: inline-block;
                margin-left: 0.5rem;
            }
            
            button {
                background-color: $orange;
                border-style: none;
                border-radius: 0.2rem;
                padding: 0.2rem 1.5rem;
                color: #ffffff;
                font-weight: bold;
                &:hover{
                    background-color: $light-blue;
                }
            }
        }

    }
</style>