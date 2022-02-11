// Znači kod poslova imamo naziv, sliku, opis posla, satnicu
// I treba rubrika dali imaju osiguran smještaj da/ne I koja je cijena smještaja

<template>
  <form-section @submitted="submit" v-bind="$attrs">
    <template #form>
    <div class="col-span-2">
        <label class="mb-3 block text-sm font-medium text-gray-700"
          >Objaviti</label
        >
        <Switch
          v-model="form.publish"
          :class="form.publish ? 'bg-blue-700' : 'bg-gray-400'"
          class="relative inline-flex items-center h-6 rounded-full w-11 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75"
        >
          <span class="sr-only">Enable notifications</span>
          <span
            :class="form.publish ? 'translate-x-6' : 'translate-x-1'"
            class="inline-block w-4 h-4 transform bg-white rounded-full"
          />
        </Switch>
      </div>
      <div class="col-span-2">
        <base-input
          v-model="form.name"
          :error="form.errors.name"
          type="text"
          label="Naziv"
        />
      </div>
      <!--       <div>
        <base-input
          v-model="form.smjestaj_price"
          :error="form.errors.smjestaj_price"
          type="text"
          label="Price"
          @blur="onBlur"
        />
      </div> -->
      <!--       <div>
        <list-select
          v-model="form.unit"
          label="Dimenzija"
          :items="units"
        ></list-select>
      </div> -->

      <div class="col-span-2 pb-24 lg:pb-16">
          <label class="block text-sm font-medium text-gray-700 mb-1"
          >Opis:</label
        >
        <QuillEditor v-model:content="form.description" contentType="html"  :options="options" @ready="onQuillReady" ref="myEditor" />
      </div>
      <div class="col-span-2">
        <label class="block text-sm font-medium text-gray-700 mb-1"
          >Fotografija:</label
        >
        <dropzone
          name="photos"
          :files="photoFiles"
          @vdropzone-success="onVdropzoneSuccess"
          @vdropzone-removed-file="onVdropzoneRemovedFile"
          @vdropzone-complete="onVdropzoneComplete"
          @vdropzone-processing="onVdropzoneProcessing"
        ></dropzone>
      </div>
      <div class="col-span-2">
        <mask-input
          v-model="form.satnica"
          :error="form.errors.satnica"
          :mask="{
            mask: [
              '#,##',
              '##,##',
              '###,##',
              '#.###,##',
              '####,##',
              '##.###,##',
              '###.###,##',
            ],
          }"
          placeholder="0,00"
          type="text"
          label="Satnica (USD)"
          autocomplete="off"
        />
      </div>
      <div class="col-span-2">
        <label class="mb-3 block text-sm font-medium text-gray-700"
          >Smještaj</label
        >
        <Switch
          v-model="form.smjestaj"
          :class="form.smjestaj ? 'bg-blue-700' : 'bg-gray-400'"
          class="relative inline-flex items-center h-6 rounded-full w-11 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75"
        >
          <span class="sr-only">Enable notifications</span>
          <span
            :class="form.smjestaj ? 'translate-x-6' : 'translate-x-1'"
            class="inline-block w-4 h-4 transform bg-white rounded-full"
          />
        </Switch>
      </div>
      <div class="col-span-2" v-if="form.smjestaj">
        <mask-input
          v-model="form.smjestaj_price"
          :error="form.errors.smjestaj_price"
          :mask="{
            mask: [
              '#,##',
              '##,##',
              '###,##',
              '#.###,##',
              '####,##',
              '##.###,##',
              '###.###,##',
            ],
          }"
          placeholder="0,00"
          type="text"
          label="Cijena smještaja (USD)"
          autocomplete="off"
        />

      </div>
      <div class="col-span-2">
        <base-textarea
          v-model="form.dodatne_informacije"
          rows="4"
          :error="form.errors.dodatne_informacije"
          type="text"
          label="Dodatne informacije"
        />
      </div>
    </template>
    <template #actions>
      <div class="flex space-x-3 mt-2 md:mt-0 md:ml-auto">
        <span
          v-if="form.processing"
          class="rounded-md shadow-sm inline-flex items-center"
        >
          <svg
            class="animate-spin h-7 w-7 text-blue-600"
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
            class="
              inline-flex
              items-center
              px-4
              py-2
              border border-gray-300
              text-sm
              leading-5
              font-medium
              rounded-md
              shadow-sm
              text-gray-700
              bg-white
              hover:bg-gray-50
              focus:outline-none
              focus:ring-2 focus:ring-offset-2 focus:ring-gray-500
            "
          >
            Odustani
          </button>
        </span>
        <span class="shadow-sm rounded-md">
          <button
            type="submit"
            :disabled="form.processing"
            :class="{ 'opacity-25 cursor-wait': form.processing }"
            class="
              inline-flex
              justify-center
              w-full
              rounded-md
              border border-transparent
              shadow-sm
              px-4
              py-2
              bg-blue-600
              text-base
              font-medium
              text-white
              hover:bg-blue-700
              focus:outline-none
              focus:ring-2 focus:ring-offset-2 focus:ring-blue-500
              sm:w-auto
              sm:text-sm
            "
          >
            {{ submitLabel }}
          </button>
        </span>
      </div>
      <button
        v-if="worktravel && !worktravel.deleted_at && mode === 'edit'"
        class="
          text-red-600
          hover:underline
          focus:outline-none
          font-semibold
          mt-5
          md:mt-0
          ml-1
        "
        tabindex="-1"
        type="button"
        @click="confirmDocumentDeletion"
      >
        Izbriši W&T
      </button>
    </template>
  </form-section>
  <confirm-delete
    actionLabel="Izbriši"
    message="Brisanje dovodi do trajnog gubitka podataka"
    :showModal="showConfirmModal"
    @close="modalClose"
    @confirm="destroy"
  ></confirm-delete>
</template>

<script>
import FormSection from "@/Form/FormSection";
import BaseInput from "@/Form/BaseInput";
import MaskInput from "@/Form/MaskInput";
import BaseTextarea from "@/Form/BaseTextarea";
import ListSelect from "@/Form/ListSelect";
import LoadingButton from "@/Shared/LoadingButton";
import ConfirmDelete from "@/Pages/Admin/Applications/ConfirmDelete";
import { Switch, SwitchDescription } from "@headlessui/vue";
import Dropzone from "@/Shared/Dropzone";
import { QuillEditor, Quill } from '@vueup/vue-quill'
import '@vueup/vue-quill/dist/vue-quill.snow.css';
const units = [
  { id: "povrsina", name: "Površina" },
  { id: "opseg", name: "Opseg" },
];
export default {
  components: {
    FormSection,
    BaseInput,
    MaskInput,
    BaseTextarea,
    ListSelect,
    LoadingButton,
    ConfirmDelete,
    Switch,
    SwitchDescription,
    Dropzone,
    QuillEditor
  },
  props: {
    worktravel: Object,
    mode: String,
  },
  mounted() {
      // const editor = Quill.getEditor();
      // const quill = this.$refs.myEditor.getQuill();
      // quill.root.setAttribute('spellcheck', false)
  },
  data() {
    return {
      sending: false,
      form: this.$inertia.form({
        name: this.worktravel?.name,
        description: this.worktravel ? this.worktravel.description : "",
        photo: this.worktravel ? this.worktravel.photo : [],
        satnica: this.worktravel?.satnica,
        smjestaj: this.worktravel?.smjestaj,
        smjestaj_price: this.worktravel?.smjestaj_price,
        publish: this.worktravel?.publish,
        dodatne_informacije: this.worktravel ? this.worktravel.dodatne_informacije : "",
      }),
      uploadedDocumentMap: {},
      showConfirmModal: false,
      deleteId: null,
       options: {
        // debug: 'info',
        root: {
            spellcheck: false,
        },
        theme: 'snow'
      }
    };
  },
  watch: {
    form: {
      handler: function (val) {
        if (!val.smjestaj) {
          this.form.smjestaj_price = null;
        }
      },
      deep: true,
    },
  },
  computed: {
    photoFiles() {
      return this.mode === "edit" ? this.worktravel.files : [];
    },
    submitLabel() {
      return this.mode === "create" ? "Izradi" : "izmjeni";
    },
  },
  methods: {
    onQuillReady() {
        const quill = this.$refs.myEditor.getQuill();
        quill.root.setAttribute('spellcheck', false)
    },
    formatAmount(amount) {
      amount = amount.replace(/\./g, "");
      amount = amount.replace(/\,/g, "");
      return amount;
    },
    submit() {
      const url =
        this.mode === "edit"
          ? this.route("admin.worktravels.update", this.worktravel.id)
          : this.route("admin.worktravels.store");
      const method = this.mode === "edit" ? { _method: "PUT" } : {};
      this.form
        .transform((data) => ({
          ...method,
          ...data,
          smjestaj_price: data.smjestaj_price
            ? this.formatAmount(data.smjestaj_price)
            : null,
          satnica: data.satnica ? this.formatAmount(data.satnica) : null,
        }))
        .post(url, {
          onSuccess: (page) => {},
        });
    },
    confirmDocumentDeletion() {
      this.showConfirmModal = true;
    },
    modalClose() {
      this.showConfirmModal = false;
    },
    destroy() {
      this.$inertia.delete(
        this.route("admin.worktravels.destroy", this.worktravel.id)
      );
    },
    goBack() {
      window.history.back();
    },
    onVdropzoneSuccess(file, response, dropzoneName) {
      if (dropzoneName === "photos") {
        this.form.photo.push(response.name);
        this.uploadedDocumentMap[file.name] = response.name;
      }
      if (dropzoneName === "cover") {
        this.form.cover_photo.push(response.name);
      }
    },
    onCoverVdropzoneSuccess(file, response) {
      this.form.cover_photo = response.name;
    },
    onVdropzoneRemovedFile(file, dropzoneName) {
      if (dropzoneName === "photos") {
        let name;
        if (typeof file.file_name !== "undefined") {
          name = file.file_name;
        } else {
          name = this.uploadedDocumentMap[file.name];
        }
        this.form.photo = this.form.photo.filter((item) => item !== name);
      }
      if (dropzoneName === "cover") {
        this.form.cover_photo = [];
      }
    },
    onVdropzoneComplete(file) {
      this.sending = false;
    },
    onVdropzoneProcessing(files) {
      this.sending = true;
    },
  },
};
</script>

<style>
.ql-container {
    font-size: 14px;
}
</style>
