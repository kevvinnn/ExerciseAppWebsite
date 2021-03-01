<template>
  <nav class="navbar container" role="navigation" aria-label="main navigation">
       <nav class="navbar container" role="navigation" aria-label="main navigation">
        <div class="navbar-brand">
          <a class="navbar-item" href="/">
            <i class="fas fa-dumbbell"></i>
          </a>
      
        <div id="navbarBasicExample" class="navbar-menu">
          <div class="navbar-start">

          <router-link to="/" class="navbar-item" >Home</router-link>
          <router-link to="/share"  class="navbar-item">Share</router-link>
          <router-link to="/workouts"  class="navbar-item">Workouts</router-link>
          <router-link to="/myprofile"  class="navbar-item">MyProfile</router-link>
        </div>
      
          <div class="navbar-end">
              <div class="buttons">
                <a class="button is-light">
                  <router-link to="/signup" class="navbar-item" >Sign Up</router-link>
                </a>
                <a class="button is-light">
                  <router-link to="/login" class="navbar-item" >Login</router-link>
                </a>
              </div>
            </div>
          </div>
        </div>
      </nav>
  </nav>
</template>

<script>
export default {

}
</script>

<style>

</style>