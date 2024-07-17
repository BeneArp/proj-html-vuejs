<script>

    export default{
        name: 'AppVideo',

        props:{
            video: Object
        },

        methods:{
            getImagePath: function(imgPath){
                return new URL(imgPath, import.meta.url).href;
            }
        },
    }

</script>

<template>

    <div>
        <div class="video">
            <a :href="video.url">
                <img class="cover" :src="getImagePath(`../assets/${video.image}`)" alt="copertina video">
                <img class="player" src="../assets/images/icon-youtube-play.png" alt="Logo YouTube">
            </a>      
        </div>
    </div>
    <!-- <iframe width="560" height="315" src="https://www.youtube.com/embed/ElFJ1qcl74U?si=dQZSiZZ3BrYbXvYQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe> -->

</template>

<style lang="scss" scoped>
    div{
        max-width: 100vw;
        // debug

        .video{
            width: 40%;
            border-radius: 10px;
            margin: 0 auto;
            overflow: hidden;
            position: relative;
            box-shadow: 0px 130px 50px -100px rgba(51, 51, 51, 0.22);

            .cover{
                height: 100%;
                width: 100%;
                transition: all 2s;

                &:hover{
                    scale: 1.1;
                }
            }

            .player{
                height: 60px;
                position: absolute;
                top: 50%;
                left: 50%;
                transform: translate(-50%, -50%);
            }
        }
    }


</style>