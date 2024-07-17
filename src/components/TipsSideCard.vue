<script>

    export default{
        name: "TipsSideCard",
    }

</script>

<template>

    <div class="col-3  align-self-end g-0">
        <a href="#">
            <!-- immagine -->
            <div>
                <img src="../assets/images/artist-blog-03-480x356.jpeg" alt="">
            </div>
            <!-- descrizione -->
            <div class="post-description">
                <span>ARTIST</span>
                <h5>Brush Strokes Energize Trees in Paintings</h5>
                <span><i class="fa-regular fa-calendar"></i>May 15, 2020</span>
                <span><i class="fa-regular fa-eye"></i>6,901 views</span>
            </div>
        </a>    
    </div>

    <div class="col-3 g-0">
        <a href="#">
            <!-- immagine -->
            <div>
                <img src="../assets/images/artist-blog-01-480x356.jpg" alt="">
            </div>
            <!-- descrizione -->
            <div class="post-description">
                <span>ARTIST</span>
                <h5>Pocket-Sized Notebooks Hold Miniature Paintings</h5>
                <span><i class="fa-regular fa-calendar"></i>May 15, 2020</span>
                <span><i class="fa-regular fa-eye"></i>9,824 views</span>
            </div>
        </a>    
    </div>

</template>

<style lang="scss" scoped>
    @use "@fortawesome/fontawesome-free/css/all.min.css";
    @use '../styles/partials/variables' as *;

    .col-3{
        overflow: hidden;
        box-shadow: 0 14px 59px rgba(0, 0, 0, 0.12);
        // debug

        img{
            transition: all 2s;
        }

        .post-description{
            padding: 1.5em;
            background-color: $white;
            height: 100%;

            span{
                display: block;
                margin-top: 0.5em;

                i{
                    margin-right: 0.5em;
                }
            }
        }

        a{
            text-decoration: none;
            color: black;
        }

        &:hover img{
            scale: 1.1;
        }
    }


</style>