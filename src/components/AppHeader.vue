<script>
import {store} from '../store'
import Countdown from "./Countdown.vue";
    export default {
        name: 'AppHeader',
        components: {
            Countdown,
        },
            data(){
            return{
                store,
            }
        }
    }

</script>

<template>  
    <header>
        <section class="container-fluid">
            <Countdown/>
            <!-- countdown inizio evento -->
            <nav class="row ">
                <div class="col-2 logo">
                    <img src="../assets/images/dark-logo.png" alt="logo" >
                </div>
                <div class="col-5 menu">
                    <ul>
                        <li v-for="item in store.menuHeader">
                            <a href="#">{{item.text}}</a>
                            <i class="fa-solid fa-chevron-down"></i>
                        </li>

                    </ul>
                </div>
                <div class="col-2 social">
                    <a v-for="icona in store.footerIcons" :href="icona.url">
                        <i :class="icona.classi"></i>
                    </a>
                </div>
            </nav>
        </section>

    </header>
</template>

<style lang="scss" scoped>
    @use '../styles/partials/variables' as *;
    @use "@fortawesome/fontawesome-free/css/all.min.css";

    header {
        background-color: $light-grey;
        width: 100vw;
        .container {
            width: 100vw;
        }
        nav {
            padding: 0 4.5rem;
            height: 80px;
            background-color: $white;
            justify-content: space-between;
            align-items: center;
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
                        color: gray;
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
                color: gray;
                a {
                    color: gray;
                    font-size: 1.2rem;
                    margin-left: 0.9rem;
                    &:hover{
                        color:$orange ;
                    }
                }
                
            }

        }
    }


</style>