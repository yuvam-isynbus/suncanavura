<template>
  <div class="sm:col-span-4 max-w-7xl px-8 mx-auto mt-10">
    <div class="bg-white shadow sm:rounded-lg">
      <div
        class="bg-gray-50 px-4 py-5"
      >
        <div class="font-semibold text-lg text-rose-800 mb-3">
          Izvrši novu uplatu
        </div>
        <div class="space-y-3 md:space-y-0 md:flex md:space-x-4">
          <button
            @click="
              showModal = true;
              paymentType = 'card';
            "
            type="button"
            class="inline-flex justify-center w-full rounded-md border-2 border-rose-600 shadow-sm px-4 py-2 bg-white text-base font-semibold text-rose-600 hover:bg-rose-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-rose-500 sm:w-auto sm:text-sm"
          >
            Plati karticom
          </button>
          <button
            @click="
              showModal = true;
              paymentType = 'barcode';
            "
            type="button"
            class="inline-flex justify-center w-full rounded-md border-2 border-rose-600 shadow-sm px-4 py-2 bg-white text-base font-semibold text-rose-600 hover:bg-rose-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-rose-500 sm:w-auto sm:text-sm"
          >
            M-foto plati
          </button>
          <button
            @click="
              showModal = true;
              paymentType = 'virman';
            "
            type="button"
            class="inline-flex justify-center w-full rounded-md border-2 border-rose-600 shadow-sm px-4 py-2 bg-white text-base font-semibold text-rose-600 hover:bg-rose-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-rose-500 sm:w-auto sm:text-sm"
          >
            Plati virmanom
          </button>
        </div>
      </div>
      <div
      v-if="payments.length > 0"
      class="bg-white shadow sm:rounded-lg mt-8"
    >
    <div class="border-t border-gray-200 px-4 py-5">
        <h3
          id="applicant-information-title"
          class="pb-5 font-medium text-gray-900"
        >
          Pregled uplata
        </h3>
        <ul class="divide-y divide-gray-200 border-t border-gray-200">
          <li
            class="grid grid-cols-5 gap-3 py-4"
            v-for="payment in payments"
            :key="payment.key"
          >
            <p class="col-span-1">
              Datum:
              <span class="font-semibold text-gray-900">{{
                createdAt(payment.payment_date)
              }}</span>
            </p>
            <p class="col-span-3">
              Opis plaćanja:
              <span class="font-semibold text-gray-900">{{ payment.type }}</span>
            </p>
            <p class="col-span-1">
              Iznos:
              <span
                :class="
                  payment.type === 'Povrat' ? 'text-red-500' : 'text-gray-900'
                "
                class="font-semibold"
                >{{ payment.type === "Povrat" ? "-" : "" }}
                {{ payment.amount }} kn</span
              >
            </p>
          </li>
        </ul>
        </div>
    </div>
    </div>
  </div>
  <create-free-payment
    :showModal="showModal"
    :errors="errors"
    :type="paymentType"
    @close="modalClose"
    @barcode="enterBarcode"
    @virman="enterVirman"
  ></create-free-payment>
  <create-barcode
    :showModal="showBarcodeModal"
    :barcode="barcode"
    @close="barcodeClose"
  ></create-barcode>
</template>

<script>
import moment from "moment";
import SuperAdminLayout from "@/Layout/SuperAdminLayout";
import NestedLayoutUserApplication from "@/Layout/NestedLayoutUserApplication";
import CreateFreePayment from "@/Pages/Admin/Applications/CreateFreePayment";
import CreateBarcode from "@/Pages/Admin/Applications/CreateBarcode";
export default {
  inheritAttrs: false,
  layout: (h, page) => {
    return h(
      SuperAdminLayout,
      {
        resource: "Plaćanje",
        indexRoute: "user.dashboard",
        type: page.props.authuser.role,
      },
      () => [page]
    );
  },
  components: {
    CreateFreePayment,
    CreateBarcode
  },
  props: {
    payments: Array,
    application: Object,
    errors: Object,
    barcode: String,
    virman: String,
    showBarcode: Boolean,
    showVirman: Boolean,
    type: String
  },
  mounted() {
      if (this.$page.props.flash?.status) {
        this.$notify(
            {
            group: "common",
            title: "Plaćanje karticom",
            type: "success",
            // text: this.$page.props.flash.status,
            text: this.$page.props.flash.status,
            },
            2000
        );
      }
  },
  data() {
    return {
      showModal: this.errors.amount ? true : false,
      showBarcodeModal: this.showBarcode,
      showCashModal: false,
      paymentType: "card",
    };
  },
  methods: {
    createdAt(date) {
      return moment(date).format("DD. MM. YYYY.");
    },
    modalClose() {
      this.showModal = false;
      // this.errors = {}
    },
    barcodeClose() {
      this.showBarcodeModal = false;
    },
    cashClose() {
      this.showCashModal = false;
    },
    enterBarcode(amount) {
      if (amount) {
        this.showModal = false;
      }
      this.$inertia.post(
        route("user.pay.barcode"),
        { amount: amount },
        {
          onSuccess: (page) => {
            this.showModal = false;
            this.showBarcodeModal = true;
          },
          onError: (errors) => {
            // console.log(errors)
            // if (errors.amount) this.showModal = true;
          },
        }
      );
    },
    enterVirman(amount) {
        console.log('VIRMAN');
/*       this.$inertia.post(
        route("user.pay.virman"),
        { amount: amount },
        {
          onSuccess: (page) => {
            this.showModal = false;
            this.showVirmanModal = true;
          },
          onError: (errors) => {
            // console.log(errors)
            // if (errors.amount) this.showModal = true;
          },
        }
      ); */
    },
  },
};
</script>
