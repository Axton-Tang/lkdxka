import Vue from 'vue'
import Router from 'vue-router'
import Home from '../pages/home/Home'
import Story from '../pages/introduce/Story'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },{
          path: '/story',
          name: 'Story',
          component: Story
      }

  ]
})
