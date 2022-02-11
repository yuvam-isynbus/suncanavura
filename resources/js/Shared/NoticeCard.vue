<template>
  <article class="max-w-5xl mb-3 border rounded-md">
    <div class="flex space-x-3 p-4">
      <!--       <div class="flex-shrink-0">
        <gravatar
          class="w-10 h-10"
          :name="notice.data.user_name"
          :avatar="notice.avatar"
        />
      </div> -->
      <div class="flex-1">
        <!--         <div class="text-sm flex justify-between">
          <a href="#" class="font-medium text-gray-900">{{
            notice.data.user_name
          }}</a>
          <span class="text-gray-500 font-medium">{{
            notice.created_at
          }}</span>
        </div> -->
        <div class="mt-1 text-sm text-gray-700">
          <p class="px-3 py-2 bg-gray-100 rounded-md">
            {{ notice.message }}
            <span v-if="notice.data.user_id">
              Korisnik
              <inertia-link
                :href="route('admin.users.show', notice.data.user_id)"
                class="text-blue-600 hover:text-blue-400 font-medium"
                >{{ notice.data.user_name }}</inertia-link
              >
            </span>
          </p>
        </div>
        <div v-if="actions" class="mt-2 text-sm flex justify-between">
          <span class="px-3 text-gray-500 font-medium">{{
            notice.created_at
          }}</span>
          <div class="space-x-2 ml-auto">
            <button
              v-if="!notice.read_at"
              @click="$emit('mark')"
              type="button"
              class="text-yellow-500 hover:text-yellow-400 font-medium focus:outline-none"
            >
              Označi kao pročitano
            </button>
            <!-- v-if="notice.data.deleted_from_receiver == 0" -->
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
    </div>
    <slot />
  </article>
</template>

<script>
import Gravatar from "@/Shared/Gravatar";
export default {
  components: {
    Gravatar,
  },
  props: {
    notice: Object,
    actions: {
      type: Boolean,
      default: true,
    },
  },
};
</script>
