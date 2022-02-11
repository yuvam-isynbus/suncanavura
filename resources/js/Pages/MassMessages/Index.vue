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

        <!--  <base-radio-group
              v-model="filterForm.has_password"
              name="pets"
              :vertical="true"
              :options="[
                { value: 'all', label: 'All' },
                { value: 'password', label: 'Password' },
                { value: 'no_password', label: 'No passsword' },
              ]"
            ></base-radio-group> -->
      </div>
    </div>
    <sending-message-card
      v-for="message in messages"
      :key="message.id"
      :message="message"
      @send="replayClicked(message)"
      @delete="confirmMessageDeletion(message)"
    >
      <!--       <div class="flex justify-between">
        <a
          class="block mt-2 mb-4 cursor-pointer text-blue-500 hover:text-orange font-semibold"
          @click="replayClicked(message)"
          >Pošalji novu poruku</a
        >

        <a
          class="block ml-2 mt-2 mb-4 cursor-pointer text-red-600 hover:text-orange font-semibold"
          @click="deleteMessage(message)"
          preserve-scroll
          >Delete</a
        >
      </div> -->
      <send-message
        v-if="message.replay"
        v-model="replayMessage"
        :error="errors && errors.message"
        @sendMessage="sendMessage(message)"
        @cancel="cancel(message)"
      ></send-message>
    </sending-message-card>
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
import NestedLayout from "@/Layout/NestedLayout";
import SendingMessageCard from "@/Shared/SendingMessageCard";
import SendMessage from "@/Shared/SendMessage";
import SuperSearchInput from "@/Shared/SuperSearchInput";
import ConfirmDelete from "@/Pages/Admin/Applications/ConfirmDelete.vue";
import useFilter from "@/use/useFilter";
const defaultFilterForm = {
  search: null,
  // has_password: "all",
};
export default {
  inheritAttrs: false,
  setup(props, context) {
    const indexRoute = route("messages.mass_messages.index");
    return useFilter(indexRoute, props.filters, defaultFilterForm);
  },
  components: {
    SendingMessageCard,
    SendMessage,
    SuperSearchInput,
    ConfirmDelete,
  },
  // layout: (h, page) => h( SiteLayout, { title: 'Hello' }, () => [page]),
  layout: (h, page) => {
    return h(
      SuperAdminLayout,
      {
        resource: "Poruke",
        indexRoute: "user.dashboard",
        type: page.props.authuser.role,
      },
      () => [
        h(
          NestedLayout,
          { url: "messages/mass_messages", menu: "message" },
          () => [page]
        ),
      ]
    );
  },
  props: {
    messages: Array,
    filters: Object,
  },
  data() {
    return {
      replayMessage: null,
      errors: null,
      showConfirmModal: false,
      deleteMessage: null,
      searchRoute: "messages.mass_messages.index",
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
    replayClicked(message) {
      this.messages.map((item) => (item.replay = false));
      message.replay = true;
    },
    sendMessage(message) {
      this.$inertia
        .post(
          this.route("messages.users.sendmessage.store", [
            message.data.receiver_id,
          ]),
          {
            title: this.$page.props.authuser.role == "admin" ? "Poruka od Sunčane Vure" : 'Poruka od' + this.$page.props.authuser.name,
            message: this.replayMessage,
            redirect: "messages.sent_messages.index",
            id: message.id,
          },
          { replace: false, preserveScroll: true, preserveState: true }
        )
        .then(() => {
          this.replayMessage = null;
          this.$page.props.errors.message
            ? (this.errors = this.$page.props.errors)
            : (message.replay = false);
        });
    },
    confirmMessageDeletion(message) {
      this.showConfirmModal = true;
      this.deleteMessage = message;
    },
    modalClose() {
      this.showConfirmModal = false;
      this.deleteMessage = null;
    },
    onDeleteMessage() {
      this.$inertia
        .post(
          this.route("messages.delete.sent.massmesage"),
          {
            message: this.deleteMessage,
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
