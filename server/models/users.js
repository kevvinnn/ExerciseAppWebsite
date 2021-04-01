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
    }
];

module.exports.GetAll = ()=> list;
module.exports.Get = (user_id)=> list[user_id];
module.exports.GetByHandle = (handle)=> ({ ...list.find( (x, i) => x.handle == handle), password: undefined });
module.exports.Add = (user)=> {
    if(!user.firstname){
        throw "First Name is Required"
    }
    list.push(user);
    return {...user, password: undefined};
}
module.exports.Register = async (user)=> {

    const hash = await bcryptjs.hash(user.password, +SALT_ROUNDS);
    
    user.password = hash;

    if(!user.firstname){
        throw "First Name is Required"
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
    if(!user) throw "Sorry there is no user";

    if( ! await bcryptjs.compare(password, user.password)){
        throw "wrong password";
    }

    const data = {...user, password: undefined};

    const token = jwt.sign(data, JWT_SECRET)

    return {user, token};
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