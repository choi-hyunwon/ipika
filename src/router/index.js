/* eslint-disable */

import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/views/Home'
import Canvas from '@/views/Canvas'
import Agreement from '@/views/useLater/Agreement'
import LoadingSpinnerWaiting from '@/views/useLater/LoadingSpinnerWaiting'
import TestingResult from '@/views/diagnose/TestingResult'
import PabloMain from '@/views/PabloMain'
import PabloStudy1 from '@/views/letter/Intro'
import PabloStudy3 from '@/views/letter/Watching'
import PabloPopup1 from '@/views/letter/PabloPopup1'
import PabloPopup2 from '@/views/letter/PabloPopup2'
import thoughtRecords from '@/views/letter/Recording'
import PabloStudy6 from '@/views/letter/Completion'
import peopleThinking from '@/views/letter/Listening'
import List from '@/views/List'


import MyGallery from '@/views/myGallery/MyGallery'
import MyGalleryDetail from '@/views/myGallery/MyGalleryDetail'


Vue.use(VueRouter)

const requireAuth = () => (from, to, next) => {
  if(from.path === '/canvas' || from.path === '/pabloCanvas') {
    if(localStorage.getItem('isReload') !== 'true') localStorage.setItem('isReload', true)
    else localStorage.setItem('isReload', false)
    return next();
  }
};

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/list',
    name: 'List',
    component: List
  },
  {
    path: '/canvas',
    name: 'Canvas',
    component: Canvas,
    beforeEnter : requireAuth()
  },
  {
    path: '/Agreement',
    name: 'Agreement',
    component: Agreement
  },
  {
    path: '/LoadingSpinnerWaiting',
    name: 'LoadingSpinnerWaiting',
    component: LoadingSpinnerWaiting
  },
  {
    path: '/TestingResult',
    name: 'TestingResult',
    component: TestingResult
  },
  {
    path: '/PabloMain',
    name: 'PabloMain',
    component: PabloMain
  },
  {
    path: '/PabloStudy1',
    name: 'PabloStudy1',
    component: PabloStudy1
  },
  {
    path: '/PabloStudy3',
    name: 'PabloStudy3',
    component: PabloStudy3
  },
  {
    path: '/PabloPopup1',
    name: 'PabloPopup1',
    component: PabloPopup1
  },
  {
    path: '/PabloPopup2',
    name: 'PabloPopup2',
    component: PabloPopup2
  },
  {
    path: '/thoughtRecords',
    name: 'thoughtRecords',
    component: thoughtRecords
  },
  {
    path: '/PabloStudy6',
    name: 'PabloStudy6',
    component: PabloStudy6
  },
  {
    path: '/peopleThinking',
    name: 'peopleThinking',
    component: peopleThinking
  },
  {
    path:'/MyGallery',
    name:'MyGallery',
    component: MyGallery
  },
  {
    path:'/MyGalleryDetail',
    name:'MyGalleryDetail',
    component: MyGalleryDetail
  }
]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router
