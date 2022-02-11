<template>
  <form-section @submitted="submit">
    <template #form>
      <div class="divide-y divide-gray-200 md:col-span-2">
        <div class="mb-6">
          <h3 class="text-lg leading-6 font-medium text-gray-900">
            {{ type }} formular za prijavu korisnika
            <span
              v-if="$page.props.authuser.role === 'admin'"
              class="font-bold"
              >{{ userName }}</span
            >
          </h3>
          <p v-if="mode == 'create'" class="mt-1 text-sm text-gray-500">
            Ispunjenjem ovog formulara započinjete prijavu za {{ type }}
          </p>
        </div>

        <div class="pt-6">
          <div class="grid grid-cols-1 gap-y-5 gap-x-4 md:grid-cols-6">
            <div class="md:col-span-2 xl:col-span-1">
              <mask-input
                v-model="form.enter_date"
                :error="form.errors.enter_date"
                mask="##. ##. ####."
                placeholder="dd. mm. gggg."
                type="text"
                label="Datum prijave"
                autocomplete="off"
              />
            </div>
            <div class="md:col-span-2 xl:col-span-1">
              <mask-input
                v-model="form.birth_date"
                :error="form.errors.birth_date"
                mask="##. ##. ####."
                placeholder="dd. mm. gggg."
                type="text"
                label="Datum rođenja"
                autocomplete="off"
              />
            </div>
            <div class="md:col-span-4" v-if="type === 'Work & travel'">
              <span class="block text-sm font-medium text-gray-700"
                >Program</span
              >
              <base-radio-group
                class="flex pt-3"
                v-model="form.program"
                name="program"
                :options="[
                  { value: 'Independent', label: 'Independent' },
                  { value: 'Premium', label: 'Premium' },
                  { value: 'Sierra', label: 'Sierra' },
                ]"
              ></base-radio-group>
            </div>

            <hr class="md:col-span-6 mt-2" v-if="destinations && type === 'Au pair' && $page.props.authuser.role === 'admin'" />

            <div v-if="destinations && type === 'Au pair'" class="md:col-span-3">
              <list-select
                v-model="form.destination_id"
                label="Destinacija"
                :items="destinations"
              ></list-select>
            </div>
            <div v-if="destinations && type === 'Au pair' && $page.props.authuser.role === 'admin'" class="md:col-span-3 self-end">
              <button
                type="button"
                class="inline-flex justify-center w-full rounded-md border-2 border-rose-600 shadow-sm px-4 py-2 bg-white text-base font-semibold text-rose-600 hover:bg-rose-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-rose-500 sm:w-auto sm:text-sm"
                @click="addNewDestination"
              >
                Dodaj novu destinaciju
              </button>
            </div>

            <hr v-if="destinations && type === 'Au pair'" class="md:col-span-6 mt-2" />

            <div class="md:col-span-3" v-if="type === 'Au pair'">
              <mask-input
                v-model="form.university_start_date"
                :error="form.errors.university_start_date"
                mask="##. ##. ####."
                placeholder="dd. mm. gggg."
                type="text"
                label="Datum odlaska"
              />
            </div>

            <div class="md:col-span-3" v-if="type === 'Au pair'">
              <mask-input
                v-model="form.university_end_date"
                :error="form.errors.university_end_date"
                mask="##. ##. ####."
                placeholder="dd. mm. gggg."
                type="text"
                label="Datum povratka"
              />
            </div>

            <hr class="md:col-span-6 mt-2" v-if="type === 'Au pair'" />

            <div v-if="sponsors && type === 'Work & travel'" class="md:col-span-3">
              <list-select
                v-model="form.sponsor_id"
                label="Sponzor"
                :items="sponsors"
              ></list-select>
            </div>
            <div v-if="sponsors && type === 'Work & travel'" class="md:col-span-3 self-end">
              <button
                type="button"
                class="inline-flex justify-center w-full rounded-md border-2 border-rose-600 shadow-sm px-4 py-2 bg-white text-base font-semibold text-rose-600 hover:bg-rose-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-rose-500 sm:w-auto sm:text-sm"
                @click="addNewSponsor"
              >
                Dodaj novog sponzora
              </button>
            </div>

            <hr v-if="sponsors && type === 'Work & travel'" class="md:col-span-6 mt-2" />

            <div class="md:col-span-4 md:col-span-2">
              <base-input
                v-model="form.id_number"
                :error="form.errors.id_number"
                type="text"
                label="Broj putovnice ili osobne iskaznice"
                autocomplete="off"
              />
            </div>

            <div class="md:col-span-3 md:col-span-2">
              <mask-input
                v-model="form.id_start_date"
                :error="form.errors.id_start_date"
                mask="##. ##. ####."
                placeholder="dd. mm. gggg."
                type="text"
                label="Datum izdavanja"
                autocomplete="off"
              />
            </div>

            <div class="md:col-span-3 md:col-span-2">
              <mask-input
                v-model="form.id_end_date"
                :error="form.errors.id_end_date"
                mask="##. ##. ####."
                placeholder="dd. mm. gggg."
                type="text"
                label="Datum isteka"
                autocomplete="off"
              />
            </div>

            <hr class="md:col-span-6 my-2" />

            <div class="md:col-span-2">
              <list-select
                v-model="form.country"
                label="Država"
                :items="countries"
              ></list-select>
            </div>
            <div class="md:col-span-2">
              <base-input
                v-model="form.city"
                :error="form.errors.city"
                type="text"
                label="Grad"
              />
            </div>

            <div class="md:col-span-2">
              <base-input
                v-model="form.postal_code"
                :error="form.errors.postal_code"
                type="text"
                label="Poštanski broj"
              />
            </div>

            <div class="md:col-span-2">
              <base-input
                v-model="form.street_address"
                :error="form.errors.street_address"
                type="text"
                label="Adresa stanovanja"
              />
            </div>

            <div class="md:col-span-2">
              <base-input
                v-model="form.phone"
                :error="form.errors.phone"
                type="text"
                label="Telefon"
              />
            </div>
            <div class="md:col-span-2">
              <base-input
                v-model="form.skype"
                :error="form.errors.skype"
                type="text"
                :label="
                  type === 'Work & travel'
                    ? 'Skype'
                    : 'Kontakt za hitni slučaj (ime, tel.)'
                "
              />
            </div>

            <hr class="md:col-span-6 mt-2" />

            <div class="md:col-span-3">
              <base-input
                v-model="form.university"
                :error="form.errors.university"
                type="text"
                label="Fakultet"
              />
            </div>

            <div class="md:col-span-3">
              <list-select
                v-model="form.university_program"
                label="Fakultetski Program"
                :items="programs"
              ></list-select>
            </div>

            <div class="md:col-span-3">
              <list-select
                v-model="form.university_year"
                label="Godina studija"
                :items="years"
              ></list-select>
            </div>

            <div class="md:col-span-3">
              <base-input
                v-model="form.university_course"
                :error="form.errors.university_course"
                type="text"
                label="Smjer"
              />
            </div>

            <div class="md:col-span-3" v-if="type === 'Work & travel'">
              <mask-input
                v-model="form.university_start_date"
                :error="form.errors.university_start_date"
                mask="##. ##. ####."
                placeholder="dd. mm. gggg."
                type="text"
                label="Početak studija"
              />
            </div>

            <div class="md:col-span-3" v-if="type === 'Work & travel'">
              <mask-input
                v-model="form.university_end_date"
                :error="form.errors.university_end_date"
                mask="##. ##. ####."
                placeholder="dd. mm. gggg."
                type="text"
                label="Završetak studija"
              />
            </div>

            <hr class="md:col-span-6 mt-2" />
            <div class="md:col-span-4">
              <span class="block text-sm font-medium text-gray-700 mb-1"
                >Strani jezici</span
              >
              <Multiselect
                v-model="form.languages"
                mode="tags"
                placeholder="Izaberi strani jezik"
                :searchable="true"
                :createTag="true"
                :options="languages"
              />
            </div>
            <div
              class="md:col-span-2 self-end"
              v-if="$page.props.authuser.role === 'admin'"
            >
              <button
                type="button"
                class="inline-flex justify-center w-full rounded-md border-2 border-rose-600 shadow-sm px-4 py-2 bg-white text-base font-semibold text-rose-600 hover:bg-rose-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-rose-500 sm:w-auto sm:text-sm"
                @click="addNewLanguage"
              >
                Dodaj novi strani jezik
              </button>
            </div>
            <hr class="md:col-span-6 mt-2" />
            <!--             <div class="md:col-span-6">
              <span class="block text-sm font-medium text-gray-700"
                >Strani jezici</span
              >
                            <div class="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-6 mt-1">
                <div v-for="language in languages" :key="language.id">
                  <input
                    type="checkbox"
                    :id="language.name"
                    v-model="form.languages"
                    :value="language.name"
                    class="focus:ring-gray-500 h-4 w-4 text-gray-600 border-2 border-gray-500 rounded"
                  />
                  <label :for="language.name" class="ml-3">{{
                    language.name
                  }}</label>
                </div>
              </div>
            </div>
            <hr class="md:col-span-6 mt-2" /> -->
            <div class="md:col-span-6">
              <base-input
                v-model="form.health"
                :error="form.errors.health"
                type="text"
                label="Imate li ikakvih zdravstvenih problema?"
              />
            </div>
            <div
              v-if="mode == 'create' && $page.props.authuser.role !== 'admin'"
              class="relative md:col-span-6"
            >
              <div class="flex items-start">
                <div class="flex items-center h-5 mt-2">
                  <!-- <toggle v-model="form.terms"></toggle> -->
                  <!-- <input type="checkbox" v-model="form.terms"> -->
                    <Switch
                        v-model="form.terms"
                        :class="form.terms ? 'bg-rose-600' : 'bg-gray-300'"
                        class="relative inline-flex items-center h-6 rounded-full w-11"
                    >
                        <span class="sr-only">Enable terms</span>
                        <span
                        :class="form.terms ? 'translate-x-6' : 'translate-x-1'"
                        class="inline-block w-4 h-4 transform bg-white rounded-full"
                        />
                    </Switch>
                </div>
                <div class="ml-3 text-sm">
                  <label for="candidates" class="font-medium text-gray-700"
                    >Uvjeti poslovanja
                    <span class="mx-1" v-if="form.destination_id != 0">|</span>
                    <a v-if="form.destination_id != 0"  class="text-blue-500 underline hover:text-blue-600"
                    href="#" @click.prevent="showTermsModal = true" >Prikaži uvjete poslovanja</a>
                    <span class="mx-1" v-if="form.destination_id != 0">|</span>
                    <a v-if="form.destination_id != 0"  class="text-blue-500 underline hover:text-blue-600"
                    href="#" @click.prevent="showOpciModal = true" >Opći uvjeti poslovanja</a>
                </label>
                  <p class="text-gray-500">
                    Ovim prihvaćate naše uvjete poslovanja
                  </p>
                </div>
              </div>
              <p class="mt-2 text-red-500 text-sm" v-if="form.errors.terms">
                Za završetak prijave morate prihvatiti naše uvjete poslovanja
              </p>
            </div>
          </div>
        </div>
      </div>
    </template>
    <template #actions>
      <div class="flex space-x-3 mt-2 md:mt-0 md:ml-auto">
        <span
          v-if="form.processing"
          class="rounded-md shadow-sm inline-flex items-center"
        >
          <svg
            class="animate-spin h-7 w-7 text-rose-600"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
          >
            <circle
              class="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              stroke-width="4"
            ></circle>
            <path
              class="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
            ></path>
          </svg>
        </span>
        <span class="shadow-sm rounded-md">
          <button
            type="button"
            @click="goBack()"
            class="inline-flex items-center px-4 py-2 border border-cool-gray-300 text-sm leading-5 font-medium rounded-md text-cool-gray-700 bg-white hover:text-cool-gray-500 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 active:text-cool-gray-800 active:bg-cool-gray-50 transition duration-150 ease-in-out"
          >
            Odustani
          </button>
        </span>
        <base-button
          :class="{ 'opacity-25 cursor-wait': form.processing }"
          :disabled="form.processing"
          type="submit"
          >{{
            mode == "create" ? "Pošalji prijavu" : "Izmjeni podatke"
          }}</base-button
        >
      </div>
    </template>
  </form-section>
  <create-sponsor
    :showModal="showSponsorModal"
    @close="showSponsorModal = false"
  ></create-sponsor>
  <create-destination
    :showModal="showDestinationModal"
    @close="showDestinationModal = false"
  ></create-destination>
  <create-language
    :showModal="showLanguageModal"
    @close="showLanguageModal = false"
  ></create-language>
  <show-terms
    :showModal="showTermsModal"
    :type="type"
    :program="type == 'Work & travel' ? form.program : form.destination_id.name"
    @close="showTermsModal = false"
    @prihvacam="prihvacam"
    @neprihvacam="neprihvacam"
  ></show-terms>
  <show-terms
    :showModal="showOpciModal"
    :type="type"
    program="OPCI"
    :uvjeti="false"
    @close="showOpciModal = false"
  ></show-terms>
</template>

<script>
import moment from "moment";
import { Switch } from '@headlessui/vue'
import FormSection from "@/Form/FormSection";
import BaseInput from "@/Form/BaseInput";
import BaseCheckbox from "@/Form/BaseCheckbox";
import BaseRadioGroup from "@/Form/BaseRadioGroup";
import MaskInput from "@/Form/MaskInput";
import BaseButton from "@/Form/BaseButton";
import ListSelect from "@/Form/ListSelect";
import Toggle from "@/Form/Toggle";
import CreateSponsor from "@/Pages/Admin/Applications/CreateSponsor";
import CreateDestination from "@/Pages/Admin/Applications/CreateDestination";
import CreateLanguage from "@/Pages/Admin/Applications/CreateLanguage";
import ShowTerms from "@/Pages/Admin/Applications/ShowTerms";
import Multiselect from "@vueform/multiselect";
export default {
  components: {
    Switch,
    FormSection,
    BaseInput,
    MaskInput,
    BaseButton,
    BaseCheckbox,
    BaseRadioGroup,
    ListSelect,
    Toggle,
    CreateSponsor,
    CreateDestination,
    CreateLanguage,
    ShowTerms,
    Multiselect,
  },
  props: {
    errors: Object,
    application: Object,
    sponsors: Array,
    destinations: Array,
    languages: Array,
    mode: String,
    user: Object,
    type: String,
  },
  data() {
    return {
      sending: false,
      showLanguageModal: false,
      showSponsorModal: false,
      showDestinationModal: false,
      showTermsModal: false,
      showOpciModal: false,
      countries: ["Hrvatska", "BiH", "Srbija"],
      programs: [
        "WT Premium",
        "WT Independent",
        "WT Njemačka",
        "AU PAIR USA",
        "Turizam",
        "Avio karte",
      ],
      years: ["1", "2", "3", "4", "5"],
      programs: ["Preddiplomski", "Diplomski", "Integrirani", "Postdiplomski"],
      /*       languages: [
        "Engleski",
        "Njemački",
        "Talijanski",
        "Francuski",
        "Španjolski",
        "Portugalski",
      ], */
      form: this.$inertia.form({
        enter_date: this.application?.enter_date ?? moment(this.application?.created_at).format("DD. MM. YYYY."),
        birth_date: this.application?.birth_date,
        program: this.application ? this.application.program : "Independent",
        id_number: this.application?.id_number,
        id_start_date: this.application?.id_start_date,
        id_end_date: this.application?.id_end_date,
        country: this.application ? this.application.country : "Hrvatska",
        // sponsor_id: this.application ? this.application.sponsor_id ?? 0 : 0,
        sponsor_id: this.application
          ? this.sponsors?.find(
              // (item) => item.id === (this.application.sponsor_id ?? 0)
              (item) => {
                  if (this.application.sponsor_id) {
                    return this.application.sponsor_id
                  }
                  return item.id === 0
                }
            )
          : this.sponsors?.find((item) => item.id === 0),
        destination_id: this.application
          ? this.destinations?.find(
              // (item) => item.id === (this.application.destination_id ?? 0)
                            (item) => {
                  if (this.application.destination_id) {
                    return this.application.destination_id
                  }
                  return item.id === 0
                }
            )
          : this.destinations?.find((item) => item.id === 0),
        street_address: this.application
          ? this.application.street_address
          : null,
        home_number: this.application ? this.application.home_number : null,
        phone: this.application ? this.application.phone : null,
        skype: this.application ? this.application.skype : null,
        city: this.application ? this.application.city : null,
        postal_code: this.application ? this.application.postal_code : null,
        university: this.application ? this.application.university : null,
        university_program: this.application
          ? this.application.university_program
          : "Preddiplomski",
        university_year: this.application
          ? this.application.university_year.toString()
          : "1",
        university_course: this.application
          ? this.application.university_course
          : null,
        university_start_date: this.application?.university_start_date,
        university_end_date: this.application?.university_end_date,
        // languages: this.application ? this.application.languages : "Engleski",
        languages: this.application
          ? Array.isArray(this.application.languages)
            ? this.application.languages
            : [this.application.languages]
          : [],
        health: this.application ? this.application.health : null,
        terms: this.application ? !!this.application.terms : false,
        user_id: this.user?.id,
      }),
    };
  },
  computed: {
    submitLabel() {
      return this.mode === "create" ? "Create User" : "Update user";
    },
    userName() {
      return this.mode === "create"
        ? this.user.name
        : this.application.user.name;
    },
  },
  methods: {
    submit() {
      const url =
        this.mode == "create"
          ? route("user.application.form.store")
          : route("user.application.form.update", this.application.uuid);
      const method = this.mode == "create" ? {} : { _method: "PUT" };
      const type = this.type;
      this.form
        .transform((data) => ({
          ...method,
          ...data,
          sponsor_id: data.sponsor_id?.id,
          destination_id: data.destination_id?.id,
          type: type
        }))
        .post(url, {
          onSuccess: () => {},
          onError: () => {},
        });
      /*       this.sending = true;
      if (this.mode === "create") {
        this.$inertia.post(this.route("admin.users.store"), this.form, {
          onFinish: () => {
            this.sending = false;
          },
        });
      } else {
        this.$inertia.patch(
          this.route("admin.users.update", this.user.id),
          this.form,
          {
            onFinish: () => {
              this.sending = false;
              this.form.password = null;
              this.form.password_confirmation = null;
            },
          }
        );
      } */
    },
    destroy() {
      if (confirm("Are you sure you want to delete this user?")) {
        this.$inertia.delete(this.route("admin.users.destroy", this.user.id));
      }
    },
    goBack() {
      window.history.back();
    },
    addNewSponsor() {
      this.showSponsorModal = true;
    },
    addNewDestination() {
      this.showDestinationModal = true;
    },
    addNewLanguage() {
      this.showLanguageModal = true;
    },
    prihvacam() {
      this.showTermsModal = false
      this.form.terms = true
    },
    neprihvacam() {
      this.showTermsModal = false
      this.form.terms = false
    },
  },
};
</script>

<style>
</style>
