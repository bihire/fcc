import Vue from 'vue'
import Router from 'vue-router'
import Dashboard from '@/components/dashboard/index'
import Login from '@/components/Login'
import AboutUs from '@/components/AboutUs'

Vue.use(Router)

export default new Router({
  routes: [{
    path: '/',
    name: 'default',
    component: Dashboard
  },
  {
    path: '/aboutus',
    name: 'aboutus',
    component: AboutUs
  },
  {
    path: '/login',
    name: 'login',
    component: Login,
    meta: {
      layout: 'login'
    }
  }
  ]
})
