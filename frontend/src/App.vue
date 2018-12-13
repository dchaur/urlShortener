<template>
  <div id="app">
    <urlShortener></urlShortener>
  </div>
</template>

<script>
import urlShortener from "./components/URLShortener.vue";

export default {
  name: "app",
  components: {
    urlShortener
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
