<template>
    <div
      class="py-8 lg:max-w-7xl lg:mx-auto xl:max-w-screen-2xl"
    >
      <div class="px-4 lg:px-9 md:flex md:items-end md:justify-between">
        <h2
          id="applicant-information-title"
          class="text-lg leading-6 font-medium text-gray-900"
        >
          Podaci o plaćanju
        </h2>
        <div class="space-x-3">
          <button
            @click="
              showModal = true;
              paymentType = 'bank';
              payment = {};
            "
            type="button"
            class="inline-flex items-center px-4 py-2 border border-transparent text-sm leading-5 font-medium rounded-md text-white bg-rose-600 hover:bg-rose-500 focus:outline-none focus:shadow-outline-rose focus:border-rose-700 active:bg-rose-700 transition duration-150 ease-in-out"
          >
            Unesi uplatu
          </button>
          <button
            @click="
              showModal = true;
              paymentType = 'refund';
              payment = {};
            "
            type="button"
            class="inline-flex items-center px-4 py-2 border border-transparent text-sm leading-5 font-medium rounded-md text-white bg-blue-600 hover:bg-blue-500 focus:outline-none focus:shadow-outline-blue focus:border-blue-700 active:bg-blue-700 transition duration-150 ease-in-out"
          >
            Unesi povrat
          </button>
        </div>
      </div>
      <div
        v-if="payments.length > 0"
        class="py-5"
      >
        <h3
          id="applicant-information-title"
          class="px-5 lg:px-9 pb-5 font-medium text-gray-900"
        >
          Pregled uplata
        </h3>
        <!-- Activity list (smallest breakopoint only) -->
        <super-list
        :columns="columns"
        :items="payments"
        :pagination="false"
        >
        <template v-slot:cell-created_at="{ row: application }">
            {{ createdAt(application.created_at) }}
        </template>
        <template v-slot:actions="{ row: payment }">
            <button
                @click="editPayment(payment)"
                type="button"
                class="text-blue-500 hover:text-blue-400 font-medium focus:outline-none"
            >
                Izmjeni
            </button>
            <button
                @click="confirmPaymentDeletion(payment)"
                type="button"
                class="ml-2 text-red-600 hover:text-red-500 font-medium focus:outline-none"
            >
                Izbriši
            </button>
        </template>
        </super-list>
        <super-table
        :columns="columns"
        :items="payments"
        :pagination="false"
        >
        <template v-slot:cell-created_at="{ row: payment }">
            {{ createdAt(payment.payment_date) }}
        </template>
        <template v-slot:actions="{ row: payment }">
            <button
                @click="editPayment(payment)"
                type="button"
                class="text-blue-500 hover:text-blue-400 font-medium focus:outline-none"
            >
                Izmjeni
            </button>
            <button
                @click="confirmPaymentDeletion(payment)"
                type="button"
                class="ml-2 text-red-600 hover:text-red-500 font-medium focus:outline-none"
            >
                Izbriši
            </button>
        </template>
        </super-table>
      </div>
      <div v-else class="border-t border-gray-200 px-4 py-5">
        <h3
          id="applicant-information-title"
          class="pb-5 font-medium text-gray-900"
        >
          Nema uplata
        </h3>
      </div>
    </div>
  <create-admin-user-free-payment
    :id="user.id"
    :payment="payment"
    :showModal="showModal"
    :type="paymentType"
    @close="modalClose"
  ></create-admin-user-free-payment>
  <confirm-delete
    actionLabel="Izbriši"
    message="Brisanje dovodi do trajnog gubitka poadataka"
    :showModal="showConfirmModal"
    @close="modalClose"
    @confirm="destroyPayment"
  ></confirm-delete>
</template>

<script>
import moment from "moment";
import SuperAdminLayout from "@/Layout/SuperAdminLayout";
import NestedUserLayout from "@/Layout/NestedUserLayout";
import CreateAdminUserFreePayment from "@/Pages/Admin/Applications/CreateAdminUserFreePayment";
import ConfirmDelete from "@/Pages/Admin/Applications/ConfirmDelete";
import SuperList from "@/Shared/SuperList";
import SuperTable from "@/Shared/SuperTable";
export default {
  inheritAttrs: false,
  layout: (h, page) =>
    h(
      SuperAdminLayout,
      {
        resource: "Korisnici",
        indexRoute: "admin.users.index",
        action: page.props.user.name,
      },
      () => [
        h(
          NestedUserLayout,
          {
            url: "admin/users/payments",
            id: page.props.user.id,
            // type: page.props.application.type == 'Work & travel' ? 'worktravel' : 'aupair'
          },
          () => [page]
        ),
      ]
    ),
  components: {
    CreateAdminUserFreePayment,
    ConfirmDelete,
    SuperList,
    SuperTable
  },
  props: {
    payments: Array,
    user: Object,
    errors: Object,
  },
  mounted() {
    window.Echo.private("applications").listen("TimelineEvent", (e) => {
      this.$inertia.reload();
    });
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
      ],
    };
  },
  methods: {
    createdAt(date) {
      return moment(date).format("DD. MM. YYYY.");
    },
    modalClose() {
      this.showModal = false;
      this.showConfirmModal = false;
      this.deletePayment = null;
    },
    editPayment(payment) {
        console.log(payment)
      this.showModal = true;
      this.payment = { ...payment };
      this.paymentType = payment.type === 'Povrat' ? 'refund' : 'bank'
    },
    confirmPaymentDeletion(payment) {
      this.showConfirmModal = true;
      this.deletePayment = payment;
    },
    destroyPayment() {
      this.$inertia.delete(
        this.route("admin.users.payments.destroy", [
          this.user.id,
          this.deletePayment.id,
        ]),
        {
          onSuccess: (page) => (this.showConfirmModal = false),
        }
      );
    },
  },
};
</script>
