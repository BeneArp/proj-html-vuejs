<script>

import JumbotronAppHome from '../components/JumbotronAppHome.vue';
import ArtistCoachingAppHome from '../components/ArtistCoachingAppHome.vue';
import AppVideo from '../components/AppVideo.vue';

export default {
    name: 'AppHome',
    components: {
        JumbotronAppHome,
        ArtistCoachingAppHome,
        AppVideo,
    },

    data(){
            return{
                videoHomePage:{
                    image: "../assets/images/artist-video-poster.jpg",
                    url: "https://www.youtube.com/watch?v=ElFJ1qcl74U",
                    messaggio: "maremma santa"
                }
            }
    }
}

</script>


<template>

<JumbotronAppHome />
<ArtistCoachingAppHome/>
<section class="video-link">
    <img id="circle-decoration-left" src="../assets/images/maxcoach-shape-05.png" alt="">
    <img id="circle-decoration-right" src="../assets/images/maxcoach-shape-12.png" alt="">
    <AppVideo :video="videoHomePage"/>
</section>


</template>


<style scoped lang="scss">
    .video-link{
        padding: 4em 0;
        position: relative;
        // debug

        #circle-decoration-left{
            position: absolute;
            left: 27%;
            top: 10%;
        }

        #circle-decoration-right{
            position: absolute;
            right: 26%;
            bottom: 4%;
        }
    }

</style>