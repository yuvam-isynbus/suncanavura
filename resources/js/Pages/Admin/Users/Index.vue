<template>
  <div>
    <div
      class="px-4 py-8 sm:px-6 lg:max-w-7xl lg:mx-auto lg:px-8 xl:max-w-screen-2xl"
    >
      <div class="md:flex md:items-end md:justify-between">
        <div class="flex items-end flex-1 min-w-0">
          <super-search-input
            v-model="filterForm.search"
            class="w-2/3 max-w-sm mr-4"
            @reset="resetFilterForm"
          ></super-search-input>

<!--            <base-radio-group
              v-model="filterForm.has_application"
              name="has_application"
              :vertical="true"
              :options="[
                { value: 'all', label: 'Svi' },
                { value: 'with_application', label: 'S prijavom' },
                { value: 'without_application', label: 'Bez prijave' },
              ]"
            ></base-radio-group> -->
            <div class="w-1/3 mr-4">
            <list-select
              v-model="filterForm.application_type"
              label="Vrsta Prijave"
              :items="['Svi', 'Work & travel', 'Au pair', 'Bez prijave']"
            ></list-select>
          </div>
        </div>
        <div class="mt-6 flex space-x-3 md:mt-0 md:ml-4">
          <span class="shadow-sm rounded-md">
            <inertia-link
              v-if="$page.props.authuser.role === 'admin'"
              as="button"
              type="button"
              class="inline-flex justify-center w-full rounded-md border border-transparent
              shadow-sm px-4 py-2 bg-rose-600 text-base font-medium text-white hover:bg-rose-700
              focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-rose-500
              sm:w-auto sm:text-sm"
              :href="route('admin.users.create', { role })"
            >
              {{ addUserLabel }}
            </inertia-link>
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
          <button
              v-if="$page.props.authuser.role === 'admin'"
              @click="showModal = true"
              class="inline-flex justify-center w-full rounded-md border border-transparent
              shadow-sm ml-2 px-4 py-2 bg-green-600 text-base font-medium text-white hover:bg-green-700
              focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500
              sm:w-auto sm:text-sm"
            >
              Pošalji poruku svima
            </button>
          </span>
        </div>
      </div>
    </div>

    <!-- Activity list (smallest breakopoint only) -->
    <super-list
      :columns="columns"
      :items="users"
      @row-clicked="rowClicked($event)"
    >
      <template v-slot:cell-has_application="{ row: user }">
        <span
          class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full"
          :class="{
            'bg-green-100 text-green-800': user.has_application,
            'bg-red-100 text-red-800': !user.has_application,
          }"
        >
          {{ user.has_application ? "Yes" : "No" }}
        </span>
      </template>
      <template v-slot:cell-has_aupair="{ row: user }">
        <span
          class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full"
          :class="{
            'bg-green-100 text-green-800': user.has_aupair,
            'bg-red-100 text-red-800': !user.has_aupair,
          }"
        >
          {{ user.has_aupair ? "Yes" : "No" }}
        </span>
      </template>
    </super-list>

    <!-- Activity table (small breakopoint and up) -->
    <super-table
      :columns="columns"
      :items="users"
      @row-clicked="rowClicked($event)"
    >
      <template v-slot:cell-has_application="{ row: user }">
        <span
          class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full"
          :class="{
            'bg-green-100 text-green-800': user.has_application,
            'bg-red-100 text-red-800': !user.has_application,
          }"
        >
          {{ user.has_application ? "Da" : "Ne" }}
        </span>
      </template>
      <template v-slot:cell-has_aupair="{ row: user }">
        <span
          class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full"
          :class="{
            'bg-green-100 text-green-800': user.has_aupair,
            'bg-red-100 text-red-800': !user.has_aupair,
          }"
        >
          {{ user.has_aupair ? "Da" : "Ne" }}
        </span>
      </template>
    </super-table>
  </div>
  <create-message
    :showModal="showModal"
    :filterForm="filterForm"
    @close="showModal = false"
  ></create-message>
</template>

<script>
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
import CreateMessage from "@/Pages/Admin/Applications/CreateMessage";
import useFilter from "@/use/useFilter";
import useLastItem from "@/use/useLastItem";
import useExport from "@/use/useExport";
const defaultFilterForm = {
  search: null,
  // has_application: "all",
  application_type: "Svi",
};
export default {
  inheritAttrs: false,
  setup(props, context) {
    const indexRoute = route("admin.users.index");
    useLastItem(indexRoute, props.users.data);
    // return useFilter(indexRoute, props.filters, defaultFilterForm);
    const { filterForm, resetFilterForm } = useFilter(
      indexRoute,
      props.filters,
      defaultFilterForm
    );
    const exportRoute = useExport("admin.users.export", filterForm, defaultFilterForm)
    return {
      filterForm,
      resetFilterForm,
      exportRoute
    };
  },
  layout: (h, page) => {
    return h(
      SuperAdminLayout,
      {
        resource: "Korisnici",
        indexRoute: "admin.users.index",
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
    CreateMessage
  },
  props: {
    users: Object,
    can: Object,
    filters: Object,
    role: String,
    columns: Array,
    addUserLabel: String
  },
  data() {
    return {
      showModal: false,
    };
  },
  methods: {
    rowClicked(item) {
      this.$inertia.get(route("admin.users.show", item.id));
    },
    sendMessages() {
        this.$inertia
        .post(this.route('admin.send-message-to-many'), this.filterForm)
         // :href="route('admin.send-message-to-many')"
    }
  },
};
</script>
