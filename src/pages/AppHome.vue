<script>

import JumbotronAppHome from '../components/JumbotronAppHome.vue';
import ArtistCoachingAppHome from '../components/ArtistCoachingAppHome.vue';
import MartinGarrixAppHome from '../components/MartinGarrixAppHome.vue';
import SliderAppHome from '../components/SliderAppHome.vue';
import AppVideo from '../components/AppVideo.vue';
import OnlineCourses from '../components/OnlineCourses.vue';
import TipsAppHome from '../components/TipsAppHome.vue'

export default {
    name: 'AppHome',
    components: {
        JumbotronAppHome,
        ArtistCoachingAppHome,
        MartinGarrixAppHome,
        SliderAppHome,
        AppVideo,
        OnlineCourses,
        TipsAppHome,
    },

    data(){
            return{
                videoHomePage:{
                    image: "../assets/images/artist-video-poster.jpg",
                    url: "https://www.youtube.com/watch?v=ElFJ1qcl74U",
                }
            }
    }
}

</script>


<template>

<JumbotronAppHome />
<ArtistCoachingAppHome/>
<MartinGarrixAppHome />

<SliderAppHome />

<section class="video-link">
    <img id="circle-decoration-left" src="../assets/images/maxcoach-shape-05.png" alt="">
    <img id="circle-decoration-right" src="../assets/images/maxcoach-shape-12.png" alt="">
    <AppVideo :video="videoHomePage"/>
</section>

<OnlineCourses/>
<TipsAppHome/>
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