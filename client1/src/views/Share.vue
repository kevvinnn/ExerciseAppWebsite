<template>
<div class = "columns ">
  <div class = "column is-one-quarter">
    <carousel-2 />
  </div>
  <div class = "column">
  <div class = "share">
    <form class = "box">
      <form @submit.prevent="addPost">
      <h1 class="title">Share Progress</h1>
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
import Carousel2 from '../components/Carousel2.vue';
import PostLayout from '../components/PostLayout.vue';
import { AddPost, DeletePost, GetMyPosts } from "../models/Posts";
import Session from "../models/Session";

export default {
  data: ()=> ({
    newPost: {
      user: Session.user 
    },
    posts: [],
    posts2: []
  }),
  async mounted() {
        this.posts = await GetMyPosts();
  },
  components: { PostLayout, Carousel2 },

  methods: {
        async addPost(){
            const post = await AddPost(this.newPost)
            this.posts.unshift(post);
            this.newPost = { user: Session.user }
        },
        async deletePost(i){
                await DeletePost(i);
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
.title{
  background: rgb(247, 247, 247);
  margin: 5px;
  padding: 10x 20px;
  cursor: pointer;
  font-size: medium;
}
</style>