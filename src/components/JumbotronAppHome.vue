<script>
export default {
    name:'JumbotronAppHome.vue',
}
</script>


<template>
<section class="container-fluid">

    <div class="row">

        <!-- contenuto in sfondo -->
        <div class="col-12" id="background-content">

            <!-- immagini sinistra -->
            <div id="artist-shape-02">
                <img src="../assets/images/artist-shape-02.png" alt="immagine di sfondo">
            </div>

            <div id="artist-shape-03">
                <img src="../assets/images/artist-shape-03.png" alt="immagine di sfondo">
            </div>

            <div id="artist-hero-image-03">
                <img src="../assets/images/artist-hero-image-03.png" alt="immagine di sfondo">
            </div>


            <!-- immagini destra -->
            <div id="artist-shape-01">
                <img src="../assets/images/artist-shape-01.png" alt="immagine di sfondo">
            </div>

            <div id="artist-shape-04">
                <img src="../assets/images/artist-shape-04.png" alt="immagine di sfondo">
            </div>

            <div id="artist-shape-05">
                <img src="../assets/images/artist-shape-05.png" alt="immagine di sfondo">
            </div>

            <div id="maxcoach-shape-12">
                <img src="../assets/images/maxcoach-shape-12.png" alt="immagine di sfondo">
            </div>
            
            
        
        </div>



        <!-- contenuto in primo piano -->
        <div class="col-12 d-flex justify-content-between align-items-center" id="foreground-content">

            <!-- div immagini sinistra -->
            <div class="col-3">
                <div id="img_left">
                    <img class="shadow" id="img-top" src="../assets/images/artist-hero-image-02.jpg" alt="immagine primo piano">

                    <img class="shadow" src="../assets/images/artist-hero-image-01.jpg" alt="immagine primo piano" id="img-bottom">

                </div>
                
            </div>

            <!-- div con testo -->
            <div class="col-5 text-center">
                <h2 class="styled-title">
                    Hello, Im Matin
                </h2>
                <h1>
                    Artist Coaching And Mentoring Might Be for You.
                </h1>

                <button type="button" class="btn btn-primary">Get started today</button>
            </div>

            <!-- div immagine destra -->
            <div class="col-3 align-self-end">
                <div id="img-right">
                    <img class="shadow" src="../assets/images/artist-hero-image-04.jpg" alt="immagine primo piano">
                </div>
            </div>
            

        </div>

        
    </div>

</section>
</template>


<style scoped lang="scss">

@use '../styles/partials/variables' as *;

// import font titolo
// @import url('https://fonts.googleapis.com/css2?family=Bad+Script&display=swap');
    section {
        
        .row {
            height: 600px;
            position: relative;

            #background-content {
                height: 100%;
                position: relative;

                #artist-shape-02 {
                    width: 45%;
                    img {
                        max-width: 100%;
                    }
                }

                #artist-shape-03 {
                    width: 20%;
                    position: absolute;
                    left: 2%;
                    top: 20%;

                    img {
                        max-width: 100;
                    }
                }

                #artist-hero-image-03 {
                    position: absolute;
                    bottom: 0;
                    left: 25%;
                }

                #artist-shape-01{
                    width: 45%;
                    position: absolute;
                    right: 3%;
                    top: 0;
                    
                    img {
                        max-width: 100%;
                    }

                }

                #artist-shape-04 {
                    position: absolute;
                    right: 5%;
                    top: 8%;
                }

                #artist-shape-05 {
                    position: absolute;
                    bottom: 0;
                    right: 2%;
                }

                #maxcoach-shape-12 {
                    position: absolute;
                    bottom: 8%;
                    right: 20%;
                }

            }

            #foreground-content {
               position: absolute;
               top: 0;
               left: 0; 

               .shadow {
                box-shadow: 0 0 5px black;
               }
            }

            .col-5 {

                .styled-title {
                    color: $light-blue;
                    font-family: Rossela Signature Font Demo, sans-serif;
                    letter-spacing: 0.1em;
                    font-size: 40px;
                }

                .btn-primary {
                    background-color: $orange;
                    padding:10px 30px;
                    font-weight: bold;
                    margin-top: 50px;
                    border-color:  $orange;

                    &:hover {
                        background-color: $light-blue;
                        border-color: $light-blue;
                    }
                }
                
            }

            .col-3 {
               
                #img_left {
                    width: 100%;
                    height: 600px;
                    position: relative;
                    

                    #img-top {
                        position: absolute;
                        right: -20%;
                        top: 10%
                    }

                    #img-bottom {
                        position: absolute;
                        bottom: 5%;
                        left: 10%;
                    }
                }

                #img-right {
                    margin-bottom: 30px;
                }
            
                
            }

            
                

                
        }

        
    }

    
</style>