<template>
  <div class="mt-8 max-w-3xl mx-auto sm:px-6 lg:max-w-7xl xl:max-w-screen-2xl">
    <!-- Description list-->
    <section aria-labelledby="applicant-information-title">
      <div class="bg-white shadow sm:rounded-lg">
        <div
          class="px-4 py-5 sm:px-4 lg:flex lg:justify-between lg:items-center"
        >
          <div>
            <h2
              id="applicant-information-title"
              class="text-lg leading-6 font-medium text-gray-900"
            >
              <div>
                  Podaci o {{ application.type }} prijavi za korisnika
                  <!-- <span class="text-blue-900 font-semibold">{{
                    application.user.name
                  }}</span> -->
                  <inertia-link
                    :href="route('admin.users.show', application.user.id)"
                    class="text-blue-800 hover:text-blue-600 font-semibold"
                    >{{ application.user.name }}</inertia-link
                >
              </div>
              <div class="text-base mt-1">
                  Datum prijave:
                  <span class="text-gray font-semibold">{{
                    application.enter_date ?? createdAt
                  }}</span>
              </div>
              <div class="text-base mt-1 text-red-600">
                  Korisnik je predajom prijave prihvatio uvjete poslovanja tvrtke Sunčana Vura d.o.o.
              </div>
            </h2>
            <p v-if="application.sponsor">
              Sponzor: {{ application.sponsor.name }}
            </p>
          </div>
          <div class="space-x-3 mt-3 lg:mt-0">
            <inertia-link
              as="button"
              type="button"
              class="inline-flex justify-center w-full rounded-md border border-transparent shadow-sm px-4 py-2 bg-rose-600 text-base font-medium text-white hover:bg-rose-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-rose-500 sm:w-auto sm:text-sm"
              :href="route('admin.' + type + '.applications.edit', application.uuid)"
            >
              Izmjeni prijavu
            </inertia-link>
            <a target="_blank"
              class="inline-flex justify-center w-full rounded-md border border-transparent shadow-sm px-4 py-2 bg-blue-600 text-base font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 sm:w-auto sm:text-sm"
              :href="'/admin/applications/pdf/' + application.uuid"
            >
              PDF
            </a>
          </div>
        </div>
        <div
          v-if="application.price"
          class="flex justify-between border-t border-gray-200 px-4 py-5"
        >
          <div>
            <span>Ukupna cijena</span>
            <span class="ml-3 text-rose-600 text-lg font-semibold"
              >{{ application.price }} kn</span
            >
            <button
              type="button"
              class="ml-4 inline-flex items-center px-3 py-1 font-medium border-transparent text-sm leading-5 border-2 border-rose-500 rounded-md text-rose-700 bg-white hover:bg-rose-50 focus:outline-none focus:shadow-outline-rose focus:border-rose-700 active:bg-rose-700 transition duration-150 ease-in-out"
              @click="showModal = true"
            >
              Izmjeni cijenu
            </button>
          </div>
          <div>
            <span>Uplaćeno</span>
            <span class="ml-3 text-green-600 text-lg font-semibold"
              >{{ application.paid_amount }} kn</span
            >
          </div>
        </div>
        <div
          v-else
          class="flex items-center border-t border-gray-200 px-4 py-5"
        >
          <h3
            id="applicant-information-title"
            class="font-medium text-gray-900"
          >
            Cijena nije unesena
          </h3>
          <button
            type="button"
            class="ml-4 inline-flex items-center px-3 py-1 font-medium border-transparent text-sm leading-5 border-2 border-rose-500 rounded-md text-rose-700 bg-white hover:bg-rose-50 focus:outline-none focus:shadow-outline-rose focus:border-rose-700 active:bg-rose-700 transition duration-150 ease-in-out"
            @click="showModal = true"
          >
            Unesi cijenu
          </button>
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
            <div class="sm:col-span-2" v-if="type === 'aupair'">
              <dt class="text-sm font-medium text-gray-500">Datum odlaska</dt>
              <dd class="mt-1 text-sm text-gray-900">
                {{ application.university_start_date }}
              </dd>
            </div>
            <div class="sm:col-span-2" v-if="type === 'aupair'">
              <dt class="text-sm font-medium text-gray-500">Datum povratka</dt>
              <dd class="mt-1 text-sm text-gray-900">
                {{ application.university_end_date }}
              </dd>
            </div>
            <hr class="sm:col-span-6 border border-yellow-100" v-if="type === 'aupair'" />
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
              <dt class="text-sm font-medium text-gray-500">{{ type === 'worktravel' ? 'Skype' : 'Kontakt za hitni slučaj' }}</dt>
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
            <div class="sm:col-span-4">
              <dt class="text-sm font-medium text-gray-500">
                Fakultetski program
              </dt>
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
            <div class="sm:col-span-4">
              <dt class="text-sm font-medium text-gray-500">Smjer</dt>
              <dd class="mt-1 text-sm text-gray-900">
                {{ application.university_course }}
              </dd>
            </div>
            <div class="sm:col-span-2" v-if="type === 'worktravel'">
              <dt class="text-sm font-medium text-gray-500">Početak studija</dt>
              <dd class="mt-1 text-sm text-gray-900">
                {{ application.university_start_date ?? "-------" }}
              </dd>
            </div>
            <div class="sm:col-span-4"  v-if="type === 'worktravel'">
              <dt class="text-sm font-medium text-gray-500">
                Završetak studija
              </dt>
              <dd class="mt-1 text-sm text-gray-900">
                {{ application.university_end_date ?? "-------" }}
              </dd>
            </div>
            <hr class="sm:col-span-6 border border-yellow-100" />
            <div class="sm:col-span-3">
              <dt class="text-sm font-medium text-gray-500">Strani jezici</dt>
              <dd class="mt-1 text-sm text-gray-900">
                {{
                  application.languages?.length > 0
                    ? application.languages.join(", ")
                    : "-------"
                }}
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
    </section>
  </div>
  <create-price
    :uuid="application.uuid"
    :value="application.price"
    :showModal="showModal"
    @close="showModal = false"
  ></create-price>
</template>

<script>
import moment from "moment";
import SuperAdminLayout from "@/Layout/SuperAdminLayout";
import NestedLayoutAdminApplication from "@/Layout/NestedLayoutAdminApplication";
import CreatePrice from "@/Pages/Admin/Applications/CreatePrice";
export default {
  inheritAttrs: false,
  layout: (h, page) =>
    h(
      SuperAdminLayout,
      {
        resource: "Prijave",
        indexRoute: "admin." + page.props.type + ".applications",
        // action: page.props.application.name,
      },
      () => [
        h(
          NestedLayoutAdminApplication,
          {
            url: "admin/applications",
            uuid: page.props.application.uuid,
            type: (page.props.application.type == "Work & travel"
              ? "worktravel"
              : "aupair"),
          },
          () => [page]
        ),
      ]
    ),
  components: {
    CreatePrice,
  },
  props: {
    application: Object,
    documents: Array,
    timeline: Array,
    type: String
  },
  mounted() {
    window.Echo.private("applications").listen("TimelineEvent", (e) => {
      this.$inertia.reload();
    });
  },
  data() {
    return {
      showModal: false,
    };
  },
  computed: {
      createdAt() {
          return moment(this.application.created_at).format("DD. MM. YYYY.")
      }
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
