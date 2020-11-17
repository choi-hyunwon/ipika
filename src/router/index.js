import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/views/Home'
import Canvas from '@/views/Canvas'
import Agreement from '@/views/Agreement'
import LoadingSpinnerWaiting from '@/views/LoadingSpinnerWaiting'
import TestingResult from '@/views/TestingResult'
import Layout from '@/views/Layout'
import PabloMain from '@/views/PabloMain'
import PabloStudy1 from '@/views/PabloStudy1'
import PabloStudy2 from '@/views/PabloStudy2'
import PabloStudy3 from '@/views/PabloStudy3'
import PabloStudy4 from '@/views/PabloStudy4'
import PabloStudy5 from '@/views/PabloStudy5'
import PabloPopup1 from '@/views/PabloPopup1'
import PabloPopup2 from '@/views/PabloPopup2'
import thoughtRecords from '@/views/thoughtRecords'
import PabloStudy6 from '@/views/PabloStudy6'
import videoReview from '@/views/videoReview'
import peopleThinking from '@/views/peopleThinking'
import pabloCanvas from '@/views/pabloCanvas'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/canvas',
    name: 'Canvas',
    component: Canvas
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
    path: '/Layout',
    name: 'Layout',
    component: Layout
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
    path: '/PabloStudy2',
    name: 'PabloStudy2',
    component: PabloStudy2
  },
  {
    path: '/PabloStudy3',
    name: 'PabloStudy3',
    component: PabloStudy3
  },
  {
    path: '/PabloStudy4',
    name: 'PabloStudy4',
    component: PabloStudy4
  },
  {
    path: '/PabloStudy5',
    name: 'PabloStudy5',
    component: PabloStudy5
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
    path: '/videoReview',
    name: 'videoReview',
    component: videoReview
  },
  {
    path: '/peopleThinking',
    name: 'peopleThinking',
    component: peopleThinking
  },
  {
    path: '/pabloCanvas',
    name: 'pabloCanvas',
    component: pabloCanvas
  }
]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router
