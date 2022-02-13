<template>
  <div class="search-users">
    <h1>GitHub - Composition API</h1>
    <p>Pesquise um usuário do GitHub</p>
    <div class="input-user">
      <label>Usuário </label>
      <input type="text" v-model="username" />
      <button @click="getAllUserData">Pesquisar</button>
    </div>
    <CardUser
      v-if="showCard"
      :user-data="userData"
      :user-repositories="userRepositories"
    />
    <Loading v-if="showLoading" />
  </div>
</template>

<script setup>
import { ref } from "vue";
import axios from "axios";
import CardUser from "./CardUser.vue";
import Loading from "./Loading.vue";

const username = ref("");
const baseUrl = "https://api.github.com/users";
let showCard = ref(false);
let showLoading = ref(false);
let userData = ref([]);
let userRepositories = ref([]);

function getAllUserData() {
  try {
    showLoading.value = true;
    getUserInfo();
    getRepositories();
  } catch (error) {
    console.log(error);
  } finally {
    showLoading.value = false;
    showCard.value = true;
  }
}
async function getUserInfo() {
  await axios(`${baseUrl}/${username.value}`).then(
    (response) => (userData.value = response.data)
  );
}
async function getRepositories() {
  await axios(`${baseUrl}/${username.value}/repos`).then((response) => {
    userRepositories.value = response.data.map((el) => el.name);
  });
}
</script>

<style lang="scss" scoped>
.search-users {
  h1 {
    padding: 1rem;
  }
  .input-user {
    margin: 0.7rem 0 0;
  }
}
</style>
