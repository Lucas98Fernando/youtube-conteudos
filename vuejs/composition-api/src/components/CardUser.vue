<template>
  <div class="card-user">
    <div class="card">
      <div class="header">
        <img class="avatar" :src="props.userData.avatar_url" />
        <h3>{{ props.userData.name }}</h3>
        <span>{{ props.userData.bio }}</span>
      </div>
      <div class="content">
        <h3>
          {{
            props.userRepositories.length === 30
              ? `+ de ${props.userRepositories.length}`
              : props.userRepositories.length
          }}
          repositórios públicos
        </h3>
        <p v-for="(repos, i) of props.userRepositories" :key="i">
          {{ repos }}
        </p>
      </div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  userData: [Array, Object],
  userRepositories: [Array, Object],
});
</script>

<style lang="scss" scoped>
.card-user {
  display: flex;
  justify-content: center;
  width: 100%;
  padding: 1rem 0;
}
.card {
  text-align: center;
  margin: 0.5rem;
  display: flex;
  flex-direction: column;
  width: 700px;
  .header {
    padding: 0.8rem;
    background-color: #222;
    color: #f5f5f5;
    font-weight: 600;
    border-radius: 15px 15px 0 0;
    .avatar {
      border-radius: 100%;
      width: 70px;
    }
    span {
      font-size: 0.8rem;
    }
  }
  h3 {
    margin: 0.7rem 0 0.5rem;
  }
  .content {
    flex: 1;
    background-color: #f5f5f5;
    color: #222;
    padding: 1rem;
    border-radius: 0 0 15px 15px;
  }
}
</style>
