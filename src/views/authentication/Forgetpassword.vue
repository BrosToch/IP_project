<template>

     <div class="my_container">
        <div class="sub_container">
            <div class="login_content">
                <h1>Forget Password</h1>
                <p>Enter your email to retrieve your password!</p>
            </div>

            <div class="forget_logo">
                <img src="../../assets/background/forgot.png" alt="">
            </div>
            <div class="user_input">
               
                <div>
                    <label for="email">Email Address</label><br>
                    <input v-model="email" type="email" name="email" placeholder="Enter email address" required>
                </div>
               
            </div>
            
            <div class="register">

                <div class="submit_btn">
                    <button>Submit</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Forgetpassword'
}
</script>

<style lang="scss" scoped>
    .register{
        display: flex;
        justify-content: end;
    }
    .forget_logo{
        display: flex;
        justify-content: center;

        img{
            height: 150px;
        }
    }
</style>