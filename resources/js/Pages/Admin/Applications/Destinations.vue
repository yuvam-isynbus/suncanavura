<template>
  <div
    class="mt-8 max-w-3xl mx-auto grid grid-cols-1 gap-6 sm:px-6 lg:max-w-4xl"
  >
    <div class="">
      <!-- Comments-->
      <section aria-labelledby="notes-title">
        <div class="bg-white shadow sm:rounded-lg sm:overflow-hidden">
          <div class="divide-y divide-gray-200">
            <div class="px-4 py-5 sm:px-6 flex justify-between">
              <h2 id="notes-title" class="text-lg font-medium text-gray-900">
                Destinacije
              </h2>
              <button
                @click="createNote"
                type="submit"
                class="inline-flex items-center justify-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-rose-600 hover:bg-rose-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
              >
                Dodaj novu destinaciju
              </button>
            </div>
            <div class="px-4 py-6 sm:px-6">
              <ul v-if="destinations.length > 0" class="space-y-2">
                <li
                  class="py-3 border-b border-gray-200"
                  v-for="destination in destinations"
                  :key="destination.id"
                >
                  <div class="flex justify-between mt-1 text-gray-900">
                    <p>
                      {{ destination.name }}
                    </p>
                    <div class="space-x-2">
                      <button
                        @click="editDestination(destination)"
                        type="button"
                        class="text-blue-500 hover:text-blue-400 font-medium focus:outline-none"
                      >
                        Izmjeni
                      </button>
                      <button
                        @click="confirmDestinationDeletion(destination)"
                        type="button"
                        class="text-red-600 hover:text-red-500 font-medium focus:outline-none"
                      >
                        Izbriši
                      </button>
                    </div>
                  </div>
                </li>
              </ul>
              <p v-else> Nema unesenih destinacija </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  </div>
  <create-destination
    :destination="destination"
    :showModal="showModal"
    @close="showModal = false"
  ></create-destination>
  <confirm-delete
    actionLabel="Izbriši"
    message="Brisanje dovodi do trajnog gubitka poadataka"
    :showModal="showConfirmModal"
    @close="modalClose"
    @confirm="destroyDestination"
  ></confirm-delete>
</template>

<script>
import SuperAdminLayout from "@/Layout/SuperAdminLayout";
import NestedLayoutAdminApplication from "@/Layout/NestedLayoutAdminApplication";
import CreateDestination from "@/Pages/Admin/Applications/CreateDestination";
import ConfirmDelete from "@/Pages/Admin/Applications/ConfirmDelete.vue";
export default {
  inheritAttrs: false,
  layout: (h, page) =>
    h(
      SuperAdminLayout,
      {
        resource: "Sponzori",
        indexRoute: "admin.destinations.index",
        // action: page.props.application.name,
      },
      () => [page]
    ),
  components: {
    CreateDestination,
    ConfirmDelete,
  },
  props: {
    application: Object,
    destinations: Array,
  },
  mounted() {
    window.Echo.private("applications").listen("TimelineEvent", (e) => {
      this.$inertia.reload();
    });
  },
  data() {
    return {
      showModal: false,
      destination: {},
      showConfirmModal: false,
      deleteDestination: null,
    };
  },
  methods: {
    createNote() {
      this.showModal = true;
      // this.modalValue = ''
    },
    editDestination(destination) {
      this.showModal = true;
      this.destination = { ...destination };
    },
    confirmDestinationDeletion(destination) {
      this.showConfirmModal = true;
      this.deleteDestination = destination;
    },
    modalClose() {
      this.showConfirmModal = false;
      this.deleteDestination = null;
    },
    destroyDestination() {
      this.$inertia.delete(
        this.route("admin.destinations.destroy", this.deleteDestination.id),
        {
          onSuccess: (page) => (this.showConfirmModal = false),
        }
      );
    },
  },
};
</script>
