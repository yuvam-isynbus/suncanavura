<template>
  <div v-bind="$attrs" class="mt-8">
    <div
      class="px-4 py-8 sm:px-6 lg:max-w-7xl lg:mx-auto lg:px-8 xl:max-w-screen-2xl"
    >
      <div class="bg-white shadow overflow-hidden sm:rounded-lg">
        <div class="px-4 py-5 sm:px-6">
          <h3
            class="flex justify-between items-center text-lg leading-6 font-medium text-gray-900"
          >
            <span>Podaci o korisniku</span>
            <!--             <inertia-link
              v-if="$page.props.authuser.superadmin"
              as="button"
              type="button"
              class="inline-flex justify-center w-full rounded-md border border-transparent shadow-sm px-4 py-2 bg-rose-600 text-base font-medium text-white hover:bg-rose-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-rose-500 sm:w-auto sm:text-sm"
              :href="route('admin.users.edit', user.id)"
            >
              Izmjeni podatke
            </inertia-link> -->
            <button
              v-if="$page.props.authuser.role === 'admin'"
              type="button"
              class="inline-flex justify-center w-full rounded-md border border-transparent shadow-sm px-4 py-2 bg-rose-600 text-base font-medium text-white hover:bg-rose-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-rose-500 sm:w-auto sm:text-sm"
              @click="confirmDocumentDeletion"
            >
              Izmjeni podatke o korisniku
            </button>
          </h3>
        </div>
        <div class="border-t border-gray-200 px-4 py-5 sm:p-0">
          <dl class="sm:divide-y sm:divide-gray-200">
            <div class="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt class="text-sm font-medium text-gray-500">Ime i prezime</dt>
              <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                {{ user.name }}
              </dd>
            </div>
            <div class="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt class="text-sm font-medium text-gray-500">Email adresa</dt>
              <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                {{ user.email }}
              </dd>
            </div>
            <div v-if="user.role !== 'admin'" class="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt class="text-sm font-medium text-gray-500">Prijava za Work & travel</dt>
              <dd
                v-if="user.worktravel_uuid"
                class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2"
              >
                Prijava za Work & travel je podnesena {{ createdAt(user.worktravel_created_at) }}
                <inertia-link
                  :href="
                    route('admin.worktravel.applications.show', { application: user.worktravel_uuid})
                  "
                  class="text-blue-600 hover:text-blue-400"
                >
                  Pogledaj prijavu</inertia-link
                >!
              </dd>
              <dd
                v-else
                class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2"
              >
                Prijava nije podnesena.
                <inertia-link
                  :href="
                    route('admin.users.create-application', {user: user, type : 'worktravel'})
                  "
                  class="text-blue-600 hover:text-blue-400"
                >
                  Unesi prijavu kao administrator</inertia-link
                >.
              </dd>
            </div>
            <div v-if="user.role !== 'admin'" class="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt class="text-sm font-medium text-gray-500">Prijava za Au pair</dt>
              <dd
               v-if="user.aupair_uuid"
                class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2"
              >
                Prijava za Au pair je podnesena {{ createdAt(user.aupair_created_at) }}
                <inertia-link
                  :href="
                    route('admin.aupair.applications.show', { application: user.aupair_uuid })
                  "
                  class="text-blue-600 hover:text-blue-400"
                >
                  Pogledaj prijavu</inertia-link
                >!
              </dd>
              <dd
                v-else
                class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2"
              >
                Prijava nije podnesena.
                <inertia-link
                  :href="
                    route('admin.users.create-application', {user: user, type : 'aupair'})
                  "
                  class="text-blue-600 hover:text-blue-400"
                >
                  Unesi prijavu kao administrator</inertia-link
                >.
              </dd>
            </div>
          </dl>
        </div>
      </div>
    </div>
  </div>
  <confirm-delete
    actionLabel="Nastavi"
    message="Izmjena podataka o korisniku može izazvat trajnu nefunkcionalnost korisničkog računa"
    :showModal="showConfirmModal"
    @close="modalClose"
    @confirm="destroy"
  ></confirm-delete>
</template>

<script>
import moment from "moment";
import SuperAdminLayout from "@/Layout/SuperAdminLayout";
import NestedUserLayout from "@/Layout/NestedUserLayout";
import ConfirmDelete from "@/Pages/Admin/Applications/ConfirmDelete.vue";
export default {
  layout: (h, page) =>
    h(
      SuperAdminLayout,
      {
        resource: "Korisnici",
        indexRoute: "admin.users.index",
        action: page.props.user.name,
      },
      () => [h(NestedUserLayout, { url: "admin/users" }, () => [page])]
    ),
  components: {
    ConfirmDelete,
  },
  props: {
    user: Object,
  },
  data() {
    return {
      showConfirmModal: false,
      actionLabel: 'Nastavi'
    };
  },
  methods: {
    createdAt(date) {
      return moment(date).format("DD. MM. YYYY.");
    },
    confirmDocumentDeletion() {
      this.showConfirmModal = true;
    },
    modalClose() {
      this.showConfirmModal = false;
    },
    destroy() {
      this.$inertia.get(route("admin.users.edit", this.user.id));
    },
  },
};
</script>
