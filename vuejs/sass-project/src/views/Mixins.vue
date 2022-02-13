<template>
  <div class="home">
    <img alt="SASS logo" src="@/assets/images/sass.png" width="120" />
    <h1>Utilizando mixins com o SASS</h1>
    <p>
      Mixins são trechos de código que podem ser reutilizados e adapatados
      através de parâmetros
    </p>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  name: "Mixins",
});
</script>

<style lang="scss" scoped>
@import "../assets/css/mixins/flex-center.scss";
@import "../assets/css/mixins/bg-full.scss";
.home {
  @include flex-center(true);
  @include bg-full("../assets/images/bg.jpg");
  height: 100vh;
  width: 100%;
}
</style>
