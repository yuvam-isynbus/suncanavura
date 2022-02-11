<template>
  <dialog-modal :show="showModal" @close="$emit('close')">
    <template #content>
        <p class="border-b border-gray-200 pb-4">Gotovinsku uplatu možete izvršiti u našoj poslovnici na adresi Kožarska 2, Zagreb.</p>
    </template>
    <template #footer>
      <div class="sm:-ml-10">
        <button
          @click.native="$emit('close')"
          type="button"
          class="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 px-4 py-2
          bg-white text-base font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2
          focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:w-auto sm:text-sm"
        >
          Zatvori
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
