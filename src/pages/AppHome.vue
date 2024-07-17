<script>

import JumbotronAppHome from '../components/JumbotronAppHome.vue';
import ArtistCoachingAppHome from '../components/ArtistCoachingAppHome.vue';
import MartinGarrixAppHome from '../components/MartinGarrixAppHome.vue';
import SliderAppHome from '../components/SliderAppHome.vue';


export default {
    name: 'AppHome',
    components: {
        JumbotronAppHome,
        ArtistCoachingAppHome,
        MartinGarrixAppHome,
        SliderAppHome
    }
}

</script>


<template>

<JumbotronAppHome />
<ArtistCoachingAppHome/>
<MartinGarrixAppHome />

<SliderAppHome />
</template>


<style scoped lang="scss">

</style>