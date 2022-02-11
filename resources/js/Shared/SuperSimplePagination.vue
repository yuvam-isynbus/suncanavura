<template>
  <nav
    class="bg-white px-4 py-3 flex items-center justify-between border-t border-cool-gray-200"
  >
    <div class="flex-1 flex justify-between">
      <inertia-link
        :href="first.url ? first.url : ''"
        class="relative inline-flex items-center px-4 py-2 border border-cool-gray-300 text-sm leading-5 font-medium rounded-md bg-white hover:text-cool-gray-500 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 active:bg-cool-gray-100 active:text-cool-gray-700 transition ease-in-out duration-150"
        :class="[
          first.url
            ? 'text-cool-gray-700'
            : 'pointer-events-none  text-cool-gray-400',
        ]"
      >
        Previous
      </inertia-link>
      <inertia-link
        :href="last.url ? last.url : ''"
        class="ml-3 relative inline-flex items-center px-4 py-2 border border-cool-gray-300 text-sm leading-5 font-medium rounded-md bg-white hover:text-cool-gray-500 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 active:bg-cool-gray-100 active:text-cool-gray-700 transition ease-in-out duration-150"
        :class="[
          last.url
            ? 'text-cool-gray-700'
            : 'pointer-events-none  text-cool-gray-400',
        ]"
      >
        Next
      </inertia-link>
    </div>
  </nav>
</template>

<script>
import { isString } from "lodash";
export default {
  props: {
    links: Array,
  },
  computed: {
    first() {
      return this.links[0];
    },
    last() {
      return this.links[this.links.length - 1];
    },
  },
};
</script>
