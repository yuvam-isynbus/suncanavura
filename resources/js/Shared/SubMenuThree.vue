<template>
  <div class="flex">
    <div class="font-bold text-base">
      <inertia-link
        class="flex items-center px-8 py-2 rounded-t-lg"
        :class="isUrl('messages/received_messages') ? 'bg-gray-400 text-gray-800' : 'text-gray-600 hover:text-gray-800'"
        :href="route('messages.received_messages.index')"
        preserve-scroll
      >
        <icon name="fa-inbox" class="h-5 mr-3 flex-shrink-0 fill-current" />
        <div>Received</div>
      </inertia-link>
    </div>
    <div class="font-bold text-base">
      <inertia-link
        class="flex items-center group px-8 py-2 rounded-t-lg"
        :class="isUrl('messages/sent_messages') ? 'bg-gray-400 text-gray-800' : 'text-gray-600 hover:text-gray-800'"
        :href="route('messages.sent_messages.index')"
        preserve-scroll
      >
        <icon name="fa-outbox" class="h-5 mr-3 flex-shrink-0 fill-current" />
        <div>Sent</div>
      </inertia-link>
    </div>
  </div>
</template>

<script>
import Icon from "@/Shared/Icon";

export default {
  components: {
    Icon
  },
  props: {
    url: String,
    slug: Number,
    route_url: String
  },
  computed: {
    routeName() {
      return this.route_url.replace(/\//g, ".");
    }
  },
  methods: {
    isUrl(...urls) {
      if (urls[0] === "") {
        return this.url === "";
      }

      return urls.filter(url => this.url.startsWith(url)).length;
    }
  }
};
</script>
