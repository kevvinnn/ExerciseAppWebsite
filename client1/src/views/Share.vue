<template>
<div class = "columns ">
  <div class = "column is-one-quarter">
    <friend-finder />
  </div>
  <div class = "column">
  <div class = "share">
    <form class = "box">
      <h1>Share Progress</h1>
      <div class="control">
        <input class="input" type="text" placeholder="Name">
      </div>
      <div class="control">
       <input class="input" type="text" placeholder="@Username">
      </div>
      <div class="control">
       <input class="input" type="text" placeholder="Image Source">
      </div>
      <div class="control">
       <textarea class="textarea" placeholder="Caption"></textarea>
      </div>
      <div class="field">
       <p class="control">
        <button class="button is-primary">
          Post
        </button>
      </p>
    </div>
    </form>
  </div>
  </div>
</div>



</template>

<script>
import FriendFinder from '../components/FriendFinder.vue'

export default {
  components: { FriendFinder },

}
</script>

<style>

</style>