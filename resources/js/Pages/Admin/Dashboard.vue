<template>
  <div class="mt-8">
    <!-- px-4 sm:px-6 lg:max-w-7xl lg:mx-auto lg:px-8 xl:max-w-screen-2xl  -->
    <div
      class="px-4 sm:px-6 lg:px-8 lg:max-w-7xl lg:mx-auto xl:max-w-screen-2xl"
    >
      <h2 class="text-lg leading-6 font-medium text-gray-900">Pregled</h2>
      <div class="mt-2 grid grid-cols-1 gap-5 sm:grid-cols-2">
        <!-- Card 1 -->

        <div class="bg-white overflow-hidden shadow rounded-lg border">
          <div class="p-5">
            <div class="flex items-center">
              <div class="flex-shrink-0">
                <!-- Heroicon name: users -->
                <new-icon class="h-7 w-7" name="users" />
              </div>
              <div class="ml-5 w-0 flex-1">
                <dl>
                  <dt class="text-sm font-medium text-gray-500 truncate">
                    Broj korisnika
                  </dt>
                  <dd>
                    <div class="text-lg font-medium text-gray-900">
                      {{ number_of_users }}
                    </div>
                  </dd>
                </dl>
              </div>
            </div>
          </div>
          <div class="bg-gray-50 px-5 py-3">
            <div class="text-sm">
              <inertia-link
                :href="route('admin.users.index')"
                class="font-medium text-cyan-700 hover:text-cyan-900"
              >
                Pregledaj sve
              </inertia-link>
            </div>
          </div>
        </div>
        <!-- Card 3 -->
        <div class="bg-white overflow-hidden shadow rounded-lg border">
          <div class="p-5">
            <div class="flex items-center">
              <div class="flex-shrink-0">
                <!-- Heroicon name: message -->
                <new-icon name="inbox" />
              </div>
              <div class="ml-5 w-0 flex-1">
                <dl>
                  <dt class="text-sm font-medium text-gray-500 truncate">
                    Broj novih poruka
                  </dt>
                  <dd>
                    <div class="text-lg font-medium text-gray-900">
                      {{ $page.props.authuser.unread_messages }}
                    </div>
                  </dd>
                </dl>
              </div>
            </div>
          </div>
          <div class="bg-gray-50 px-5 py-3">
            <div class="text-sm">
              <inertia-link
                :href="route('messages.received_messages.index')"
                class="font-medium text-cyan-700 hover:text-cyan-900"
              >
                Pregledaj sve
              </inertia-link>
            </div>
          </div>
        </div>

        <!-- Card 2 -->
        <div class="bg-white overflow-hidden shadow rounded-lg border">
          <div class="p-5">
            <div class="flex items-center">
              <div class="flex-shrink-0">
                <!-- Heroicon name: table -->
                <new-icon name="table" />
              </div>
              <div class="ml-5 w-0 flex-1">
                <dl>
                  <dt class="text-sm font-medium text-gray-500 truncate">
                    Broj Work & travel prijava
                  </dt>
                  <dd>
                    <div class="text-lg font-medium text-gray-900">
                      {{ number_of_worktravel_applications }}
                    </div>
                  </dd>
                </dl>
              </div>
            </div>
          </div>
          <div class="bg-gray-50 px-5 py-3">
            <div class="text-sm">
              <inertia-link
                :href="route('admin.worktravel.applications')"
                class="font-medium text-cyan-700 hover:text-cyan-900"
              >
                Pregledaj sve
              </inertia-link>
            </div>
          </div>
        </div>

        <!-- Card 4 -->
        <div class="bg-white overflow-hidden shadow rounded-lg border">
          <div class="p-5">
            <div class="flex items-center">
              <div class="flex-shrink-0">
                <!-- Heroicon name: table -->
                <new-icon name="table" />
              </div>
              <div class="ml-5 w-0 flex-1">
                <dl>
                  <dt class="text-sm font-medium text-gray-500 truncate">
                    Broj Au pair prijava
                  </dt>
                  <dd>
                    <div class="text-lg font-medium text-gray-900">
                      {{ number_of_aupair_applications }}
                    </div>
                  </dd>
                </dl>
              </div>
            </div>
          </div>
          <div class="bg-gray-50 px-5 py-3">
            <div class="text-sm">
              <inertia-link
                :href="route('admin.aupair.applications')"
                class="font-medium text-cyan-700 hover:text-cyan-900"
              >
                Pregledaj sve
              </inertia-link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import SuperAdminLayout from "@/Layout/SuperAdminLayout";
import NewIcon from "@/Shared/NewIcon";
export default {
  components: {
    NewIcon,
  },
  // layout: (h, page) => h( SiteLayout, { title: 'Hello' }, () => [page]),
  layout: (h, page) => {
    return h(
      SuperAdminLayout,
      {
        // title: '',
        resource: "Početna",
        indexRoute: "user.dashboard",
      },
      () => [page]
    );
  },
  props: {
    user: Object,
    number_of_users: Number,
    number_of_worktravel_applications: Number,
    number_of_aupair_applications: Number,
  },
};
</script>
