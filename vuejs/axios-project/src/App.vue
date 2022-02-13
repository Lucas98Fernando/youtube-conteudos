<template>
  <router-view />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import interceptors from "@/services/interceptors";

export default defineComponent({
  setup() {
    interceptors();
  },
});
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  h1 {
    font-size: 2rem;
  }
}
</style>
