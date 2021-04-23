<template>
<form>
<div class="columns">
<div class="column">
<div class = "make">
      <form @submit.prevent="addWorkout">
      <h1>Create Workout</h1>
      <div class="control">
        <input class="input" type="text" placeholder="Type" v-model="newWorkout.type">
      </div>
      <div class="control">
       <input class="input" type="text" placeholder="Routine" v-model="newWorkout.routine">
      </div>
      <div class="control">
       <input class="input" type="text" placeholder="Frequency" v-model="newWorkout.frequency">
      </div>
      <div class="control">
       <input class="input" type="text" placeholder="Image" v-model="newWorkout.image">
      </div>
      <div class="field">
       <p class="control">
        <button class="button is-primary">
          Make Workout
        </button>
       </p>
      </div>
     </form>
  </div>
</div>
<div class = "column">
  <div class="content" v-for="(workouts, i) in workouts" :key="i">
  <workout-layout :workout="workout" />
  </div>
  </div>
</div>
</form>
</template>

<script>
import WorkoutLayout from '../components/WorkoutLayout.vue';

export default {
  components: { WorkoutLayout },
  data: ()=> ({
    newWorkout: {
      workout: {}
    },
    workouts: []
  }),
  methods: {
    addWorkout(){
      this.workouts.unshift(this.newWorkout);
      this.newWorkout = { workout: {} }
    },
  }
}
</script>

<style>

</style>