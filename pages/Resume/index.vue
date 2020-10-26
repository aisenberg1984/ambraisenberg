<template>
<div>
  <div class="container">
    <div>
      <Logo />
      <h1 class="title">
        Resume
      </h1>
      
        <v-container
    id="blog"
    class="pa-0"
    fluid
    tag="section"
  >
    formatted here
  </v-container>
  </div>
  </div></div>
</template>

<script>
  export default {
    name: 'Resume',

    components: {
      PostCard: () => import('@/components/PostCard'),
    //   Hero: () => import('./components/Hero'),
    //   VFilter: () => import('@/components/Filter'),
    },

    data: () => ({
      posts: [
        {
          blurb: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam earum ipsa quidem, ipsam adipisci, dolorum ducimus repellat vel sed cum maiores voluptatum enim illum saepe dolor fugit amet laboriosam.',
          category: 'Nature',
          date: 'September 18, 2018',
          src: 'https://picsum.photos/id/237/400/200',
          title: 'Lorem ipsum dolor',
        },
        {
          blurb: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam earum ipsa quidem, ipsam adipisci, dolorum ducimus repellat vel sed cum maiores voluptatum enim illum saepe dolor fugit amet laboriosam.',
          category: 'Cities',
          date: 'September 5, 2018',
          src: 'https://picsum.photos/id/238/400/200',
          title: 'Lorem ipsum dolor',
        },
        {
          blurb: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam earum ipsa quidem, ipsam adipisci, dolorum ducimus repellat vel sed cum maiores voluptatum enim illum saepe dolor fugit amet laboriosam.',
          category: 'Nature',
          date: 'August 27, 2018',
          src: 'https://picsum.photos/id/239/400/200',
          title: 'Lorem ipsum dolor',
        },
        {
          blurb: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam earum ipsa quidem, ipsam adipisci, dolorum ducimus repellat vel sed cum maiores voluptatum enim illum saepe dolor fugit amet laboriosam.',
          category: 'Design',
          date: 'August 14, 2018',
          src: 'https://picsum.photos/id/240/400/200',
          title: 'Lorem ipsum dolor',
        },
        {
          blurb: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam earum ipsa quidem, ipsam adipisci, dolorum ducimus repellat vel sed cum maiores voluptatum enim illum saepe dolor fugit amet laboriosam.',
          category: 'Design',
          date: 'August 14, 2018',
          src: 'https://picsum.photos/id/241/400/200',
          title: 'Lorem ipsum dolor',
        },
        {
          blurb: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam earum ipsa quidem, ipsam adipisci, dolorum ducimus repellat vel sed cum maiores voluptatum enim illum saepe dolor fugit amet laboriosam.',
          category: 'Branding',
          date: 'August 14, 2018',
          src: 'https://picsum.photos/id/242/400/200',
          title: 'Lorem ipsum dolor',
        },
        {
          blurb: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam earum ipsa quidem, ipsam adipisci, dolorum ducimus repellat vel sed cum maiores voluptatum enim illum saepe dolor fugit amet laboriosam.',
          category: 'Branding',
          date: 'June 26, 2018',
          src: 'https://picsum.photos/id/243/400/200',
          title: 'Lorem ipsum dolor',
        },
        {
          blurb: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam earum ipsa quidem, ipsam adipisci, dolorum ducimus repellat vel sed cum maiores voluptatum enim illum saepe dolor fugit amet laboriosam.',
          category: 'Nature',
          date: 'June 26, 2018',
          src: 'https://picsum.photos/id/244/400/200',
          title: 'Lorem ipsum dolor',
        },
        {
          blurb: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam earum ipsa quidem, ipsam adipisci, dolorum ducimus repellat vel sed cum maiores voluptatum enim illum saepe dolor fugit amet laboriosam.',
          category: 'Cities',
          date: 'June 21, 2018',
          src: 'https://picsum.photos/id/232/400/200',
          title: 'Lorem ipsum dolor',
        },
      ],
      tabs: [
        'All',
        'Nature',
        'Cities',
        'Branding',
        'Design',
      ],
    }),
  }
</script>

<style scoped>

</style>