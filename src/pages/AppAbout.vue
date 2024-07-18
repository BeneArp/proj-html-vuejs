<script>
    import BreadCrumbs from '../components/AppAboutComponents/BreadCrumbs.vue'

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
        }
    }

</script>

<template>

    <BreadCrumbs :info="BreadCrumbsPath"/>

</template>

<style lang="scss" scoped>



</style>