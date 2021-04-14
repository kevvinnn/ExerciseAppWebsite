const bcryptjs = require('bcryptjs');
const jwt = require('jsonwebtoken');

const SALT_ROUNDS = process.env.SALT_ROUNDS;
const JWT_SECRET = process.env.JWT_SECRET;

const list = [
    { 
        firstname : 'Kevin',
        lastname: 'Fields',
        handle: '@Kevin',
        pic: 'https://bulma.io/images/placeholders/96x96.png',
        password: 'Piccolo11',
        isAdmin: true,
        following: [{handle: '@mike', isApproved:true }]
    },
    {
        firstname : 'Mike',
        lastname: 'Formisano',
        handle: '@mike',
        pic: 'https://bulma.io/images/placeholders/96x96.png',
        password: 'racecar',
        isAdmin: false,
        following: [{handle: '@Kevin', isApproved:true}]
    },
    {
        firstname : 'Erik',
        lastname: 'Hagenah',
        handle: '@erik',
        pic: 'https://bulma.io/images/placeholders/96x96.png',
        password: 'scott',
        isAdmin: false,
        following: [{handle: '@Kevin', isApproved:true}]
    }

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

module.exports.FromJWT = async (token) =>{
    try {
        const user = jwt.verify(token, JWT_SECRET);
        return user;
    } catch (error) {
        console.log({error});
        return null;
    }
}