<script setup lang="ts">
import Home from "./components/Home.vue";
</script>

<template>
  <img alt="Vue logo" src="./assets/pinia.svg" width="120" />
  <Home msg="Pinia" />
</template>

<style>
body {
  background-color: #2c3e50;
  height: 100vh;
  color: #f5f5f5;
  font-family: sans-serif;
}
h1 {
  font-size: 3rem;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  margin-top: 60px;
}
</style>
