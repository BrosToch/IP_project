<template>
  <div class="nav_link">
            <div><router-link class="link" :to="{name: 'home'}">Home</router-link></div>
            <div><router-link class="link" :to="{name: 'library'}">Library</router-link></div>
            <div><router-link class="link" :to="{name: 'about'}">About</router-link></div>
            <div><router-link class="link" :to="{name: 'event'}">Events</router-link></div>
            <div><router-link class="link" :to="{name: 'contact'}">Contact</router-link></div>
       </div>
</template>

<script>
export default {
    name: 'NavLink'
}
</script>

<style lang="scss" >
    .nav_link{
        display: flex;
        justify-content: space-around;
    }

</style>