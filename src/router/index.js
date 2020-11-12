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
  }
]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router
