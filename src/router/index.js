import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello
    },
    {
      path: '/index',
      name: 'index',
      component: require('../pages/index')
    },
    {
      path: '/news',
      name: 'news',
      component: require('../pages/news')
    },
    {
      path: '/maps',
      name: 'maps',
      component: require('../pages/maps')
    },
    {
      path: '/preview',
      name: 'preview',
      component: require('../pages/preview')
    }
  ]
})
