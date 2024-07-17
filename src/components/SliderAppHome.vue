<script>
import {store} from '../store'

export default {
    name: 'SliderAppHome.vue',

    data(){
            return{
                store,
            }
        },
}
</script>


<template>
<section class="container-fluid">

    <div class="container-md">

        <!-- titolo -->
        <div class="text-center">
            <h2 id="styled-title">
                Testimonials
            </h2>

            <h2 id="main-title">
                Why do people love me?
            </h2>

        </div>


        
        
    </div>

</section>
</template>


<style lang="scss" scoped>
@use '../styles/partials/variables' as *;

section {
    height: 500px;
    background-color: $light-grey;

    #main-title {
        font-size: 34px;
        margin: 30px 0;
        font-weight: bolder;
    }

    #styled-title {
        color: $light-blue;
        font-family: Rossela Signature Font Demo, sans-serif;
        letter-spacing: 0.1em;
        font-size: 40px;
    }
    
}





</style>