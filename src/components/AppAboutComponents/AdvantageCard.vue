<script>
    import { store } from '../../store';

    export default{
        name: 'AdvantageCard',

        data(){
            return{
                store,
            }
        }
    }

</script>

<template>

    <div class="col-3 text-center p-3" v-for="card in store.AdvantagesCards">
        <div class="icon">
            <i :class="card.icon"></i>
        </div>
        <div class="info">
            <h4>{{card.title}}</h4>
            <p>{{card.text}}</p>

            <span><a href="#">{{card.direction}} <i class="fa-solid fa-arrow-right"></i></a></span>
        </div>

    </div>

</template>

<style lang="scss" scoped>
    @use "@fortawesome/fontawesome-free/css/all.min.css";
    .col-3{
        transition: all 0.4s;

        &:hover{
            box-shadow: 0 0 40px rgba(51, 51, 51, 0.1);
        }
    }

    .icon{
        padding: 5em 2em 4em 2em;
        height: 50%;
        position: relative;

        i{
            font-size: 60px;
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
        }
    }

    .info{
        padding-bottom: 2em;

        a{
            font-weight: bold;
            color: black;
            font-size: 14px;
            transition: all 0.5s;

            &:hover{
                color: #20ad96;
            }

            i{
                vertical-align: middle;
            }
        }
    }

</style>