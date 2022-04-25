import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../views/authentication/Login'
import Register from '../views/authentication/Register'
import Forgetpassword from '../views/authentication/Forgetpassword'
import Navigation from '../components/Navigation'
import Homepage from '../views/Homepage/Homepage'
import Contact from '../views/Contact/Contact'
Vue.use(VueRouter)

const routes = [
    {
      path: '/',
      component: Homepage
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/register',
      name: 'register',
      component: Register
    },
    {
      path: '/forget',
      name: 'forget',
      component: Forgetpassword
    },
    {
      path:'/contact',
      name: 'contact',
      component: Contact
    }
  
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
