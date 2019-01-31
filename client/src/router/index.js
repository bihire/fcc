import Vue from 'vue'
import Router from 'vue-router'
import Dashboard from '@/components/dashboard'
import Login from '@/components/Login'
import AboutUs from '@/components/AboutUs'
import WareHousing from '@/components/WareHousing'
import WeWillAimTO from '@/components/customerService'

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
    path: '/wewillaimto',
    name: 'wewillaimto',
    component: WeWillAimTO
  },
  {
    path: '/warehousing',
    name: 'warehousing',
    component: WareHousing
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
