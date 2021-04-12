
import { api } from "../models/myFetch";


(async ()=>{

  const actualItem = await api("posts");
  console.log({actualItem});

})()


export function GetMyPosts(){
    return api("posts")
}

export function GetMyPostsForUser(handle){
    return api(`posts/${handle}`)
}

//export function GetMyFeed(){
   // return api("posts/feed")
//}