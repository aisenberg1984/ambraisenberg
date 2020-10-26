<template>
<div>
  <div class="container">
    <div>
      <Logo />
      <h1 class="title">
        Projects 

      </h1>
      
      <!-- <button @click="getJoke()">
          get joke
      </button> -->
      <!-- <div class="links">
        <a
          href="https://nuxtjs.org/"
          target="_blank"
          rel="noopener noreferrer"
          class="button--green"
        >
          Documentation
        </a>
        <a
          href="https://github.com/nuxt/nuxt.js"
          target="_blank"
          rel="noopener noreferrer"
          class="button--grey"
        >
          GitHub
        </a>
      </div> -->
      <v-container
    id="portfolio"
    class="pt-12 pb-0 px-0"
    fluid
    tag="section"
    align-center
  >
    
<v-container
    id="blog"
    class="pa-0"
    fluid
    tag="section"
  >
    
    <v-responsive
      class="mx-auto"
      max-width="1280"
    >
      <v-container>
        
        <v-row>
          <v-col
            v-for="(post, i) in posts"
            :key="i"
            class="d-flex"
            cols="12"
            md="4"
          >
            <post-card :post="post" />
          </v-col>
        </v-row>
      </v-container>
    </v-responsive>
  </v-container>
    <gallery />
  </v-container>
    </div></div>
  </div>
</template>

<script>
import axios from "axios"

export default {
  
    name: 'Portfolio',

    components: {
      Gallery: () => import('@/components/Gallery'),
      PostCard: () => import('@/components/PostCard'),
      },
      

      
  methods: {
    // getJoke: async function() {
    //   let joke = await axios.get('https://icanhazdadjoke.com/', { headers: { "Accept": "text/plain" } })
    //   console.log("check here", JSON.stringify(joke.data, null, 2))
    //   console.log("\n\n\nTHIS: ", this.test)
    //   this.test = joke.data
    //   return
    // }
  },
  data() {
    return {
      // test: "testing this here",
      posts: [
        {
          blurb: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam earum ipsa quidem, ipsam adipisci, dolorum ducimus repellat vel sed cum maiores voluptatum enim illum saepe dolor fugit amet laboriosam.',
          category: 'Nature',
          date: 'September 18, 2018',
          src: 'https://picsum.photos/id/237/400/200',
          title: 'Sofa Table',
        },
        {
          blurb: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam earum ipsa quidem, ipsam adipisci, dolorum ducimus repellat vel sed cum maiores voluptatum enim illum saepe dolor fugit amet laboriosam.',
          category: 'Cities',
          date: 'September 5, 2018',
          src: 'https://picsum.photos/id/238/400/200',
          title: 'Garage Shelves',
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
              ],
          
    }
  } 
}
</script>

<style scoped>

</style>