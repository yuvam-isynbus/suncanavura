<template>
  <div class="flex-row items-end">
    <!-- <div v-if="uploading" class="mb-2">Uploading...</div> -->
    <div class="flex items-center justify-end">
      <button
        v-if="label"
        :disabled="uploading"
        ref="dropzoneButton"
        class="py-1 px-3 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-rose-600 hover:bg-rose-700
        focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-rose-500"
      >
        {{ label }}
      </button>
      <div v-else class="relative">
          <new-icon :name="icon"></new-icon>
          <button :disabled="uploading" class="absolute top-0 py-1 opacity-0" ref="dropzoneButton">ADD</button>
      </div>
      <span
        v-if="uploading"
        class="ml-3 rounded-md shadow-sm inline-flex items-center"
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
    </div>
    <div ref="previewsContainer" class="hidden"></div>
    <transition
      enter-active-class="ease-out duration-300"
      enter-class="opacity-0"
      enter-to-class="opacity-100"
      leave-active-class="ease-in duration-200"
      leave-class="opacity-100"
      leave-to-class="opacity-0"
    >
      <p v-if="dzError" class="mt-2 text-red-500 transition-opacity">
        {{ dzError }}
      </p>
    </transition>
  </div>
</template>

<script>
import Dropzone from "dropzone";
import NewIcon from '@/Shared/NewIcon'
export default {
  components: {
      NewIcon
  },
  emits: [
    "vdropzone-files-added",
    "vdropzone-success",
    "vdropzone-removed-file",
    "vdropzone-sending",
    "vdropzone-complete",
    "vdropzone-queue-complete",
    "vdropzone-processing",
  ],
  props: {
    files: Array,
    label: String,
    icon: String,
    uploading: Boolean,
    // error: String
  },
  data: function () {
    return {
      dropzone: null,
      dzError: "",
    };
  },
  mounted() {
    let vm = this;

    this.dropzone = new Dropzone(this.$refs.dropzoneButton, {
      url: route("dropzone.storeMedia"),
      maxFilesize: 4, // MB
      dictFileTooBig: 'Datoteka je prevelika. Maksimalna dozvoljena veličina je 4MB',
      acceptedFiles:
        "image/*,application/pdf,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document,application/vnd.ms-excel,application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
      addRemoveLinks: true,
      resizeWidth: 1000,
      previewsContainer: this.$refs.previewsContainer,
      headers: {
        //"X-CSRF-TOKEN": this.$page.csrf.token
        "X-XSRF-TOKEN": vm.getCookie("XSRF-TOKEN"),
      },
    });

    this.dropzone.on("addedfiles", function (files) {
      vm.$emit("vdropzone-files-added", files);
    });

    this.dropzone.on("success", function (file, response) {
      vm.$emit("vdropzone-success", file, response);
      // this.removeFile(file);
    });

    this.dropzone.on("error", function (file, error) {
      vm.dzError = typeof error === "string" ? error : error.error;
      setTimeout(() => (vm.dzError = ""), 3000);
      // vm.$emit("vdropzone-error", file, msg);
    });

    this.dropzone.on("removedfile", function (file) {
      vm.$emit("vdropzone-removed-file", file);
    });

    this.dropzone.on("sending", function (file, xhr, formData) {
      vm.$emit("vdropzone-sending", file, xhr, formData);
    });

    this.dropzone.on("complete", function (file) {
      vm.$emit("vdropzone-complete", file);
    });

    this.dropzone.on("queuecomplete", function () {
      vm.$emit("vdropzone-queue-complete");
    });

    this.dropzone.on("processing", function (file) {
      vm.$emit("vdropzone-processing", file);
    });
  },
  methods: {
    getCookie(cname) {
      var name = cname + "=";
      var decodedCookie = decodeURIComponent(document.cookie);
      var ca = decodedCookie.split(";");
      for (var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == " ") {
          c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
          return c.substring(name.length, c.length);
        }
      }
      return "";
    },
  },
};
</script>
