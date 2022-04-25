<template>
    
    <div class="my_container">
        <div class="sub_container">
            <div class="content">
                <h1>Sign Up</h1>
                <p>Create your account to get full access</p>
            </div>
            <div class="user_input">
                <div>
                    <label for="username">Username</label><br>
                    <input v-model="username" type="text" name="username" placeholder="Enter username" required>
                </div>
                <div>
                    <label for="email">Email Address</label><br>
                    <input v-model="email" type="email" name="email" placeholder="Enter email address" required>
                </div>
                <div>
                    <label for="password">Password</label><br>
                    <input v-model="password" type="password" name="password" placeholder="Enter password" required>
                </div>
                <div>
                    <label for="confirm_pwd">Confirm password</label><br>
                    <input v-model="confirm_password" type="text" name="confirm_pwd" placeholder="Confirm password" required>
                </div>
            </div>
            <div class="register">
                <div>
                    <p>Already have account ? <router-link :to="{name: 'login'}" id="login">login</router-link> Here. </p>
                </div>

                <div class="submit_btn">
                    <button>Sign Up</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Register'
}
</script>


<style lang="scss">
    
@import url('https://fonts.googleapis.com/css2?family=Roboto+Condensed:wght@300;400&display=swap');

    .register{
        display: flex;
        justify-content: space-between;
        margin-top: 70px;
        @media (max-width: 460px) {
            display: flex;
            flex-direction: column;
           
            div p{
                text-align: center;
            }
            .submit_btn button{
                width: 100%;
            }
        }
        div p #login{
            color: red;
        }
        .submit_btn{
            button{
                padding: 10px 30px;
                margin-top: -10px;
                background-color: #2D52FA;
                color: white;
                border-radius: 3px;
                font-weight: bold;
            }
        }
    }
    .user_input{
        margin-top: 20px;
        div{
            margin-top: 20px;
            input{
                width: 100%;
                height: 45px;
                border: 1px solid black;
                padding-left: 30px;
                border-radius: 5px;
            }
            label{
                font-size: 18px;
                font-weight: bold;
            }
        }
    }
    .my_container{
        display: flex;
        width: 100%;
        align-items: center;
        min-height: 100vh;
        justify-content: center;

        .sub_container{
            position: relative;
            padding: 30px;
            border-radius: 5px;
            border: 1px solid black;
            box-shadow: black;
            width: 600px;
            height: 680px;

            .content{
                text-align: center;
                margin-top: -20px;
                h1{
                    color: #0E25A0;
                }
                p{
                    font-size: 16px;
                    font-family: 'Pridi';
                }
            }
        }
    }
    *{
        padding: 0;
        margin: 0;
        box-sizing: border-box;
    }
</style>