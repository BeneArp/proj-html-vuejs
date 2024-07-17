<script>

import JumbotronAppHome from '../components/JumbotronAppHome.vue';
import ArtistCoachingAppHome from '../components/ArtistCoachingAppHome.vue'
import OnlineCourses from '../components/OnlineCourses.vue';

export default {
    name: 'AppHome',
    components: {
        JumbotronAppHome,
        ArtistCoachingAppHome,
        OnlineCourses
    }
}

</script>


<template>

<JumbotronAppHome />
<ArtistCoachingAppHome/>
<OnlineCourses/>
</template>


<style scoped lang="scss">

</style>