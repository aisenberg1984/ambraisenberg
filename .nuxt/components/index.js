export { default as Footerview } from '../../components/Footerview.vue'
export { default as Headerview } from '../../components/Headerview.vue'
export { default as Logo } from '../../components/Logo.vue'
export { default as Navigationbar } from '../../components/Navigationbar.vue'

export const LazyFooterview = import('../../components/Footerview.vue' /* webpackChunkName: "components/Footerview" */).then(c => c.default || c)
export const LazyHeaderview = import('../../components/Headerview.vue' /* webpackChunkName: "components/Headerview" */).then(c => c.default || c)
export const LazyLogo = import('../../components/Logo.vue' /* webpackChunkName: "components/Logo" */).then(c => c.default || c)
export const LazyNavigationbar = import('../../components/Navigationbar.vue' /* webpackChunkName: "components/Navigationbar" */).then(c => c.default || c)
