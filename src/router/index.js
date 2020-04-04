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
    path: '/Form',
    name: 'Form',
    component: () => import('../views/Form')
  },
  {
    path: '/NumberKeyboard',
    name: 'NumberKeyboard',
    component: () => import('../views/NumberKeyboard')
  },
  {
    path: '/Passwordinput',
    name: 'Passwordinput',
    component: () => import('../views/Passwordinput')
  },
  {
    path: '/Picker',
    name: 'Picker',
    component: () => import('../views/Picker')
  },
  {
    path: '/Radio',
    name: 'Radio',
    component: () => import('../views/Radio')
  },
  {
    path: '/Rate',
    name: 'Rate',
    component: () => import('../views/Rate')
  },
  {
    path: '/Search',
    name: 'Search',
    component: () => import('../views/Search')
  },
  {
    path: '/Slider',
    name: 'Slider',
    component: () => import('../views/Slider')
  },
  {
    path: '/Stepper',
    name: 'Stepper',
    component: () => import('../views/Stepper')
  },
  {
    path: '/Switch',
    name: 'Switch',
    component: () => import('../views/Switch')
  },
  {
    path: '/Uploader',
    name: 'Uploader',
    component: () => import('../views/Uploader')
  },
  {
    path: '/ActionSheet',
    name: 'ActionSheet',
    component: () => import('../views/ActionSheet')
  },
  {
    path: '/Dialog',
    name: 'Dialog',
    component: () => import('../views/Dialog')
  },
  {
    path: '/DropDownMenu',
    name: 'DropDownMenu',
    component: () => import('../views/DropDownMenu')
  },
  {
    path: '/Loading',
    name: 'Loading',
    component: () => import('../views/Loading')
  },
  {
    path: '/Test',
    name: 'Test',
    component: () => import('../views/Test')
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
