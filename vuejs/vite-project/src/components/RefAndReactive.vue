<script setup lang="ts">
import { reactive, ref } from "vue";
 
const name = ref("Lucas");
const form = ref("");

const showDetails = ref<boolean>(false);
const data = reactive({
  name: "Lucas",
  age: 23,
  job: "Programador",
});

console.log(form);

function changeName() {
  name.value = "Lucas Fernando";
}

function reset() {
  name.value = "Lucas";
}
</script>

<template>
  <img alt="Vue logo" src="./assets/logo.png" width="100" />
  <h1>Diferenças entre ref e reactive</h1>
  <h3>{{ name }}</h3>
  <form ref="form">
    <button @click="changeName" type="button">Mudar nome</button>
    <button @click="reset" type="button">Redefinir nome</button>
    <button @click="showDetails = !showDetails" type="button">
      Ver detalhes
    </button>
  </form>
  <div class="details">
    <div v-if="showDetails" v-for="item in data" >
      <span>{{ item }}</span>
    </div>
  </div>
</template>