<template>
<div class = "columns">
  <div class = "column is-half">
  <form  @submit.prevent="login">
  <div class = "login">
      <div class="field">
  <p class="control has-icons-left has-icons-right">
    <input class="input" type="text" placeholder="handle" v-model="handle">
    <span class="icon is-small is-left">
      <i class="fas fa-envelope"></i>
    </span>
  </p>
</div>
<div class="field">
  <p class="control has-icons-left">
    <input class="input" type="password" placeholder="Password" v-model="password">
    <span class="icon is-small is-left">
      <i class="fas fa-lock"></i>
    </span>
  </p>
</div>
<div class="field">
  <p class="control">
    <button class="button is-primary">
      Login
    </button>
  </p>
</div>
  </div>
  </form>
</div>
</div>

</template>

<script>
import { Login } from "../models/Session";
export default {
    data: ()=>({
      handle: null,
      password: null
    }),
      methods: {
        login(){
            Login(this.handle, this.password);
        }
    }

}
</script>

<style>

</style>