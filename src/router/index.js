import Vue from 'vue'
import Router from 'vue-router'
import Welcome from '@/components/welcome'
import Login from '@/components/login'
import Register from '@/components/register'
import home from '@/components/home'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/welcome',
      component: Welcome
    },
    {
      path: '/login',
      component: Login
    },
    {
      path: '/register',
      component: Register
    },
    {
      path: '/home',
      component: home
    },

  ]
})
