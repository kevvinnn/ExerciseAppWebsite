<template>
  <nav class="navbar container" role="navigation" aria-label="main navigation">
       <nav class="navbar container" role="navigation" aria-label="main navigation">
        <div class="navbar-brand">
          <a class="navbar-item" href="/">
            <i class="fas fa-dumbbell"></i>
          </a>


           <a role="button" class="navbar-burger" aria-label="menu" aria-expanded="false" :class="{ 'is-active': isActive}" @click.prevent="isActive = !isActive">
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </a>
        </div>
      
        <div class="navbar-menu" :class="{ 'is-active': isActive}">
          <div class="navbar-start">

          <router-link to="/" class="navbar-item" >Home</router-link>
          <router-link to="/myfeed"  class="navbar-item">MyFeed</router-link>
          <router-link to="/share"  class="navbar-item">Share</router-link>
          <router-link to="/myprofile"  class="navbar-item">MyProfile</router-link>
          <router-link to="/autocomplete"  class="navbar-item">Autocomplete</router-link>
          <div class="navbar-item" v-if="Session.user && Session.user.isAdmin===true">
          <router-link to="/users"  class="navbar-item">Users</router-link>
          </div>
          </div>
          <div class="navbar-end">
              <div class = "navbar-item">
                <login-badge />
              </div>
            </div>
          </div>

      </nav>
  </nav>
</template>

<script>

import LoginBadge from './LoginBadge';
import Session from '../models/Session'
export default {
  data: ()=> ({
    isActive: false,
    Session,
    user: Session.user,
    isAdmin: false
  }),
  components: {
    LoginBadge
  }
}
</script>

<style>

</style>