<template>
  <article class="max-w-5xl mb-3 border rounded-md">
    <div class="flex space-x-3 mb-3 p-4">
      <div class="flex-shrink-0">
        <gravatar
          class="w-10 h-10"
          :name="message.data.sender_name"
          :avatar="message.avatar"
        />
      </div>
      <div class="flex-1">
        <div class="text-sm flex justify-between">
            <p v-if="message.data.mass_message == 1" class="font-medium text-gray-900">
                Naslov poruke: {{ message.data.title }}
            </p>
          <inertia-link
            v-else
            :href="route('admin.users.show', message.data.receiver_id)" class="font-medium text-gray-900">{{
            message.data.receiver_name
          }}</inertia-link>
          <span class="text-gray-500 font-medium">{{
            message.created_at
          }}</span>
        </div>
        <div class="mt-1 text-sm text-gray-700">
          <p class="px-3 py-2 bg-gray-100 rounded-md">
            {{ message.data.body }}
          </p>
        </div>
        <div class="mt-2 text-sm flex justify-between">
        <div v-if="message.attachments?.length > 0">
            <!-- <p  class="pb-2 border-b border-gray-300 font-semibold text-rose-600">Attachments</p> -->
          <new-icon name="paper-clip" />
          <div v-if="message.attachments?.length > 0">
              <p class="flex mt-1 text-sm " v-for="attachment in message.attachments" :key="attachment.id">
                    <span>{{ fileName(attachment.file_name) }}</span>
                    <span class="flex ml-6 flex-shrink-0">
                        <a
                        :href="route('attachments.download', attachment.id)"

                        >
                        <new-icon class="font-medium text-blue-600 hover:text-blue-400" name='download'></new-icon>
                        </a>
                        <a
                        :href="route('attachments.show', attachment.id)"
                        target="_blank"
                        class="font-medium text-yellow-600 hover:text-blue-500"
                        >
                        <new-icon class="font-medium text-blue-600 hover:text-blue-400" name='arrows-expand'></new-icon>
                        </a>
                    </span>
              </p>
          </div>
          </div>
          <button
            v-if="message.data.mass_message != 1"
            @click="$emit('send')"
            type="button"
            class="text-gray-900 hover:text-gray-600 font-medium focus:outline-none"
          >
            Pošalji novu poruku
          </button>
          <button
            @click="$emit('delete')"
            type="button"
            class="text-red-600 hover:text-red-500 font-medium focus:outline-none"
          >
            Izbriši
          </button>
        </div>
      </div>
    </div>
    <slot />
  </article>
</template>

<script>
import Gravatar from "@/Shared/Gravatar";
import NewIcon from "@/Shared/NewIcon";
export default {
  emits: ["send", "delete"],
  components: {
    Gravatar,
    NewIcon
  },
  props: {
    message: Object,
  },
  methods: {
    fileName: function (value) {
        if (!value) return "";
        let index = value.indexOf("_");
        return value.slice(index + 1);
    },
  }
};
</script>
