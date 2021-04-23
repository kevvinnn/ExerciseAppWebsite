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

            <div class="content-item" v-for="(post, i) in posts2" :key="'A' + i">
                <post-layout :post="post" @delete="deletePost(i)" />
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
import { GetMyPosts } from "../models/Posts";

export default {
  data: ()=> ({
    newPost: {
      user: { }
    },
    posts: []
  }),
  async mounted() {
        this.posts = await GetMyPosts();
  },
  components: { FriendFinder, PostLayout },

  methods: {
        addPost(){
            this.posts.unshift(this.newPost);
            this.newPost = { user: {} }
        },
        deletePost(i){
            this.posts.splice(i, 1);
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