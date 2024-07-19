<script>
    import { store } from '../store';

    export default{
        name: "TipsSideCard",

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

    <div class="col-3 g-0" v-for="(post, index) in store.SideCards" :class="index === 1 ? 'align-self-start' : '' ">
        <a :href="post.url">
            <!-- immagine -->
            <div>
                <img :src="getImagePath(`../assets/${post.image}`)" alt="">
            </div>
            <!-- descrizione -->
            <div class="post-description">
                <span>{{post.lable}}</span>
                <h5>{{post.title}}</h5>
                <span><i class="fa-regular fa-calendar"></i>{{post.date}}</span>
                <span><i class="fa-regular fa-eye"></i>{{post.views}}</span>
            </div>
        </a>    
    </div>
    
</template>

<style lang="scss" scoped>
    @use "@fortawesome/fontawesome-free/css/all.min.css";
    @use '../styles/partials/variables' as *;

    .col-3{
        overflow: hidden;
        box-shadow: 0 14px 59px rgba(0, 0, 0, 0.12);
        // debug

        img{
            transition: all 2s;
        }

        .post-description{
            padding: 1.5em;
            background-color: $white;
            height: 100%;

            span{
                display: block;
                margin-top: 0.5em;

                i{
                    margin-right: 0.5em;
                }
            }

            h5:hover{
                color: $orange;
            }
        }

        a{
            text-decoration: none;
            color: black;
        }

        &:hover img{
            scale: 1.1;
        }
    }


</style>