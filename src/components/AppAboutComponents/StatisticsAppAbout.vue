<script>
import { store } from '../../store';
export default {
    name: 'StatisticsAppAbout.vue',

    data(){
        return{
            store,

        }
    },
    

    methods: {

        increment(stat) {

            // intervallo di tempo in millisecondi
            let interval = 5;
            // passo di incremento
            let step = 1;

            // controllo per diversa velocità in base a grandezza del numero
            if (stat.data >= 1000 && stat.data < 2000) {
                step = 3; 
            } else if (stat.data > 2000) {
                step = 5
                interval = 2;
            } else if (stat.data <= 200) {
                interval = 17;
            }

            // se counter minore del data continua incremento altrimenti si ferma
            const timer = setInterval(() => {
                if (stat.counter < stat.data) {
                    stat.counter += step;
                } else {
                    clearInterval(timer);
                }
            }, interval);
        
        }
    },
    mounted() {
        // chiamo funzione al caricamento della pagina per ogni oggetto dell'array
        store.stats.forEach(stat => this.increment(stat));
        
    },
   
}

</script>

<template>
<section class="container-fluid">
    <div class="container-md">

        <div class="row align-items-center">
            <div class="col-3" v-for="(stat, index) in store.stats" :key="index">
                <div class="numbers">
                    <span>{{ stat.counter }}</span>
                    <span>{{ stat.attribute }}</span>
                </div>

                <div class="text">
                    <h5>{{ stat.title }}</h5>
                </div>

            </div>

        </div>
    </div>
</section>

</template>


<style lang="scss" scoped>

section {
    background-color: rgb(245, 247, 250);
    
    .row {
        height: 300px;
    }

    .col-3 {
        font-weight: bold;
        text-align: center;

        .numbers {
            font-size: 48px;
            color: #20ad96;
        }

        .text {
           h5 {
            font-size: 15px;
            font-weight: bold;
           }
        }
    }
}

</style>