<script>
    import { store } from '../../store';
    // Import all of Bootstrap's JS
    import * as bootstrap from 'bootstrap'
    export default {
        name: 'AppForm',
        data(){
            return{
                store,
            }
        },
            methods: {
            addBorder(event){
                event.target.style.border = 'solid #20ad96 0.1px';
            }
        }
    }

</script>

<template>
    <section class="container">
        <form class="row g-3">
            <div class="col-md-6">
                <input type="text" placeholder="Name*" class="form-control" id="inputEmail4">
            </div>
            <div class="col-md-6">
                <input type="email" placeholder="Email*" class="form-control" id="inputEmail4">
            </div>
            <div class="col-12">
                <input type="text" class="form-control" id="inputAddress" placeholder="Subject*">
            </div>
            <div class="col-12">
                <textarea  class="form-control" id="inputAddress2" placeholder="Message">
                </textarea>
            </div>
            <div class="col-12">
                <button type="submit" class="btn btn-primary">Sign in</button>
            </div>
        </form>
    </section>

</template>

<style lang="scss" scoped>
    @use '../../styles/partials/variables' as *;
    @use '../../styles/general.scss';

    .row {
        padding: 0 18rem;

        input, textarea {
            background-color: rgb(245, 244, 244);
            padding: 1rem;
            border: none;
        }
        textarea {
            min-height: 200px;
        }
        
    }

</style>