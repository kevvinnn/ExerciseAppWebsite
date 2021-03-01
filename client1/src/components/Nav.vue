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
          
            
            <div class="navbar-item has-dropdown is-hoverable">
              <a class="navbar-link">
                More
              </a>
      
              <div class="navbar-dropdown">
                <router-link to="/about" class="navbar-item">
                  About
                </router-link>

                <a class="navbar-item" href="jobs.html">
                  Jobs
                </a>
                <a class="navbar-item">
                  Contact
                </a>
                <hr class="navbar-divider">
                <a class="navbar-item">
                  Report an issue
                </a>
              </div>
            </div>
          </div>
      
          <div class="navbar-end">
            <div class="navbar-item">
              <div class="buttons">
                <a class="button is-primary">
                  <strong>Sign up</strong>
                </a>
                <a class="button is-light">
                  Log in
                </a>
              </div>
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