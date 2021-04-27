<template>
<div class = "columns">
  <div class = "column is-half">
<form class = "box" @submit.prevent="register">
<div class = "signup">
<div class="field">
  <div class="control has-icons-left has-icons-right">
    <input class="input" type="text" placeholder="Firstname" v-model="firstname">
    <span class="icon is-small is-left">
      <i class="fas fa-user"></i>
    </span>
  </div>
</div>

<div class="field">
  <div class="control has-icons-left has-icons-right">
    <input class="input" type="text" placeholder="Lastname" v-model="lastname">
    <span class="icon is-small is-left">
      <i class="fas fa-user"></i>
    </span>
  </div>
</div>

<div class="field">
  <p class="control has-icons-left">
    <input class="input" type="handle" placeholder="Handle" v-model="handle">
    <span class="icon is-small is-left">
      <i class="fas fa-user"></i>
    </span>
  </p>
</div>

<div class="field">
  <div class="control has-icons-left has-icons-right">
    <input class="input" type="password" placeholder="Password" v-model="password">
    <span class="icon is-small is-left">
      <i class="fas fa-lock"></i>
    </span>
  </div>
</div>
<div class="field">
  <div class="control has-icons-left has-icons-right">
    <input class="input" type="text" placeholder="Gender" v-model="gender">
    <span class="icon is-small is-left">
      <i class="fas fa-user"></i>
    </span>
  </div>
</div>
<br>
<div class="field">
  <p class="control">
    <button class="button is-primary">
      Sign Up
    </button>
  </p>
</div>
</div>
</form>
</div>
</div>
</template>

<script>
import { Register } from "../models/Session";
export default {
    data: ()=>({
      firstname: null,
      lastname: null,
      handle: null,
      password: null,
      gender: null
    }),
    methods:{
      register(){
        Register(this.firstname, this.lastname, this.handle, this.password, this.gender)
      }
    }
}
</script>

<style>
div{
padding-bottom: 10px;
}
</style>