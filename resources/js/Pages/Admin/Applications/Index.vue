<template>
  <div>
    <div
      class="px-4 py-8 sm:px-6 lg:max-w-7xl lg:mx-auto lg:px-8 xl:max-w-screen-2xl"
    >
      <div class="md:flex md:items-center md:justify-between">
        <div class="md:flex md:items-end flex-1 min-w-0">
          <super-search-input
            v-model="filterForm.search"
            class="w-1/4 max-w-lg mr-4"
            @reset="resetFilterForm"
          ></super-search-input>

          <div class="md:w-1/3 flex space-x-4">
            <date-picker
              class="block w-full border-gray-300 rounded-md focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 sm:text-sm sm:leading-5"
              v-model="filterForm.start_date"
              type="text"
              label="Prijave predane od"
              format="DD. MM. YYYY."
              :options="{}"
            ></date-picker>
            <date-picker
              class="block w-full border-gray-300 rounded-md focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 sm:text-sm sm:leading-5"
              v-model="filterForm.end_date"
              type="text"
              label="Prijave predane do"
              format="DD. MM. YYYY."
              :options="{}"
            ></date-picker>

          </div>
          <div class="w-1/6 mx-4" v-if="type === 'worktravel'">
            <list-select
              v-model="filterForm.program"
              label="Program"
              :items="programs"
            ></list-select>
          </div>
          <div class="mt-6 flex space-x-3 md:mt-0 md:ml-4">
          <span class="shadow-sm rounded-md">
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
      <div class="md:flex md:items-center md:justify-between mt-4">
        <div class="md:flex md:items-end flex-1 min-w-0">
          <div class="w-1/5 mr-4">
            <list-select
              v-model="filterForm.godina"
              label="Godina studiranja"
              :items="years"
            ></list-select>
          </div>

          <div class="w-1/5 mr-4">
            <list-select
              v-model="filterForm.birth_year"
              label="Godina rođenja"
              :items="birthYears"
            ></list-select>
          </div>

          <div class="w-1/5 mr-4">
            <list-select
              v-model="filterForm.country"
              label="Država"
              :items="countries"
            ></list-select>
          </div>

          <div class="w-1/5 mr-4" v-if="type === 'worktravel'">
            <list-select
              v-model="filterForm.sponsor"
              label="Sponzor"
              :items="sponsors"
            ></list-select>
          </div>

          <div class="w-1/5 mr-4" v-if="type === 'aupair'">
            <list-select
              v-model="filterForm.destination"
              label="Destinacija"
              :items="destinations"
            ></list-select>
          </div>
          <div class="w-1/5 mr-4">
            <list-select
              v-model="filterForm.language"
              label="Strani jezik"
              :items="languages"
            ></list-select>
          </div>
        </div>
      </div>
    </div>

    <!-- Activity list (smallest breakopoint only) -->
    <super-list
      :columns="type === 'worktravel' ? worktravelColumns : aupairColumns"
      :items="applications"
      @row-clicked="rowClicked($event)"
    >
      <template v-slot:cell-created_at="{ row: application }">
        {{ createdAt(application.created_at) }}
      </template>
    </super-list>

    <!-- Activity table (small breakopoint and up) -->
    <super-table
      :columns="type === 'worktravel' ? worktravelColumns : aupairColumns"
      :items="applications"
      @row-clicked="rowClicked($event)"
    >
      <template v-slot:cell-created_at="{ row: application }">
        {{ createdAt(application.created_at) }}
      </template>
      <!-- <template v-slot:cell-has_password="{ row: application }">
        <span
          class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full"
          :class="{
            'bg-green-100 text-green-800': application.has_password,
            'bg-red-100 text-red-800': !application.has_password,
          }"
        >
          {{ application.has_password ? "Yes" : "No" }}
        </span>
      </template> -->
    </super-table>
  </div>
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
import useFilter from "@/use/useFilter";
import useLastItem from "@/use/useLastItem";
import useExport from "@/use/useExport";
const defaultFilterForm = {
  search: null,
  godina: "Sve",
  birth_year: "Sve",
  country: "Sve",
  program: "Svi",
  sponsor: "Svi",
  language: "Svi",
  destination: "Sve",
  start_date: null,
  end_date: null,
};
export default {
  inheritAttrs: false,
  setup(props, context) {
    const indexRoute = route("admin." + props.type + ".applications");
    const years = ["Sve", "1", "2", "3", "4", "5"];
    const countries = ["Sve", "Hrvatska", "BiH", "Srbija"];
    const programs = ["Svi", "Independent", "Premium", "Sierra"];
    // const sponsors = ["Svi", "Independent", "Premium", "Platinum Premium"];
    var birthYears = ["Sve"];
    for (var i = props.maxBirthYear; i >= props.minBirthYear; i--) {
      birthYears.push(i.toString());
    }
    useLastItem(indexRoute, props.applications.data);
    const { filterForm, resetFilterForm } = useFilter(
      indexRoute,
      props.filters,
      defaultFilterForm
    );
    const exportRoute = useExport("admin." + props.type + ".applications.export", filterForm, defaultFilterForm)
    return {
      filterForm,
      resetFilterForm,
      years,
      countries,
      programs,
      birthYears,
      exportRoute
    };
  },
  layout: (h, page) => {

    return h(
      SuperAdminLayout,
      {
        resource: page.props.type == "worktravel" ? "Prijave za Work & travel" : "Prijave za Au Pair",
        indexRoute: "admin.applications.index",
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
  },
  props: {
    applications: Object,
    filters: Object,
    minBirthYear: String,
    maxBirthYear: String,
    type: String,
    destinations: Array,
    sponsors: Array,
    languages: Array,
  },
  data() {
    return {
      worktravelColumns: [
        {
          label: "Datum prijave",
          name: "created_at",
        },
        {
          label: "Korisnik",
          name: "name",
        },
        {
          label: "Godina rođenja",
          name: "birth_year",
        },
        {
          label: "Grad",
          name: "city",
        },
        {
          label: "Država",
          name: "country",
        },
        {
          label: "Fakultet",
          name: "university",
        },
        {
          label: "Program",
          name: "program",
        },
        {
          label: "Sponzor",
          name: "sponsor",
        },
      ],
      aupairColumns: [
        {
          label: "Datum prijave",
          name: "created_at",
        },
        {
          label: "Korisnik",
          name: "name",
        },
        {
          label: "Destinacija",
          name: "destination",
        },
        {
          label: "Godina rođenja",
          name: "birth_year",
        },
        {
          label: "Grad",
          name: "city",
        },
        {
          label: "Država",
          name: "country",
        },
        {
          label: "Fakultet",
          name: "university",
        },
      ],
      // pet: 1,
    };
  },
  methods: {
    rowClicked(item) {
      this.$inertia.get(
        route("admin." + this.type + ".applications.show", item.uuid)
      );
    },
    createdAt(date) {
      return moment(date).format("DD. MM. YYYY.");
    },
    setGodina(value) {
      // if (value = )
    },
  },
};
</script>
