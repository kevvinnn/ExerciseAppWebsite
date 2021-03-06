const bcryptjs = require('bcryptjs');
const jwt = require('jsonwebtoken');
const axios = require('axios').default;

const SALT_ROUNDS = process.env.SALT_ROUNDS;
const JWT_SECRET = process.env.JWT_SECRET;

const list = [
    { 
        firstname : 'Kevin',
        lastname: 'Fields',
        handle: '@Kevin',
        pic: 'https://bulma.io/images/placeholders/96x96.png',
        password: '$2a$08$0qZ/dZN7pAHqtbOUNg7g4.qN.XAgoPmSrTTzHwBazviBKNeBk3WSG',
        isAdmin: true,
        following: {handle: '@mike', isApproved:true },
        gender: 'Male'
    },
    {
        firstname : 'Mike',
        lastname: 'Formisano',
        handle: '@mike',
        pic: 'https://bulma.io/images/placeholders/96x96.png',
        password: '$2a$08$hT9ZO1ejvvU.c6WPCtZECeG73ePWfB25Yocx4dKtUWOMqhZc1gXlG',
        isAdmin: false,
        following: {handle: '@Kevin', isApproved:true},
        gender: 'Male'
    },
    {
        firstname : 'Erik',
        lastname: 'Hagenah',
        handle: '@erik',
        pic: 'https://bulma.io/images/placeholders/96x96.png',
        password: '$2a$08$BOXh9s8acJ/.OXz01U6tT.iIOcvA.Z8IJyVS7Ldhe0fur67U6ICZ6',
        isAdmin: false,
        following: {handle: '@Kevin', isApproved:true},
        gender: 'Male'
    },
    {
        firstname : 'Liam',
        lastname: 'Petri',
        handle: '@liam',
        pic: 'https://bulma.io/images/placeholders/96x96.png',
        password: '$2a$08$rxraDHtxjIVntvFFndsu0uxE49m59g5ie9TDesM6cVauAUqQtYTDm',
        isAdmin: false,
        following: {handle: '@Kevin', isApproved:true},
        gender: 'Female'
    },

];

module.exports.GetAll = ()=> list;
module.exports.Get = (user_id)=> list[user_id];
module.exports.GetByHandle = (handle)=> ({ ...list.find( (x, i) => x.handle == handle), password: undefined });
module.exports.Add = (user)=> {
    if(!user.firstname){
        throw { code: 422, msg: "First Name is required" }
    }
    list.push(user);
    return {...user, password: undefined};
}
module.exports.Register = async (user)=> {

    const hash = await bcryptjs.hash(user.password, +SALT_ROUNDS);
    
    user.password = hash;

    if(!user.firstname){
        throw { code: 422, msg: "First Name is required" }
    }

    list.push(user);
    return {...user, password: undefined};
}
module.exports.Update = (user_id, user)=> {
    const oldObj = list[user_id];
    if(user.firstname){
        oldObj.firstname = user.firstname;
    }
    if(user.lastname){
        oldObj.lastname = user.lastname;
    }
    if(user.handle){
        oldObj.handle = user.handle;
    }
    if(user.pic){
        oldObj.pic = user.pic;
    }
    if(user.gender){
        oldObj.gender = user.gender;
    }
    return {...oldObj, password: undefined};
}
module.exports.Delete = (user_id)=> {
    const user = list[user_id];
    list.splice(user_id, 1);
    return user;
}

module.exports.Login =  async (handle, password) => {
    console.log({handle, password})
    const user = list.find(x=> x.handle == handle);
    if(!user) throw { code: 401, msg: "Sorry there is no user with that handle" };

    if( ! await bcryptjs.compare(password, user.password)){
        throw { code: 401, msg: "Wrong Password" };
    }

    const data = {...user, password: undefined};

    const token = jwt.sign(data, JWT_SECRET)

    return {user: data, token};
}

module.exports.LoginFB = async (access_token) =>{
    console.log({ access_token })

    const userFB = await axios.get(`https://graph.facebook.com/v10.0/me?fields=first_name,last_name,email,picture&access_token=${access_token}`)
    console.log(userFB.data);

    // Get a verified email address from facebook
    let user = list.find(x=> x.email == userFB.data.email);
    if(!user) {
        user = {
            firstName: userFB.data.first_name,
            lastName: userFB.data.last_name,
            pic: userFB.data.picture.data.url,
            email: userFB.data.email,
            handle:  userFB.data.email
        };
        list.push(user);
    }

    const data = { ...user, password: undefined };

    const token = jwt.sign(data, JWT_SECRET)

    return { user: data, token };
}

module.exports.FromJWT = async (token) =>{
    try {
        const user = jwt.verify(token, JWT_SECRET);
        return user;
    } catch (error) {
        console.log({error});
        return null;
    }
}