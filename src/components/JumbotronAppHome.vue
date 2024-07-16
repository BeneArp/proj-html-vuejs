<script>
export default {
    name:'JumbotronAppHome.vue',
}
</script>


<template>
<section class="container-fluid">

    <div class="row justify-content-center align-items-center">

        <!-- div con testo -->
        <div class="col-5">
            <h1 class="text-center">
                Artist Coaching And Mentoring Might Be for You.
            </h1>
        </div>
    </div>

</section>
</template>


<style scoped lang="scss">
    section {
        background-color: aquamarine;
        
        .row {
            height: 600px;

            .col-5 {
                background-color: bisque;
                height: 200px;
            }
        }

        
    }

    
</style>