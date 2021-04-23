<template>
  <div id="app">
  <MyNav />
  <div class="container">
    <router-view/>
  </div>
  </div>
</template>

<script>
import MyNav from "./components/Nav";
export default{
  components: {
    MyNav
  }
}
</script>

<style lang="scss">
div{ padding: 2x ;
}
</style>
