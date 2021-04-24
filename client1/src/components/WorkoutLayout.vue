<template>
  <div class="box">
  <article class="media">
    <div class="media-left">
    </div>
    <div class="media-content">
      <div class="content">
        <p>
          <p :type="workout.type" > <p :frequency="workout.frequency">
          <p :routine="workout.routine">
        </p>
      </div>
    </div>
  </article>
</div>
</template>

<script>
export default {
    props: {
        workout: Object
    }

}
</script>

<style>

</style>