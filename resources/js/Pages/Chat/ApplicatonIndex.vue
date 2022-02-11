<template>
  <div
    class="px-4 py-8 sm:px-6 lg:max-w-7xl lg:mx-auto lg:px-8 xl:max-w-screen-2xl"
  >
    <!--     <a
      class="block mt-2 mb-4 cursor-pointer text-blue-500 hover:text-orange font-semibold"
      @click="replay = true"
      >Pošalji poruku
      {{ $page.props.authuser.role == "admin" ? user.name : "Sunčanoj Vuri" }}</a
    > -->
    <button
      @click="replay = true"
      type="button"
      class="text-gray-900 hover:text-gray-600 font-medium focus:outline-none mb-2"
    >
      Pošalji novu poruku
      {{ $page.props.authuser.role == "admin" ? user.name : "Sunčanoj Vuri" }}
    </button>
    <send-message
      v-if="replay"
      class="mb-2"
      v-model="message"
      :error="errors && errors.message"
      @sendMessage="sendMessage"
      @cancel="cancel"
      @typing="onTyping"
    ></send-message>
    <receiving-message-card-two
      v-for="message in messages"
      :key="message.id"
      :message="message"
      :class="{ 'shadow-lg border-2 border-green-400': !message.read_at }"
      :replay="false"
      :mark="true"
      :deletable="false"
      @delete="confirmMessageDeletion(message)"
      @mark="markAsRead(message)"
    ></receiving-message-card-two>
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
import Echo from "laravel-echo";
import SuperAdminLayout from "@/Layout/SuperAdminLayout";
import NestedLayoutAdminApplication from "@/Layout/NestedLayoutAdminApplication";
import SendMessage from "@/Shared/SendMessage";
import ReceivingMessageCardTwo from "@/Shared/ReceivingMessageCardTwo";
import ConfirmDelete from "@/Pages/Admin/Applications/ConfirmDelete.vue";
export default {
  layout: (h, page) =>
    h(
      SuperAdminLayout,
      {
        resource: "Korisnici",
        indexRoute: "admin.users.index",
        action:
          page.props.authuser.role == "admin" ? page.props.user.name : "Poruke",
        type: page.props.authuser.role,
      },
      page.props.authuser.role == "admin"
        ? () => [
            h(NestedLayoutAdminApplication, {
                url: "admin/application/users/conversation",
                uuid: page.props.application.uuid,
                type: page.props.application.type == 'Work & travel' ? 'worktravel' : 'aupair'
                },
            () => [
              page,
            ]),
          ]
        : () => [page]
    ),
  components: {
    ReceivingMessageCardTwo,
    SendMessage,
    ConfirmDelete,
  },
  props: {
    user: Object,
    application: Object,
    messages: Array,
    route_url: String,
    // showConfirmModal: false,
    // filters: Object,
    // rooms: Array
  },
  data: () => ({
    replay: true,
    errors: null,
    message: null,
    showConfirmModal: false,
  }),
  /*   mounted() {
    const id = this.$page.props.authuser.id;
    window.Echo.private("App.Models.User." + id).notification(
      (notification) => {
        this.$inertia.reload();
        this.$notify(
            {
              group: "common",
              title: "Uspjeh!",
              type: "success",
              text: 'Dobili ste novu poruku',
            },
            2000
          );
      }
    );
  }, */
  methods: {
    onTyping() {
      //
    },
    cancel() {
      this.replay = false;
      this.message = null;
      this.errors = null;
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
    sendMessage(attachmentId) {
      this.errors = null;
      this.$inertia
        .post(this.route("messages.users.sendmessage.store", [this.user.id]), {
          title: this.$page.props.authuser.role == "admin" ? "Poruka od Sunčane Vure" : 'Poruka od' + this.user.name,
          message: this.message,
          attachment_id: attachmentId
        })
        .then(() => {
          this.$page.props.errors.message
            ? (this.errors = this.$page.props.errors)
            : (this.replay = false);
          this.message = null;
        });
    },
    modalClose() {
      this.showConfirmModal = false;
      this.deleteMessage = null;
    },
    confirmMessageDeletion(message) {
      this.showConfirmModal = true;
      this.deleteMessage = message;
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
          this.showConfirmModal = false;
        });
    },
  },
};
</script>
