import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _d737a1b4 = () => interopDefault(import('../pages/about/index.vue' /* webpackChunkName: "pages/about/index" */))
const _302bc1f8 = () => interopDefault(import('../pages/blog-post/index.vue' /* webpackChunkName: "pages/blog-post/index" */))
const _85d8474e = () => interopDefault(import('../pages/Contact/index.vue' /* webpackChunkName: "pages/Contact/index" */))
const _57b21d97 = () => interopDefault(import('../pages/projects/index.vue' /* webpackChunkName: "pages/projects/index" */))
const _0773062a = () => interopDefault(import('../pages/Resume/index.vue' /* webpackChunkName: "pages/Resume/index" */))
const _20087c89 = () => interopDefault(import('../pages/blog-post/SofaTable.vue' /* webpackChunkName: "pages/blog-post/SofaTable" */))
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
    path: "/about",
    component: _d737a1b4,
    name: "about"
  }, {
    path: "/blog-post",
    component: _302bc1f8,
    name: "blog-post"
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
    path: "/blog-post/SofaTable",
    component: _20087c89,
    name: "blog-post-SofaTable"
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
