<template>
<div class = "columns">
  <div class = "column is-half">
<form class = "box">
<div class = "signup">
<div class="field">
  <div class="control">
    <input class="input" type="text" placeholder="Firstname">
  </div>
</div>

<div class="field">
  <div class="control has-icons-left has-icons-right">
    <input class="input" type="text" placeholder="Lastname" >
    <span class="icon is-small is-left">
      <i class="fas fa-user"></i>
    </span>
  </div>
</div>

<div class="field">
  <p class="control has-icons-left">
    <input class="input" type="handle" placeholder="Handle">
    <span class="icon is-small is-left">
      <i class="fas fa-lock"></i>
    </span>
  </p>
</div>

<div class="field">
  <div class="control has-icons-left has-icons-right">
    <input class="input" type="password" placeholder="Password" value="">
    <span class="icon is-small is-left">
      <i class="fas fa-envelope"></i>
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
export default {

}
</script>

<style>
div{
padding-bottom: 10px;
}
</style>