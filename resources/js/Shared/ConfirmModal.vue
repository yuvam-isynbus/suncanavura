<template>
  <modal-new :show="show" :closeable="closeable" @close="close" :closeIcon="false">
    <div class="sm:flex sm:items-start">
      <div class="w-full mt-3 text-center sm:mt-0 sm:ml-6 sm:mr-8 sm:text-left">
        <slot name="content"></slot>
      </div>
    </div>
    <div class="mt-5 sm:mt-6 sm:grid sm:grid-cols-2 sm:gap-3 sm:grid-flow-row-dense">
      <slot name="footer"></slot>
    </div>
  </modal-new>
</template>

<script>
import ModalNew from "@/Shared/ModalNew";

export default {
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
  },
  methods: {
    close() {
      this.$emit("close");
    },
  },
};
</script>
