<script>
    import BreadCrumbs from '../components/AppAboutComponents/BreadCrumbs.vue'
    import Advantages from '../components/AppAboutComponents/Advantages.vue'

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
                ]   
            }
        },

        components:{
            BreadCrumbs,
            Advantages,

        }
    }

</script>

<template>

    <BreadCrumbs :info="BreadCrumbsPath"/>
    <Advantages/>

</template>

<style lang="scss" scoped>



</style>