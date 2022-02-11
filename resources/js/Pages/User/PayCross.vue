<template>
  <div class="sm:col-span-4 max-w-7xl px-8 mx-auto mt-10">
    <div class="bg-white shadow sm:rounded-lg">
      <div
        class="bg-gray-50 px-4 py-5"
      >
        <div class="font-semibold text-lg text-rose-800 mb-5">
          Izaberite uslugu koju želite platiti
        </div>
        <div class="space-y-3 md:space-y-0 md:flex md:space-x-4">
          <inertia-link
            v-if="worktravel"
            as="button"
             :href="route('user.worktravel.application.pay', worktravel)"
            class="inline-flex justify-center  w-full rounded-md border-2 border-rose-600 shadow-sm px-4 py-2 bg-white text-base font-semibold text-rose-600 hover:bg-rose-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-rose-500 sm:w-auto sm:text-sm"
          >
            Plaćanje usluge Work & travel
          </inertia-link>
          <button
            v-else
            disabled
            class="inline-flex justify-center w-full rounded-md border-2 border-rose-600 shadow-sm px-4 py-2
            bg-white text-base font-semibold text-rose-600 hover:bg-rose-50 focus:outline-none focus:ring-2
            focus:ring-offset-2 focus:ring-rose-500 sm:w-auto sm:text-sm cursor-not-allowed"
          >
            Plaćanje usluge Work & travel
          </button>
          <inertia-link
            v-if="aupair"
            as="button"
            :href="route('user.aupair.application.pay', aupair)"
            class="inline-flex justify-center w-full rounded-md border-2 border-rose-600 shadow-sm px-4 py-2 bg-white text-base font-semibold text-rose-600 hover:bg-rose-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-rose-500 sm:w-auto sm:text-sm"
          >
            Plaćanje usluge Au pair
          </inertia-link>
          <button
            v-else
            disabled
            class="inline-flex justify-center w-full rounded-md border-2 border-rose-600 shadow-sm px-4 py-2
            bg-white text-base font-semibold text-rose-600 hover:bg-rose-50 focus:outline-none focus:ring-2
            focus:ring-offset-2 focus:ring-rose-500 sm:w-auto sm:text-sm cursor-not-allowed"
          >
            Plaćanje usluge Au pair
          </button>
          <inertia-link
            as="button"
            :href="route('user.pay')"
            class="inline-flex justify-center w-full rounded-md border-2 border-rose-600 shadow-sm px-4 py-2 bg-white text-base font-semibold text-rose-600 hover:bg-rose-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-rose-500 sm:w-auto sm:text-sm"
          >
            Plaćanje ostalih usluga
          </inertia-link>
        </div>
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
          Pregled svih uplata
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
</template>

<script>
import moment from "moment";
import SuperAdminLayout from "@/Layout/SuperAdminLayout";
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
      //
  },
  props: {
      worktravel: String,
      aupair: String,
      payments: Array,
  },
  data() {
    return {
      //
    };
  },
  methods: {
    createdAt(date) {
      return moment(date).format("DD. MM. YYYY.");
    },
  }
};
</script>
