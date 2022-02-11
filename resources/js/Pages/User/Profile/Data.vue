<template>
  <div class="mt-6 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
    <form class="" @submit.prevent="updateProfileInformation" ref="form">
      <div class="p-8 space-y-8">
        <div class="col-span-6 sm:col-span-4">
          <!-- Profile Photo File Input -->
          <input
            type="file"
            class="hidden"
            ref="photo"
            @change="updatePhotoPreview"
          />

          <label for="photo" class="block font-medium text-sm text-gray-700">
            Fotografija
          </label>

          <!-- Current Profile Photo -->
          <div class="mt-3" v-show="!photoPreview">
            <img
              :src="user.profile_photo_url"
              alt="Current Profile Photo"
              class="rounded-full h-20 w-20 object-cover"
            />
          </div>

          <!-- New Profile Photo Preview -->
          <div class="mt-2" v-show="photoPreview">
            <span
              class="block rounded-full w-20 h-20"
              :style="
                'background-size: cover; background-repeat: no-repeat; background-position: center center; background-image: url(\'' +
                photoPreview +
                '\');'
              "
            >
            </span>
          </div>

          <button
            type="button"
            @click.native.prevent="selectNewPhoto"
            class="mt-3 mr-2 inline-flex items-center px-4 py-2 bg-white border border-gray-300 rounded-md font-semibold text-xs text-gray-700 uppercase tracking-widest shadow-sm hover:text-gray-500 focus:outline-none focus:border-blue-300 focus:shadow-outline-blue active:text-gray-800 active:bg-gray-50 transition ease-in-out duration-150"
          >
            Izaberi novu fotografiju
          </button>

          <button
            type="button"
            class="mt-2 inline-flex items-center px-4 py-2 bg-white border border-gray-300 rounded-md font-semibold text-xs text-gray-700 uppercase tracking-widest shadow-sm hover:text-gray-500 focus:outline-none focus:border-blue-300 focus:shadow-outline-blue active:text-gray-800 active:bg-gray-50 transition ease-in-out duration-150"
            @click.native.prevent="deletePhoto"
            v-if="$page.props.authuser.profile_photo_path"
          >
            Ukloni fotografiju
          </button>

          <p v-if="form.errors.photo" class="mt-2 text-sm text-red-600">
            {{ form.errors.photo }}
          </p>
          <p v-if="myerror" class="mt-2 text-sm text-red-600">
            {{ myerror }}
          </p>
        </div>
        <div>
          <base-input
            v-model="form.name"
            :error="form.errors.name"
            type="text"
            label="Ime i prezime"
            class="col-span-6"
          />
        </div>
        <div>
          <base-input
            v-model="form.email"
            :error="form.errors.email"
            type="text"
            label="Email"
            class="col-span-6"
          />
        </div>
      </div>

      <div class="px-8 py-4 flex items-center">
        <div class="mt-6 flex space-x-3 md:mt-0 md:ml-auto">
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
            <base-button type="submit"> Spremi </base-button>
          </span>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
import SuperAdminLayout from "@/Layout/SuperAdminLayout";
import NestedLayout from "@/Layout/NestedLayout";
import BaseInput from "@/Form/BaseInput";
import BaseButton from "@/Form/BaseButton.vue";
export default {
  components: {
    BaseInput,
    BaseButton,
  },
  // layout: (h, page) => h( SiteLayout, { title: 'Hello' }, () => [page]),
  layout: (h, page) => {
    return h(
      SuperAdminLayout,
      {
        resource: "Profil",
        indexRoute: "user.profile.data",
        type: page.props.authuser.role,
      },
      () => [
        h(NestedLayout, { url: "profile/data", menu: "profile" }, () => [page]),
      ]
    );
  },
  props: {
    user: Object,
    timeline: Array
  },
  data() {
    return {
      form: this.$inertia.form({
        _method: "PUT",
        name: this.user.name,
        email: this.user.email,
        photo: null,
      }),
      photoPreview: null,
      myerror: null
    };
  },
  methods: {
    updateProfileInformation() {
      if (this.$refs.photo) {
        this.form.photo = this.$refs.photo.files[0];
      }
      this.form.post(route("user-profile-information.update"), {
        errorBag: "updateProfileInformation",
        preserveScroll: true,
      });
    },
    selectNewPhoto() {
      this.$refs.photo.click();
    },
    updatePhotoPreview() {
      this.myerror = null
      if (this.$refs.photo.files[0].size / 1024 / 1024 > 4 ) {
        this.myerror = "Datoteka je prevelika, izaberite datoteku manju od 4MB"
        return
      }
      const reader = new FileReader();
      reader.onload = (e) => {
        this.photoPreview = e.target.result;
      };
      reader.readAsDataURL(this.$refs.photo.files[0]);
    },
    deletePhoto() {
      this.$inertia
        .delete(route("user.destroy.profile.photo"), {
          preserveScroll: true,
          onSuccess: () => (this.photoPreview = null),
        });
    },
  },
};
</script>
