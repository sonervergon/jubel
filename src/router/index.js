import Vue from 'vue'
import Router from 'vue-router'
import start from '@/components/start'
import main from '@/components/main/main'
import info from '@/components/info/information'
import events from '@/components/main/events'
import reception from '@/components/main/reception'
import jubel from '@/components/main/jubel'
import about from '@/components/main/about'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'start',
      component: start
    },
    {
      path: '/start',
      name: 'main',
      component: main,
      children: [
        {
          path: 'event',
          component: events
        },
        {
          path: 'hem',
          component: main
        },
        {
          path: 'mottagning',
          component: reception
        },
        {
          path: 'jubel',
          component: jubel
        },
        {
          path: 'kontakt',
          component: about
        }
      ]
    },
    {
      path: '/farmen',
      name: 'info',
      component: info
    }
  ]
})
