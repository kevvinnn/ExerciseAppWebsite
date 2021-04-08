<template>
  <div class="home">
    <h1 class="title">Welcome</h1>
    
  </div>
</template>

<script>
// @ is an alias to /src

import { api } from "../models/myFetch";

(async ()=>{
  const actualItem = await api("posts");
  console.log({actualItem});
})()



export default {
  name: 'Home',
  components: {
    
  }
}
</script>
