import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Session from '../models/Session'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/share',
    name: 'Share',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "share" */ '../views/Share.vue')
  },
  {
   path: '/workouts',
    name: 'Workouts',
    component: () => import(/* webpackChunkName: "workouts" */ '../views/Workouts.vue')
  },
  {
    path: '/myprofile',
    name: 'MyProfile',
    component: () => import(/* webpackChunkName: "myprofile" */ '../views/MyProfile.vue')
  },
  {
    path: '/signup',
    name: 'SignUp',
    component: () => import(/* webpackChunkName: "signup" */ '../views/SignUp.vue')
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import(/* webpackChunkName: "login" */ '../views/Login.vue')
  },
  {
    path: '/users',
    name: 'Users',
    component: () => import(/* webpackChunkName: "users" */ '../views/Users.vue')
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach( (to, from, next) =>{
  console.log({ from, to })
  if(to.path == '/share' && !Session.user){
   next('/login') 
  }else{
    next();
  }
} )

export default router
