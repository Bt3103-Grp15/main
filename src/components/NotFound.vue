<template>
  <div style="text-align:center;">
      <NavBar/>
      <h3>Page Not Found</h3>
      <LogOut/>
  </div>
</template>

<script>
import NavBar from '@/components/NavBar.vue';
import LogOut from '@/components/LogOut.vue';

export default {
    name: "NotFound",
    
    components: {
      NavBar,
      LogOut
    },
}
</script>

<style>

</style>