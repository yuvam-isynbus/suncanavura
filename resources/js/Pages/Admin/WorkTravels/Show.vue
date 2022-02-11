<template>
  <div class="px-8 py-8 space-y-4">
  <TabGroup >
    <TabList class="px-4 sm:px-6 lg:max-w-7xl lg:mx-auto lg:px-8 xl:max-w-screen-2xl border-b space-x-8 -mb-px">
      <Tab v-slot="{ selected }" as="template">
        <button
          class="whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm focus:outline-none"
          :class="[selected ? 'border-pink-500 text-gray-900 '
              : 'border-transparent hover:border-gray-300 text-gray-500 hover:text-gray-700']"
        >
          Sažeti prikaz
        </button>
      </Tab>
      <Tab v-slot="{ selected }" as="template">
        <button
          class="whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm focus:outline-none"
          :class="[selected ? 'border-pink-500 text-gray-900 '
              : 'border-transparent hover:border-gray-300 text-gray-500 hover:text-gray-700']"
        >
          Detaljni prikaz
        </button>
      </Tab>
    </TabList>
    <TabPanels>
      <TabPanel>
        <div class="flex flex-col lg:flex-row rounded-lg shadow overflow-hidden border mb-6 mt-16" >
        <div class="lg:p-4 flex-shrink-0 lg:w-1/3">
            <img class="lg:rounded-l-lg h-56 w-full object-cover" :src="worktravel.image" :alt="worktravel.name">
        </div>
        <div class="flex-1 bg-white px-6 lg:px-2 py-4 flex flex-col justify-between">
            <div class="flex-1">
                    <p class="text-xl font-semibold text-gray-900">
                        {{ worktravel.name }}
                    </p>
                    <p class="mt-3 text-base text-gray-500 prose">{{ excerpt(worktravel.description) }}</p>
            </div>
            <p class="mt-3 text-base text-gray-500">
                <span class="font-semibold">Satnica:</span> {{ worktravel.satnica }} kn
            </p>
            <div class="mt-3 text-base text-gray-500">
                <div class="flex space-x-4" v-if="worktravel.smjestaj">
                    <div><span class="font-semibold">Smještaj:</span> DA</div>
                    <div><span class="font-semibold">Cijena smještaja:</span> {{ worktravel.smjestaj_price }} kn</div>
                </div>
                <div v-else><span class="font-semibold">Smještaj:</span> NE</div>
            </div>
            <a href="#"
              class="text-blue-600 hover:text-blue-400 mt-3"
              >Saznaj više...</a>
        </div>
    </div>
      </TabPanel>
      <TabPanel>
                  <div class="lg:mx-auto lg:max-w-7xl lg:px-8 lg:grid lg:grid-cols-2 lg:gap-16 lg:items-start">
            <div class="relative sm:py-16 lg:py-0">
                <div class="relative mx-auto max-w-md px-4 sm:max-w-3xl sm:px-6 lg:px-0 lg:max-w-none lg:py-20">
                <!-- Testimonial card-->
                <div class="relative pt-64 pb-10 rounded-2xl shadow-xl overflow-hidden">
                    <img class="absolute inset-0 h-full w-full object-cover" :src="worktravel.image" :alt="worktravel.name">
                </div>
                </div>
            </div>

            <div class="relative mx-auto max-w-md px-4 sm:max-w-3xl sm:px-6 lg:px-0">
                <!-- Content area -->
                <div class="pt-12 sm:pt-16 lg:pt-20">
                <h2 class="text-3xl text-gray-900 font-extrabold tracking-tight sm:text-4xl">
                    {{ worktravel.name }}
                </h2>
                <div v-html="worktravel.description" class="mt-6 text-gray-500 prose">
                </div>
                </div>
                <!-- Dodatne informacije area -->
                <div class="pt-12 sm:pt-16 lg:pt-20">
                <h2 class="text-2xl text-gray-900 font-extrabold tracking-tight sm:text-3xl">
                    Dodatne informacije
                </h2>
                <div class="mt-6 text-gray-500 prose">
                    {{ worktravel.dodatne_informacije }}
                </div>
                </div>

                <!-- Stats section -->
                <div class="mt-10">
                <dl class="grid grid-cols-2 gap-x-4 gap-y-8">

                    <div class="border-t-2 border-gray-100 pt-6 col-span-2">
                        <dt class="text-base font-medium text-gray-500">Satnica</dt>
                        <dd class="text-3xl font-extrabold tracking-tight text-gray-900">{{ worktravel.satnica }} kn</dd>
                    </div>

                    <div class="border-t-2 border-gray-100 pt-6">
                        <dt class="text-base font-medium text-gray-500">Smještaj</dt>
                        <dd v-if="worktravel.smjestaj" class="text-3xl font-extrabold tracking-tight text-gray-900">DA</dd>
                        <dd v-else class="text-3xl font-extrabold tracking-tight text-gray-900">NE</dd>
                    </div>

                    <div v-if="smjestaj" class="border-t-2 border-gray-100 pt-6">
                        <dt class="text-base font-medium text-gray-500">Cijena smještaja</dt>
                        <dd class="text-3xl font-extrabold tracking-tight text-gray-900">{{ worktravel.smjestaj_price }} kn</dd>
                    </div>

                </dl>
                </div>
            </div>
        </div>
      </TabPanel>
    </TabPanels>
  </TabGroup>
  </div>
</template>

<script>
import { TabGroup, TabList, Tab, TabPanels, TabPanel } from '@headlessui/vue'
import SuperAdminLayout from "@/Layout/SuperAdminLayout";
export default {
  inheritAttrs: false,
  layout: (h, page) => {
    return h(
      SuperAdminLayout,
      {
        resource: "W&T poslovi",
        indexRoute: "admin.worktravels.index",
      },
      () => [page]
    );
  },
  components: { SuperAdminLayout, TabGroup, TabList, Tab, TabPanels, TabPanel },
  props: {
    worktravel: Object,
  },
    methods: {
      excerpt(html) {
          const el = document.createElement( 'html' );
          el.innerHTML = html;
          const txt = el.getElementsByTagName( 'p' )[0]?.innerText
          return this.truncate(txt, 200, '...')
      },
      truncate(str, max, suffix) {
          return str?.length < max ? str : `${str?.substr(0, str?.substr(0, max - suffix?.length).lastIndexOf(' '))}${suffix}`;
      }
  }
};
</script>

<style>
</style>
