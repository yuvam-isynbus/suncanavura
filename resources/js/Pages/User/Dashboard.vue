<template>
  <div class="px-4 sm:px-6 lg:px-8 lg:max-w-7xl lg:mx-auto xl:max-w-screen-2xl">
    <div class="py-8">
      <h1 class="text-lg text-gray-900">
        Dobro došli
        <span class="font-semibold">{{ $page.props.authuser.name }}</span>
      </h1>
      <h3 class="mt-4 text-lg leading-6 font-medium text-gray-900">
        Aplikacije Sunčana Vura Vam omogućava slijedeće usluge
      </h3>
      <dl class="mt-5 grid grid-cols-1 gap-5 sm:grid-cols-2">
        <div
          class="px-4 py-5 bg-white shadow rounded-lg overflow-hidden sm:p-6 border"
        >
          <dt class="font-medium text-gray-500 truncate">Prijava za program</dt>
          <dd class="mt-1 text-2xl font-semibold text-blue-600">
            Work & travel
          </dd>
          <p
            v-if="$page.props.authuser.has_application"
            class="text-gray-700"
          >
            Vaša prijava je predana i nalazi se u obradi.
            <inertia-link
              :href="route('user.worktravel.application')"
              class="text-blue-600 hover:text-blue-400"
              >Pregledajte prijavu</inertia-link
            >!
          </p>
          <p v-else class="text-gray-700">
            Ispunite i predajte Vašu
            <inertia-link
              :href="route('user.worktravel.form')"
              class="text-blue-600 hover:text-blue-400"
              >prijavu</inertia-link
            >!
          </p>
        </div>

        <div
          class="px-4 py-5 bg-white shadow rounded-lg overflow-hidden sm:p-6 border"
        >
          <dt class="text-sm font-medium text-gray-500 truncate">Prijava za program</dt>
          <dd class="mt-1 text-2xl font-semibold text-blue-600">Au pair</dd>
                    <p
            v-if="$page.props.authuser.has_aupair"
            class="text-gray-700"
          >
            Vaša prijava je predana i nalazi se u obradi.
            <inertia-link
              :href="route('user.aupair.application')"
              class="text-blue-600 hover:text-blue-400"
              >Pregledajte prijavu</inertia-link
            >!
          </p>
          <p v-else class="text-gray-700">
            Ispunite i predajte Vašu
            <inertia-link
              :href="route('user.aupair.form')"
              class="text-blue-600 hover:text-blue-400"
              >prijavu</inertia-link
            >!
          </p>
        </div>

        <div
          class="px-4 py-5 bg-white shadow rounded-lg overflow-hidden sm:p-6 border"
        >
          <dt class="font-medium text-gray-500 truncate">Usluga plaćanja karticom ili mobitelom</dt>
          <dd class="mt-1 text-2xl font-semibold text-blue-600">
            <inertia-link
              :href="route('user.paycross')"
              class="text-blue-600 hover:text-blue-400"
              >Plati</inertia-link
            >
          </dd>
        </div>

        <div
          class="px-4 py-5 bg-white shadow rounded-lg overflow-hidden sm:p-6 border"
        >
          <dt class="text-sm font-medium text-gray-500 truncate">Pregled ponude Work&travel poslova</dt>
          <dd class="mt-1 text-2xl font-semibold text-blue-600">
            <inertia-link
              :href="route('user.worktravels')"
              class="text-blue-600 hover:text-blue-400"
              >Pregledaj</inertia-link
            >
          </dd>
        </div>
      </dl>
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
        resource: "Početna",
        indexRoute: "user.dashboard",
        type: "user",
      },
      () => [page]
    );
  },
  props: {
    user: Object,
  },
};
</script>
