<script>
export default {
    name: 'MapContacts.vue',

    data() {
        return {
            isActive : false,
        }
    },

    methods: {
        // funzione per cambiare stato al click
        mapClicked() {
            this.isActive = !this.isActive
        }
    }
}
</script>


<template>
<section class="container-fluid">
    <div class="container-md">

        <!-- import mappa -->
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3587.558628370411!2d-80.19536562718757!3d25.949713405892666!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88d9ae86ab7e96f3%3A0xad6afccfbc8fca5a!2s382%20NE%20191st%20St%2C%20Miami%2C%20FL%2033179%2C%20Stati%20Uniti!5e0!3m2!1sit!2sit!4v1721378815013!5m2!1sit!2sit" width="100%" height="500" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" @click="mapClicked()" :class="isActive = true ? 'active' : ''"></iframe>
    </div>


</section>
</template>

<style lang="scss" scoped>
@use '../../styles/partials/variables' as *;
section {
    margin: 50px 0;

    .active {
        border: 1px solid $blue-sky;
    }
}
</style>