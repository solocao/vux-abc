import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import index from 'views/index'
import mine from 'views/MyCenter'
import UserLogin from 'views/UserLogin'
import BetterScroll from '@/components/BetterScroll'
import GoodDetail from 'views/GoodDetail'
import ArticleList from 'views/ArticleList'
import TheCart from 'views/TheCart'

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
      path: '/user',
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
    },
    {
      path: '/articles',
      name: 'articleList',
      component: ArticleList
    },
    {
      path: '/cart',
      name: 'cart',
      component: TheCart
    }
  ]
})
