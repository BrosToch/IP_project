<template>
    <div class="home_container">
        <Navigation/>
    </div>
  
</template>

<script>
import Navigation from '@/components/Navigation.vue'
export default {
    
    name: 'Homepage',
    components:{
    Navigation
}
}
</script>

<style>
    .home_conatiner{
        width: 100%;
    }
</style>