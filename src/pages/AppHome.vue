<script>

import JumbotronAppHome from '../components/JumbotronAppHome.vue';
import ArtistCoachingAppHome from '../components/ArtistCoachingAppHome.vue';
import MartinGarrixAppHome from '../components/MartinGarrixAppHome.vue';


export default {
    name: 'AppHome',
    components: {
        JumbotronAppHome,
        ArtistCoachingAppHome,
        MartinGarrixAppHome,
    }
}

</script>


<template>

<JumbotronAppHome />
<ArtistCoachingAppHome/>
<MartinGarrixAppHome />
</template>


<style scoped lang="scss">

</style>