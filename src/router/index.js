import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import index from 'views/index'
import mine from 'views/MyCenter'
import UserLogin from 'views/UserLogin'
import BetterScroll from '@/components/BetterScroll'
import GoodDetail from 'views/GoodDetail'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/index',
      name: 'index',
      component: index
    },
    {
      path: '/mine',
      name: 'mine',
      component: mine
    },
    {
      path: '/login',
      name: 'login',
      component: UserLogin
    },
    {
      path: '/better',
      name: 'better',
      component: BetterScroll
    },
    {
      path: '/good',
      name: 'good',
      component: GoodDetail
    }
  ]
})
