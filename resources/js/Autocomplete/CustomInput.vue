<template>
  <input
    type="text"
    :value="value"
    v-bind="$attrs"
  />
</template>

<script>
export default {
  props: {
    value: {
      type: String,
      default: "",
    },
  },
};
</script>

<style>
</style>
