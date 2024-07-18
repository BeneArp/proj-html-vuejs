<script>
import {store} from '../store'
import Countdown from "./Countdown.vue";
// import { router } from '../router';

    export default {
        name: 'AppHeader',
        components: {
            Countdown,
        },
            data(){
            return{
                store,
                // router,
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
                <div class="col-5">
                    <ul>
                        <li v-for="item in store.menuHeader">
                            <a href="#">{{item.text}}</a>
                            <div class="dropdown">
                                <i class="fa-solid fa-chevron-down chevron button btn btn-secondary" type="button" data-bs-toggle="dropdown" aria-expanded="false"></i>
                                <ul class="dropdown-menu" style="">
                                    <li><a class="dropdown-item" v-for="listPage in store.pagesItem" href="#">{{listPage.text}}</a></li>
                                </ul>
                            </div>

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
        <div>
            <ul>
                <li>
                    <router-link :to="{ name: 'home'}">
                        Home
                    </router-link>
                </li>
                <li>
                    <router-link :to="{ name: 'about us' }">
                        About Us
                    </router-link>
                </li>
                <li>
                    <router-link :to="{ name: 'contact me' }">
                        Contact Me
                    </router-link>
                </li>
            </ul>
        </div>

    </header>
</template>

<style lang="scss" scoped>
    @use '../styles/partials/variables' as *;
    @use "@fortawesome/fontawesome-free/css/all.min.css" as *;
    // @use '../styles/general.scss' as *;

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
                    gap: 0.5rem;
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
                    .chevron {
                        background-color: transparent;
                        border-style: none;
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