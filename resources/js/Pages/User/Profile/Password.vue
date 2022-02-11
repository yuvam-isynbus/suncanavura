<template>
  <div class="mt-6 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
    <form class="" @submit.prevent="updatePassword" ref="form">
      <div class="p-8 space-y-8">
        <div>
          <base-input
            v-model="form.current_password"
            :error="form.errors.current_password"
            type="password"
            label="Current Password"
            class="col-span-6"
          />
        </div>
        <div>
          <base-input
            v-model="form.password"
            :error="form.errors.password"
            type="password"
            label="New Password"
            class="col-span-6"
          />
        </div>
        <div>
          <base-input
            v-model="form.password_confirmation"
            type="password"
            label="Confirm Password"
            class="col-span-6"
          />
        </div>
      </div>

      <div
        class="px-8 py-4 flex items-center"
      >
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
            <base-button
              type="submit"
            >
              Spremi
            </base-button>
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
import BaseButton from '@/Form/BaseButton.vue';
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
      () => [h(NestedLayout, { url: "profile/password", menu: 'profile' }, () => [page])]
    );
  },
  props: {
    user: Object,
  },
  data() {
    return {
      form: this.$inertia.form({
        current_password: "",
        password: "",
        password_confirmation: "",
      }),
    };
  },
  methods: {
    updatePassword() {
      this.form.put(route("user-password.update"), {
        errorBag: "updatePassword",
        preserveScroll: true,
        onSuccess: () => this.form.reset(),
        onError: () => {
          if (this.form.errors.password) {
            this.form.reset("password", "password_confirmation");
            // this.$refs.password.focus();
          }
          if (this.form.errors.current_password) {
            this.form.reset("current_password");
            // this.$refs.current_password.focus();
          }
        },
      });
    },
  },
};
</script>
