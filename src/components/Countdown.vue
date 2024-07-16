<script>
    export default {
        name: 'Countdown',
    }

</script>

<template>  
    <!-- countdown inizio evento -->
    <section class="container">
        <div class="row">
            <!-- lable -->
            <div class="col-5">
                <h4>Start TOMORROW! Our biggest event of the year...</h4>
            </div>
            <!-- timer -->
            <div class="col-3">
                <div class="countdown">01:22:40:45</div>
            </div>
            <!-- bottone biglietti -->
            <div class="col-1">
                <button> Get ticket</button>
            </div>
        </div>
    </section>
</template>

<style lang="scss" scoped>
    @use '../styles/partials/variables' as *;


    section {
        background-color: blue;
        height: 100px;
        .row {
            justify-content: space-between;
        }

    }
</style>