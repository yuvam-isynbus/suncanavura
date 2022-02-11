<template>
  <form @submit.prevent="$emit('submitted')">
    <div class="p-8 grid grid-cols-1 gap-y-6 gap-x-4 md:grid-cols-2">
      <slot name="form"></slot>
    </div>

    <div
      class="px-8 py-4 border-t border-gray-200 md:flex md:flex-row-reverse md:items-center"
      v-if="hasActions"
    >
      <slot name="actions"></slot>
    </div>
  </form>
</template>

<script>
export default {
  emits: ["submitted"],
  computed: {
    hasActions() {
      return !!this.$slots.actions;
    },
  },
};
</script>

<style>
</style>
