<template>
  <modal-new :show="show" :big="big" :closeable="closeable" @close="close">
    <div class="sm:flex sm:items-start">
      <slot name="icon"> </slot>
      <div class="w-full mt-3 text-center sm:mt-0 sm:ml-6 sm:mr-8 sm:text-left">
        <slot name="content"></slot>
      </div>
    </div>
    <div class="mt-5 sm:ml-12 sm:pl-4 sm:flex">
      <slot name="footer"> </slot>
    </div>
  </modal-new>
</template>

<script>
import ModalNew from "@/Shared/ModalNew";

export default {
  emits: ["close"],
  components: {
    ModalNew,
  },
  props: {
    show: {
      default: false,
    },
    closeable: {
      default: true,
    },
    big: {
      default: false,
    },
  },
  methods: {
    close() {
      this.$emit("close");
    },
  },
};
</script>
