<script>
    import BreadCrumbs from '../components/AppAboutComponents/BreadCrumbs.vue'
    import Info from '../components/AppContactsComponents/Info.vue'
    import AppForm from '../components/AppContactsComponents/AppForm.vue'

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
            AppForm,
        }
    }

</script>

<template>

    <BreadCrumbs :info="BreadCrumbsPath"/>

    <section>
        <Info/>
    </section>

    <AppForm/>
</template>

<style lang="scss" scoped>



</style>