<template>
  <nav>
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
  </nav>
</template>

<style scoped>
nav {
  padding: 0;
  margin: 0rem;
  
}

ul {
  list-style-type: none;
  padding: 0;
  display: flex;
  justify-content: left;
  flex-wrap: wrap;
}

li {
  margin: 0 0rem;
  padding: 0rem;
  font-size: 1rem;
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
