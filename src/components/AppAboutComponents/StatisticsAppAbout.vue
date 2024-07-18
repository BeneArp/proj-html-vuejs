<script>
import { store } from '../../store';
export default {
    name: 'StatisticsAppAbout.vue',

    data(){
        return{
            store,
        }
    },
}

</script>

<template>
<section class="container-fluid">
    <div class="container-md">

        <div class="row align-items-center">
            <div class="col-3" v-for="(stat, index) in store.stats" :key="index">
                <div class="numbers">
                    <span>{{ stat.data }}</span>
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