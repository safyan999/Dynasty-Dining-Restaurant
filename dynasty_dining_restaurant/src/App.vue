<template>
  <div>
    <!-- <router-view></router-view> -->
    <MyNavbar />
  </div>
  

</template>

<script>
import MyNavbar from "./components/Navbar/index.vue"
//  import MyHero from "./components/Hero.vue"
export default {
  name: 'App',
  components: {
    MyNavbar
  }
}
</script>

<style>

</style>
