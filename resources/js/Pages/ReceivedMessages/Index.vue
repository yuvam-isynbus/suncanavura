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
        <toggle v-model="filterForm.with_deleted" label="Prikaži izbrisane"></toggle>
      </div>
    </div>
    <a
      class="block mt-2 mb-6 cursor-pointer text-gray-600 hover:text-gray-400"
      @click="markAsRead(null)"
      preserve-scroll
    >Označi sve poruke kao pročitane</a>
    <receiving-message-card-two
      v-for="message in messages"
      :key="message.id"
      :message="message"
      :class="{ 'shadow-lg': !message.read_at }"
      @reply="replayClicked(message)"
      @delete="confirmMessageDeletion(message)"
      @mark="markAsRead(message)"
    >
      <send-message
        v-if="message.replay"
        v-model="replayMessage"
        :error="errors && errors.message"
        @sendMessage="sendMessage($event, message)"
        @cancel="cancel(message)"
      ></send-message>
    </receiving-message-card-two>
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
import ReceivingMessageCardTwo from "@/Shared/ReceivingMessageCardTwo";
import SendMessage from "@/Shared/SendMessage";
import SuperSearchInput from "@/Shared/SuperSearchInput";
import Toggle from "@/Form/Toggle";
import ConfirmDelete from '@/Pages/Admin/Applications/ConfirmDelete.vue';
import useFilter from "@/use/useFilter";
const defaultFilterForm = {
  search: null,
  with_deleted: false,
};
export default {
  inheritAttrs: false,
  setup(props, context) {
    const indexRoute = route("messages.received_messages.index");
    return useFilter(indexRoute, props.filters, defaultFilterForm);
  },
  components: {
    ReceivingMessageCardTwo,
    SendMessage,
    SuperSearchInput,
    Toggle,
    ConfirmDelete
  },
  // layout: (h, page) => h( SiteLayout, { title: 'Hello' }, () => [page]),
  layout: (h, page) => {
    return h(
      SuperAdminLayout,
      {
        resource: "Poruke",
        indexRoute: "messages.received_messages.index",
        type: page.props.authuser.role,
      },
      () => [
        h(
          NestedLayout,
          { url: "messages/received_messages", menu: "message" },
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
      deleteMessage: null
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
    markAsRead(message) {
      this.$inertia
        .post(
          this.route("messages.mark-message.notification"),
          {
            id: message ? message.id : null,
          },
          { replace: false, preserveScroll: true, preserveState: true }
        )
        .then(() => {
          console.log("message");
        });
    },
    sendMessage(attachmentId, message) {
      this.$inertia
        .post(
          this.route("messages.users.sendmessage.store", [
            message.data.sender_id,
            message.data.room_id,
          ]),
          {
            title: message.is_user ? 'Poruka od Sunčane Vure' : 'Poruka od' + message.data.receiver_name,
            message: this.replayMessage,
            attachment_id: attachmentId,
            redirect: "messages.received_messages.index",
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
      this.showConfirmModal = true
      this.deleteMessage = message
    },
    modalClose() {
      this.showConfirmModal = false
      this.deleteMessage = null
    },
    onDeleteMessage() {
      this.$inertia
        .post(
          this.route("messages.delete.received"),
          {
            id: this.deleteMessage.id,
          },
          { replace: false, preserveScroll: true, preserveState: true }
        )
        .then(() => {
          this.showConfirmModal = false
        });
    },
  },
};
</script>
