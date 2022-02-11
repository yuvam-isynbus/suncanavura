<template>
  <div class="px-8 py-8">
    <div class="md:flex md:items-end md:justify-between px-4 py-8 sm:px-6 lg:max-w-7xl lg:mx-auto lg:px-8
        xl:max-w-screen-2xl">
        <div class="flex items-end flex-1 min-w-0">
            <super-search-input
            v-model="filterForm.search"
            class="w-2/3 max-w-sm mr-4"
            @reset="resetFilterForm"
            ></super-search-input>
        </div>
        <div class="space-x-4">
            <inertia-link
            as="button"
            type="button"
            class="inline-flex justify-center w-full rounded-md border border-transparent
                shadow-sm px-4 py-2 bg-rose-600 text-base font-medium text-white hover:bg-rose-700
                focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-rose-500
                sm:w-auto sm:text-sm"
            :href="route('admin.worktravels.create')"
            >
            Dodaj novi W&T
            </inertia-link>
        </div>
    </div>
    <super-table
      :columns="columns"
      :items="worktravels"
      @row-clicked="rowClicked($event)"
    >
    <template v-slot:cell-image="{ row: wt }">
        <img class="h-24" :src="wt.image" alt="">
      </template>
    <template v-slot:cell-actions="{ row: wt }">
        <button @click.stop="preview(wt.id)"
        class="inline-flex justify-center w-full rounded-md border border-transparent
                shadow-sm px-2 py-1 bg-gray-600 text-base font-medium text-white hover:bg-gray-700
                focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500
                sm:w-auto sm:text-sm">Pregledaj</button>
      </template>
    </super-table>
  </div>
</template>

<script>
import { Inertia } from "@inertiajs/inertia";
import SuperAdminLayout from "@/Layout/SuperAdminLayout";
import SuperTable from "@/Shared/SuperTable";
import SuperSearchInput from "@/Shared/SuperSearchInput";
import ListSelect from "@/Form/ListSelect";
import useFilter from "@/use/useFilter";
import useLastItem from "@/use/useLastItem";
import useExport from "@/use/useExport";

const defaultFilterForm = {
  search: null,
};
export default {
  inheritAttrs: false,
  setup(props, context) {
    const indexRoute = route("admin.worktravels.index");
    useLastItem(indexRoute, props.worktravels.data);
    const { filterForm, resetFilterForm } = useFilter(
      indexRoute,
      props.filters,
      defaultFilterForm
    );
    function rowClicked(item) {
      Inertia.get(route("admin.worktravels.edit", item.id));
    }
    function preview(id) {
      Inertia.get(route("admin.worktravels.show", id));
    }
    const exportRoute = useExport(filterForm, defaultFilterForm)
    return {
      filterForm,
      resetFilterForm,
      rowClicked,
      preview,
      exportRoute
    };
  },
  layout: (h, page) => {
    return h(
      SuperAdminLayout,
      {
        resource: "W&T poslovi",
        indexRoute: "admin.worktravels.index",
      },
      () => [page]
    );
  },
  components: { SuperTable, SuperSearchInput, ListSelect, SuperAdminLayout },
  props: {
    worktravels: Object,
    columns: Array,
    filters: Object,
  },
};
</script>

<style>
</style>
