export { default as Comment } from '../../components/Comment.vue'
export { default as Footerview } from '../../components/Footerview.vue'
export { default as Gallery } from '../../components/Gallery.vue'
export { default as GalleryCard } from '../../components/GalleryCard.vue'
export { default as GalleryCarousel } from '../../components/GalleryCarousel.vue'
export { default as Headerview } from '../../components/Headerview.vue'
export { default as Logo } from '../../components/Logo.vue'
export { default as PostCard } from '../../components/PostCard.vue'

export const LazyComment = import('../../components/Comment.vue' /* webpackChunkName: "components/Comment" */).then(c => c.default || c)
export const LazyFooterview = import('../../components/Footerview.vue' /* webpackChunkName: "components/Footerview" */).then(c => c.default || c)
export const LazyGallery = import('../../components/Gallery.vue' /* webpackChunkName: "components/Gallery" */).then(c => c.default || c)
export const LazyGalleryCard = import('../../components/GalleryCard.vue' /* webpackChunkName: "components/GalleryCard" */).then(c => c.default || c)
export const LazyGalleryCarousel = import('../../components/GalleryCarousel.vue' /* webpackChunkName: "components/GalleryCarousel" */).then(c => c.default || c)
export const LazyHeaderview = import('../../components/Headerview.vue' /* webpackChunkName: "components/Headerview" */).then(c => c.default || c)
export const LazyLogo = import('../../components/Logo.vue' /* webpackChunkName: "components/Logo" */).then(c => c.default || c)
export const LazyPostCard = import('../../components/PostCard.vue' /* webpackChunkName: "components/PostCard" */).then(c => c.default || c)
