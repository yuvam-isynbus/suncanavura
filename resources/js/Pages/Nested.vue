<template>
  <div>
    <div class="mt-6 sm:mt-2 2xl:mt-5">
              <div class="border-b border-gray-200">
                <div class="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                  <nav class="-mb-px flex space-x-8" aria-label="Tabs">
                    <!-- Current: "border-pink-500 text-indigo-600", Default: "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300" -->
                    <a href="#" class="border-pink-500 text-gray-900 whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm" aria-current="page">
                      Profile
                    </a>
                    <a href="#" class="border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm">
                      Calendar
                    </a>
                    <a href="#" class="border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm">
                      Recognition
                    </a>
                  </nav>
                </div>
              </div>
            </div>
    <p>Hello {{ user.name }}, welcome to your first Nested Inertia app!</p>
  </div>
</template>

<script>
  import SiteLayout from '@/Layout/SiteLayout'
  import NestedLayout from '@/Layout/NestedLayout'

  export default {
    // Using a render function
    layout: (h, page) => {
      return h(SiteLayout, { title: 'Nested' }, () => [
        h(NestedLayout, () => [page]),
      ])
    },
    props: {
      user: Object,
    },
  }
</script>
