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
            addBorder(event) {
                document.querySelectorAll('.form-control').forEach(element => {
                    element.classList.remove('border');
                });
                event.target.classList.add('border');
            }
        }
    }

</script>

<template>
    <section class="container">
        <div class="col-5">
            <h2>Fill out this form for booking a consultant advising session.</h2>
        </div>
        <form class="row g-3">
            <div class="col-md-6">
                <input type="text" placeholder="Name*" @click="addBorder" class="form-control" id="inputEmail4">
            </div>
            <div class="col-md-6">
                <input type="email" placeholder="Email*" @click="addBorder" class="form-control" id="inputEmail4">
            </div>
            <div class="col-12">
                <input type="text" class="form-control" @click="addBorder" id="inputAddress" placeholder="Subject*">
            </div>
            <div class="col-12">
                <textarea rows="4" cols="50" placeholder="Message"  class="form-control" id="inputAddress2" @click="addBorder">
                </textarea>
            </div>
            <div class="col-12 submit-but">
                <button  type="submit" @click="addBorder" class="btn btn-primary">Submit</button>
            </div>
        </form>
    </section>

</template>

<style lang="scss" scoped>
    @use '../../styles/partials/variables' as *;
    @use '../../styles/general.scss';

    .col-5 {
        margin: 5rem auto 4rem;
        h2 {
            text-align: center;
            font-weight: bold;
        }
    }
    .row {
        padding: 0 16rem 5rem;

        input, textarea {
            background-color: rgb(245, 244, 244);
            padding: 1rem;
            border: none;
        }
        textarea {
            min-height: 200px;
        }
        .form-control[data-v-67e69009]:focus {
            box-shadow:  0 0 0 0.1rem #20ad96;
        }
        .submit-but {
            display: flex;
            justify-content: center;
            button {
                background-color: #20ad96;
                border: none;
                padding: 1.2rem 4.5rem;
                margin:0.5rem auto;
                &:hover{
                    background-color: #442e66;
                }
            }
        }

    }


</style>