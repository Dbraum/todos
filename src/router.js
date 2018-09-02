import Vue from 'vue'
import Router from 'vue-router'
import Todos from './views/todos.vue'

Vue.use(Router)

export default new Router({
  linkActiveClass:"is-active",
  routes: [
    {
      path: '/todos',
      name: 'Todos',
      component: Todos
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    }
  ]
})
