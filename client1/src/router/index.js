import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Session from '../models/Session'
import Share from '@/views/Share'
import MyProfile from '@/views/MyProfile'
import SignUp from '@/views/SignUp'
import Login from '@/views/Login'
import Users from '@/views/Users'
import MyFeed from '@/views/MyFeed'
import Autocomplete from '@/views/Autocomplete'



Vue.use(VueRouter)

const routes = [
  {path: '/', name: 'Home', component: Home},
  {path: '/share', name: 'Share', component: Share},
  {path: '/myprofile', name: 'MyProfile', component: MyProfile},
  {path: '/signup', name: 'SignUp', component: SignUp},
  {path: '/login', name: 'Login', component: Login},
  {path: '/users', name: 'Users', component: Users},
  {path: '/myfeed', name: 'MyFeed', component: MyFeed},
  {path: '/autocomplete', name: 'Autocomplete', component: Autocomplete},
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach( (to, from, next) =>{
  console.log({ from, to })
  if(to.path == '/share' && !Session.user){
    Session.nextRoute = to;
    next('/login')
  }else if(to.path == '/myfeed' && !Session.user){
      Session.nextRoute = to;
      next('/login') 
  }else if(to.path == '/myprofile' && !Session.user){
      Session.nextRoute = to;
      next('/login') 
  }else{
    next();
  }
} )

export default router
