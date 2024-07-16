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
                <div class="col-5">
                    <ul>
                        <!-- titolo elenco -->
                        <li><strong>Address</strong></li>

                        <li>382 via a caso di Miami</li>
                        <li>+1 (305) 547-9909 (9am - 5pm EST, Monday - Friday)</li>
                        <!-- indirizzo mail -->
                        <li><a href="#">support@maxcoach.com</a></li>
                        <!-- icone social -->
                        
                        <li></li>
                    </ul>
                </div>
                <div class="col-2">

                </div>
                <div class="col-2">

                </div>
                <div class="col-3">

                </div>
            </div>

        </div>
    </footer>

</template>

<style lang="scss" scoped>
    @use '../styles/partials/variables' as *;

    footer{
        background-color: $white;
        // debug
        border: 2px solid red;

        .container-lg{
            // debug
            background-color: orange;
            height: 600px;

            [class*="col-"]{
                // debug
                border: 2px solid black;
                height: 600px;
            }
        }
    }

</style>