<template>
    <header
      height="50"
    >
       <h2 class="toolbar-title">ambraisenberg.com</h2>
            
     <v-spacer></v-spacer>
      
    <navbar>
    <ul>
      <li>
        <NuxtLink to="/"
        class="button--teal">
        Home
        </NuxtLink>
      </li>
      <li>
        <NuxtLink to="/aboutme"
        class="button--teal">About Me</NuxtLink>
      </li>
      <li>
        <NuxtLink to="/projects"
        class="button--teal">Projects</NuxtLink>
      </li>
      <li>
        <NuxtLink to="/resume"
        class="button--teal"> Resume</NuxtLink>
      </li>
      <li>
        <NuxtLink to="/contact"
        class="button--teal">Contact</NuxtLink>
      </li>
    </ul>
    </navbar>
          
</header>
</template>



<style scoped>
header {
  position: flex;
  top: 0;
  left: 0;
  right: 0;
  z-index: 100;
  display: flex;
  align-items: top;
  justify-content: left right;
  padding: 0 0rem;
  background-color: none;
  font-family:
    'Source Sans Pro',
    -apple-system,
    BlinkMacSystemFont,
    'Segoe UI',
    Roboto,
    'Helvetica Neue',
    Arial,
    sans-serif;
  font-size: 1rem;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}
  
  
  .navbar {
  padding: 10px;
  margin: 10px;
  
}

.toolbar-title {
  margin: 0 0rem;
  font-weight: 200;
  padding: 1rem;
  font-size: 3rem;
  color: #07504a;

  }

ul {
  list-style-type: none;
  padding: 0;
  display: flex;
  flex-wrap: wrap;
}

li {
  margin: 0 0rem;
  padding: 0rem;
  font-size: 1.5rem;
}

.button--teal {
  display: inline-block;
  border-radius: 4px;
  border: 0px solid #07504a;
  color: #ffffff;
  text-decoration: none;
  padding: 30px 30px;
  margin-left: 0px;
  font-weight: 300;
}

.button--teal:hover {
  color: #ffffff;
  background-color: none;
  font-size: 2rem;
}

</style>
