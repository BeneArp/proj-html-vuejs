<script>

    export default {
        name: "AppFooter",
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

                        <li>382 via a caso di Miami</li>
                        <li>+1 (305) 547-9909 (9am - 5pm EST, Monday - Friday)</li>
                        <!-- indirizzo mail -->
                        <li><a href="#">support@maxcoach.com</a></li>
                        <!-- icone social -->
                        <li>
                            <i class="fa-brands fa-square-facebook"></i>
                            <i class="fa-brands fa-square-twitter"></i>
                            <i class="fa-brands fa-instagram"></i>
                            <i class="fa-brands fa-linkedin"></i>
                        </li>
                    </ul>
                </div>
                <!-- sezione explore -->
                <div class="col-2">
                    <ul>
                        <!-- titolo elenco -->
                        <li><strong>Explore</strong></li>

                        <li>Start here</li>
                        <li>Success story</li>
                        <li>Blog</li>
                        <li>Courses</li>
                        <li>Contact us</li>
                    </ul>
                </div>
                <!-- sezione informations -->
                <div class="col-2">
                    <ul>
                        <!-- titolo elenco -->
                        <li><strong>Information</strong></li>

                        <li>Membership</li>
                        <li>Purchase guide</li>
                        <li>Privacy policy</li>
                        <li>Terms of services</li>
                    </ul>
                </div>
                <div class="col-3">
                    <span><strong>Instagram</strong></span>
                    <span class="user">@maxcoach</span>
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
        // debug
        border: 2px solid red;

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
            }

            .ms-box{
                margin-top: 3em;
                color: #b4b4b4;
                font-size: 14px;
            }

            span{
                display: inline-block;
                margin-top: 0.8em;
            }

            .user{
                color: $orange;
            }
        }
    }

</style>