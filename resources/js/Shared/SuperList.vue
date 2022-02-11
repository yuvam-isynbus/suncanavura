<template>
    <!-- Activity list (smallest breakopoint only) -->
    <div class="shadow sm:hidden">
      <ul
        class="divide-y divide-cool-gray-200 overflow-hidden shadow sm:hidden"
      >
        <li v-for="row in computedItems" :key="row.id">
          <a
            href="#"
            class="block px-6 py-4 bg-white hover:bg-cool-gray-50"
            @click.native.prevent="$emit('row-clicked', row)"
          >
            <!-- <div class="flex items-center space-x-4"> -->
            <div class="">
              <div class="flex-1 flex space-x-2 truncate">
                <div class="text-cool-gray-500 text-sm truncate">
                  <p class="mb-1 truncate" v-for="col in columns" :key="col.label">
                    <span class="text-cool-gray-900 font-medium"
                      >{{ col.label }}:
                    </span>
                    <slot :name="'cell-' + col.name" :row="row">
                      {{ row[col.name] }}
                    </slot>
                  </p>
                </div>
              </div>
              <div>
                <slot name="actions" :row="row">
                <!-- Heroicon name: chevron-right -->
                <svg
                  class="flex-shrink-0 h-5 w-5 text-cool-gray-400"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fill-rule="evenodd"
                    d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                    clip-rule="evenodd"
                  />
                </svg>
                </slot>
              </div>
            </div>
          </a>
        </li>
      </ul>
      <super-simple-pagination v-if='pagination' :links="items.links" />
    </div>
</template>

<script>
import SuperSimplePagination from "@/Shared/SuperSimplePagination";
export default {
  emits: ["row-clicked"],
  components: {
      SuperSimplePagination
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
