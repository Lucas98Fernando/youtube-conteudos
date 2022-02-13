<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png" width="80px" />
    <SearchUsers />
  </div>
</template>

<script>
import SearchUsers from "./components/SearchUsers.vue";
export default {
  name: "App",
  components: { SearchUsers },
};
</script>

<style lang="scss">
* {
  margin: 0;
  padding: 0;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  min-height: 100vh;
}
</style>
