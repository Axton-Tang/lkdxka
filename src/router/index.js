import Vue from 'vue'
import Router from 'vue-router'
import Home from '../pages/home/Home'
import Story from '../pages/introduce/Story'
import About from '../pages/swiper/About.vue'
import New from '../pages/swiper/New'
import Join from '../pages/swiper/Join'
import Business from '../pages/swiper/Business'
import Chat from '../pages/home/components/Chat'


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
      },{
          path: '/swiper/001',
          name: 'About',
          component: About
      },{
          path: '/swiper/002',
          name: 'New',
          component: New
      },{
          path: '/swiper/003',
          name: 'Join',
          component: Join
      },{
          path: '/swiper/004',
          name: 'Business',
          component: Business
      },{
          path: '/chat',
          name: 'Chat',
          component: Chat
      }
  ]
})
