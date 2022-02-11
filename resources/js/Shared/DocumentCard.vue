<template>
  <ul class="divide-y divide-gray-200 border-b border-gray-200">
    <li class="px-4 py-4 sm:px-6">
      <div class="sm:col-span-2">
        <div
          class="mb-4 font-medium text-gray-500"
        >
          <span>{{ label }}</span>
        </div>
        <div class="mt-1 text-sm text-gray-900">
          <ul
            class="border border-gray-200 rounded-md divide-y divide-gray-200"
          >
            <!--v-if-->
            <li
              v-if="documents.length == 0"
              class="pl-3 pr-4 py-3 flex items-center justify-between text-sm"
            >
              Nema učitanih dokumenata.
            </li>
            <li
              v-for="document in documents"
              :key="document.id"
              class="pl-3 pr-4 py-3 flex items-center justify-between text-sm"
            >
              <div class="w-0 flex-1 flex items-center">
                <svg
                  class="flex-shrink-0 h-5 w-5 text-gray-400"
                  x-description="Heroicon name: paper-clip"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path
                    fill-rule="evenodd"
                    d="M8 4a3 3 0 00-3 3v4a5 5 0 0010 0V7a1 1 0 112 0v4a7 7 0 11-14 0V7a5 5 0 0110 0v4a3 3 0 11-6 0V7a1 1 0 012 0v4a1 1 0 102 0V7a3 3 0 00-3-3z"
                    clip-rule="evenodd"
                  ></path></svg
                ><span class="ml-2 flex-1 w-0 truncate">{{
                  fileName(document.file_name)
                }}</span>
              </div>
              <div class="ml-4 flex-shrink-0 space-x-5">
                  <a
                  :href="route('documents.show', document.id)"
                  target="_blank"
                  class="font-medium text-yellow-600 hover:text-blue-500"
                >
                  Prikaži
                </a>
                <a
                  :href="route('documents.show', document.id)"
                  class="font-medium text-blue-600 hover:text-blue-500"
                >
                  Preuzmi
                </a>

              </div>
            </li>
          </ul>
        </div>
      </div>
    </li>
    <!-- More items... -->
  </ul>
</template>

<script>
export default {
  components: {
   //
  },
  props: {
    label: String,
    collection: String,
    application: Object,
    documents: [Array, Object],
  },
  data() {
    return {
//
    };
  },
  methods: {
    fileName: function (value) {
      if (!value) return "";
      let index = value.indexOf("_");
      return value.slice(index + 1);
    },
  },
};
</script>

<style>
</style>
