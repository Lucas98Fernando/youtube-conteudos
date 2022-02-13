<template>
  <input :type="type" :value="modelValue" @input="updateValue" />
</template>

<script>
export default {
  name: "BaseInput",
  props: {
    type: String,
    modelValue: [String, Number],
  },
  methods: {
    updateValue(event) {
      this.$emit("update:modelValue", event.target.value);
    },
  },
};
</script>
