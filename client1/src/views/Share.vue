<template>
<div class = "columns ">
  <div class = "column is-one-quarter">
    <friend-finder />
  </div>
  <div class = "column">
  <div class = "share">
      <form @submit.prevent="addPost">
      <h1>Share Progress</h1>
      <div class="control">
        <input class="input" type="text" placeholder="Name" v-model="newPost.user.name">
      </div>
      <div class="control">
       <input class="input" type="text" placeholder="@Username" v-model="newPost.user.username">
      </div>
      <div class="control">
       <input class="input" type="text" placeholder="Image Source" v-model="newPost.src">
      </div>
      <div class="control">
       <textarea class="textarea" placeholder="Caption" v-model="newPost.caption"></textarea>
      </div>
      <div class="field">
       <p class="control">
        <button class="button is-primary">
          Post
        </button>
       </p>
      </div>
     </form>
           <div class="content-item" v-for="(post, i) in posts" :key="i">
                <post-layout :post="post" />
              </div>
          </div>
  </div>

    <div column ="columns is-one-quarter">
              <div class="content-item">
                <post-layout :post="newPost" />
              </div>
  </div>
</div>



</template>

<script>
import FriendFinder from '../components/FriendFinder.vue';
import PostLayout from '../components/PostLayout.vue';

export default {
  data: ()=> ({
    newPost: {
      user: { }
    },
    posts: [
      {
        src: "https://bulma.io/images/placeholders/1280x960.png",
        caption: "hi",
        time: Date(),
        user: {
          name: "john",
          username: "@john",
          alt: "https://bulma.io/images/placeholders/96x96.png",
        }
      }
    ]
  }),
  components: { FriendFinder, PostLayout },

  methods: {
    addPost(){
            this.posts.unshift(this.newPost);
            this.newPost = { user: {} }
        }
  }

}
</script>

<style>
div {
    margin-top: 5px;
    margin-bottom: 5px;
}
</style>