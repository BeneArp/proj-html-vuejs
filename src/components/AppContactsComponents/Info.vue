<script>

    export default{
        name: 'info'
    }

</script>

<template>

    <div class="container-lg p-4">
        <div id="info-title">
            <h2>For more information about our courses, get in touch with MaxCoach via contacts</h2>
        </div>

        <div class="row">
            <div class="col-4"></div>
            <div class="col-4"></div>
            <div class="col-4"></div>
        </div>
    </div>

</template>

<style lang="scss" scoped>

    .container-lg{
        // debug
        background-color: lightseagreen;

        h2{
            font-weight: bold;
            text-align: center;
            width: 60%;
            margin: 2em auto;
            // debug
            border: 2px solid violet;
        }

        .row{
            // debug
            background-color: lightgreen;
            height: 400px;

            .col-4{
                // debug
                border: 2px solid green;
            }
        }
    }

</style>