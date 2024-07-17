<script>
export default {
    name:'JumbotronAppHome.vue',
}
</script>


<template>
<section class="container-fluid">

    <div class="row justify-content-between align-items-center">

        <!-- div immagini sinistra -->
        <div class="col-3">
            <div id="img_left">
                <img id="img-top" src="../assets/images/artist-hero-image-02.jpg" alt="">

                <img src="../assets/images/artist-hero-image-01.jpg" alt="" id="img-bottom">

            </div>
            
        </div>

        <!-- div con testo -->
        <div class="col-5 text-center">
            <h2 class="styled-title">
                Hello, I'm Matin
            </h2>
            <h1>
                Artist Coaching And Mentoring Might Be for You.
            </h1>

            <button type="button" class="btn btn-primary">Get started today</button>
        </div>

        <!-- div immagine destra -->
        <div class="col-3 align-self-end">
            <div id="img-right">
                <img src="../assets/images/artist-hero-image-04.jpg" alt="">
            </div>
        </div>
    </div>

</section>
</template>


<style scoped lang="scss">

@use '../styles/partials/variables' as *;
    section {
        background-color: aquamarine;
        
        .row {
            height: 600px;

            .col-5 {
                // background-color: bisque;

                .styled-title {
                    color: $light-blue;
                    font-style: italic;
                    font-weight: 200;
                }

                .btn-primary {
                    background-color: $orange;
                    padding:10px 30px;
                    font-weight: bold;
                    margin-top: 50px;

                    &:hover {
                        background-color: $light-blue;
                    }
                }
                
            }

            .col-3 {
                // background-color: blue;
                

                #img_left {
                    width: 100%;
                    height: 600px;
                    position: relative;
                    // background-color: green;
                    

                    #img-top {
                        position: absolute;
                        right: -20%;
                        top: 10%
                    }

                    #img-bottom {
                        position: absolute;
                        bottom: 5%;
                        left: 0;
                    }
                }

                #img-right {
                    margin-bottom: 30px;
                }
            
                
            }

            
                

                
        }

        
    }

    
</style>