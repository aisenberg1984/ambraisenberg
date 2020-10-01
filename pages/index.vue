<template>
  <div class="container">
    <div>
      
      
      <h1 class="title">
        hello there
      </h1>
      <body><br><br><br><br> <br><br><br><br><br><br> 
        <p>paragraph 1</p><br><br>
        <p>paragraph 2</p>
      <br><br><br><br><br><br><br><br><br><br><br><br>
       <div class="links">
          <NuxtLink to="/aboutme/"
          rel="noopener noreferrer"
          class="button--green"
        >
        About Me
      

      </NuxtLink>

     
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
      <br><br><br><br><br><br></body>
    </div>
    <div><br>
    </div>
    
  </div>
</template>

<script>
export default {}
</script>

<style>
.container {
  margin: auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
   animation: 3s appear;
  margin: auto;
  font-family:
    'Quicksand',
    'Source Sans Pro',
    -apple-system,
    BlinkMacSystemFont,
    'Segoe UI',
    Roboto,
    'Helvetica Neue',
    Arial,
    sans-serif;
  display: block;
  font-weight: 300;
  font-size: 500rem;
  color: #fff;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #fff;
  word-spacing: 5px;
  padding-bottom: 15px;
}

body {
  font-weight: 300;
  font-size: 16px;
  color: #fff;
  word-spacing: 5px;
  padding-bottom: 150px;
}


.links {
  padding-top: 15px;
}
</style>
