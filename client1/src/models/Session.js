import { ToastProgrammatic as toastr } from "buefy";
import router from "../router";
import { api } from "./myFetch";

//holds the user session. Is a singleton.
const Session = {
    user: null,
    token: null,
    nextRoute: null,
    message: [] // To be used later
}

export default Session;

export async function Login(handle, password){
    const {user, token} = await api('users/login', {handle, password})
    Session.user = user;
    Session.token = token;

    console.log(Session.user);
    toastr.open({
        type: 'is-success',
        message: `Welcome ${Session.user.firstname}`
    });

    router.push(Session.nextRoute ?? '/share')
}

export function Logout(){
    Session.user = null
}

export function toastError(msg){
    toastr.open({
        message: msg,
        queue: false,
        type: 'is-black'
    })
}