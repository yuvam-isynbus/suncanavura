<template>
  <div
    class="mt-8 max-w-3xl mx-auto grid grid-cols-1 gap-6 sm:px-6 lg:max-w-4xl"
  >
    <div class="">
      <!-- Comments-->
      <section aria-labelledby="notes-title">
        <div class="bg-white shadow sm:rounded-lg sm:overflow-hidden">
          <div class="divide-y divide-gray-200">
            <div class="px-4 py-5 sm:px-6 flex justify-between">
              <h2 id="notes-title" class="text-lg font-medium text-gray-900">
                Strani jezici
              </h2>
              <button
                @click="createNote"
                type="submit"
                class="inline-flex items-center justify-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-rose-600 hover:bg-rose-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
              >
                Dodaj novi strani jezik
              </button>
            </div>
            <div class="px-4 py-6 sm:px-6">
              <ul v-if="languages.length > 0" class="space-y-2">
                <li
                  class="py-3 border-b border-gray-200"
                  v-for="language in languages"
                  :key="language.id"
                >
                  <div class="flex justify-between mt-1 text-gray-900">
                    <p>
                      {{ language.name }}
                    </p>
                    <div class="space-x-2">
                      <button
                        @click="editLanguage(language)"
                        type="button"
                        class="text-blue-500 hover:text-blue-400 font-medium focus:outline-none"
                      >
                        Izmjeni
                      </button>
<!--                       <button
                        @click="confirmLanguageDeletion(language)"
                        type="button"
                        class="text-red-600 hover:text-red-500 font-medium focus:outline-none"
                      >
                        Izbriši
                      </button> -->
                    </div>
                  </div>
                </li>
              </ul>
              <p v-else>Nema unesenih stranih jezika</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  </div>
  <create-language
    :language="language"
    :showModal="showModal"
    @close="showModal = false"
  ></create-language>
  <confirm-delete
    actionLabel="Izbriši"
    message="Brisanje dovodi do trajnog gubitka poadataka"
    :showModal="showConfirmModal"
    @close="modalClose"
    @confirm="destroyLanguage"
  ></confirm-delete>
</template>

<script>
import SuperAdminLayout from "@/Layout/SuperAdminLayout";
import NestedLayoutAdminApplication from "@/Layout/NestedLayoutAdminApplication";
import CreateLanguage from "@/Pages/Admin/Applications/CreateLanguage";
import ConfirmDelete from "@/Pages/Admin/Applications/ConfirmDelete.vue";
export default {
  inheritAttrs: false,
  layout: (h, page) =>
    h(
      SuperAdminLayout,
      {
        resource: "Strani jezici",
        indexRoute: "admin.languages.index",
        // action: page.props.application.name,
      },
      () => [page]
    ),
  components: {
    CreateLanguage,
    ConfirmDelete,
  },
  props: {
    application: Object,
    languages: Array,
  },
  mounted() {
    window.Echo.private("applications").listen("TimelineEvent", (e) => {
      this.$inertia.reload();
    });
  },
  data() {
    return {
      showModal: false,
      language: {},
      showConfirmModal: false,
      deleteLanguage: null,
    };
  },
  methods: {
    createNote() {
      this.showModal = true;
      // this.modalValue = ''
    },
    editLanguage(language) {
      this.showModal = true;
      this.language = { ...language };
    },
    confirmLanguageDeletion(language) {
      this.showConfirmModal = true;
      this.deleteLanguage = language;
    },
    modalClose() {
      this.showConfirmModal = false;
      this.deleteLanguage = null;
    },
    destroyLanguage() {
      this.$inertia.delete(
        this.route("admin.languages.destroy", this.deleteLanguage.id),
        {
          onSuccess: (page) => (this.showConfirmModal = false),
        }
      );
    },
  },
};
</script>
