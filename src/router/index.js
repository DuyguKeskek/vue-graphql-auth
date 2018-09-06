import Vue from 'vue'
import Router from 'vue-router'

import AppLogin from '@/components/AppLogin'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: AppLogin
    }
  ],
  mode: 'history'
})
