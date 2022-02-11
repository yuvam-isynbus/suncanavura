<template>
  <div class="px-4 sm:px-6 lg:px-8 lg:max-w-7xl lg:mx-auto xl:max-w-screen-2xl">
    <div class="py-8">

    <div class="flex items-end flex-1 min-w-0 mb-6">
        <super-search-input
        v-model="filterForm.search"
        class="w-2/3 max-w-sm mr-4"
        @reset="resetFilterForm"
        ></super-search-input>
    </div>

    <p v-if="worktravels?.length == 0">Nema unesenih Work & travel poslova</p>

    <!-- CARD -->

    <div v-else class="flex flex-col sm:flex-row rounded-lg shadow overflow-hidden border mb-6" v-for="worktravel in worktravels">
        <div class="sm:p-2 flex-shrink-0 sm:w-1/5">
            <img class="lg:rounded-l-lg h-32 w-full object-cover" :src="worktravel.image" :alt="worktravel.name">
        </div>
        <div class="flex-1 bg-white px-6 lg:px-2 py-4 flex flex-col justify-between">
            <div class="flex-1">
                    <p class="text-xl font-semibold text-gray-900">
                        {{ worktravel.name }}
                    </p>
                    <!-- <div v-html="worktravel.description" class="mt-3 text-base text-gray-500 prose"></div> -->
                    <p class="mt-2 text-base text-gray-500 prose">{{ excerpt(worktravel.description) }}</p>
            </div>
            <div class="flex space-x-4">
              <p class="mt-2 text-base text-gray-500">
                  <span class="font-semibold">Satnica:</span> {{ worktravel.satnica }} USD
              </p>
              <div class="mt-2 text-base text-gray-500">
                  <div class="flex space-x-4" v-if="worktravel.smjestaj">
                      <div><span class="font-semibold">Smještaj:</span> DA</div>
                      <div><span class="font-semibold">Cijena smještaja:</span> {{ worktravel.smjestaj_price }} USD</div>
                  </div>
                  <div v-else><span class="font-semibold">Smještaj:</span> NE</div>
              </div>
            </div>
            <inertia-link
              :href="route('user.worktravels.show', worktravel.id)"
              class="text-blue-600 hover:text-blue-400 mt-2"
              >Saznaj više...</inertia-link
            >
            <!-- <a href="#" class="w-36 mt-3 text-center py-2 px-4 border border-transparent shadow-sm
                font-medium rounded-md text-white bg-rose-600 hover:bg-rose-700 focus:outline-none
                focus:ring-2 focus:ring-offset-2 focus:ring-rose-500">
                Pošalji prijavu
            </a> -->
        </div>
    </div>


        <!-- END OF CARD -->
    </div>
  </div>
</template>

<script>
import SuperAdminLayout from "@/Layout/SuperAdminLayout";
import SuperSearchInput from "@/Shared/SuperSearchInput";
import useFilter from "@/use/useFilter";

const defaultFilterForm = {
  search: null,
};
export default {
    setup(props, context) {
    const indexRoute = route("user.worktravels");
    const { filterForm, resetFilterForm } = useFilter(
      indexRoute,
      props.filters,
      defaultFilterForm
    );
    return {
      filterForm,
      resetFilterForm,
    };
  },
  layout: (h, page) => {
    return h(
      SuperAdminLayout,
      {
        resource: "Work & travel poslovi",
        indexRoute: "user.worktravels",
        type: "user",
      },
      () => [page]
    );
  },
  components: {
    SuperSearchInput
  },
  props: {
    worktravels: Array,
    filters: Object,
  },
  methods: {
      excerpt(html) {
          const el = document.createElement( 'html' );
          el.innerHTML = html;
          const txt = el.getElementsByTagName( 'p' )[0]?.innerText
          return this.truncate(txt, 200, '...')
      },
      truncate(str, max, suffix) {
          return str?.length < max ? str : `${str?.substr(0, str?.substr(0, max - suffix?.length).lastIndexOf(' '))}${suffix}`;
      }
  }
};
</script>
