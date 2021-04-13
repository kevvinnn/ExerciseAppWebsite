const users = require("./users");

const list = [
    { 
        src: "https://bulma.io/images/placeholders/1280x960.png",
        caption: "hi",
        time: Date(),
        alt: "https://bulma.io/images/placeholders/96x96.png",
        username: "@john",
        isPublic: true,
    }
];

const listWithOwner = ()=> list.map((x, i) => ({ 
    ...x, 
    user: users.GetByHandle(x.username) 
}));

module.exports.GetAll = ()=>{
    return listWithOwner();
}

module.exports.GetWall = (handle)=> {
    return listWithOwner().filter(post=> post.username == handle);
};

module.exports.GetFeed = (handle)=> listWithOwner()
    .filter(post=> users.GetByHandle(handle).following.some(f=>f.handle == post.username && f.isApproved) );

module.exports.Get = (post_id)=> list[post_id];
module.exports.Add = (post)=> {
    if(!post.username){
        throw {code: 422, msg: "Post must have an Owner"}
    }
    list.push(post);
    return {...post};
}
module.exports.Update = (post_id, post)=> {
    const oldObj = list[post_id];
    const newObj = {...oldObj, ...post}
    list[post_id] = newObj;
    return newObj;
}
module.exports.Delete = (post_id)=> {
    const user = list[post_id];
    list.splice(post_id, 1);
    return post;
}