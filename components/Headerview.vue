<template>
  <div>
    
    <header>
   
  
   <v-app-bar
      app
      color= none
      height="50"
    >
    <img class="AIlogo" src="@/assets/Small Logo.png" height="82px">

      <v-avatar
        class="mr-3"
        color="grey lighten-5"
        size="20"
      >
    
      </v-avatar> 
     
      
    <v-toolbar-title class="toolbar-title">
        
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
    </navbar> </v-toolbar-title>
  </v-app-bar>
          
</header>
      
    
    
  </div>
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
  padding: 0;
  margin: 0rem;
  
}

.toolbar-title {
  margin: 0 0rem;
  padding: 0rem;
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
  font-size: 1.25rem;
}

.button--teal {
  display: inline-block;
  border-radius: 4px;
  border: 0px solid #07504a;
  color: #07504a;
  text-decoration: none;
  padding: 5px 30px;
  margin-left: 0px;
}

.button--teal:hover {
  color: #fff;
  background-color: #07504a;
}

</style>
