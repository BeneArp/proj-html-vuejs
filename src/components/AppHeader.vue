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
        <nav class="row ">
            <div class="col-2">
                <img src="../assets/images/dark-logo.png" alt="logo" class="logo">
            </div>
            <div class="col-6 menu">
                <ul>
                    <li>
                        <a href="#"><h1>Home</h1></a>
                        <i class="fa-solid fa-chevron-down"></i>
                    </li>
                </ul>
                <ul>
                    <li>
                        <a href="#"><h1>Home</h1></a>
                        <i class="fa-solid fa-chevron-down"></i>
                    </li>
                </ul>
                <ul>
                    <li>
                        <a href="#"><h1>Home</h1></a>
                        <i class="fa-solid fa-chevron-down"></i>
                    </li>
                </ul>
                <ul>
                    <li>
                        <a href="#"><h1>Home</h1></a>
                        <i class="fa-solid fa-chevron-down"></i>
                    </li>
                </ul>
                <ul>
                    <li>
                        <a href="#"><h1>Home</h1></a>
                        <i class="fa-solid fa-chevron-down"></i>
                    </li>
                </ul>
                <ul>
                    <li>
                        <a href="#"><h1>Home</h1></a>
                        <i class="fa-solid fa-chevron-down"></i>
                    </li>
                </ul>
            </div>
        </nav>
    </header>
</template>

<style lang="scss" scoped>
    @use '../styles/partials/variables' as *;
    @use '../styles/general.scss' as *;

    nav {
            height: 100px;
            background-color: pink;
            width: 100vw;
            justify-content: center;
            .menu {
                display: flex;
            }
    }

</style>