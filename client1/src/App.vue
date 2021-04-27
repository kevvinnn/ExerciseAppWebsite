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

/*global FB*/
  window.fbAsyncInit = function() {
    FB.init({
      appId      : '206553604607100',
      cookie     : true,
      xfbml      : true,
      version    : 'v10.0'
    });
      
    FB.AppEvents.logPageView();   
      
  };

  (function(d, s, id){
     var js, fjs = d.getElementsByTagName(s)[0];
     if (d.getElementById(id)) {return;}
     js = d.createElement(s); js.id = id;
     js.src = "https://connect.facebook.net/en_US/sdk.js";
     fjs.parentNode.insertBefore(js, fjs);
   }(document, 'script', 'facebook-jssdk'));
</script>

<style lang="scss">
div{ padding: 2x ;
}
</style>