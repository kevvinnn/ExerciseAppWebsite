<template>
<div class = "columns">
  <div class = "column is-half">
  <div class = "workouts">
  <form class = "box">
  <div class="control">
   <input class="input" type="text" >
   <div class="field">
     <br>
  <p class="control">
    <button class="button is-primary">
      Search
    </button>
  </p>
</div>
   <div class="select">
  <select>
    <option>Core</option>
    <option>Upper Body</option>
    <option>Lower Body</option>
    <option>Cardio</option>
  </select>
 </div>
  </div>
  </form>
  </div>
</div>
<div class = "column is-half">
  <form class = "box">
    <article class="panel is-link">
  <p class="panel-heading">
    My Workouts
  </p>
  <p class="panel-tabs">
    <a>Saved Workouts</a>
    <a>Workout Progress</a>
  </p>
  <div class="panel-block">
    <p class="control has-icons-left">
      <input class="input is-link" type="text" placeholder="Search">
      <span class="icon is-left">
        <i class="fas fa-search" aria-hidden="true"></i>
      </span>
    </p>
  </div>
  <a class="panel-block">
  </a>
    </article>
  </form>
</div>
</div>
</template>

<script>
export default {

}
</script>

<style>

</style>