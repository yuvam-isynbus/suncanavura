<template>
  <div class="max-w-lg mt-8 mx-auto focus:outline-none">
    <form @submit.prevent="submit">
      <Multiselect
        v-model="form.languages"
        mode="tags"
        placeholder="Izaberi strani jezik"
        :searchable="true"
        :createTag="true"
        :options="languages"
      />
      <!-- submit -->
      <button
        class="mt-8 border px-3 py-2 rounded"
        type="submit"
        :disabled="form.processing"
      >
        Login
      </button>
    </form>
  </div>
</template>

<script>
import Multiselect from "@vueform/multiselect";
export default {
  components: {
    Multiselect,
  },
  props: {
    languages: Array,
  },
  data() {
    return {
      form: this.$inertia.form({
        languages: [],
      }),
      value: ["batman"],
      options: [
        { value: "batman", label: "Batman" },
        { value: "robin", label: "Robin" },
        { value: "joker", label: "Joker" },
      ],
    };
  },
  methods: {
    submit() {
      console.log(this.form.data());
    },
  },
};
</script>
