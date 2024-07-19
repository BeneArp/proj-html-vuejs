<script>
    import { store } from '../../store';

    export default{
        name: 'InfoCard',

        data(){
            return{
                store,
            }
        }
    }

</script>

<template>

    <div class="col-4" v-for="card in store.InfoCard">
        <ul>
            <li><strong>{{card.title}}</strong></li>
            <li v-for="content in card.text">{{content}}</li>
            <i :class="card.classi"></i>
        </ul>
    </div>

</template>

<style lang="scss" scoped>
    @use "@fortawesome/fontawesome-free/css/all.min.css";

    .col-4{
        // debug
        // border: 2px solid green;

        ul{
            padding: 2em 1em 2em 4em;
            position: relative;
            // debug
            // border: 2px solid black;

            li{
                margin-top: 1em;
            }

            strong{
                font-size: 20px;
            }
        }


        i{
            position: absolute;
            top: 1.3em;
            left: 0.5em;
            vertical-align: middle;
            margin-right: 1em;
            color: #20adb1;
            font-size: 35px;
        }
        
    }

</style>