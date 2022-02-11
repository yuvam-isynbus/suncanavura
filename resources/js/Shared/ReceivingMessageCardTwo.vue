<template>
  <article
    :class="message.received ? 'md:mr-auto' : 'md:ml-auto bg-green-50'"
    class="max-w-5xl mb-3 border rounded-md"
  >
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
          <inertia-link
            :href="route('admin.users.show', message.data.sender_id)"
            class="font-medium text-gray-900"
            >{{ message.data.sender_name }}</inertia-link
          >
          <span class="text-gray-500 font-medium">{{
            message.created_at
          }}</span>
        </div>
        <div class="mt-1 text-sm text-gray-700">
          <p class="px-3 py-2 bg-gray-100 rounded-md">
            {{ message.data.body }}
          </p>
        </div>
        <div  class="mt-2 text-sm flex justify-between">

          <div v-if="message.attachments?.length > 0">
              <!-- <p  class="pb-2 border-b border-gray-300 font-semibold text-rose-600">Attachments</p> -->
              <new-icon name="paper-clip" />
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
          <div class="space-x-2 ml-auto">
          <button
            v-if="replay"
            @click="$emit('reply')"
            type="button"
            class="text-gray-900 hover:text-gray-600 font-medium focus:outline-none"
          >
            Odgovori
          </button>
            <button
              v-if="!message.read_at && mark && (message.data.sender_id !== $page.props.authuser.id)"
              @click="$emit('mark')"
              type="button"
              class="text-yellow-500 hover:text-yellow-400 font-medium focus:outline-none"
            >
              Označi kao pročitano
            </button>
            <button
              v-if="message.data.deleted_from_receiver == 0 && deletable"
              @click="$emit('delete')"
              type="button"
              class="text-red-600 hover:text-red-500 font-medium focus:outline-none"
            >
              Izbriši
            </button>
          </div>
        </div>
      </div>
    </div>
    <!--     <div class="flex items-center md:block">
      <div>
        <gravatar
          class="md:hidden w-9 h-9"
          :name="message.data.sender_name"
          :avatar="message.avatar"
        />
      </div>
      <div class="ml-3 md:ml-0 md:flex md:items-center md:justify-between">
        <p class="text-base font-semibold leading-tight xl:text-lg">
          <span class="text-gray-900">{{ message.data.sender_name }}</span>
          <span class="text-gray-400"> je napisao/napisala</span>
        </p>
        <div class="flex items-center">
          <span class="text-sm text-gray-600">{{ message.created_at }}</span>
          <gravatar
            class="hidden md:inline-flex w-9 h-9 ml-5"
            :name="message.data.sender_name"
            :avatar="message.avatar"
          />
        </div>
      </div>
    </div>
    <div class="mt-4 xl:mt-6 text-gray-800 text-sm">
      <p>{{ message.data.body }}</p>
    </div> -->
    <slot />
  </article>
</template>

<script>
import Gravatar from "@/Shared/Gravatar";
import NewIcon from "@/Shared/NewIcon";
export default {
  components: {
    Gravatar,
    NewIcon
  },
  props: {
    message: Object,
    mark: {
      type: Boolean,
      default: true,
    },
    deletable: {
      type: Boolean,
      default: true,
    },
    replay: {
      type: Boolean,
      default: true,
    },
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
