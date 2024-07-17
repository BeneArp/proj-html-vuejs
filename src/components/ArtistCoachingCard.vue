<script>
     import {store} from '../store'

    export default{
        name: 'ArtistCoachingCard',

        data(){
            return{
                store,
            }
        },

        methods:{
            getImagePath: function(imgPath){
                return new URL(imgPath, import.meta.url).href;
            }
        }
    }

</script>

<template>

    <div class="col-3" v-for="card in store.ArtistCards">
        <div>
            <img :src="getImagePath(`../assets/${card.image}`)" :alt="card.title">
        </div>
        <div>
            <h5>{{card.title}}</h5>
            <p>{{card.info}}</p>
        </div>
    </div>
    
</template>

<style lang="scss" scoped>
    .col-3{

        div{
            margin: 2em 0;
        }
    }


</style>