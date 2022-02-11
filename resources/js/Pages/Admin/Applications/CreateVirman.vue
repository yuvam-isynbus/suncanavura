<template>
  <dialog-modal :show="showModal" :big="true" @close="$emit('close')">
    <template #content>
        <img :src="virman" alt="virman" />
    </template>
    <template #footer>
      <div class="sm:-ml-8">
        <button
          type="button"
          @click.native="submitPrice"
          class="inline-flex justify-center w-full rounded-md border border-transparent shadow-sm px-4 py-2 bg-red-600 text-base font-medium text-white hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 sm:w-auto sm:text-sm"
        >
          Uplata je izvršena
        </button>
        <button
          @click.native="$emit('close')"
          type="button"
          class="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 px-4 py-2 bg-white text-base font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
        >
          Uplata je otkazana
        </button>
      </div>
    </template>
  </dialog-modal>
</template>

<script>
import DialogModal from "@/Shared/DialogModal";
export default {
  emits: ["close"],
  components: {
    DialogModal,
  },
  props: {
    showModal: Boolean,
    virman: String,
  },
  /*   data() {
    return {
      barcode: null
    }
  }, */
  computed: {
    barcodeSrc() {
      // return "data:image/png;base64," + this.barcode;
    },
  },
  methods: {
    closeModal() {
      this.$emit("close");
      // this.form.reset();
    },
  },
};
</script>
