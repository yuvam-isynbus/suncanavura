<template>
  <div class="max-w-4xl mx-auto mt-10 px-4 sm:px-6 lg:px-8">
    <DropzoneButton
      label="Učitaj dokumente"
      @vdropzone-success="onVdropzoneSuccess"
      @vdropzone-removed-file="onVdropzoneRemovedFile"
      @vdropzone-sending="onVdropzoneSending"
      @vdropzone-complete="onVdropzoneComplete"
      @vdropzone-processing="onVdropzoneProcessing"
      @vdropzone-queue-complete="onVdropzoneQueueComplete"
      :uploading="uploading"
      :error="dzError"
      class="mb-6"
    />
    <section aria-labelledby="applicant-information-title">
      <div class="border-t border-gray-200 py-5">
        <dl class="grid grid-cols-1 gap-x-4 gap-y-8 sm:grid-cols-2">
          <div class="sm:col-span-2">
            <!-- <dt class="text-sm font-medium text-gray-500">Učitani dokumenti</dt> -->
            <dd class="mt-3 text-sm text-gray-900">
              <ul
                class="border border-gray-200 rounded-md divide-y divide-gray-200"
              >
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
                    <!-- Heroicon name: paper-clip -->
                    <svg
                      class="flex-shrink-0 h-5 w-5 text-gray-400"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M8 4a3 3 0 00-3 3v4a5 5 0 0010 0V7a1 1 0 112 0v4a7 7 0 11-14 0V7a5 5 0 0110 0v4a3 3 0 11-6 0V7a1 1 0 012 0v4a1 1 0 102 0V7a3 3 0 00-3-3z"
                        clip-rule="evenodd"
                      />
                    </svg>
                    <span class="ml-2 flex-1 w-0 truncate">
                      {{ fileName(document.file_name) }}
                    </span>
                  </div>
                  <div class="ml-4 flex-shrink-0 space-x-5">
                    <a
                      :href="route('documents.show', document.id)"
                      class="font-medium text-blue-600 hover:text-blue-500"
                    >
                      Preuzmi
                    </a>
                    <a
                      href="#"
                      @click.prevent="destroyDocument(document.id)"
                      class="font-medium text-red-600 hover:text-red-500"
                    >
                      Izbriši
                    </a>
                  </div>
                </li>
              </ul>
            </dd>
          </div>
        </dl>
      </div>
    </section>
  </div>
</template>

<script>
import SuperAdminLayout from "@/Layout/SuperAdminLayout";
import NestedLayoutUserApplication from "@/Layout/NestedLayoutUserApplication";
import DropzoneButton from "@/Shared/DropzoneButton";
export default {
  // layout: (h, page) => h( SiteLayout, { title: 'Hello' }, () => [page]),
  components: {
    DropzoneButton,
  },
  layout: (h, page) => {
    return h(
      SuperAdminLayout,
      {
        resource: "Prijava",
        indexRoute: "user.application.documents",
        type: page.props.authuser.role,
      },
      () => [
        h(NestedLayoutUserApplication, { url: "application/visa" }, () => [
          page,
        ]),
      ]
    );
  },
  props: {
    application: Object,
    documents: Array,
  },
  data: () => ({
    form: {
      documents: [],
      collection: 'visa'
    },
    uploading: false,
    dzError: ''
  }),
  methods: {
    fileName: function (value) {
      if (!value) return "";
      let index = value.indexOf("_");
      return value.slice(index + 1);
    },
    onVdropzoneSuccess(file, response) {
      this.form.documents.push(response.name);
    },
    onVdropzoneRemovedFile(file) {},
    onVdropzoneSending(file, xhr, formData) {
      // formData.append("category", 'visa');
    },
    onVdropzoneComplete(file) {},
    onVdropzoneProcessing(files) {
      this.uploading = true;
    },
    onVdropzoneQueueComplete() {
      this.submit();
    },
    submit() {
      this.uploading = true;
      if (this.form.documents.length == 0) {
        this.uploading = false;
        return
      }
      this.$inertia
        .post(this.route("documents.store", this.application.uuid), this.form)
        .then(() => {
          this.uploading = false;
          this.form.documents = [];
        });
    },
    destroyDocument(documentId) {
      if (!confirm("Da li ste sigurni?")) {
        return;
      }
      this.$inertia.delete(this.route("documents.destroy", documentId));
    },
  },
};
</script>
