<template>
  <div class="mt-6 sm:mt-2 2xl:mt-5">
    <div
      class="px-4 sm:px-6 lg:max-w-7xl lg:mx-auto lg:px-8 xl:max-w-screen-2xl border-b"
    >
      <nav class="-mb-px flex space-x-8" aria-label="Tabs">
        <!-- Current: "border-pink-500 text-indigo-600", Default: "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300" -->

        <inertia-link
          :href="route('admin.' + type + '.applications.show', uuid)"
          class="whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm"
          :class="
            url == 'admin/applications'
              ? 'border-pink-500 text-gray-900 '
              : 'border-transparent hover:border-gray-300 text-gray-500 hover:text-gray-700'
          "
          aria-current="page"
        >
          Podaci o prijavi
        </inertia-link>

        <inertia-link
          :href="
            route('admin.' + type + '.applications.documents', uuid)
          "
          class="whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm"
          :class="
            url == 'admin/applications/documents'
              ? 'border-pink-500 text-gray-900 '
              : 'border-transparent hover:border-gray-300 text-gray-500 hover:text-gray-700'
          "
          aria-current="page"
        >
          Dokumenti
        </inertia-link>

        <inertia-link
          :href="route('admin.' + type + '.applications.timeline', uuid)"
          class="whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm"
          :class="
            url == 'admin/applications/timeline'
              ? 'border-pink-500 text-gray-900 '
              : 'border-transparent hover:border-gray-300 text-gray-500 hover:text-gray-700'
          "
          aria-current="page"
        >
          Povijest prijave
        </inertia-link>

        <inertia-link
          :href="route('admin.' + type + '.applications.payments.index', uuid)"
          class="whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm"
          :class="
            url == 'admin/applications/payments'
              ? 'border-pink-500 text-gray-900 '
              : 'border-transparent hover:border-gray-300 text-gray-500 hover:text-gray-700'
          "
          aria-current="page"
        >
          Uplate
        </inertia-link>

        <inertia-link
          :href="route('admin.' + type + '.applications.notes.index', uuid)"
          class="whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm"
          :class="
            url == 'admin/applications/notes'
              ? 'border-pink-500 text-gray-900 '
              : 'border-transparent hover:border-gray-300 text-gray-500 hover:text-gray-700'
          "
          aria-current="page"
        >
          Bilješke
        </inertia-link>

        <inertia-link
          :href="route('admin.' + type + '.application.conversation', uuid)"
          class="whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm"
          :class="
            url == 'admin/application/users/conversation'
              ? 'border-pink-500 text-gray-900 '
              : 'border-transparent hover:border-gray-300 text-gray-500 hover:text-gray-700'
          "
        >
          Poruke
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
    uuid: String,
    type: String,
  },
};
</script>
