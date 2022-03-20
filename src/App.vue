<template>
<div class="relative w-full h-full">
  <Navbar />
  <router-view />
  <Footer />
</div>
  
</template>
<script>

import Navbar from './components/Navbar.vue'
import Footer from './components/Footer.vue'
export default {
  components:{Navbar,Footer},
  data(){
    return{

    }
  }
}
</script>
<style>

</style>
