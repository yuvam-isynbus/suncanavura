<template>
  <dialog-modal :show="showModal" @close="$emit('close')">
    <template #icon>
      <div
        class="mx-auto flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-rose-100 sm:mx-0 sm:h-10 sm:w-10"
      >
        <!-- Heroicon name: exclamation -->
        <svg
          class="h-6 w-6 text-rose-600"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z"
          />
        </svg>
      </div>
    </template>
    <template #content>
      <h3
        class="text-lg leading-6 font-medium text-gray-900"
        id="modal-headline"
      >
        Unesite poruku
      </h3>
      <form action="">
          <div class="mt-4">
<!--             <base-input
              v-model="form.title"
              :error="form.errors.title"
              type="text"
              label="Naslov"
              autocomplete="off"
            /> -->
            <label
                for="title"
                class="mt-3 block text-sm font-medium text-gray-700"
            >
                Naslov
            </label>
            <textarea
              id="title"
              rows="1"
              style="resize:none;"
              v-model="form.title"
              class="mt-1 block w-full shadow-sm focus:ring-light-blue-500 focus:border-light-blue-500 sm:text-sm border-gray-300 rounded-md"
              :class="{ 'border-red-400': form.errors.title }"
            />
            <div v-if="form.errors" class="mt-2 text-sm text-red-600">
              {{ form.errors.title }}
            </div>
            <label
                for="message"
                class="mt-3 block text-sm font-medium text-gray-700"
            >
                Poruka
            </label>
            <textarea
              id="message"
              v-model="form.message"
              class="mt-1 block w-full shadow-sm focus:ring-light-blue-500 focus:border-light-blue-500 sm:text-sm border-gray-300 rounded-md"
              :class="{ 'border-red-400': form.errors.message }"
            />
            <div v-if="form.errors" class="mt-2 text-sm text-red-600">
              {{ form.errors.message }}
            </div>
          </div>
      </form>
      <div>
          <div class="flex">
              <DropzoneButton
                  label="Attachment"
                  @vdropzone-success="onVdropzoneSuccess"
                  @vdropzone-removed-file="onVdropzoneRemovedFile"
                  @vdropzone-complete="onVdropzoneComplete"
                  @vdropzone-processing="onVdropzoneProcessing"
                  @vdropzone-queue-complete="onVdropzoneQueueComplete"
                  :uploading="uploading"
                />
         </div>
            <p class="mt-1 text-sm " v-for="attachment in attachments" :key="attachment.id">
                <span>{{ attachment.file_name }}</span>
                <span @click="removeAttachment(attachment.id)" class="ml-4 text-red-500 text-lg cursor-pointer">x</span>
            </p>
        </div>
    </template>
    <template #footer>
      <button
        type="button"
        @click.native="submitMessage"
        :class="{ 'opacity-25': form.processing }"
        :disabled="form.processing"
        class="inline-flex justify-center w-full rounded-md border border-transparent shadow-sm px-4 py-2 bg-red-600 text-base font-medium text-white hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 sm:w-auto sm:text-sm"
      >
        Pošalji
      </button>
      <button
        @click.native="cancel"
        type="button"
        class="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 px-4 py-2 bg-white text-base font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
      >
        Odustani
      </button>
        <span
          v-if="form.processing"
          class="rounded-md shadow-sm inline-flex items-center ml-3"
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
    </template>
  </dialog-modal>
</template>

<script>
import axios from "axios";
import DialogModal from "@/Shared/DialogModal";
import BaseInput from "@/Form/BaseInput";
import DropzoneButton from "@/Shared/DropzoneButton";
export default {
  emits: ["close"],
  components: {
    DialogModal,
    BaseInput,
    DropzoneButton
  },
  props: {
    showModal: Boolean,
    filterForm: Object
  },
  mounted(){
    // console.log(this.$refs.first.$el)
  },
/*   watch: {
    note(val) {
      this.form.body = val.body;
      this.noteId = val.id;
    },
  }, */
  data() {
    return {
      form: this.$inertia.form({
        title: "",
        message: "",
        attachment_id: null,
      }),
    attachmentsForm: {
        attachments: [],
    },
    uploading: false,
    attachments: [],
    };
  },
  methods: {
    submitMessage() {
      const url = route('admin.send-message-to-many')
      this.form
      .transform((data) => ({
          ...this.filterForm,
          ...data,
        }))
        .post(url, {
          preserveScroll: true,
          onSuccess: () => this.closeModal(),
          onError: () => {},
        });
    },
    closeModal() {
      this.$emit("close");
      this.form.reset();
    },
    fileName: function (value) {
      if (!value) return "";
      let index = value.indexOf("_");
      return value.slice(index + 1);
    },
    onVdropzoneSuccess(file, response) {
      this.attachmentsForm.attachments.push(response.name);
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
      axios
        .post(this.route("attachments.store"), this.attachmentsForm, {
          headers: {
            "X-CSRF-TOKEN": this.$page.props.csrf.token,
          },
        })
        .then((res) => {
            this.uploading = false;
            this.attachments = [...res.data.attachments]
            this.form.attachment_id = res.data.attachment_id
            this.attachmentsForm.attachments = [...[]];
        });
    },
    removeAttachment(mediaId) {
        axios
        .delete(this.route("attachments.destroy", mediaId), {
            '_method': 'DELETE'
        }, {
          headers: {
            "X-CSRF-TOKEN": this.$page.props.csrf.token,
          },
        })
        .then((res) => {
            var removeIndex = this.attachments.map(function(item) { return item.id; }).indexOf(res.data.media_id);
            this.attachments.splice(removeIndex, 1);
        });
    },
    cancel() {
        if (this.form.attachment_id) {
            axios
            .delete(this.route("attachment.remove",this.form.attachment_id), {
                '_method': 'DELETE'
            }, {
            headers: {
                "X-CSRF-TOKEN": this.$page.props.csrf.token,
            },
            })
            .then((res) => {
                this.form.attachment_id = null
            });
        }
        $emit('close')
        form.errors = {}
    }
  },
};
</script>
