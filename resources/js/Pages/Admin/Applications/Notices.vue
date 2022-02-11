<template>
  <div
    class="px-4 py-8 sm:px-6 lg:max-w-7xl lg:mx-auto lg:px-8 xl:max-w-screen-2xl"
  >
    <div class="pb-8 md:flex md:items-center md:justify-between">
      <div class="flex items-center flex-1 min-w-0">
        <super-search-input
          v-model="filterForm.search"
          class="w-2/3 max-w-sm mr-4"
          @reset="resetFilterForm"
        ></super-search-input>
        <toggle
          v-model="filterForm.with_deleted"
          label="Prikaži izbrisane"
        ></toggle>
      </div>
    </div>
    <a
      class="block mt-2 mb-6 cursor-pointer text-gray-600 hover:text-gray-400"
      @click="markAsRead(null)"
      preserve-scroll
      >Označi sve obavijesti kao pročitane</a
    >
    <notice-card
      v-for="notice in notices"
      :key="notice.id"
      :notice="notice"
      :class="{ 'shadow-lg': !notice.read_at }"
      @delete="confirmNoticeDeletion(notice)"
      @mark="markAsRead(notice)"
    >
    </notice-card>
    <confirm-delete
      actionLabel="Izbriši"
      message="Brisanje dovodi do trajnog gubitka poadataka"
      :showModal="showConfirmModal"
      @close="modalClose"
      @confirm="onDeleteMessage"
    ></confirm-delete>
  </div>
</template>

<script>
import SuperAdminLayout from "@/Layout/SuperAdminLayout";
import NoticeCard from "@/Shared/NoticeCard";
import SendMessage from "@/Shared/SendMessage";
import SuperSearchInput from "@/Shared/SuperSearchInput";
import Toggle from "@/Form/Toggle";
import ConfirmDelete from "@/Pages/Admin/Applications/ConfirmDelete.vue";
import useFilter from "@/use/useFilter";
const defaultFilterForm = {
  search: null,
  with_deleted: false,
};
export default {
  inheritAttrs: false,
  setup(props, context) {
    const indexRoute = route("admin.notices.index");
    return useFilter(indexRoute, props.filters, defaultFilterForm);
  },
  components: {
    NoticeCard,
    SendMessage,
    SuperSearchInput,
    Toggle,
    ConfirmDelete,
  },
  // layout: (h, page) => h( SiteLayout, { title: 'Hello' }, () => [page]),
  layout: (h, page) => {
    return h(
      SuperAdminLayout,
      {
        resource: "Obavijesti",
        indexRoute: "admin.notices.index",
        type: page.props.authuser.role,
      },
      () => [page]
    );
  },
  props: {
    notices: Array,
    filters: Object,
  },
  data() {
    return {
      replayMessage: null,
      errors: null,
      showConfirmModal: false,
      deleteNotice: null,
    };
  },
  mounted() {
    const id = this.$page.props.authuser.id;
    window.Echo.private("App.Models.User." + id).notification(
      (notification) => {
        this.$inertia.reload();
      }
    );
  },
  methods: {
    cancel(message) {
      message.replay = false;
      this.replayMessage = null;
      this.errors = [];
    },
    markAsRead(message) {
      this.$inertia
        .post(
          this.route("admin.mark-notice-as-read"),
          {
            id: message ? message.id : null,
          },
          { replace: false, preserveScroll: true, preserveState: true }
        )
        .then(() => {
          console.log("message");
        });
    },
    confirmNoticeDeletion(message) {
      this.showConfirmModal = true;
      this.deleteNotice = message;
    },
    modalClose() {
      this.showConfirmModal = false;
      this.deleteNotice = null;
    },
    onDeleteMessage() {
      this.$inertia
        .post(
          this.route("admin.delete.notice"),
          {
            id: this.deleteNotice.id,
          },
          { replace: false, preserveScroll: true, preserveState: true }
        )
        .then(() => {
          this.showConfirmModal = false;
        });
    },
  },
};
</script>
