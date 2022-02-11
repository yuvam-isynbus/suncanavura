<template>
  <div class="mt-6 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="p-8 grid grid-cols-1 gap-y-6 gap-x-4">
        <!-- Profile Photo -->
        <div class="col-span-6 sm:col-span-4">
          <!-- Profile Photo File Input -->
          <input
            type="file"
            class="hidden"
            ref="photo"
            @change="updatePhotoPreview"
          />

          <label for="photo" class="block font-medium text-sm text-gray-700">
            Photo
          </label>

          <!-- Current Profile Photo -->
          <div class="mt-3" v-show="!photoPreview">
            <img
              :src="$page.props.authuser.profile_photo_url"
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
            Select A New Photo
          </button>

          <button
            type="button"
            class="mt-2 inline-flex items-center px-4 py-2 bg-white border border-gray-300 rounded-md font-semibold text-xs text-gray-700 uppercase tracking-widest shadow-sm hover:text-gray-500 focus:outline-none focus:border-blue-300 focus:shadow-outline-blue active:text-gray-800 active:bg-gray-50 transition ease-in-out duration-150"
            @click.native.prevent="deletePhoto"
            v-if="$page.props.authuser.profile_photo_path"
          >
            Remove Photo
          </button>

          <p v-if="errors.photo" class="mt-2 text-sm text-red-600">
            {{ errors.photo }}
          </p>
        </div>
      </div>
  </div>
</template>

<script>
import SuperAdminLayout from "@/Layout/SuperAdminLayout";
import NestedLayout from "@/Layout/NestedLayout";
export default {
  // layout: (h, page) => h( SiteLayout, { title: 'Hello' }, () => [page]),
  layout: (h, page) => {
    return h(
      SuperAdminLayout,
      {
        resource: "Profil",
        indexRoute: "user.profile.data",
        type: page.props.authuser.role
      },
      () => [h(NestedLayout, { url: "profile/photo", menu: 'profile' }, () => [page])]
    );
  },
  props: {
    user: Object,
    errors: Object,
  },
  data() {
    return {
      sending: false,
      form: this.$inertia.form({
        _method: "PUT",
        photo: null,
      }),
      photoPreview: null,
    };
  },
  methods: {
    selectNewPhoto() {
      this.$refs.photo.click();
    },
    updatePhotoPreview() {
      const reader = new FileReader();
      reader.onload = (e) => {
        this.photoPreview = e.target.result;
        this.form.photo = this.$refs.photo.files[0];
        this.form.post(route("user.update.profile.photo"), {
          // errorBag: "updateProfileInformation",
          preserveScroll: true,
        });
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
