<template>
  <article
   :class="message.received ? 'md:mr-auto' : 'md:ml-auto bg-green-50'"
    class="md:w-2/3 mb-3 px-6 pt-4 pb-6 xl:px-10 xl:pt-6 xl:pb-8 bg-white rounded-lg shadow border">
    <div class="flex items-center md:block">
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
    </div>
    <slot />
  </article>
</template>

<script>
import Gravatar from "@/Shared/Gravatar";
export default {
  components: {
    Gravatar
  },
  props: {
    message: Object
  }
};
</script>
