<template>
  <div class="search-users">
    <h1>GitHub - Options API</h1>
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

<script>
import axios from "axios";
import CardUser from "./CardUser.vue";
import Loading from "./Loading.vue";

export default {
  name: "SearchUsers",
  components: { CardUser, Loading },
  data() {
    return {
      username: "",
      baseUrl: "https://api.github.com/users",
      showCard: false,
      showLoading: false,
      userData: [],
      userRepositories: [],
    };
  },
  methods: {
    getAllUserData() {
      try {
        this.showLoading = true;
        this.getUserInfo();
        this.getRepositories();
      } catch (error) {
        console.log(error);
      } finally {
        this.showLoading = false;
        this.showCard = true;
      }
    },
    async getUserInfo() {
      await axios(`${this.baseUrl}/${this.username}`).then(
        (response) => (this.userData = response.data)
      );
    },
    async getRepositories() {
      await axios(`${this.baseUrl}/${this.username}/repos`).then(
        (response) =>
          (this.userRepositories = response.data.map((el) => el.name))
      );
    },
  },
};
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
