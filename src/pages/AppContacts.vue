<script>
    import BreadCrumbs from '../components/AppAboutComponents/BreadCrumbs.vue'
    import Info from '../components/AppContactsComponents/Info.vue'
<<<<<<< HEAD
    import AppForm from '../components/AppContactsComponents/AppForm.vue'
=======
    import MapContacts from '../components/AppContactsComponents/MapContacts.vue';
>>>>>>> 964a6bdfbeaafeaf7eb46fe08ed04c893059658b

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
            MapContacts,
        }
    }

</script>

<template>

    <BreadCrumbs :info="BreadCrumbsPath"/>

    <section>
        <Info/>
        <MapContacts />
    </section>

    <AppForm/>
</template>

<style lang="scss" scoped>



</style>