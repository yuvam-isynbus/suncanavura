<template>
  <div>
    <form @submit.prevent="postForm">
      <!-- email -->
      <input type="text" v-model="form.date" placeholder="dd.mm.gggg" maxlength="10" />
      <div v-if="form.errors.date">{{ form.errors.date }}</div>
      <!-- submit -->
      <button type="submit" :disabled="form.processing">Spremi</button>
    </form>
    {{ form.date }}
  </div>
</template>

<script>
import { watch } from "vue";
import { useForm } from "@inertiajs/inertia-vue3";
export default {
  setup() {
    const form = useForm({
      date: null,
    });

    function postForm() {
      console.log(form.value.date);
    }

    watch(
      form,
      (val) => {
        val.date = val.date.replace(/\s+/g, "").replace(/[^.0-9]/gi, "");

        if (val.date.match(/^\d{2}$/) !== null) {
            val.date = val.date + '.';
        } else if (val.date.match(/^\d{2}.\d{2}$/) !== null) {
            val.date = val.date + '.';
        }
        // console.log(matches);
      },
      { deep: true }
    );
    return { form, postForm };
  },
};
</script>

<style>
</style>
