<template>
  <div class="bg-gray-400 px-4 py-8 sm:p-4">
    <!-- <h1 class="mb-4 font-bold text-3xl">Sent messages</h1> -->
    <div class="mb-6 mt-2 flex justify-between items-center">
      <search-input v-model="form.search" class="w-full max-w-sm mr-4" @reset="reset"></search-input>
    </div>
    <sending-message-card v-for="message in messages" :key="message.id" :message="message">
      <div class="flex justify-between">
        <a
          class="block mt-2 mb-4 cursor-pointer text-blue-500 hover:text-orange font-semibold"
          @click="replayClicked(message)"
        >Send new message</a>

        <a
          class="block ml-2 mt-2 mb-4 cursor-pointer text-red-600 hover:text-orange font-semibold"
          @click="deleteMessage(message)"
          preserve-scroll
        >Delete</a>
      </div>
      <send-message
        v-if="message.replay"
        v-model="replayMessage"
        :errors="errors"
        @sendMessage="sendMessage(message)"
        @cancel="cancel(message)"
      ></send-message>
    </sending-message-card>
  </div>
</template>

<script>
/* import Layout from "@/Shared/Layout";
import Show from "@/Pages/Messages/Show";
import SendingMessageCard from "@/Shared/SendingMessageCard";
import SendMessage from "@/Shared/SendMessage";
import SearchInput from "@/Shared/SearchInput";
import probable from "@/mixins/probable"; */

export default {
  metaInfo: { title: "Houses" },
  mixins: [probable],
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
    SendingMessageCard,
    SearchInput,
    SendMessage
  },
  props: {
    messages: Array
  },
  data() {
    return {
      replayMessage: null,
      errors: [],
      searchRoute: "messages.sent_messages.index"
    };
  },
  methods: {
    replayClicked(message) {
      this.messages.map(item => (item.replay = false));
      message.replay = true;
    },
    cancel(message) {
      message.replay = false;
      this.replayMessage = null;
      this.errors = [];
    },
    deleteMessage(message) {
      this.$inertia
        .post(
          this.route("messages.delete.sent"),
          {
            id: message.id
          },
          { replace: false, preserveScroll: true, preserveState: true }
        )
        .then(() => {
          console.log("message deleted");
        });
    },
    sendMessage(message) {
      this.$inertia
        .post(
          this.route("messages.users.rooms.sendmessage.store", [
            message.data.receiver_id,
            message.data.room_id
          ]),
          {
            message: this.replayMessage,
            redirect: "messages.sent_messages.index",
            id: message.id
          }
        )
        .then(() => {
          if (this.$page.errors.message) {
            this.errors = this.$page.errors.message;
          } else {
            message.replay = false;
            // console.log("PPPP");
            // this.$inertia.visit("/sent_messages");
          }
        });
    }
  }
};
</script>
