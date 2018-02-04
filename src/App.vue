<template>
  <div id="app">
    <router-view/>
    <footer>
        <a href="http://vergon.se">Vergon Design &copy; 2018</a>
    </footer>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
#app {
  font-family: 'Roboto', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50 !important;
}

a {
  color: #fff;
}

footer {
  background-color: #2d2d2c;
  padding: 4px 0;
}

</style>
