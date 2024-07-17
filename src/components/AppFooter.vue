<script>
    import {store} from '../store'

    export default {
        name: "AppFooter",

        data(){
            return{
                store,
            }
        }
    }


</script>

<template>

    <!-- inizio footer -->
    <footer>
        <!-- container -->
        <div class="container-lg">

            <div class="row">
                <!-- sezione address -->
                <div class="col-5">
                    <ul>
                        <!-- titolo elenco -->
                        <li><strong>Address</strong></li>

                        <li v-for="link in store.footerAddres"><a :href="link.url">{{ link.text }}</a></li>
                        <!-- icone social -->
                        <li>
                            <a v-for="icona in store.footerIcons" :href="icona.url"><i :class="icona.classi"></i></a>
                        </li>
                    </ul>
                </div>
                <!-- sezione explore -->
                <div class="col-2">
                    <ul>
                        <!-- titolo elenco -->
                        <li><strong>Explore</strong></li>

                        <li v-for="link in store.footerExplore"><a :href="link.url">{{ link.text }}</a></li>
                    </ul>
                </div>
                <!-- sezione informations -->
                <div class="col-2">
                    <ul>
                        <!-- titolo elenco -->
                        <li><strong>Information</strong></li>

                        <li v-for="link in store.footerInformation"><a :href="link.url">{{ link.text }}</a></li>
                    </ul>
                </div>
                <div class="col-3">
                    <span><strong>Instagram</strong></span>
                    <a href="#"><span class="user">@maxcoach</span></a>
                </div>
            </div>

            <div class="ms-box text-center">
                <span>&#169 2020 Maxcoach. All Rights Reserved</span>
            </div>

        </div>
    </footer>

</template>

<style lang="scss" scoped>
    @use '../styles/partials/variables' as *;
    @use "@fortawesome/fontawesome-free/css/all.min.css";

    footer{
        background-color: $white;
        max-width: 100vw;
        overflow: hidden;
        // debug

        .container-lg{
            // debug
            // background-color: orange;
            // height: 600px;

            // [class*="col-"]{
            //     // debug
            //     border: 2px solid black;
            //     // height: 600px;
            // }

            li{
                margin-top: 0.8em;

            }

            i{
                font-size: 30px;
                margin: 1em 1.5em 1em 0;
                color: #b4b4b4;

                &:hover{
                    color: $orange;
                }
            }

            .ms-box{
                margin: 2em 0;
                color: #b4b4b4;
                font-size: 14px;
            }

            span{
                display: inline-block;
                margin-top: 0.8em;
            }

            .user{
                color: $orange;
                margin-left: 0.5em;
            }

            a{
                text-decoration: none;
                color: black;

                &:hover{
                    color: $orange;
                }
            }
        }
    }

</style>