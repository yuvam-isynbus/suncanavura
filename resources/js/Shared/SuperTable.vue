<template>
  <!-- Activity table (small breakopoint and up) -->
      <div class="hidden sm:block">
        <div class="px-4 sm:px-6 lg:max-w-7xl lg:mx-auto lg:px-8 xl:max-w-screen-2xl">
          <div class="flex flex-col mt-2">
            <div
              class="align-middle min-w-full overflow-x-auto shadow overflow-hidden sm:rounded-lg"
            >
              <table class="min-w-full divide-y divide-gray-200">
                <thead>
                  <tr>
                    <th
                      v-for="col in columns"
                      :key="col.label"
                      class="px-6 py-4 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider"
                    >
                      {{ col.label }}
                    </th>
                    <th class="px-6 py-4 bg-gray-50"></th>
                  </tr>
                </thead>
                <tbody class="bg-white divide-y divide-gray-200">
                  <tr
                    v-for="row in computedItems"
                    :key="row.id"
                    class="hover:bg-cool-gray-50 focus-within:bg-cool-gray-50 cursor-pointer"
                    @click.native="$emit('row-clicked', row)"
                  >
                    <td
                      v-for="col in columns"
                      :key="col.label"
                      class="px-6 py-4 whitespace-no-wrap text-sm leading-5 font-medium text-gray-900"
                    >
                      <slot :name="'cell-' + col.name" :row="row">
                        {{ row[col.name] }}
                      </slot>
                    </td>
                    <td
                      class="px-6 py-4 whitespace-no-wrap text-sm leading-5 text-gray-500"
                    >
                      <slot name="actions" :row="row">
                        <svg
                            class="h-5 w-5 text-gray-400"
                            x-description="Heroicon name: chevron-right"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                        >
                            <path
                            fill-rule="evenodd"
                            d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                            clip-rule="evenodd"
                            ></path>
                        </svg>
                      </slot>
                    </td>
                  </tr>
                </tbody>
              </table>
              <!-- Pagination -->
              <super-pagination v-if='pagination' :items="items" />
            </div>
          </div>
        </div>
      </div>
</template>

<script>
import SuperPagination from "@/Shared/SuperPagination";
export default {
  emits: ["row-clicked"],
  components: {
      SuperPagination
  },
  props: {
    columns: Array,
    items: Object,
    pagination: {
        type: Boolean,
        default: true
    }
  },
  computed: {
      computedItems() {
          return this.items.data
            ? this.items.data
            : this.items
      }
  },
  methods: {
    clicked() {
      console.log("CLICKED");
    },
  },
};
</script>

<style>
</style>
