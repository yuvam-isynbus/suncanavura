<template>
  <dialog-modal :show="showModal" @close="closeModal">
    <template #icon>
      <div
        :class="type === 'bank' ? 'bg-rose-100' : 'bg-blue-100'"
        class="mx-auto flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full sm:mx-0 sm:h-10 sm:w-10"
      >
        <!-- Heroicon name: exclamation -->

        <svg
          :class="type === 'bank' ? 'text-rose-600' : ' text-blue-600'"
          class="h-6 w-6"
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
          {{ type === "bank" ? "Unesi iznos za uplatu" : "Unesi iznos za povrat" }}
        </h3>
        <div class="mt-4">
          <mask-input
            v-model="form.payment_date"
            :error="form.errors.payment_date"
            mask="##. ##. ####."
            placeholder="dd. mm. gggg."
            type="text"
            :label="type === 'bank' ? 'Datum uplate' : 'Datum povrata'"
            autocomplete="off"
          />
        </div>
        <div class="mt-4">
            <list-select
              v-model="form.sub_type"
              label="Vrsta uplate"
              :items="['Internet', 'Gotovina', 'Kartica']"
            ></list-select>
          </div>
        <div class="mt-4">
          <mask-input
            v-model="form.amount"
            :error="form.errors.amount"
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
            label="Iznos"
            autocomplete="off"
          />
        </div>
      </div>
    </template>
    <template #footer>
      <button
        type="button"
        @click.native="submitPayment"
        :class="{ 'opacity-25': form.processing }"
        :disabled="form.processing"
        class="inline-flex justify-center w-full rounded-md border border-transparent shadow-sm px-4 py-2 bg-red-600 text-base font-medium text-white hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 sm:w-auto sm:text-sm"
      >
        Unesi
      </button>
      <button
        @click.native="closeModal"
        type="button"
        class="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 px-4 py-2 bg-white text-base font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
      >
        Odustani
      </button>
    </template>
  </dialog-modal>
</template>

<script>
import moment from "moment";
import ListSelect from "@/Form/ListSelect";
import DialogModal from "@/Shared/DialogModal";
import MaskInput from "@/Form/MaskInput";
export default {
  emits: ["close", "barcode"],
  components: {
    DialogModal,
    MaskInput,
    ListSelect
  },
  props: {
    showModal: Boolean,
    errors: Object,
    uuid: String,
    type: String,
    payment: Object,
  },
  watch: {
/*     type(val) {
      this.form.type = val;
    }, */
    payment(val) {
      this.form.amount = val.amount;
      this.form.payment_date = moment(val.payment_date).format("DD. MM. YYYY.");
      this.form.sub_type = val.sub_type ?? 'Internet';
      this.paymentId = val.id;
    },
  },
  data() {
    return {
      paymentId: null,
      form: this.$inertia.form({
        amount: "",
        type: "",
        payment_date: moment().format("DD. MM. YYYY."),
        sub_type: 'Internet'
      }),
      error: false,
    };
  },
  // 'applications.payments.store'
  methods: {
    submitPayment() {
      // console.log(this.form.price)
      // this.closeModal()
      const url = this.paymentId
        ? route("admin.applications.payments.update", [
            this.uuid,
            this.paymentId,
          ])
        : route("admin.applications.payments.store", this.uuid);
      const method = this.paymentId ? { _method: "PUT" } : {};
      this.form
        .transform((data) => ({
          ...method,
          ...data,
          amount: this.formatAmount(data.amount),
          type: this.type
        }))
        .post(url, {
          preserveScroll: true,
          onSuccess: () => this.closeModal(),
          // onError: () => this.$refs.password.focus(),
          // onFinish: () => this.form.reset(),
        });
    },
    formatAmount(amount) {
      if (amount) {
        amount = amount.replace(/\./g, "");
        amount = amount.replace(/\,/g, "");
      }
      return amount;
    },
    closeModal() {
      this.$emit("close");
      this.form.reset();
      this.form.errors = {};
    },
    /*     moment(date) {
      return moment(date).format("DD. MM. YYYY.");
    }, */
  },
};
</script>
