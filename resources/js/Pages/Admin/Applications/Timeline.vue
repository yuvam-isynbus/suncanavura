<template>
  <div class="mt-8 max-w-3xl mx-auto lg:max-w-5xl">
    <section aria-labelledby="timeline-title" class="px-4 sm:px-6">
      <div class="bg-white px-4 py-5 shadow sm:rounded-lg sm:px-6">
        <div class="flex items-center">
          <h2
            id="timeline-title"
            class="text-lg font-medium text-gray-900 border-b border-gray-200 pb-5"
          >
            Status prijave
          </h2>
          <div class="ml-12 flex items-center space-x-4 pb-5">
            <input
              type="checkbox"
              v-model="filterForm.color"
              value="green"
              class="focus:ring-green-500 h-4 w-4 text-green-600 border-2 border-green-500 rounded"
            />
            <input
              type="checkbox"
              v-model="filterForm.color"
              value="gray"
              class="focus:ring-gray-500 h-4 w-4 text-gray-600 border-2 border-gray-500 rounded"
            />
            <input
              type="checkbox"
              v-model="filterForm.color"
              value="rose"
              class="focus:ring-rose-500 h-4 w-4 text-rose-600 border-2 border-rose-500 rounded"
            />
            <input
              type="checkbox"
              v-model="filterForm.color"
              value="blue"
              class="focus:ring-blue-500 h-4 w-4 text-blue-600 border-2 border-blue-500 rounded"
            />
            <input
              type="checkbox"
              v-model="filterForm.color"
              value="yellow"
              class="focus:ring-yellow-500 h-4 w-4 text-yellow-600 border-2 border-yellow-500 rounded"
            />
            <button
              v-if="filterForm.color.length > 0"
              class="ml-2 p-1 hover:bg-gray-100 rounded-full text-sm text-grey-dark hover:text-grey-darker focus:outline-none"
              type="button"
              @click="resetFilterForm"
            >
              <svg
                class="w-6 h-6 text-gray-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M6 18L18 6M6 6l12 12"
                ></path>
              </svg>
            </button>
          </div>
        </div>

        <!-- Activity Feed -->
        <div class="mt-6 flow-root">
          <ul class="-mb-8">
            <li v-for="(event, index) in timeline" :key="event.id">
              <div class="relative pb-8">
                <span
                  v-if="index !== timeline.length - 1"
                  class="absolute top-4 left-4 -ml-px h-full w-0.5 bg-gray-200"
                  aria-hidden="true"
                ></span>
                <div class="relative flex space-x-3">
                  <div>
                    <circle-icon
                      :name="event.icon"
                      :color="event.colorClass"
                    ></circle-icon>
                  </div>
                  <div
                    class="min-w-0 flex-1 pt-1.5 flex justify-between space-x-4"
                  >
                    <div>
                      <p @click="showEvent(event)" class="text-sm text-gray-500 hover:text-gray-800 cursor-pointer">
                        {{ event.event_name }}
                      </p>
                    </div>
                    <div
                      class="text-right text-sm whitespace-nowrap text-gray-500"
                    >
                      <span>{{ event.created_at }}</span>
                    </div>
                  </div>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </section>
  </div>
  <show-event
    :showModal="showModal"
    :event="event"
    :type="application.type === 'Work & travel' ? 'worktravel' : 'aupair'"
    @close="showModal = false"
  ></show-event>
</template>

<script>
import SuperAdminLayout from "@/Layout/SuperAdminLayout";
import NestedLayoutAdminApplication from "@/Layout/NestedLayoutAdminApplication";
import CreatePrice from "@/Pages/Admin/Applications/CreatePrice";
import CircleIcon from "@/Shared/CircleIcon.vue";
import ShowEvent from "@/Pages/Admin/Applications/ShowEvent";
import useFilter from "@/use/useFilter";
const defaultFilterForm = {
  color: [],
};
export default {
  inheritAttrs: false,
  layout: (h, page) =>
    h(
      SuperAdminLayout,
      {
        resource: "Prijava",
        indexRoute: "admin.applications.index",
        // action: page.props.application.name,
      },
      () => [
        h(
          NestedLayoutAdminApplication,
          {
            url: "admin/applications/timeline",
            uuid: page.props.application.uuid,
            type: page.props.application.type == 'Work & travel' ? 'worktravel' : 'aupair'
          },
          () => [page]
        ),
      ]
    ),
  setup(props, context) {
    const indexRoute = route(
      "admin.applications.timeline",
      props.application.uuid
    );
    return useFilter(indexRoute, props.filters, defaultFilterForm);
  },
  components: {
    CreatePrice,
    CircleIcon,
    ShowEvent,
  },
  props: {
    application: Object,
    timeline: Array,
    filters: Object,
  },
  mounted() {
    window.Echo.private("applications").listen("TimelineEvent", (e) => {
      this.$inertia.reload();
    });
  },
  data() {
    return {
      showModal: false,
      event: {}
    };
  },
  methods: {
    showEvent(event){
      this.showModal = true
      this.event = event
    }
  }
};
</script>
