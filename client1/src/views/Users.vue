<template>
<div class = "columns ">
  <div class = "column">
            <h1 class="title is-1">Users</h1>
            <table class = "table is-bordered is-narrow is-hoverable is-fullwidth">
                <tr><th>First Name</th><th>Last Name</th><th>Username</th></tr>

                <tr v-for="user in users" :key="user.handle">
                    <td>{{user.firstname}}</td>
                    <td>{{user.lastname}}</td>
                    <td>{{user.handle}}</td>
                </tr>
            </table>
  </div>
</div>



</template>

<script>
import Vue from "vue";
import { GetAllUsers } from "../models/Users";

export default Vue.extend({
  data: ()=> ({
    users: []
  }),
      async mounted() {
        this.users = await GetAllUsers();
    },

})
</script>

<style>
div {
    margin-top: 5px;
    margin-bottom: 5px;
}
</style>