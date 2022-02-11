<template>
  <div class="sm:col-span-4 max-w-4xl px-8 mx-auto mt-10">
    <label class="mb-3 block text-sm font-medium text-gray-700">
      Plaćanje
    </label>

    <div class="bg-white shadow overflow-hidden sm:rounded-md">
      <ul class="divide-y divide-gray-200">
        <li v-for="instalment in instalments" :key="instalment.key">
          <a href="#" class="block hover:bg-gray-50">
            <div class="flex items-center px-4 py-4 sm:px-6">
              <div class="min-w-0 flex-1 flex items-center">
                <div
                  class="min-w-0 flex-1 px-4 md:grid md:grid-cols-2 md:gap-4"
                >
                  <div>
                    <p class="text-sm font-medium text-indigo-600 truncate">
                      {{ instalment.key }}. rata
                    </p>
                    <p class="mt-2 flex space-x-2 items-center text-sm text-gray-500">
                      <!-- Heroicon name: mail -->
                      <svg
                        class="w-6 h-6"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"
                        ></path>
                      </svg>
                      <span class="truncate"> {{ instalment.value }} HRK</span>
                    </p>
                  </div>
                  <div class="hidden md:block">
                    <div>
                      <p
                      v-if="application.instalments && application.instalments[instalment.key]"
                      class="text-sm text-gray-900">
                        Datum uplate:
                        <time datetime="2020-01-07">{{ moment().format("DD-MM-YYYY")}}</time>
                      </p>
                      <p
                      v-if="application.instalments && application.instalments[instalment.key]"
                      class="mt-2 flex space-x-2 items-center text-sm text-gray-500">
                        <!-- Heroicon name: check-circle -->
                        <svg

                          class="flex-shrink-0 mr-1.5 h-5 w-5 text-green-400"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                          aria-hidden="true"
                        >
                          <path
                            fill-rule="evenodd"
                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                            clip-rule="evenodd"
                          />
                        </svg>
                        Uplaćeno
                      </p>
                      <p v-else class="mt-2 flex space-x-2 items-center text-sm text-gray-500">

                        <svg
                          class="flex-shrink-0 mr-1.5 h-5 w-5 text-red-400"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                          aria-hidden="true"
                        >
                          <path
                            fill-rule="evenodd"
                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                            clip-rule="evenodd"
                          />
                        </svg>
                        Nije uplaćeno
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div class="w-10">
                <!-- Heroicon name: chevron-right -->
                <span v-if="application.instalments && application.instalments[instalment.key]"></span>
                <!-- <a
                  v-else
                  :href="route('user.application.pay.payment', {amount: instalment.value, instalment: instalment.key})"
                  class="text-indigo-400"
                  >Plati</a> -->
                <a
                  v-else
                  :href="route('fake.pay', {amount: instalment.value, instalment: instalment.key})"
                  class="text-indigo-400"
                  >Plati</a>
              </div>
            </div>
          </a>
        </li>

<!-- <li>
          <a href="#" class="block hover:bg-gray-50">
            <div class="flex items-center px-4 py-4 sm:px-6">
              <div class="min-w-0 flex-1 flex items-center">
                <div
                  class="min-w-0 flex-1 px-4 md:grid md:grid-cols-2 md:gap-4"
                >
                  <div>
                    <p class="text-sm font-medium text-indigo-600 truncate">
                      2.rata
                    </p>
                    <p class="mt-2 flex space-x-2 items-center text-sm text-gray-500">

                      <svg
                        class="w-6 h-6"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"
                        ></path>
                      </svg>
                      <span class="truncate"> 1200,00 HRK</span>
                    </p>
                  </div>
                  <div class="hidden md:flex items-center">
                    <div>
                      <p class="mt-2 flex space-x-2 items-center text-sm text-gray-500">

                        <svg
                          class="flex-shrink-0 mr-1.5 h-5 w-5 text-red-400"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                          aria-hidden="true"
                        >
                          <path
                            fill-rule="evenodd"
                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                            clip-rule="evenodd"
                          />
                        </svg>
                        Nije uplaćeno
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div class="w-10">
                <a
                  :href="route('user.application.pay.payment')"
                  class="text-indigo-400"
                  >Plati</a>
              </div>
            </div>
          </a>
        </li>  -->
      </ul>
    </div>
  </div>
</template>

<script>
import moment from 'moment'
import SuperAdminLayout from "@/Layout/SuperAdminLayout";
import NestedLayoutUserApplication from "@/Layout/NestedLayoutUserApplication";
export default {
  // layout: (h, page) => h( SiteLayout, { title: 'Hello' }, () => [page]),
  layout: (h, page) => {
    return h(
      SuperAdminLayout,
      {
        resource: "Prijava",
        indexRoute: "user.application.pay",
        type: page.props.authuser.role,
      },
      () => [
        h(NestedLayoutUserApplication, { url: "application/pay" }, () => [page]),
      ]
    );
  },
  props: {
    instalments: Array,
    application: Object
  },
  methods: {
    moment(date) {
      return moment(date)
    }
  }
};
</script>
