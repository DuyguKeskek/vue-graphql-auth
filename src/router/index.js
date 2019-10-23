import Vue from 'vue'
import Router from 'vue-router'

import loginpage from '../components/LoginPage'
import homepage from '../components/HomePage'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/home',
      component: homepage
    },
    {
      path: '/login',
      component: loginpage
    },
    { path: '*', redirect: '/login' }
  ],
  mode: 'history'
})
