<template>
  <a
    @click.prevent="$emit('linkclicked', routeName)"
    href="#"
    class="hover:bg-gray-700 hover:text-white group flex items-center px-2 py-2 text-base font-medium rounded-md"
    :class="[active ? 'bg-gray-900 text-white' : 'text-gray-300']"
  >
    <!-- Heroicon -->
    <new-icon :name="iconName" :active="active" />
    {{ label }}
    <div v-if="unreadMessages && $page.props.authuser.unread_messages > 0" class="flex ml-2 rounded-full bg-gray-300 text-gray-800 w-6 h-6">
        <span class="m-auto font-semibold font-mono" v-if="unreadMessages">{{ $page.props.authuser.unread_messages }}</span>
    </div>
    <div v-if="unreadNotices && $page.props.authuser.unread_notices > 0" class="flex ml-2 rounded-full bg-gray-300 text-gray-800 w-6 h-6">
        <span class="m-auto font-semibold font-mono" v-if="unreadNotices">{{ $page.props.authuser.unread_notices }}</span>
    </div>
  </a>
</template>

<script>
import NewIcon from "@/Shared/NewIcon";
export default {
  components: {
    NewIcon,
  },
  emits: ["linkclicked"],
  props: {
    active: Boolean,
    label: String,
    iconName: String,
    routeName: String,
    unreadMessages: Boolean,
    unreadNotices: Boolean
  },
};
</script>

<style>
</style>
