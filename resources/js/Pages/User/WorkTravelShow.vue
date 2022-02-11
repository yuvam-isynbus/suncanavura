<template>
  <div class="px-4 sm:px-6 lg:px-8 lg:max-w-7xl lg:mx-auto xl:max-w-screen-2xl">
    <div class="py-8">
        <!-- CONTENT START -->
        <div class="lg:mx-auto lg:max-w-7xl lg:px-8 lg:grid lg:grid-cols-2 lg:gap-16 lg:items-start">
            <div class="relative sm:py-16 lg:py-0">
                <div class="relative mx-auto max-w-md px-4 sm:max-w-3xl sm:px-6 lg:px-0 lg:max-w-none lg:py-20">
                <!-- Testimonial card-->
                <div class="relative pt-64 pb-10 rounded-2xl shadow-xl overflow-hidden">
                    <img class="absolute inset-0 h-full w-full object-cover" :src="image" alt="name">
                </div>
                </div>
            </div>

            <div class="relative mx-auto max-w-md px-4 sm:max-w-3xl sm:px-6 lg:px-0">
                <!-- Content area -->
                <div class="pt-12 sm:pt-16 lg:pt-20">
                <h2 class="text-3xl text-gray-900 font-extrabold tracking-tight sm:text-4xl">
                    {{ name }}
                </h2>
                <div v-html="description" class="mt-6 text-gray-500 prose">
                </div>
                </div>
                <!-- Dodatne informacije area -->
                <div class="pt-12 sm:pt-16 lg:pt-20">
                <h2 class="text-2xl text-gray-900 font-extrabold tracking-tight sm:text-3xl">
                    Dodatne informacije
                </h2>
                <div class="mt-6 text-gray-500 prose">
                    {{ dodatne_informacije }}
                </div>
                </div>

                <!-- Stats section -->
                <div class="mt-10">
                <dl class="grid grid-cols-2 gap-x-4 gap-y-8">

                    <div class="border-t-2 border-gray-100 pt-6 col-span-2">
                        <dt class="text-base font-medium text-gray-500">Satnica</dt>
                        <dd class="text-3xl font-extrabold tracking-tight text-gray-900">{{ satnica }} USD</dd>
                    </div>

                    <div class="border-t-2 border-gray-100 pt-6">
                        <dt class="text-base font-medium text-gray-500">Smještaj</dt>
                        <dd v-if="smjestaj" class="text-3xl font-extrabold tracking-tight text-gray-900">DA</dd>
                        <dd v-else class="text-3xl font-extrabold tracking-tight text-gray-900">NE</dd>
                    </div>

                    <div v-if="smjestaj" class="border-t-2 border-gray-100 pt-6">
                        <dt class="text-base font-medium text-gray-500">Cijena smještaja</dt>
                        <dd class="text-3xl font-extrabold tracking-tight text-gray-900">{{ smjestaj_price }} USD</dd>
                    </div>

                </dl>
                </div>
            </div>
        </div>
        <!-- CONTENT END -->
    </div>
  </div>
</template>

<script>
import SuperAdminLayout from "@/Layout/SuperAdminLayout";
export default {
  // layout: (h, page) => h( SiteLayout, { title: 'Hello' }, () => [page]),
  layout: (h, page) => {
    return h(
      SuperAdminLayout,
      {
        resource: "Work & travel poslovi",
        indexRoute: "user.worktravels",
        type: "user",
      },
      () => [page]
    );
  },
  props: {
    worktravel: Object,
    name: String,
    description: String,
    dodatne_informacije: String,
    satnica: String,
    smjestaj: String,
    smjestaj_price: String,
    image: String
  },
};
</script>
