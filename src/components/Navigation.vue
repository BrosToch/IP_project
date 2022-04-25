<template>
    <div class="nav_container">
       
       <div class="sub_container">
            <div class="lib_logo">
                <img src="../assets/background/library-log.jpg" alt="">
            </div>
            <div class="search">
                <div><input type="text" name="" id="" placeholder="Search book by name or author"></div>
                <!-- i want to use icon search here -->
            </div>
            <div class="nav_content">
                <ul>
                    <li><a href="#">FAQ</a></li>
                    <li><a href="#">Notification</a></li>
                    <li><Button>Sign Up</Button></li>
                </ul>
            </div>
       </div>
    </div>
    
  
</template>

<script>
import notification from '../assets/icons/bell-badge-outline.svg'
export default {
        name: 'Navigation',
        components:{
            notification
        }
}
</script>

<style lang="scss" scoped>
   
    .nav_content {
    
        
        ul{
            display: inline-flex;

            li{
                margin-left: 30px;
                list-style: none;
                button{
                    padding: 5px 15px;
                    background-color: #FF7C02;
                    color: white;
                    border-radius: 50px;
                }

                a{
                    text-decoration: none;
                    font-size: 18px;

                }
            }

        }
    }
    .search div input{
        width: 400px;
        height: 35px;
        padding: 15px 0px;
        text-align: center;
        border: 1px solid black ;
        border-radius: 50px;

    }
    .nav_container{
        min-height: 100vh;
        width: 100%;
        position: relative;
    }
    .sub_container{
        width: 100%;
        height: 80px;
        display: flex;
        justify-content: space-between;
        padding: 0px 40px;
        align-items: center;
    }
    .lib_logo{
        img{
            height: 80px;
            cursor: pointer;
        }
    }

</style>