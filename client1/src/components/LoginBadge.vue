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
                  Hello Kevin
                  <a @click="logout">
                      logout
                  </a>
              </div>
             </div>
          
</template>

<script>
import Session from "../models/Session";
export default {
    data(){
        return{
            Session
        }
    },
    methods: {
    login(){
        this.Session.user = {name: "Kevin"}
    },
    logout(){
        this.Session.user = null
    }
}
}
</script>

<style>

</style>