<template>
  <ul class="divide-y divide-gray-200 border-b border-gray-200">
    <li class="px-4 py-4 sm:px-6">
      <div class="sm:col-span-2">
        <div
          class="sm:flex sm:justify-between sm:items-center mb-4 font-medium text-gray-500"
        >
          <span>{{ label }}</span>
          <DropzoneButton
            label="Učitaj"
            @vdropzone-success="onVdropzoneSuccess"
            @vdropzone-removed-file="onVdropzoneRemovedFile"
            @vdropzone-complete="onVdropzoneComplete"
            @vdropzone-processing="onVdropzoneProcessing"
            @vdropzone-queue-complete="onVdropzoneQueueComplete"
            :uploading="uploading"
          />
        </div>
        <div class="mt-1 text-sm text-gray-900">
          <ul
            class="border border-gray-200 rounded-md divide-y divide-gray-200"
          >
            <!--v-if-->
            <li
              v-if="documents.length == 0"
              class="pl-3 pr-4 py-3 flex items-center justify-between text-sm"
            >
              Nema učitanih dokumenata.
            </li>
            <li
              v-for="document in documents"
              :key="document.id"
              class="pl-3 pr-4 py-3 flex items-center justify-between text-sm"
            >
              <div class="w-0 flex-1 flex items-center">
                <svg
                  class="flex-shrink-0 h-5 w-5 text-gray-400"
                  x-description="Heroicon name: paper-clip"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path
                    fill-rule="evenodd"
                    d="M8 4a3 3 0 00-3 3v4a5 5 0 0010 0V7a1 1 0 112 0v4a7 7 0 11-14 0V7a5 5 0 0110 0v4a3 3 0 11-6 0V7a1 1 0 012 0v4a1 1 0 102 0V7a3 3 0 00-3-3z"
                    clip-rule="evenodd"
                  ></path></svg
                ><span class="ml-2 flex-1 w-0 truncate">{{
                  fileName(document.file_name)
                }}</span>
              </div>
              <div class="ml-4 flex-shrink-0 space-x-5">
                <a
                  :href="route('documents.download', document.id)"
                  class="font-medium text-blue-600 hover:text-blue-500"
                >
                  Preuzmi
                </a>
                <a
                  :href="route('documents.show', document.id)"
                  target="_blank"
                  class="font-medium text-yellow-600 hover:text-blue-500"
                >
                  Prikaži
                </a>
                <a
                  href="#"
                  @click.prevent="confirmDocumentDeletion(document.id)"
                  class="font-medium text-red-600 hover:text-red-500"
                >
                  Izbriši
                </a>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </li>
    <!-- More items... -->
  </ul>
  <confirm-delete
    actionLabel="Izbriši"
    message="Brisanje dovodi do trajnog gubitka poadataka"
    :showModal="showConfirmModal"
    @close="modalClose"
    @confirm="destroyDocument"
  ></confirm-delete>
</template>

<script>
import DropzoneButton from "@/Shared/DropzoneButton";
import ConfirmDelete from '@/Pages/Admin/Applications/ConfirmDelete.vue';
export default {
  components: {
    DropzoneButton,
    ConfirmDelete,
  },
  props: {
    label: String,
    collection: String,
    application: Object,
    documents: [Array, Object],
  },
  data() {
    return {
      form: {
        documents: [],
        collection: this.collection,
      },
      uploading: false,
      dzError: "",
      showConfirmModal: false,
      deleteId: null
    };
  },
  methods: {
    fileName: function (value) {
      if (!value) return "";
      let index = value.indexOf("_");
      return value.slice(index + 1);
    },
    confirmDocumentDeletion(documentId) {
      this.showConfirmModal = true
      this.deleteId = documentId
    },
    modalClose() {
      this.showConfirmModal = false
      this.deleteId = null
    },
    onVdropzoneSuccess(file, response) {
      this.form.documents.push(response.name);
    },
    onVdropzoneRemovedFile(file) {},
    onVdropzoneComplete(file) {},
    onVdropzoneProcessing(files) {
      this.uploading = true;
    },
    onVdropzoneQueueComplete() {
      this.submit();
    },
    submit() {
      this.uploading = true;
      this.$inertia
        .post(this.route("documents.store", this.application.uuid), this.form)
        .then(() => {
          this.uploading = false;
          this.form.documents = [];
        });
    },
    destroyDocument() {
      this.$inertia.delete(this.route("documents.destroy", this.deleteId), {
        onSuccess: (page) => { this.showConfirmModal = false }
      });
    },
  },
};
</script>

<style>
</style>
