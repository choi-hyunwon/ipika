/* eslint-disable */

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
import Completion from '@/views/letter/Completion'

import MyGallery from '@/views/myGallery/MyGallery'
import MyGalleryDetail from '@/views/myGallery/MyGalleryDetail'

import Agreement from '@/views/useLater/Agreement'
import LoadingSpinnerWaiting from '@/views/useLater/LoadingSpinnerWaiting'

import Park from '@/views/Park'

const requireAuth = () => (from, to, next) => {
  if(from.path === '/canvas' || from.path === '/pabloCanvas') {
    if(localStorage.getItem('isReload') !== 'true') localStorage.setItem('isReload', true)
    else localStorage.setItem('isReload', false)
    return next();
  }
};

export const routes = [
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
    path:'/MyGallery',
    name:'MyGallery',
    component: MyGallery
  },
  {
    path:'/MyGalleryDetail',
    name:'MyGalleryDetail',
    component: MyGalleryDetail
  },
  {
    path:'/Park',
    name:'Park',
    component: Park
  }
]

export default routes
