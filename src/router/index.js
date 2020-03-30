import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/Button',
    name: 'Button',
    component: () => import('../views/Button')
  },
  {
    path: '/Cell',
    name: 'Cell',
    component: () => import(/* webpackChunkName: "about" */ '../views/Cell.vue')
  },
  {
    path: '/Icon',
    name: 'Icon',
    component: () => import('../views/Icon')
  },
  {
    path: '/Image',
    name: 'Image',
    component: () => import('../views/Image')
  },
  {
    path: '/Layout',
    name: 'Layout',
    component: () => import('../views/Layout')
  },
  {
    path: '/Popup',
    name: 'Popup',
    component: () => import('../views/Popup')
  },
  {
    path: '/Style',
    name: 'Style',
    component: () => import('../views/Style')
  },
  {
    path: '/Area',
    name: 'Area',
    component: () => import('../views/Area')
  },
  {
    path: '/Calendar',
    name: 'ArCalendarea',
    component: () => import('../views/Calendar')
  },
  {
    path: '/Checkbox',
    name: 'Checkbox',
    component: () => import('../views/Checkbox')
  },
  {
    path: '/DatetimePicker',
    name: 'DatetimePicker',
    component: () => import('../views/DatetimePicker')
  },
  {
    path: '/Field',
    name: 'Field',
    component: () => import('../views/Field')
  },
  {
    path: '/Field',
    name: 'Field',
    component: () => import('../views/Field')
  },
  {
    path: '/Form',
    name: 'Form',
    component: () => import('../views/Form')
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
