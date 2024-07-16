<script>
import Countdown from "./Countdown.vue";
    export default {
        name: 'AppHeader',
        components: {
            Countdown,
        }
    }

</script>

<template>  
    <header>
        <Countdown/>
        <!-- countdown inizio evento -->
        <nav class="row "></nav>
    </header>
</template>

<style lang="scss" scoped>
    @use '../styles/partials/variables' as *;

    nav {
            height: 100px;
            background-color: pink;
        }

</style>