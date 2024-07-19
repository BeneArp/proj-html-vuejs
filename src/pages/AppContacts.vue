<script>
    import BreadCrumbs from '../components/AppAboutComponents/BreadCrumbs.vue'
    import Info from '../components/AppContactsComponents/Info.vue'
    import AppForm from '../components/AppContactsComponents/AppForm.vue'
    import MapContacts from '../components/AppContactsComponents/MapContacts.vue';

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