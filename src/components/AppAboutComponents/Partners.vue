<script>
    import { store } from '../../store';

    export default{
        name: 'Partners',

        data(){
            return{
                store,
            }
        },

        methods:{
            getImagePath: function(imgPath){
                return new URL(imgPath, import.meta.url).href;
            },
        }
    }

</script>

<template>

    <div class="container-lg">
        <div class="row flex-nowrap align-self-center">
            <div class="col-2" v-for="logo in store.partners">
                <a :href="logo.url">
                    <img :src="getImagePath(`../assets/${logo.image}`)" alt="">
                </a>
            </div>
        </div>
    </div>

</template>

<style lang="scss" scoped>
    .row{
        overflow: hidden;
        height: 100px;

        div{
            position: relative;

            img{
                position: absolute;
                top: 50%;
                left: 50%;
                transform: translate(-50%, -50%);
                filter: brightness(1.4);
                transition: all 1s;

                &:hover{
                    filter: brightness(1);
                }
            }
        }
    }
    
</style>