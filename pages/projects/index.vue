<template>
<div>
  <div class="container">
    <div>
      <Logo />
      <h1 class="title">
        My Projects 
        {{test}}

      </h1>
      
      <button @click="getJoke()">
          get joke
      </button>
      <div class="links">
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
      </div>
    </div></div>
  </div>
</template>

<script>
import axios from "axios"
export default {
  methods: {
    getJoke: async function() {
      let joke = await axios.get('https://icanhazdadjoke.com/', { headers: { "Accept": "text/plain" } })
      console.log("check here", JSON.stringify(joke.data, null, 2))
      console.log("\n\n\nTHIS: ", this.test)
      this.test = joke.data
      return
    }
  },
  data() {
    return {
      test: "testing this here"
    }
  } 
}
</script>

<style scoped>

</style>