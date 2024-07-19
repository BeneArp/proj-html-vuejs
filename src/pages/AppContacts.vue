<script>
    import BreadCrumbs from '../components/AppAboutComponents/BreadCrumbs.vue'
    import Info from '../components/AppContactsComponents/Info.vue'

    export default{
        name: "AppContacts",

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
                        name: 'contact me',
                        text: 'Contact Us'
                    },
                ],
            }
        },  

        components:{
            BreadCrumbs,
            Info,
        }
    }

</script>

<template>

    <BreadCrumbs :info="BreadCrumbsPath"/>

    <section>
        <Info/>
    </section>

</template>

<style lang="scss" scoped>



</style>