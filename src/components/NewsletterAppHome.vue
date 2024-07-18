<script>
export default {
    name: 'NewsletterAppHome.vue',
}
</script>

<template>

<section class="container-fluid">

    <!-- immagini di background -->
    <div id="img-left">
        <img src="../assets/images/artist-shape-color-paint-top-left.png" alt="">
    </div>

    <div id="img-right">
        <img src="../assets/images/artist-shape-color-paint-bottom-right.png" alt="">
    </div>

    
    
    <div class="container-md h-100">
        <div class="row h-100 align-items-center">
            <div class="col-3 offset-1">
                <p>Newsletter to get in touch</p>
            </div>

            <div class="col-7 text-end">
                <input id="email-input" type="text" placeholder="Your e-mail">
                <button><i class="fa-solid fa-arrow-right"></i></button>

            </div>

        </div>
    </div>

</section>

</template>

<style lang="scss" scoped>
@use '../styles/partials/variables' as *;
@use "@fortawesome/fontawesome-free/css/all.min.css" as *;

section {
    background-color: rgb(36, 66, 135);
    height: 200px;
    position: relative;

    #img-left {
        position: absolute;
        left: 0;
    }

    #img-right {
        position: absolute;
        right: 0;
        bottom: 0;
    }

    .container-md {
        position: absolute;
        top: 0;
        left: 0;

        .col-3 {
            p {
                font-size: 34px;
                font-family: "Playfair display", 'Times New Roman', Times, serif;
                color: white;
                text-align: right;
            }
        }

        .col-7 {
            #email-input {
                width: 80%;
                background-color: transparent;
                border: 0;
                border-bottom: 2px solid #F5F5F5;
                position: relative;
                
            }

            ::placeholder {
                color: white;
                font-size: 24px;
            }
        }

        button {
            background-color: transparent;
            border: 0;
            color: white;
            position: absolute;
            display: block;
            right: 9%;
            bottom: 45%;
            font-size: 24px;

        }
    }
}
</style>