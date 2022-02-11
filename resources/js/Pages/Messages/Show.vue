<template>
  <div>
    <h1 class="mb-4 font-bold text-3xl">Messages</h1>
    <sub-menu-three :url="url()" />
    <slot />
  </div>
</template>

<script>
import SubMenuThree from "@/Shared/SubMenuThree";
export default {
  components: {
    SubMenuThree
  },
  /*   props: {
    house: Object
  }, */
  methods: {
    url() {
      return location.pathname.substr(1);
    }
  }
};
</script>
