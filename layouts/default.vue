<template>
  <div>
    <Headerview/>
<v-main>
    <Nuxt/>
</v-main>
  
   <Footerview/>
  </div>
</template>

<style>
html {
  font-family:
    'Source Sans Pro',
    -apple-system,
    BlinkMacSystemFont,
    'Segoe UI',
    Roboto,
    'Helvetica Neue',
    Arial,
    sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
  background-color: rgb(207, 204, 200);
  
}

*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0px;
}

.button--green {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #3b8070;
  color: #3b8070;
  text-decoration: none;
  padding: 10px 30px;
  margin-left: 15px;
}

.button--green:hover {
  color: #fff;
  background-color: #3b8070;
}

.button--grey {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #35495e;
  color: #35495e;
  text-decoration: none;
  padding: 10px 30px;
  margin-left: 15px;
}

.button--grey:hover {
  color: #fff;
  background-color: #35495e;
}
.container {
  margin: auto;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding-left: 5rem;
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
  font-size: 100px;
  color: none;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #fff;
  word-spacing: 5px;
  padding-bottom: 15px;
}
.toolbar-title {
  margin: 0 0rem;
  font-weight: 200;
  padding: 1rem;
  font-size: 3rem;
  color: #07504a;

  }

body {
  font-weight: 300;
  font-size: 1.25rem;
  color: rgb(5, 5, 5);
  word-spacing: 5px;
  height: 100%;
  text-align: center;
}
.signature{
    font-family:'Cedarville Cursive', cursive !important;
    font-size: 3rem;
    font-weight: 200;
    font-style: italic
  }

.links {
  padding-top: 15px;
}
</style>
