<script>
    import BreadCrumbs from '../components/AppAboutComponents/BreadCrumbs.vue'
    import Info from '../components/AppContactsComponents/Info.vue'
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

</template>

<style lang="scss" scoped>



</style>