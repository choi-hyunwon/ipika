/* eslint-disable */

import Vue from 'vue'
import VueRouter from 'vue-router'

import List from '@/views/List'

import Home from '@/views/Home'

import PabloMain from '@/views/PabloMain'

import Canvas from '@/views/Canvas'

import TestingResult from '@/views/diagnose/TestingResult'

import Intro from '@/views/letter/Intro'
import Watching from '@/views/letter/Watching'
import Recording from '@/views/letter/Recording'
import Listening from '@/views/letter/Listening'
import PabloPopup1 from '@/views/letter/PabloPopup1'
import PabloPopup2 from '@/views/letter/PabloPopup2'
import Completion from '@/views/letter/Completion'

import MainGallery from '@/views/myGallery/MainGallery'
import MainGalleryDetail from '@/views/myGallery/MainGalleryDetail'

import Agreement from '@/views/useLater/Agreement'
import LoadingSpinnerWaiting from '@/views/useLater/LoadingSpinnerWaiting'

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
    path: '/Intro',
    name: 'Intro',
    component: Intro
  },
  {
    path: '/Watching',
    name: 'Watching',
    component: Watching
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
    path: '/Recording',
    name: 'Recording',
    component: Recording
  },
  {
    path: '/Completion',
    name: 'Completion',
    component: Completion
  },
  {
    path: '/Listening',
    name: 'Listening',
    component: Listening
  },
  {
    path:'/MainGallery',
    name:'MainGallery',
    component: MainGallery
  },
  {
    path:'/MainGalleryDetail',
    name:'MainGalleryDetail',
    component: MainGalleryDetail
  }
]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router
