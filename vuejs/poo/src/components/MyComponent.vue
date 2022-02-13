<template>
  <h1>Olá, {{ user }}</h1>
</template>

<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  props: {
    user: {
      type: String,
    },
  },
  setup(props) {
    console.log(props.user);
    return {
      props,
    };
  },
});
</script>
