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
                Bilješke
              </h2>
              <button
                @click="createNote"
                type="submit"
                class="inline-flex items-center justify-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-rose-600 hover:bg-rose-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
              >
                Dodaj novu bilješku
              </button>
            </div>
            <div v-if="notes.length > 0" class="px-4 py-6 sm:px-6">
              <ul class="space-y-8">
                <li
                  class="px-4 py-3 bg-gray-50 rounded"
                  v-for="note in notes"
                  :key="note.id"
                >
                  <div class="mt-1 text-gray-900">
                    <p>
                      {{ note.body }}
                    </p>
                  </div>
                  <div class="flex justify-between mt-2 text-sm space-x-2">
                    <span class="text-gray-400 font-medium">{{
                      note.created_at
                    }}</span>
                    <div class="space-x-2">
                      <button
                        @click="editNote(note)"
                        type="button"
                        class="text-blue-500 hover:text-blue-400 font-medium focus:outline-none"
                      >
                        Izmjeni
                      </button>
                      <button
                        @click="confirmNoteDeletion(note)"
                        type="button"
                        class="text-red-600 hover:text-red-500 font-medium focus:outline-none"
                      >
                        Izbriši
                      </button>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
            <div v-else class="px-4 py-6 sm:px-6">
              <p class="">Nema bilješki</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  </div>
  <create-note
    :uuid="application.uuid"
    :note="note"
    :showModal="showModal"
    @close="showModal = false"
  ></create-note>
  <confirm-delete
    actionLabel="Izbriši"
    message="Brisanje dovodi do trajnog gubitka poadataka"
    :showModal="showConfirmModal"
    @close="modalClose"
    @confirm="destroyNote"
  ></confirm-delete>
</template>

<script>
import SuperAdminLayout from "@/Layout/SuperAdminLayout";
import NestedLayoutAdminApplication from "@/Layout/NestedLayoutAdminApplication";
import CreateNote from "@/Pages/Admin/Applications/CreateNote";
import ConfirmDelete from "@/Pages/Admin/Applications/ConfirmDelete.vue";
export default {
  inheritAttrs: false,
  layout: (h, page) =>
    h(
      SuperAdminLayout,
      {
        resource: "Prijava",
        indexRoute: "admin.applications.index",
        // action: page.props.application.name,
      },
      () => [
        h(
          NestedLayoutAdminApplication,
          {
            url: "admin/applications/notes",
            uuid: page.props.application.uuid,
            type: page.props.application.type == 'Work & travel' ? 'worktravel' : 'aupair'
          },
          () => [page]
        ),
      ]
    ),
  components: {
    CreateNote,
    ConfirmDelete,
  },
  props: {
    application: Object,
    notes: Array,
  },
  mounted() {
    window.Echo.private("applications").listen("TimelineEvent", (e) => {
      this.$inertia.reload();
    });
  },
  data() {
    return {
      showModal: false,
      note: {},
      showConfirmModal: false,
      deleteNote: null,
    };
  },
  methods: {
    createNote() {
      this.showModal = true;
      // this.modalValue = ''
    },
    editNote(note) {
      this.showModal = true;
      this.note = { ...note };
    },
    confirmNoteDeletion(note) {
      this.showConfirmModal = true;
      this.deleteNote = note;
    },
    modalClose() {
      this.showConfirmModal = false;
      this.deleteNote = null;
    },
    destroyNote() {
      this.$inertia.delete(
        this.route("admin.applications.notes.destroy", [
          this.application.uuid,
          this.deleteNote.id,
        ]), {
          onSuccess: (page) => this.showConfirmModal = false
        }
      );
    },
  },
};
</script>
