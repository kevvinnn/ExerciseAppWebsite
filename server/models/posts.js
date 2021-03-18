const users = require("./users");

const list = [
    { 
        src: "https://bulma.io/images/placeholders/1280x960.png",
        caption: "hi",
        time: Date(),
        alt: "https://bulma.io/images/placeholders/96x96.png",
        username: "@john",
    }
];

module.exports.GetAll = ()=> list.map((x, i) => ({ 
    ...x, 
    user: users.GetByHandle(x.username) 
}));
module.exports.Get = (post_id)=> list[post_id];
module.exports.Add = (post)=> {
    if(!post.username){
        throw "Post must have an owner"
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