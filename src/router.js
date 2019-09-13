import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Feed from './views/Feed.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/feed',
      name: 'feed',
      component: Feed
    }
  ]
})
