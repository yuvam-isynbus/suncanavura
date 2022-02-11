<template>
  <dialog-modal :show="showModal" @close="$emit('close')">
    <template #icon>
      <div
        class="mx-auto flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-rose-100 sm:mx-0 sm:h-10 sm:w-10"
      >
        <!-- Heroicon name: exclamation -->

        <svg
          class="h-6 w-6 text-rose-600"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z"
          />
        </svg>
      </div>
    </template>
    <template #content>
      <h3
        class="text-lg leading-6 font-medium text-gray-900"
        id="modal-headline"
      >
        Unesite cijenu
      </h3>
      <div class="mt-4">
        <!-- <base-input
          v-model="form.price"
          :error="form.errors.price"
          type="text"
          autocomplete="off"
        /> -->
        <mask-input
          v-model="form.price"
          :error="form.errors.price"
          :mask="{
              mask: [
                '#,##',
                '##,##',
                '###,##',
                '#.###,##',
                '####,##',
                '##.###,##',
                '###.###,##',
              ],
          }"
          placeholder="0,00"
          type="text"
          autocomplete="off"
        />
      </div>
    </template>
    <template #footer>
      <button
        type="button"
        @click.native="submitPrice"
        :class="{ 'opacity-25': form.processing }"
        :disabled="form.processing"
        class="inline-flex justify-center w-full rounded-md border border-transparent shadow-sm px-4 py-2 bg-red-600 text-base font-medium text-white hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 sm:w-auto sm:text-sm"
      >
        Unesi
      </button>
      <button
        @click.native="$emit('close')"
        type="button"
        class="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 px-4 py-2 bg-white text-base font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
      >
        Odustani
      </button>
    </template>
  </dialog-modal>
</template>

<script>
import DialogModal from "@/Shared/DialogModal";
import MaskInput from "@/Form/MaskInput";
import BaseButton from "@/Form/BaseButton";
export default {
  emits: ["close"],
  components: {
    DialogModal,
    MaskInput,
    BaseButton,
  },
  props: {
    showModal: Boolean,
    uuid: String,
    value: [String, null],
  },
  data() {
    return {
      form: this.$inertia.form({
        price: this.value,
      }),
    };
  },
  methods: {
    submitPrice() {
      // console.log(this.form.price)
      // this.closeModal()
      this.form
        .transform((data) => ({
          price: this.formatPrice(data.price),
        }))
        .post(route("admin.applications.price", this.uuid), {
          preserveScroll: true,
          onSuccess: () => this.closeModal(),
          // onError: () => this.$refs.password.focus(),
          // onFinish: () => this.form.reset(),
        });
    },
    formatPrice(price) {
      if (price.split(".").length === 2 && price.split(",").length === 1) {
        price = price.replace(".", ",");
      }
      price = price.replace(/\./g, "");
      price = price.replace(",", ".");
      return Number(price).toLocaleString("hr-HR", {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
      });
    },
    closeModal() {
      this.$emit("close");
      // this.form.reset();
    },
  },
};
</script>
