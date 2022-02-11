<template>
  <div class="px-4 sm:px-6 lg:max-w-7xl lg:mx-auto lg:px-8 xl:max-w-screen-2xl">
    <application-form
      :application="application"
      :sponsors="sponsors"
      :destinations="destinations"
      :languages="languages"
      mode="edit"
      :type="type"
    ></application-form>
  </div>
</template>

<script>
import SuperAdminLayout from "@/Layout/SuperAdminLayout";
import ApplicationForm from "@/Pages/Admin/Applications/ApplicationForm";
export default {
  layout: (h, page) =>
    h(
      SuperAdminLayout,
      {
        resource: "Prijave",
        indexRoute: "admin.applications.index",
        action: "Izmjeni",
      },
      () => [page]
    ),
  components: {
    ApplicationForm,
  },
  props: {
    application: Object,
    sponsors: Array,
    destinations: Array,
    languages: Array,
    type: String,
  },
};
</script>
