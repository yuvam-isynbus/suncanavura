<template>
  <div>
    <!-- <p-input :modelValue="name" @update:modelValue="updateName"></p-input> -->
    <p-input v-model="name" @update:modelValue="$emit('update:modelValue', $event)"></p-input>
    <p class="mt-4 font-semibold text-green-500">PInput: {{ name }}</p>
  </div>
</template>

<script>
import PInput from "./PInput.vue";
export default {
  components: {
    PInput,
  },
  props: {
      modelValue: String
  },
  data() {
    return {
      name: this.modelValue,
    };
  },
  methods: {
/*     updateName(value) {
      console.log(value)
      this.$emit('update:modelValue', value)
    }, */
  },
};
</script>

<style>
</style>
