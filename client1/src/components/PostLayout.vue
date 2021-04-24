<template>
  <div class="card">
  <div class="card-image">
    <button class="delete is-pulled-right" @click.prevent="$emit('delete')"></button>
    <div class="content">
      <div class="more-content">
    <figure class="image is-125x125">
      <img :src="post.src" >
    </figure>
      </div>
    </div>
  </div>
  <div class="card-content">
    <div class="media">
      <div class="media-left">
        <figure class="image">
          <img :src ="post.alt">
        </figure>
      </div>
      <div class="media-content">
        <p class="title is-4">{{post.user.firstname}} {{post.user.lastname}}</p>
        <p class="subtitle is-6">{{post.user.handle}}</p>
      </div>
    </div>

    <div class="content">
      {{post.caption}}
      <br>
      <time :datetime="post.time">{{post.time}}</time>
    </div>
  </div>
</div>
</template>

<script>
export default {
  props: {
    post: Object
  }
}
</script>

<style>
</style>