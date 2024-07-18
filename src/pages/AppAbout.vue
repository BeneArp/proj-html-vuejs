<script>
    import BreadCrumbs from '../components/AppAboutComponents/BreadCrumbs.vue'
    import Advantages from '../components/AppAboutComponents/Advantages.vue'
    import AppVideo from '../components/AppVideo.vue'
    import AboutSlider from '../components/AppAboutComponents/AboutSlider.vue'
    import Partners from '../components/AppAboutComponents/Partners.vue'

    export default{
        name: "AppAbout",
        data(){
            return{
                BreadCrumbsPath:[
                    {
                        name: 'home',
                        text: 'Home'
                    },
                    {
                        text: '/'
                    },
                    {
                        name: 'about us',
                        text: 'About Us'
                    },
                ],

                AboutVideo:{
                    image: "../assets/images/about-me-popup-video-poster-2.jpg",
                    url: "https://maxcoach.thememove.com/main/about-me/#lg=1&slide=0",
                }
            }
        },

        components:{
            BreadCrumbs,
            Advantages,
            AppVideo,
            AboutSlider,
            Partners,
        }
    }

</script>

<template>

    <section class="advantages-info">
        <BreadCrumbs :info="BreadCrumbsPath"/>
        <Advantages/>

        <img id="circle-green-decoration" src="../assets/images/maxcoach-shape-05.png" alt="">
        <img id="circle-violet-decoration" src="../assets/images/maxcoach-shape-12.png" alt="">
        <AppVideo :video="AboutVideo"/>
    </section>

    <section>
        <AboutSlider/>
        <Partners/>
    </section>

</template>

<style lang="scss" scoped>
    @use '../styles/partials/variables' as *;

    .advantages-info{
        background: linear-gradient($white, $light-grey);
        padding: 2em 0 4em 0;
        position: relative;
        

        #circle-green-decoration{
            position: absolute;
            top: 50%;
            left: 25%;
        }

        #circle-violet-decoration{
            position: absolute;
            bottom: 2%;
            right: 26%;
        }
    }

</style>