import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _3f9047fe = () => interopDefault(import('../pages/aboutme/index.vue' /* webpackChunkName: "pages/aboutme/index" */))
const _85d8474e = () => interopDefault(import('../pages/Contact/index.vue' /* webpackChunkName: "pages/Contact/index" */))
const _57b21d97 = () => interopDefault(import('../pages/projects/index.vue' /* webpackChunkName: "pages/projects/index" */))
const _0773062a = () => interopDefault(import('../pages/Resume/index.vue' /* webpackChunkName: "pages/Resume/index" */))
const _9a510cb0 = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))

// TODO: remove in Nuxt 3
const emptyFn = () => {}
const originalPush = Router.prototype.push
Router.prototype.push = function push (location, onComplete = emptyFn, onAbort) {
  return originalPush.call(this, location, onComplete, onAbort)
}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: decodeURI('/'),
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/aboutme",
    component: _3f9047fe,
    name: "aboutme"
  }, {
    path: "/Contact",
    component: _85d8474e,
    name: "Contact"
  }, {
    path: "/projects",
    component: _57b21d97,
    name: "projects"
  }, {
    path: "/Resume",
    component: _0773062a,
    name: "Resume"
  }, {
    path: "/",
    component: _9a510cb0,
    name: "index"
  }],

  fallback: false
}

export function createRouter () {
  return new Router(routerOptions)
}
