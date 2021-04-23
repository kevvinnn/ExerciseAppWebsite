<template>
  <div class = "columns">
    <div class = "column is-one-third">
      <form class = "box"> 
        Account Info
        <input class="input" type="text" placeholder="Username" >
        <input class="input" type="text" placeholder="Email">
        <input class="input" type="text" placeholder="Name">
        <input class="input" type="text" placeholder="gender">
        <input class="input" type="text" placeholder="Phone">
        <input class="input" type="text" placeholder="Birthday">
      </form>   
    </div> 
        <div class = "column is-one-third">
          <form class = "box">
            Account Settings
            <div class="control">
            <label class="radio">
            <input type="radio" name="answer">
            Private Account
           </label>
            </div>
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
        <div class = "column is-one-third">
          <article class="panel is-primary">
            <p class="panel-heading">
              History
            </p>
            <p class="panel-tabs">
              <a>All History</a>
              <a>Recent History</a>
            </p>
            <div class="panel-block">
              <p class="controlhas-icons-left">
                <input class="input is-primary" type="text" placeholder="Search">
              </p>
            </div>
            <a class="panel-block">
            </a>
            <a class="panel-block">
            </a>
            <a class="panel-block">
            </a>
          </article>
    </div> 
  </div>
</template>

<script>
export default {

}
</script>

<style>

</style>