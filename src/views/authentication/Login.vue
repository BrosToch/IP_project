<template>
    <div class="my_container">
        <div class="sub_container">
            <div class="login_content">
                <h1>Sign Up</h1>
                <p>Create your account to get full access</p>
            </div>
            <div class="user_input">
               
                <div>
                    <label for="email">Email Address</label><br>
                    <input v-model="email" type="email" name="email" placeholder="Enter email address" required>
                </div>
                <div>
                    <label for="password">Password</label><br>
                    <input v-model="password" type="password" name="password" placeholder="Enter password" required>
                </div>
            </div>
            <div class="forget_pwd">
                <router-link :to="{name: 'forget'}" id="forget_pwd">Forget password</router-link>
            </div>
            <div class="register">
                <div>
                    <p>Already have account ? <router-link :to="{name: 'register'}" id="login">Sign Up</router-link> Here. </p>
                </div>

                <div class="submit_btn">
                    <button>Login</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Login'
}
</script>

<style lang="scss">
    .login_content{
        margin-bottom: 80px;
        text-align: center;
        h1{
            color: #0E25A0;
        }
    }
    .forget_pwd{
        display: flex;
        justify-content: end;
        #forget_pwd{
            color: red;
            margin-top: 20px;
        }
    }

</style>