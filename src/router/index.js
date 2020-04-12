import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../layout/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/Button',
    name: 'Button',
    component: () => import('../views/Button'),
    meta:{
      type:"basic"
    }
  },
  {
    path: '/Cell',
    name: 'Cell',
    component: () => import('../views/Cell.vue'),
    meta:{
      type:"basic"
    }
  },
  {
    path: '/Icon',
    name: 'Icon',
    component: () => import('../views/Icon'),
    meta:{
      type:"basic"
    }
  },
  {
    path: '/Image',
    name: 'Image',
    component: () => import('../views/Image'),
    meta:{
      type:"basic"
    }
  },
  {
    path: '/Layout',
    name: 'Layout',
    component: () => import('../views/Layout'),
    meta:{
      type:"basic"
    }
  },
  {
    path: '/Popup',
    name: 'Popup',
    component: () => import('../views/Popup'),
    meta:{
      type:"basic"
    }
  },
  {
    path: '/Style',
    name: 'Style',
    component: () => import('../views/Style'),
    meta:{
      type:"basic"
    }
  },
  {
    path: '/Calendar',
    name: 'ArCalendarea',
    component: () => import('../views/Calendar'),
    meta:{
      type:"form"
    }
  },
  {
    path: '/Checkbox',
    name: 'Checkbox',
    component: () => import('../views/Checkbox'),
    meta:{
      type:"form"
    }
  },
  {
    path: '/DatetimePicker',
    name: 'DatetimePicker',
    component: () => import('../views/DatetimePicker'),
    meta:{
      type:"form"
    }
  },
  {
    path: '/Field',
    name: 'Field',
    component: () => import('../views/Field'),
    meta:{
      type:"form"
    }
  },
  {
    path: '/Form',
    name: 'Form',
    component: () => import('../views/Form'),
    meta:{
      type:"form"
    }
  },
  {
    path: '/NumberKeyboard',
    name: 'NumberKeyboard',
    component: () => import('../views/NumberKeyboard'),
    meta:{
      type:"form"
    }
  },
  {
    path: '/Passwordinput',
    name: 'Passwordinput',
    component: () => import('../views/Passwordinput'),
    meta:{
      type:"form"
    }
  },
  {
    path: '/Picker',
    name: 'Picker',
    component: () => import('../views/Picker'),
    meta:{
      type:"form"
    }
  },
  {
    path: '/Radio',
    name: 'Radio',
    component: () => import('../views/Radio'),
    meta:{
      type:"form"
    }
  },
  {
    path: '/Rate',
    name: 'Rate',
    component: () => import('../views/Rate'),
    meta:{
      type:"form"
    }
  },
  {
    path: '/Search',
    name: 'Search',
    component: () => import('../views/Search'),
    meta:{
      type:"form"
    }
  },
  {
    path: '/Slider',
    name: 'Slider',
    component: () => import('../views/Slider'),
    meta:{
      type:"form"
    }
  },
  {
    path: '/Stepper',
    name: 'Stepper',
    component: () => import('../views/Stepper'),
    meta:{
      type:"form"
    }
  },
  {
    path: '/Switch',
    name: 'Switch',
    component: () => import('../views/Switch'),
    meta:{
      type:"form"
    }
  },
  {
    path: '/Uploader',
    name: 'Uploader',
    component: () => import('../views/Uploader'),
    meta:{
      type:"form"
    }
  },
  {
    path: '/ActionSheet',
    name: 'ActionSheet',
    component: () => import('../views/ActionSheet'),
    meta:{
      type:"feedback"
    }
  },
  {
    path: '/Dialog',
    name: 'Dialog',
    component: () => import('../views/Dialog'),
    meta:{
      type:"feedback"
    }
  },
  {
    path: '/DropDownMenu',
    name: 'DropDownMenu',
    component: () => import('../views/DropDownMenu'),
    meta:{
      type:"feedback"
    }
  },
  {
    path: '/Notify',
    name: 'Notify',
    component: () => import('../views/Notify'),
    meta:{
      type:"feedback"
    }
  },
  {
    path: '/Overlay',
    name: 'Overlay',
    component: () => import('../views/Overlay'),
    meta:{
      type:"feedback"
    }
  },
  {
    path: '/PullRefresh',
    name: 'PullRefresh',
    component: () => import('../views/PullRefresh'),
    meta:{
      type:"feedback"
    }
  },
  {
    path: '/SwipeCell',
    name: 'SwipeCell',
    component: () => import('../views/SwipeCell'),
    meta:{
      type:"feedback"
    }
  },
  {
    path: '/Toast',
    name: 'Toast',
    component: () => import('../views/Toast'),
    meta:{
      type:"feedback"
    }
  },
  {
    path: '/Loading',
    name: 'Loading',
    component: () => import('../views/Loading'),
    meta:{
      type:"feedback"
    }
  },
  {
    path: '/Circle',
    name: 'Circle',
    component: () => import('../views/Circle'),
    meta:{
      type:"show"
    }
  },
  {
    path: '/Collapse',
    name: 'Collapse',
    component: () => import('../views/Collapse'),
    meta:{
      type:"show"
    }
  },
  {
    path: '/CountDown',
    name: 'CountDown',
    component: () => import('../views/CountDown'),
    meta:{
      type:"show"
    }
  },
  {
    path: '/Divider',
    name: 'Divider',
    component: () => import('../views/Divider'),
    meta:{
      type:"show"
    }
  },
  {
    path: '/ImagePreview',
    name: 'ImagePreview',
    component: () => import('../views/ImagePreview'),
    meta:{
      type:"show"
    }
  },
  {
    path: '/Lazyload',
    name: 'Lazyload',
    component: () => import('../views/Lazyload'),
    meta:{
      type:"show"
    }
  },
  {
    path: '/List',
    name: 'List',
    component: () => import('../views/List'),
    meta:{
      type:"show"
    }
  },
  {
    path: '/NoticeBar',
    name: 'NoticeBar',
    component: () => import('../views/NoticeBar'),
    meta:{
      type:"show"
    }
  },
  {
    path: '/Panel',
    name: 'Panel',
    component: () => import('../views/Panel'),
    meta:{
      type:"show"
    }
  },
  {
    path: '/Progress',
    name: 'Progress',
    component: () => import('../views/Progress'),
    meta:{
      type:"show"
    }
  },
  {
    path: '/Skeleton',
    name: 'Skeleton',
    component: () => import('../views/Skeleton'),
    meta:{
      type:"show"
    }
  },
  {
    path: '/Steps',
    name: 'Steps',
    component: () => import('../views/Steps'),
    meta:{
      type:"show"
    }
  },
  {
    path: '/Sticky',
    name: 'Sticky',
    component: () => import('../views/Sticky'),
    meta:{
      type:"show"
    }
  },
  {
    path: '/Swipe',
    name: 'Swipe',
    component: () => import('../views/Swipe'),
    meta:{
      type:"show"
    }
  },
  {
    path: '/Tag',
    name: 'Tag',
    component: () => import('../views/Tag'),
    meta:{
      type:"show"
    }
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

router.afterEach((to, from) => {
  if(to.meta.type){
    sessionStorage.setItem('type',to.meta.type)
  }
})
export default router
