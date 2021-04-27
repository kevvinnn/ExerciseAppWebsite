<template>
  <div class = "columns">
    <div class = "column">
      <form class = "box"> 
        <div class="title">
        Account Info
        </div>
        <div class="user">
        <h1> First Name: {{firstname}}</h1>
        </div>
        <div class="user">
        <h1>Last Name: {{lastname}}</h1>
        </div>
        <div class="user">
        <h1>Handle: {{handle}}</h1>
        </div>
        <div v-if="following">
        <div class="user">
        <h1>Following: {{following}}</h1>
        </div>
        </div>
        <div v-else>
          <div class="user">
        <h1>Following: Nobody Yet!</h1>
        </div>
        </div>
        <div class="user">
        <h1>Gender: {{gender}}</h1>
        </div>
      </form>  
    </div> 
        <div class = "column ">
          <form class = "box">
            Account Settings
            <b-field>
            <b-switch :value="false">
                Private Account
            </b-switch>
            </b-field>
            Language
            <div class="select is-normal">
            <select>
            <option>English</option>
            <option>Spanish</option>
            <option>French</option>
            <option>Chinese</option>
            <option>German</option>
            </select>
            </div>
          </form>
    </div> 
        
  </div>
</template>

<script>
import Session from "../models/Session";
export default {
  data(){
    return{
      Session,

      firstname: Session.user.firstname,
      lastname: Session.user.lastname,
      handle: Session.user.handle,
      following: Session.user.following.handle,
      gender: Session.user.gender,
  }
}
}
</script>

<style>
.user{
  background: rgb(247, 247, 247);
  margin: 5px;
  padding: 10x 20px;
  cursor: pointer;
  font-size: medium;
  border-right: 5px solid mediumblue;
}
.title{
  font-size:large;
  margin: 5px;
  padding: 10x 20px;
  cursor: pointer;
}
</style>