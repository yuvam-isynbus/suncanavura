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
      <div>
        <h3
          class="text-lg leading-6 font-medium text-gray-900"
          id="modal-headline"
        >
          Unesite iznos
        </h3>
        <div class="mt-4">
          <mask-input
            v-model="amount"
            :error="errors?.amount"
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
      </div>
    </template>
    <template #footer>
      <a
        :href="
          route('user.application.pay.payment', {
            amount: formatAmount(amount),
          })
        "
        class="inline-flex justify-center w-full rounded-md border border-transparent shadow-sm px-4 py-2 bg-red-600 text-base font-medium text-white hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 sm:w-auto sm:text-sm"
      >
        Plati
      </a>
      <!-- <inertia-link
        as="button"
        type="button"
        :href="route('fake.pay', { amount: formatAmount(amount) })"
        class="inline-flex justify-center w-full rounded-md border border-transparent shadow-sm px-4 py-2 bg-red-600 text-base font-medium text-white hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 sm:w-auto sm:text-sm"
      >
        Plati karticom
      </inertia-link> -->
      <button
        @click.native="$emit('close')"
        type="button"
        class="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 px-4 py-2 bg-white text-base font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
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
    errors: Object,
    uuid: String,
  },
  data() {
    return {
      amount: "",
      error: false,
    };
  },
  methods: {
    formatAmount(amount) {
      amount = amount.replace(/\./g, "");
      amount = amount.replace(/\,/g, "");
      return amount;
    },
  },
};
</script>
