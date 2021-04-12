<template>
             <div>
              <div class="buttons" v-if="!Session.user">
                <a class="button is-light">
                  <router-link to="/signup" class="navbar-item" >Sign Up</router-link>
                </a>
                <a class="button is-light" @click="login">
                  <router-link to="/login" class="navbar-item" >Login</router-link>
                </a>
              </div>
              <div v-else>
                  Hello {{Session.user.firstname}} {{Session.user.lastname}} {{Session.user.handle}}
                  <a @click="logout">
                      logout
                  </a>
              </div>
             </div>
          
</template>

<script>
import Session, { Logout } from "../models/Session";
export default {
    data(){
        return {
            Session
        }
    },
    methods: {
        login(){
            this.$router.push('Login')
        },
        logout(){
            Logout();
        }
    }
}
</script>

<style>

</style>