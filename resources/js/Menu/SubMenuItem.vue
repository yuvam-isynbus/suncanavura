<template>
  <a
    @click.prevent="$emit('linkclicked', routeName)"
    href="#"
    class="hover:bg-gray-700 hover:text-white group flex items-center px-2 py-2 text-base font-medium rounded-md"
    :class="[active ? 'bg-gray-900 text-white' : 'text-gray-300']"
  >
    <!-- Heroicon -->
    <new-icon :name="iconName" :active="active" />
    {{ label }}
  </a>
</template>

<script>
import NewIcon from "@/Shared/NewIcon";
export default {
  components: {
    NewIcon,
  },
  emits: ["linkclicked"],
  props: {
    active: Boolean,
    label: String,
    iconName: String,
    routeName: String,
  },
};
</script>

<style>
</style>
