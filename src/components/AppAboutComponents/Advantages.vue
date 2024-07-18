<script>
    import AdvantageCard from './AdvantageCard.vue';

    export default{
        name: 'Advantages',

        components:{
            AdvantageCard,
        }
    }

</script>

<template>

    <section>

        <div class="container lg">
            <!-- titolo -->
            <div id="section-title">
                <span>EDUCATION FOR EVERYONE</span>
                <h2><strong>Online</strong> Coaching Lessons <strong>For Remote Learning.</strong></h2>
            </div>

            <!-- sezione vantaggi -->
            <div class="container-lg">
                <div class="row">
                    <AdvantageCard/>
                </div>
            </div>
        </div>

    </section>

</template>

<style lang="scss" scoped>
    @use '../../styles/partials/variables' as *;

    section{
        padding: 3em 0;
    }

    #section-title{
        width: fit-content;
        margin: 0 auto;
        text-align: center;

        h2{
            color: #20ad96;

            strong{
                color: $black
            }
        }
    }

</style>