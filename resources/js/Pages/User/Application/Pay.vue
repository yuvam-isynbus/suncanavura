<template>
  <div class="sm:col-span-4 max-w-7xl px-8 mx-auto mt-10">
    <div class="bg-white shadow sm:rounded-lg">
      <div class="px-4 py-3 sm:px-4 flex justify-between items-center">
        <h2
          id="applicant-information-title"
          class="text-lg leading-6 font-medium text-gray-900"
        >
          Podaci o plaćanju
        </h2>
      </div>
      <div
        v-if="application.price"
        class="md:flex md:justify-between border-t border-gray-200 px-4 py-5"
      >
        <div>
          <span>Ukupna cijena</span>
          <span class="ml-3 text-rose-600 text-lg font-semibold"
            >{{ application.price }} kn</span
          >
        </div>
        <div>
          <span>Uplaćeno</span>
          <span class="ml-3 text-green-600 text-lg font-semibold"
            >{{ application.paid_amount }} kn</span
          >
        </div>
      </div>
      <div
        v-if="application.price"
        class="border-t border-gray-200 bg-gray-50 px-4 py-5"
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
          <button
            @click="showCashModal = true"
            type="button"
            class="inline-flex justify-center w-full rounded-md border-2 border-rose-600 shadow-sm px-4 py-2 bg-white text-base font-semibold text-rose-600 hover:bg-rose-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-rose-500 sm:w-auto sm:text-sm"
          >
            Plati gotovinom
          </button>
        </div>
      </div>
      <div
        v-if="!application.price"
        class="flex items-center justify-between border-t border-gray-200 px-4 py-5"
      >
        <h3 id="applicant-information-title" class="font-medium text-gray-900">
          Cijena nije unesena
        </h3>
        <inertia-link
          :href="route('user.conversation')"
          as="button"
          class="ml-4 inline-flex items-center px-3 py-1 font-medium border-transparent text-sm leading-5 border-2 border-rose-500 rounded-md text-rose-700 bg-white hover:bg-rose-50 focus:outline-none focus:shadow-outline-rose focus:border-rose-700 active:bg-rose-700 transition duration-150 ease-in-out"
          >Pošalji poruku Sunčanoj vuri</inertia-link
        >
      </div>
    </div>
    <div
      v-if="application.price && payments.length > 0"
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
  <create-payment
    :uuid="application.uuid"
    :showModal="showModal"
    :errors="errors"
    :type="paymentType"
    :applicationType="type"
    @close="modalClose"
    @barcode="enterBarcode"
    @virman="enterVirman"
  ></create-payment>
  <create-barcode
    :showModal="showBarcodeModal"
    :barcode="barcode"
    @close="barcodeClose"
  ></create-barcode>
  <cash-payment :showModal="showCashModal" @close="cashClose"></cash-payment>
</template>

<script>
import moment from "moment";
import SuperAdminLayout from "@/Layout/SuperAdminLayout";
import NestedLayoutUserApplication from "@/Layout/NestedLayoutUserApplication";
import CreatePayment from "@/Pages/Admin/Applications/CreatePayment";
import CreateBarcode from "@/Pages/Admin/Applications/CreateBarcode";
import CashPayment from "@/Pages/Admin/Applications/CashPayment";
export default {
  inheritAttrs: false,
  layout: (h, page) => {
    return h(
      SuperAdminLayout,
      {
        resource: "Prijava",
        indexRoute: "user.dashboard",
        type: page.props.authuser.role,
      },
      () => [
        h(
          NestedLayoutUserApplication,
          {
            url: "application/pay",
            uuid: page.props.application.uuid,
            type:
              page.props.application.type == "Work & travel"
                ? "worktravel"
                : "aupair",
          },
          () => [page]
        ),
      ]
    );
  },
  components: {
    CreatePayment,
    CreateBarcode,
    CashPayment,
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
        route("user.application.pay.barcode"),
        { amount: amount, type: this.type, uuid: this.application.uuid },
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
      this.$inertia.post(
        route("user.application.pay.virman"),
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
      );
    },
  },
};
</script>
