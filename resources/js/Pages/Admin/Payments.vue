<template>
  <div>
    <div
      class="px-4 py-8 sm:px-6 lg:max-w-7xl lg:mx-auto lg:px-8 xl:max-w-screen-2xl"
    >
      <div class="md:flex md:items-end md:justify-between">
        <div class="md:flex md:items-end flex-1 min-w-0">
          <super-search-input
            v-model="filterForm.search"
            class="w-2/3 max-w-sm mr-4"
            @reset="resetFilterForm"
          ></super-search-input>

          <div class="md:w-2/5 flex space-x-2">
            <date-picker
              class="block w-full border-gray-300 rounded-md focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 sm:text-sm sm:leading-5"
              v-model="filterForm.start_date"
              type="text"
              label="Od"
              format="DD. MM. YYYY."
              :options="{}"
            ></date-picker>
            <date-picker
              class="block w-full border-gray-300 rounded-md focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 sm:text-sm sm:leading-5"
              v-model="filterForm.end_date"
              type="text"
              label="Do"
              format="DD. MM. YYYY."
              :options="{}"
            ></date-picker>
          </div>
          <div class="w-1/5 ml-4">
            <list-select
              v-model="filterForm.payment_type"
              label="Vrsta uplate"
              :items="['Sve', 'Aplikacija', 'Work & travel', 'Au pair', 'Slobodna']"
            ></list-select>
          </div>
        </div>
        <div class="mt-6 flex space-x-3 md:mt-0 md:ml-4">
          <span class="shadow-sm rounded-md">
<!--                       <button
            @click="
              showModal = true;
              paymentType = 'bank';
              payment = {};
            "
            type="button"
            class="inline-flex items-center px-4 py-2 border border-transparent text-sm leading-5 font-medium rounded-md text-white bg-rose-600 hover:bg-rose-500 focus:outline-none focus:shadow-outline-rose focus:border-rose-700 active:bg-rose-700 transition duration-150 ease-in-out"
          >
            Unesi uplatu
          </button> -->
          <a
            class="
              inline-flex
              justify-center
              w-full
              rounded-md
              border border-transparent
              shadow-sm
              px-4
              py-2
              ml-2
              bg-gray-600
              text-base
              font-medium
              text-white
              hover:bg-gray-700
              focus:outline-none
              focus:ring-2 focus:ring-offset-2 focus:ring-gray-500
              sm:w-auto
              sm:text-sm
            "
            :href="exportRoute('excel')"
          >
            Preuzmi Excel
          </a>
          </span>
        </div>
      </div>
    </div>

    <div
      class="md:flex justify-between border-t border-gray-200 px-5 sm:px-7 py-5 lg:max-w-7xl lg:mx-auto lg:px-9 xl:max-w-screen-2xl"
    >
      <div>
        <span>Ukupno potraživanje</span>
        <span class="ml-3 text-rose-600 text-lg font-semibold"
          >{{ total }} kn</span
        >
      </div>
      <div>
        <span>Ukupno uplaćeno</span>
        <span class="ml-3 text-green-600 text-lg font-semibold"
          >{{ paid }} kn</span
        >
      </div>
    </div>

    <!-- Activity list (smallest breakopoint only) -->
    <super-list
      :columns="columns"
      :items="payments"
      @row-clicked="rowClicked($event)"
    >
      <template v-slot:cell-created_at="{ row: application }">
        {{ createdAt(application.created_at) }}
      </template>
    </super-list>

    <!-- Activity table (small breakopoint and up) -->
    <super-table
      :columns="columns"
      :items="payments"
      @row-clicked="rowClicked($event)"
    >
      <template v-slot:cell-created_at="{ row: payment }">
        {{ createdAt(payment.payment_date) }}
      </template>
    </super-table>
  </div>
  <!-- <create-admin-free-payment
    :payment="payment"
    :showModal="showModal"
    :type="paymentType"
    @close="modalClose"
  ></create-admin-free-payment> -->
</template>

<script>
import moment from "moment";
import { mapValues, throttle, pickBy } from "lodash";
import { ref, watch } from "vue";
import { Inertia } from "@inertiajs/inertia";
import { onMounted } from "vue";
import SuperAdminLayout from "@/Layout/SuperAdminLayout";
import Icon from "@/Shared/Icon";
import SuperSearchInput from "@/Shared/SuperSearchInput";
import SuperList from "@/Shared/SuperList";
import SuperTable from "@/Shared/SuperTable";
import BaseRadioGroup from "@/Form/BaseRadioGroup";
import ListSelect from "@/Form/ListSelect";
import DatePicker from "@/Form/DatePicker";
// import CreateAdminFreePayment from "@/Pages/Admin/Applications/CreateAdminFreePayment";
import useFilter from "@/use/useFilter";
import useLastItem from "@/use/useLastItem";
import useExport from "@/use/useExport";
const defaultFilterForm = {
  search: null,
  start_date: null,
  end_date: null,
  payment_type: 'Sve',
};
export default {
  inheritAttrs: false,
  setup(props, context) {
    const indexRoute = route("admin.payments.index");
    const years = ["Sve", "1", "2", "3", "4", "5"];
    useLastItem(indexRoute, props.payments.data);
    const { filterForm, resetFilterForm } = useFilter(
      indexRoute,
      props.filters,
      defaultFilterForm
    );
    const exportRoute = useExport("admin.payments.export", filterForm, defaultFilterForm)
    return {
      filterForm,
      resetFilterForm,
      years,
      exportRoute
    };
  },
  layout: (h, page) => {
    return h(
      SuperAdminLayout,
      {
        resource: "Uplate",
        indexRoute: "admin.payments.index",
      },
      () => [page]
    );
  },
  components: {
    Icon,
    SuperList,
    SuperTable,
    SuperSearchInput,
    BaseRadioGroup,
    ListSelect,
    DatePicker,
    // CreateAdminFreePayment
  },
  props: {
    total: String,
    paid: String,
    payments: Object,
    filters: Object,
  },
  data() {
    return {
      showModal: false,
      payment: {},
      showConfirmModal: false,
      deletePayment: null,
      paymentType: "",
      columns: [
        {
          label: "Datum uplate",
          name: "created_at",
        },
        {
          label: "Ime korisnika",
          name: "name",
        },
        {
          label: "Uplatu unio",
          name: "creator",
        },
        {
          label: "Opis uplate",
          name: "type",
        },
        {
          label: "Iznos",
          name: "amount",
        },
        /* {
          label: "Korisnik",
          name: "name",
        }, */
      ],
      // pet: 1,
    };
  },
  methods: {
    rowClicked(item) {
      item.uuid
         ? this.$inertia.get(route("admin.applications.payments.index", item.uuid))
         : this.$inertia.get(route("admin.users.payments.index", item.user_id))
    },
    createdAt(date) {
      return moment(date).format("DD. MM. YYYY.");
    },
    modalClose() {
      this.showModal = false;
      this.showConfirmModal = false;
      this.deletePayment = null;
    },
  },
};
</script>
