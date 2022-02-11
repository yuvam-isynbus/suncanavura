<template>
  <confirm-modal :show="showModal" @close="$emit('close')">
    <template #content>
      <div>
        <div
          class="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-red-100"
        >
          <!-- Heroicon name: outline/exclamation -->
          <svg
            class="h-6 w-6 text-red-600"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            aria-hidden="true"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
            />
          </svg>
        </div>
        <div class="mt-3 text-center sm:mt-5">
          <h3
            class="text-lg leading-6 font-medium text-gray-900"
            id="modal-headline"
          >
            Da li ste sigurni?
          </h3>
          <div class="flex mt-2">
            <p class="mx-auto px-4 py-1 rounded bg-red-100 text-sm text-red-600 font-semibold">
              {{ message }}
            </p>
          </div>
        </div>
      </div>
    </template>
    <template #footer>
      <button
        type="button"
        @click.native="$emit('confirm')"
        class="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm
        px-4 py-2 bg-red-600 text-base font-medium text-white hover:bg-red-700
        focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 sm:col-start-2 sm:text-sm"
      >
        {{ actionLabel }}
      </button>
      <button
        @click.native="$emit('close')"
        type="button"
        class="mt-3 w-full inline-flex justify-center rounded-md border
        border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium
        text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2
        focus:ring-gray-500 sm:mt-0 sm:col-start-1 sm:text-sm"
      >
        Odustani
      </button>
    </template>
  </confirm-modal>
</template>

<script>
import ConfirmModal from "@/Shared/ConfirmModal";
export default {
  emits: ["close", "confirm"],
  components: {
    ConfirmModal,
  },
  props: {
    showModal: Boolean,
    actionLabel: String,
    message: String,
  },
  methods: {
    closeModal() {
      this.$emit("close");
      // this.form.reset();
    },
  },
};
</script>
