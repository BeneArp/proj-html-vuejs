<script>
    export default {
        name: 'OnlineCourses',
    }

</script>

<template>
    <section class="container">
        <div class="col-4 title">
                <h3>Artist coaching</h3>
                <h2>Latest Online Courses</h2>
            </div>
        <div class="row">

            <div class="col-3">
                <div>
                    <img src="../assets/images/artist-course-08-480x480.jpg" alt="">
                </div>
                <div class="info-art">
                    <h4 class="price">$18.00</h4>
                    <h4 class="artwork-title">The Acrilic Paintin Academy</h4>
                    <div class="icon-lessons">
                        <div>
                            <i class="fa-regular fa-file-lines"></i>
                            <span>4 Lessons</span>
                        </div>
                        <div>
                            <i class="fa-regular fa-user"></i>
                            <span>50 Students</span>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-3">
                <div>
                    <img src="../assets/images/artist-course-07-480x480.jpg" alt="">
                </div>
                <div class="info-art">
                    <h4 class="price">$18.00</h4>
                    <h4 class="artwork-title">The Acrilic Paintin Academy</h4>
                    <div class="icon-lessons">
                        <div>
                            <i class="fa-regular fa-file-lines"></i>
                            <span>4 Lessons</span>
                        </div>
                        <div>
                            <i class="fa-regular fa-user"></i>
                            <span>50 Students</span>
                        </div>
                    </div>
                </div>

            </div>
            <div class="col-3">
                <div>
                    <img src="../assets/images/artist-course-06-480x480.jpg" alt="">
                </div>
                <div class="info-art">
                    <h4 class="price">$18.00</h4>
                    <h4 class="artwork-title">The Acrilic Paintin Academy</h4>
                    <div class="icon-lessons">
                        <div>
                            <i class="fa-regular fa-file-lines"></i>
                            <span>4 Lessons</span>
                        </div>
                        <div>
                            <i class="fa-regular fa-user"></i>
                            <span>50 Students</span>
                        </div>
                    </div>
                </div>

            </div>
            <div class="col-3">
                <div>
                    <img src="../assets/images/artist-course-05-480x480.jpg" alt="">
                </div>
                <div class="info-art">
                    <h4 class="price">$18.00</h4>
                    <h4 class="artwork-title">The Acrilic Paintin Academy</h4>
                    <div class="icon-lessons">
                        <div>
                            <i class="fa-regular fa-file-lines"></i>
                            <span>4 Lessons</span>
                        </div>
                        <div>
                            <i class="fa-regular fa-user"></i>
                            <span>50 Students</span>
                        </div>
                    </div>
                </div>

            </div>
            <div class="col-3">
                <div>
                    <img src="../assets/images/artist-course-04-480x480.jpg" alt="">
                </div>
                <div class="info-art">
                    <h4 class="price">$18.00</h4>
                    <h4 class="artwork-title">The Acrilic Paintin Academy</h4>
                    <div class="icon-lessons">
                        <div>
                            <i class="fa-regular fa-file-lines"></i>
                            <span>4 Lessons</span>
                        </div>
                        <div>
                            <i class="fa-regular fa-user"></i>
                            <span>50 Students</span>
                        </div>
                    </div>
                </div>

            </div>
            <div class="col-3">
                <div>
                    <img src="../assets/images/artist-course-03-480x480.jpg" alt="">
                </div>
                <div class="info-art">
                    <h4 class="price">$18.00</h4>
                    <h4 class="artwork-title">The Acrilic Paintin Academy</h4>
                    <div class="icon-lessons">
                        <div>
                            <i class="fa-regular fa-file-lines"></i>
                            <span>4 Lessons</span>
                        </div>
                        <div>
                            <i class="fa-regular fa-user"></i>
                            <span>50 Students</span>
                        </div>
                    </div>
                </div>

            </div>
            <div class="col-3">
                <div>
                    <img src="../assets/images/artist-course-02-480x480.jpg" alt="">
                </div>
                <div class="info-art">
                    <h4 class="price">$18.00</h4>
                    <h4 class="artwork-title">The Acrilic Paintin Academy</h4>
                    <div class="icon-lessons">
                        <div>
                            <i class="fa-regular fa-file-lines"></i>
                            <span>4 Lessons</span>
                        </div>
                        <div>
                            <i class="fa-regular fa-user"></i>
                            <span>50 Students</span>
                        </div>
                    </div>
                </div>

            </div>
            <div class="col-3">
                <div>
                    <img src="../assets/images/artist-course-01-480x480.jpg" alt="">
                </div>
                <div class="info-art">
                    <h4 class="price">$18.00</h4>
                    <h4 class="artwork-title">The Acrilic Paintin Academy</h4>
                    <div class="icon-lessons">
                        <div>
                            <i class="fa-regular fa-file-lines"></i>
                            <span>4 Lessons</span>
                        </div>
                        <div>
                            <i class="fa-regular fa-user"></i>
                            <span>50 Students</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<style lang="scss" scoped>
@use '../styles/partials/variables' as *;
@use "@fortawesome/fontawesome-free/css/all.min.css" as *;
    .container {
        // background-color: pink;
        // min-height: 200px;
        padding: 5rem 0;
        .col-3 {
            // border: solid black 0.01px;
            min-height: 100px;
            margin-bottom: 2rem;
            position: relative;
            .info-art {
                width: 90%;
                padding: 2rem;
                &:hover {
                    border: solid $orange 0.1rem;
                }
                .price, .artwork-title  {
                    font-size: 1.3rem;
                    font-weight: bold;
                }
                .price{
                    color: $orange;
                }
                .artwork-title {
                    margin: 1.3rem 0;
                }
                .icon-lessons {
                    font-size: 0.9rem;
                    color: grey;
                    display: flex;
                    gap: 1rem;
                    i {
                        margin-right:1rem ;
                    }
                }
            }
        }
        .title{
            margin: 3rem auto;
            h3{
            font-family: Rossela Signature Font Demo, sans-serif;
            color: $light-blue;
            letter-spacing: 0.1em;
            font-size: 40px;
            text-align: center;
            }
            h2 {
                text-align: center;
                font-weight: bold;
            }

        }

    }
</style>