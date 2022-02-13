<template>
  <div class="home">
    <img :src="require('@/assets/logo.png')" alt="Logo" width="50" />
    <h2>Criando um input reutilizável</h2>
    <BaseInput v-model="name" />
    <BaseInput v-model="age" type="number" />
    <button @click="showPresentation">Clique aqui</button>
    <div v-if="showMessage">{{ showPresentation() }}</div>
    <div>{{ pokemons }}</div>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, reactive, toRefs } from "vue";
import { useStore } from "vuex";
import { key } from "@/store";
import convertDataStore from "@/helpers/convertDataStore";
import BaseInput from "@/components/Input.vue";
import User from "@/poo/user";
export default defineComponent({
  name: "Home",
  components: {
    BaseInput,
  },
  setup() {
    const store = useStore(key);

    const data = reactive({
      name: "",
      age: 0,
      showMessage: false,
      pokemons: [],
    });

    const getPokemons = async () => {
      await store.dispatch("pokemons/ActionGetPokemons");
      // I need to convet store state here, because it returns an proxy
      // To avoid redundancy I created the convertDataStore function
      data.pokemons = convertDataStore(store.getters["pokemons/getPokemons"]);
    };

    onMounted(async () => {
      await getPokemons();
      const getPoke = convertDataStore(store.getters["pokemons/getPokemons"]);
      console.log(getPoke);
    });

    const showPresentation = () => {
      let user = new User({ name: data.name, age: data.age });
      data.showMessage = true;
      return user.presentation();
    };

    return {
      ...toRefs(data),
      showPresentation,
    };
  },
});
</script>

<style lang="scss" scoped>
.home {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  height: 100vh;
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  input {
    border: 1px solid #222;
  }
}
</style>
