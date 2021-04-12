import { ToastProgrammatic as toastr } from "buefy";
import { api } from "./myFetch";

//holds the user session. Is a singleton.
const Session = {
    user: null,
    message: [] // To be used later
}

export default Session;

export async function Login(handle, password){
    const {user, token} = await api('users/Login', {handle, password})
    Session.user = user;
    Session.token = token;

    console.log(Session.user);
    toastr.open({
        type: 'is-success',
        message: `Welcome ${Session.user.user.firstname}`
    })
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