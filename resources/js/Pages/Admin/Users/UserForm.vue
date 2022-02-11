<template>
  <form-section @submitted="submit" v-bind="$attrs">
    <template #form>
      <div>
        <base-input
          v-model="form.name"
          :error="form.errors.name"
          type="text"
          label="Ime i prezime"
        />
      </div>
      <div>
        <base-input
          v-model="form.email"
          :error="form.errors.email"
          type="email"
          label="Email"
        />
      </div>
      <div>
        <base-input
          v-model="form.password"
          :error="form.errors.password"
          type="password"
          label="Lozinka"
          :toggle="true"
        />
      </div>
      <div>
        <base-input
          v-model="form.password_confirmation"
          type="password"
          label="Potvrdi lozinku"
          :toggle="true"
        />
      </div>
      <div class="sm:col-span-2">
        <button
          type="button"
          @click.native="randomPassword"
          class="inline-flex items-center px-3 py-1 font-medium border-transparent text-sm leading-5 border-2 border-rose-500 rounded-md text-rose-700 bg-white hover:bg-rose-50 focus:outline-none focus:shadow-outline-rose focus:border-rose-700 active:bg-rose-700 transition duration-150 ease-in-out"
        >
          Generiraj slučajnu lozinku
        </button>
      </div>
<!--       <div v-if="role == 'admin'" class="flex items-center sm:col-span-2">
        <base-checkbox
          v-model="form.is_admin"
          type="password"
          label="Korisnik je administrator"
        />
      </div> -->
      <div class="flex items-center sm:col-span-2">
        <base-checkbox
          v-model="form.email_password"
          type="password"
          label="Pošalji mail s lozinkom"
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
          <button
            type="button"
            @click="goBack()"
            class="inline-flex items-center px-4 py-2 border border-gray-300
            text-sm leading-5 font-medium rounded-md shadow-sm text-gray-700 bg-white hover:bg-gray-50
            focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
          >
            Odustani
          </button>
        </span>
        <span class="shadow-sm rounded-md">
          <button
            type="submit"
            :disabled="form.processing"
            :class="{ 'opacity-25 cursor-wait': form.processing }"
            class="inline-flex justify-center w-full rounded-md border border-transparent
              shadow-sm px-4 py-2 bg-rose-600 text-base font-medium text-white hover:bg-rose-700
              focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-rose-500 sm:w-auto sm:text-sm"
          >
            {{ submitLabel }}
          </button>
        </span>
      </div>
      <button
        v-if="user && !user.deleted_at && mode === 'edit'"
        class="text-red-600 hover:underline focus:outline-none font-semibold mt-5 md:mt-0 ml-1"
        tabindex="-1"
        type="button"
        @click="confirmDocumentDeletion"
      >
        Izbriši korisnika
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
import BaseCheckbox from "@/Form/BaseCheckbox";
import LoadingButton from "@/Shared/LoadingButton";
import ConfirmDelete from '@/Pages/Admin/Applications/ConfirmDelete.vue';
export default {
  components: {
    FormSection,
    BaseInput,
    BaseCheckbox,
    LoadingButton,
    ConfirmDelete
  },
  props: {
    // errors: Object,
    user: Object,
    mode: String,
    role: String,
  },
  data() {
    return {
      form: this.$inertia.form({
        name: this.user?.name,
        email: this.user?.email,
        password: null,
        password_confirmation: null,
        is_admin: this.user ? this.user.is_admin : this.role == "admin",
        email_password: false,
        entered_by_admin: true,
      }),
      showConfirmModal: false,
      deleteId: null
    };
  },
  computed: {
    submitLabel() {
      return this.mode === "create" ? "Izradi" : "izmjeni";
    },
  },
  /*         const url = this.noteId
        ? route("admin.applications.notes.update", [this.uuid, this.noteId])
        : route("admin.applications.notes.store", this.uuid);
      const method = this.noteId ? { _method: "PUT" } : {};
      this.form
        .transform((data) => ({
          ...method,
          ...data,
        })) */
  methods: {
    submit() {
      // console.log({ ...this.form});
      const url = this.mode === "edit"
        ? this.route("admin.users.update", this.user.id)
        : this.route("admin.users.store");
      const method = this.mode === "edit" ? { _method: "PUT" } : {};
      // if (this.mode === "create") {
      this.form
        .transform((data) => ({
          ...method,
          ...data,
        }))
        .post(url, {
          onSuccess: (page) => {},
        });
      /*       } else {
        this.$inertia.patch(
          this.route("admin.users.update", this.user.id),
          this.form,
          {
            onFinish: () => {
              this.sending = false;
              this.form.password = null;
              this.form.password_confirmation = null;
            },
          }
        ); */
    },
    confirmDocumentDeletion() {
      this.showConfirmModal = true
    },
    modalClose() {
      this.showConfirmModal = false
    },
    destroy() {
      this.$inertia.delete(this.route("admin.users.destroy", this.user.id));
    },
    goBack() {
      window.history.back();
    },
    randomPassword() {
      const randomString = Math.random().toString(20).substr(2, 8);
      this.form.password = randomString;
      this.form.password_confirmation = randomString;
    },
  },
};
</script>

<style>
</style>
