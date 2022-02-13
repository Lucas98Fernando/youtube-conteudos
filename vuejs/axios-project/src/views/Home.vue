<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" width="120" />
    <h1>Fazendo requisições HTTP com o Axios</h1>
    <div v-for="(pokemon, i) in pokemons" :key="i">
      <p>{{ pokemon.name }}</p>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref } from "vue";
import api from "@/services/api";

export default defineComponent({
  name: "Home",
  setup() {
    const pokemons = ref([]);

    const fetchPokemons = () =>
      api
        .get("/pokemon?limit=20")
        .then((response) => (pokemons.value = response.data.results));

    onMounted(fetchPokemons);

    return { pokemons };
  },
});
</script>
