<template>
  <div class="mt-6 sm:mt-2 2xl:mt-5">
    <div
      class="px-4 sm:px-6 lg:max-w-7xl lg:mx-auto lg:px-8 xl:max-w-screen-2xl border-b"
    >
      <nav class="-mb-px flex space-x-8" aria-label="Tabs">
        <!-- Current: "border-pink-500 text-indigo-600", Default: "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300" -->
        <inertia-link
          :href="route('admin.users.show', $page.props.user?.id)"
          class="whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm"
          :class="
            url == 'admin/users'
              ? 'border-pink-500 text-gray-900 '
              : 'border-transparent hover:border-gray-300 text-gray-500 hover:text-gray-700'
          "
          aria-current="page"
        >
          Detalji
        </inertia-link>
        <inertia-link
            :href="route('admin.users.notes.index', $page.props.user.id)"
            class="whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm"
            :class="url == 'admin/users/notes'
            ? 'border-pink-500 text-gray-900 '
            : 'border-transparent hover:border-gray-300 text-gray-500 hover:text-gray-700'"
            aria-current="page"
          >
            Bilješke
          </inertia-link>
        <inertia-link
          :href="route('admin.conversation', $page.props.user.id)"
          class="whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm"
          :class="
            url == 'admin/users/conversation'
              ? 'border-pink-500 text-gray-900 '
              : 'border-transparent hover:border-gray-300 text-gray-500 hover:text-gray-700'
          "
        >
          Poruke
        </inertia-link>
        <inertia-link
          :href="route('admin.users.payments.index', $page.props.user.id)"
          class="whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm"
          :class="
            url == 'admin/users/payments'
              ? 'border-pink-500 text-gray-900 '
              : 'border-transparent hover:border-gray-300 text-gray-500 hover:text-gray-700'
          "
        >
          Slobodne uplate
        </inertia-link>
      </nav>
    </div>
  </div>
  <slot />
</template>

<script>
export default {
  props: {
    title: String,
    url: String,
    id: Number
  },
  /* watch: {
    title: {
      immediate: true,
      handler(title) {
        document.title = title;
      },
    },
  }, */
};
</script>
