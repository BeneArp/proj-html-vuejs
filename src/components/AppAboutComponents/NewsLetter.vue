<script>

    export default{
        name:'NewsLetter',
    }

</script>

<template>

    <div class="container-lg pt-5">
        <div class="ms-box">
            <h2><strong>Sign up for our </strong>Newsletters</h2>
            <p>
                Enter your email address to register to our newsletter subscription
                delivered on a regular basis!
            </p>
            <input type="text" class="form" placeholder="Enter you email">
            <button class="form button">Subscribe</button>
        </div>
    </div>

</template>

<style lang="scss" scoped>
@use '../../styles/partials/variables' as *;

    .ms-box{
        width: 40%;
        margin: 0 auto;
        text-align: center;
        padding: 4em 0;

        .form{
            border: none;
            padding: 0.5em 2em;
        }
        input{
            background-color: $light-grey;
            margin: 2em 0 4em 0;
            border-radius: 5px 0 0 5px;
        }

        .button{
            background-color: #20ad96;
            color: white;
            font-weight: bold;
            border-radius: 0 5px 5px 0;
        }
    }


    h2{
        color: #20ad96;
        margin-bottom: 1em;

        strong{
            color: $black
        }
    }


</style>