<template>
  <div class="bg-gray-400 px-4 py-8 sm:p-4">
    <!-- <h1 class="mb-4 font-bold text-3xl">Received messages</h1> -->

    <div class="mb-6 mt-2 flex justify-between items-center">
      <search-input v-model="form.search" class="w-full max-w-sm mr-4" @reset="reset"></search-input>
    </div>

    <a
      class="block mt-2 mb-4 cursor-pointer text-green-600 hover:text-orange font-semibold"
      @click="markAsRead(null)"
      preserve-scroll
    >Mark all messages as read</a>

    <receiving-message-card
      v-for="message in messages"
      :key="message.id"
      :message="message"
      :class="{ 'border-gray-600 border-2' : !message.read_at}"
    >
      <div class="flex justify-between">
        <a
          class="block mt-2 mb-4 cursor-pointer text-blue-500 hover:text-orange font-semibold"
          @click="replayClicked(message)"
        >Replay</a>

        <div class="flex">
          <a
            class="block mt-2 mb-4 cursor-pointer text-green-600 hover:text-orange font-semibold"
            v-if="!message.read_at"
            @click="markAsRead(message)"
            preserve-scroll
          >Mark as read</a>
          <a
            class="block ml-2 mt-2 mb-4 cursor-pointer text-red-600 hover:text-orange font-semibold"
            @click="deleteMessage(message)"
            preserve-scroll
          >Delete</a>
        </div>
      </div>

      <send-message
        v-if="message.replay"
        v-model="replayMessage"
        :errors="errors"
        @sendMessage="sendMessage(message)"
        @cancel="cancel(message)"
      ></send-message>
    </receiving-message-card>
  </div>
</template>

<script>
/* import _ from "lodash";
import Echo from "laravel-echo";
import Layout from "@/Shared/Layout";
import Show from "@/Pages/Messages/Show";
import Gravatar from "@/Shared/Gravatar";
import SendMessage from "@/Shared/SendMessage";
import SearchInput from "@/Shared/SearchInput";
import ReceivingMessageCard from "@/Shared/ReceivingMessageCard"; */
export default {
  metaInfo: { title: "Houses" },
  /*   layout: (h, page) =>
    h(
      Layout,
      {
        on: {
          pageMounted: console.log
        }
      },
      [page]
    ), */
  layout: (h, page) => {
    return h(Layout, [
      h(
        Show,
        {
          props: {
            // house: page.data.props.house
          }
        },
        [page]
      )
    ]);
  },
  components: {
    Gravatar,
    SendMessage,
    SearchInput,
    ReceivingMessageCard
  },
  props: {
    messages: Array,
    filters: Object
  },
  data() {
    return {
      replayMessage: null,
      form: {
        search: this.filters.search
        // trashed: this.filters.trashed
      },
      errors: []
    };
  },
  mounted() {
    const id = this.$page.auth.user.id;

    // console.log(window.Echo);

    window.Echo.private("App.User." + id).notification(notification => {
      console.log("IDDDDDDDD", id);
      // let element = document.createElement("p");
      // element.classList.add("p-2", "mt-4", "bg-gray-100", "text-gray-700");
      // element.innerText = notification.body.message;
      // list.appendChild(element);
      // this.messages.unshift(notification);
      this.$inertia.reload();
    });
    this.$emit("pageMounted");
  },
  watch: {
    form: {
      handler: _.throttle(function() {
        let query = _.pickBy(this.form);
        this.$inertia.replace(
          this.route(
            "messages.received_messages.index",
            Object.keys(query).length ? query : { remember: "forget" }
          )
        );
      }, 150),
      deep: true
    }
  },
  methods: {
    replayClicked(message) {
      this.messages.map(item => (item.replay = false));
      message.replay = true;
    },
    markAsRead(message) {
      this.$inertia
        .post(
          this.route("messages.mark.notification"),
          {
            id: message ? message.id : null
          },
          { replace: false, preserveScroll: true, preserveState: true }
        )
        .then(() => {
          console.log("message");
        });
    },
    deleteMessage(message) {
      this.$inertia
        .post(
          this.route("messages.delete.received"),
          {
            id: message.id
          },
          { replace: false, preserveScroll: true, preserveState: true }
        )
        .then(() => {
          console.log("message deleted");
        });
    },
    reset() {
      this.form = _.mapValues(this.form, () => null);
    },
    cancel(message) {
      message.replay = false;
      this.replayMessage = null;
      this.errors = [];
    },
    sendMessage(message) {
      this.$inertia
        .post(
          this.route("messages.users.rooms.sendmessage.store", [
            message.data.sender_id,
            message.data.room_id
          ]),
          {
            message: this.replayMessage,
            redirect: "messages.received_messages.index",
            id: message.id
          },
          { replace: false, preserveScroll: true, preserveState: true }
        )
        .then(() => {
          this.$page.errors.message
            ? (this.errors = this.$page.errors.message)
            : (message.replay = false);
        });
    }
  }
};
</script>
