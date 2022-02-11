<template>
  <div class="mt-6 sm:mt-2 2xl:mt-5">
    <div
      class="px-4 sm:px-6 lg:max-w-7xl lg:mx-auto lg:px-8 xl:max-w-screen-2xl border-b"
    >
      <nav class="-mb-px flex space-x-8" aria-label="Tabs">
        <!-- Current: "border-pink-500 text-indigo-600", Default: "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300" -->
        <inertia-link
          v-for="item in menuItems"
          :key="item.url"
          :href="item.routeName"
          class="whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm"
          :class="
            url == item.url
              ? 'border-pink-500 text-gray-900 '
              : 'border-transparent hover:border-gray-300 text-gray-500 hover:text-gray-700'
          "
          aria-current="page"
        >
          {{ item.label }}
        </inertia-link>
      </nav>
    </div>
  </div>
  <slot />
</template>

<script>
import profileMenuItems from "@/Menu/profilesubmenu";
import messageMenuItems from "@/Menu/messagesubmenu";
export default {
  props: {
    title: String,
    url: String,
    menu: String,
  },
  computed: {
    menuItems() {
      switch (this.menu) {
        case "profile":
          return profileMenuItems;
        case "message":
          return messageMenuItems;
        case "menu":
          return userMenuItems;
      }
    },
  },
  /* watch: {
    title: {
      immediate: true,
      handler(title) {
        document.title = title;
      },
    },
  }, */
};
</script>
