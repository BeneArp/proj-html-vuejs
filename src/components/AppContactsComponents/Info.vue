<script>
    import InfoCard from './InfoCard.vue';

    export default{
        name: 'info',

        components:{
            InfoCard
        }
    }

</script>

<template>

    <div class="container-lg p-4">
        <div id="info-title">
            <h2>For more information about our courses, get in touch with MaxCoach via contacts</h2>
        </div>

        <div class="row">
            <InfoCard/>
        </div>
    </div>

</template>

<style lang="scss" scoped>

    .container-lg{
        // debug
        // background-color: lightseagreen;

        h2{
            font-weight: bold;
            text-align: center;
            width: 60%;
            margin: 2em auto;
        }

    }

</style>