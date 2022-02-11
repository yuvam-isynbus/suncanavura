<template>
  <div class="px-4 sm:px-6 lg:max-w-7xl lg:mx-auto lg:px-8 xl:max-w-screen-2xl">
    <div class="mt-8 bg-white shadow sm:rounded-lg">
      <div class="px-4 py-5 sm:px-4 flex justify-between items-start">
        <div>
            <h2
              id="applicant-information-title"
              class="text-lg leading-6 font-medium text-gray-900"
            >
              Podaci o prijavi {{ type == 'worktravel' ? 'Work & travel' : 'Au pair' }}
            </h2>
            <a href="#"
                class="text-blue-500 underline hover:text-blue-600"
                 @click.prevent="showTermsModal = true">Prikaži uvjete poslovanja</a>
        </div>
        <div class="text-base mt-1">
            Datum prijave:
            <span class="text-gray font-semibold">{{
            application.enter_date ?? createdAt
            }}</span>
        </div>
<!--         <inertia-link
          as="button"
          type="button"
          class="inline-flex items-center px-4 py-2 border border-transparent text-sm leading-5 font-medium rounded-md text-white bg-rose-600 hover:bg-rose-500 focus:outline-none focus:shadow-outline-rose focus:border-rose-700 active:bg-rose-700 transition duration-150 ease-in-out"
          :href="route('user.' + type + '.application.form.edit', application.uuid)"
        >
          Izmjeni podatke
        </inertia-link> -->
      </div>
        <div class="border-t border-gray-200 px-4 py-5">
          <dl class="grid grid-cols-1 gap-x-4 gap-y-8 sm:grid-cols-6">
            <div class="sm:col-span-2" v-if="application.program && type === 'worktravel'">
              <dt class="text-sm font-medium text-gray-500">Program</dt>
              <dd class="mt-1 text-sm text-gray-900">
                {{ application.program }}
              </dd>
            </div>
                        <div class="sm:col-span-2" v-if="type === 'aupair'">
              <dt class="text-sm font-medium text-gray-500">Destinacija</dt>
              <dd class="mt-1 text-sm text-gray-900">
                {{ application.destination?.name  ?? "-------" }}
              </dd>
            </div>
            <div class="sm:col-span-2">
              <dt class="text-sm font-medium text-gray-500">Email adresa</dt>
              <dd class="mt-1 text-sm text-gray-900">
                {{ application.user.email }}
              </dd>
            </div>
            <div class="sm:col-span-2">
              <dt class="text-sm font-medium text-gray-500">Datum rođenja</dt>
              <dd class="mt-1 text-sm text-gray-900">
                {{ application.birth_date }}
              </dd>
            </div>
            <hr class="sm:col-span-6 border border-yellow-100" />
            <div class="sm:col-span-2">
              <dt class="text-sm font-medium text-gray-500">Država</dt>
              <dd class="mt-1 text-sm text-gray-900">
                {{ application.country }}
              </dd>
            </div>
            <div class="sm:col-span-2">
              <dt class="text-sm font-medium text-gray-500">Grad</dt>
              <dd class="mt-1 text-sm text-gray-900">
                {{ application.city }}
              </dd>
            </div>
            <div class="sm:col-span-2">
              <dt class="text-sm font-medium text-gray-500">Adresa</dt>
              <dd class="mt-1 text-sm text-gray-900">
                {{ application.street_address ?? "-------" }}
                <!-- {{ application.home_number ?? "---" }} -->
              </dd>
            </div>
            <hr class="sm:col-span-6 border border-yellow-100" />
            <div class="sm:col-span-2">
              <dt class="text-sm font-medium text-gray-500">Broj telefona</dt>
              <dd class="mt-1 text-sm text-gray-900">
                {{ application.phone ?? "-------" }}
              </dd>
            </div>
            <div class="sm:col-span-2">
              <dt class="text-sm font-medium text-gray-500">Skype</dt>
              <dd class="mt-1 text-sm text-gray-900">
                {{ application.skype ?? "-------" }}
              </dd>
            </div>
            <hr class="sm:col-span-6 border border-yellow-100" />
            <div class="sm:col-span-2">
              <dt class="text-sm font-medium text-gray-500">
                Broj putovnice ili osobne iskaznice
              </dt>
              <dd class="mt-1 text-sm text-gray-900">
                {{ application.id_number ?? "-------" }}
              </dd>
            </div>
            <div class="sm:col-span-2">
              <dt class="text-sm font-medium text-gray-500">
                Datum izdavanja dokumenta
              </dt>
              <dd class="mt-1 text-sm text-gray-900">
                {{ application.id_start_date ?? "-------" }}
              </dd>
            </div>
            <div class="sm:col-span-2">
              <dt class="text-sm font-medium text-gray-500">
                Datum isteka dokumenta
              </dt>
              <dd class="mt-1 text-sm text-gray-900">
                {{ application.id_end_date ?? "-------" }}
              </dd>
            </div>
            <hr class="sm:col-span-6 border border-yellow-100" />
            <div class="sm:col-span-2">
              <dt class="text-sm font-medium text-gray-500">Fakultet</dt>
              <dd class="mt-1 text-sm text-gray-900">
                {{ application.university }}
              </dd>
            </div>
            <div class="sm:col-span-2">
              <dt class="text-sm font-medium text-gray-500">Početak studija</dt>
              <dd class="mt-1 text-sm text-gray-900">
                {{ application.university_start_date ?? "-------" }}
              </dd>
            </div>
            <div class="sm:col-span-2">
              <dt class="text-sm font-medium text-gray-500">
                Završetak studija
              </dt>
              <dd class="mt-1 text-sm text-gray-900">
                {{ application.university_end_date ?? "-------" }}
              </dd>
            </div>
            <div class="sm:col-span-2">
              <dt class="text-sm font-medium text-gray-500">Program</dt>
              <dd class="mt-1 text-sm text-gray-900">
                {{ application.university_program }}
              </dd>
            </div>
            <div class="sm:col-span-2">
              <dt class="text-sm font-medium text-gray-500">Godina studija</dt>
              <dd class="mt-1 text-sm text-gray-900">
                {{ application.university_year }}
              </dd>
            </div>
            <div class="sm:col-span-2">
              <dt class="text-sm font-medium text-gray-500">Smjer</dt>
              <dd class="mt-1 text-sm text-gray-900">
                {{ application.university_course }}
              </dd>
            </div>
            <hr class="sm:col-span-6 border border-yellow-100" />
            <div class="sm:col-span-3">
              <dt class="text-sm font-medium text-gray-500">Strani jezici</dt>
              <dd class="mt-1 text-sm text-gray-900">
                {{ application.languages?.length > 0 ? application.languages.join(", ") : "-------" }}
              </dd>
            </div>
            <div class="sm:col-span-3">
              <dt class="text-sm font-medium text-gray-500">
                Zdravstveni problemi
              </dt>
              <dd class="mt-1 text-sm text-gray-900">
                {{ application.health }}
              </dd>
            </div>
          </dl>
        </div>
    </div>
    <show-terms
        :showModal="showTermsModal"
        :type="type"
        :uvjeti="false"
        :program="type == 'worktravel' ? application.program : application.destination?.name"
        @close="showTermsModal = false"
  ></show-terms>
  </div>
</template>

<script>
import moment from "moment";
import SuperAdminLayout from "@/Layout/SuperAdminLayout";
import NestedLayoutUserApplication from "@/Layout/NestedLayoutUserApplication";
import ApplicationForm from "@/Pages/Admin/Applications/ApplicationForm";
import ApplicationDetails from "@/Pages/User/Application/ApplicationDetails";
import ShowTerms from "@/Pages/Admin/Applications/ShowTerms";
export default {
  components: {
    ApplicationDetails,
    ApplicationForm,
    ShowTerms
  },
  // layout: (h, page) => h( SiteLayout, { title: 'Hello' }, () => [page]),
  layout: (h, page) => {
    return h(
      SuperAdminLayout,
      {
        resource: "Prijava",
        indexRoute: "user.dashboard",
        type: page.props.authuser.role,
      },
      () => [
        h(
          NestedLayoutUserApplication,
          {
            url: "application/form",
            uuid: page.props.application.uuid,
            type: page.props.application.type == 'Work & travel' ? 'worktravel' : 'aupair'
          },
          () => [page]
        ),
      ]
    );
  },
  props: {
    application: Object,
    type: String,
    languages: Array,
    destinations: Array,
  },
  data() {
    return {
      showTermsModal: false,
    };
  },
  computed: {
      createdAt() {
          return moment(this.application.created_at).format("DD. MM. YYYY.")
      }
  },
  methods: {
    moment(date) {
      return moment(date);
    },
  },
};
</script>
