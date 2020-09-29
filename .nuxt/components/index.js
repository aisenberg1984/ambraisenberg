export { default as Headerview } from '../../components/Headerview.vue'
export { default as Logo } from '../../components/Logo.vue'
export { default as Navigationbar } from '../../components/Navigationbar.vue'
export { default as Footer } from '../../components/footer.vue'

export const LazyHeaderview = import('../../components/Headerview.vue' /* webpackChunkName: "components/Headerview" */).then(c => c.default || c)
export const LazyLogo = import('../../components/Logo.vue' /* webpackChunkName: "components/Logo" */).then(c => c.default || c)
export const LazyNavigationbar = import('../../components/Navigationbar.vue' /* webpackChunkName: "components/Navigationbar" */).then(c => c.default || c)
export const LazyFooter = import('../../components/footer.vue' /* webpackChunkName: "components/footer" */).then(c => c.default || c)
