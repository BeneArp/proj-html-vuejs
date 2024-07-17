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
<AppVideo :video="videoHomePage"/>

</template>


<style scoped lang="scss">

</style>