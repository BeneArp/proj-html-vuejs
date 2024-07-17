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
            <div class="col-2 logo">
                <img src="../assets/images/dark-logo.png" alt="logo" >
            </div>
            <div class="col-5 menu">
                <ul>
                    <li>
                        <a href="#">Home</a>
                        <i class="fa-solid fa-chevron-down"></i>
                    </li>
                    <li>
                        <a href="#">Home</a>
                        <i class="fa-solid fa-chevron-down"></i>
                    </li>
                    <li>
                        <a href="#">Home</a>
                        <i class="fa-solid fa-chevron-down"></i>
                    </li>
                    <li>
                        <a href="#">Home</a>
                        <i class="fa-solid fa-chevron-down"></i>
                    </li>
                    <li>
                        <a href="#">Home</a>
                        <i class="fa-solid fa-chevron-down"></i>
                    </li>
                    <li>
                        <a href="#">Home</a>
                        <i class="fa-solid fa-chevron-down"></i>
                    </li>
                </ul>
            </div>
            <div class="col-2 social">
                <i class="fa-brands fa-twitter"></i>
                <i class="fa-brands fa-facebook-f"></i>
                <i class="fa-brands fa-instagram"></i>
                <i class="fa-brands fa-linkedin"></i>
            </div>
        </nav>
    </header>
</template>

<style lang="scss" scoped>
    @use '../styles/partials/variables' as *;
    @use "@fortawesome/fontawesome-free/css/all.min.css";

    header {
        background-color: $light-grey;
        width: 100vw;
        nav {
            padding: 0 4rem;
            height: 80px;
            background-color: $white;
            justify-content: space-between;
            .logo {
                width: 12rem;
            }
            ul, li {
                display: flex;
                padding-bottom: 0.3rem;
            }
            ul {
                width: 100%;
                justify-content: space-between;
                margin: 0;

                li {
                    gap: 0.8rem;
                    align-items: center;

                    a {
                        text-decoration: none;
                        font-size: 1rem;
                        color: $black;
                    }
                    i {
                        font-size: 0.6rem;
                        color: $black;
                    }
                    &:hover {
                        border-bottom: solid $orange 0.1rem;
                        color: $orange;
                        a, i {
                            color: $orange;
                        }
                    }
                }

            }
            .social {
                text-align: end;
            }

        }
    }


</style>