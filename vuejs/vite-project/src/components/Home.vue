<script setup lang="ts">
import { mapActions, storeToRefs } from "pinia";
import { ref } from "vue";
import { useMainStore } from "../store/main";

defineProps<{ msg: string }>();

const main = useMainStore();

const { counter } = storeToRefs(main);

const { increment } = mapActions(useMainStore, ["increment"]);
</script>

<template>
  <h1>{{ msg }}</h1>

  <button type="button" @click="increment">
    Valor do contador: {{ counter }}
  </button>
</template>

<style scoped>
a {
  color: #42b983;
}

label {
  margin: 0 0.5em;
  font-weight: bold;
}

code {
  background-color: #eee;
  padding: 2px 4px;
  border-radius: 4px;
  color: #304455;
}
</style>
