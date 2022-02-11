<template>
  <div class="px-4 sm:px-6 lg:max-w-7xl lg:mx-auto lg:px-8 xl:max-w-screen-2xl">
    <application-form mode="create" :sponsors="sponsors" :languages="languages" :destinations="destinations" :user="user" :type="type"></application-form>
  </div>
</template>

<script>
import SuperAdminLayout from "@/Layout/SuperAdminLayout";
import NestedUserLayout from "@/Layout/NestedUserLayout";
import ApplicationForm from "@/Pages/Admin/Applications/ApplicationForm.vue";
export default {
  layout: (h, page) =>
    h(
      SuperAdminLayout,
      {
        resource: "Korisnici",
        indexRoute: "admin.users.index",
        action: page.props.user.name,
      },
      () => [h(NestedUserLayout, { url: "admin/users" }, () => [page])]
    ),
  components: {
    ApplicationForm,
  },
  props: {
    user: Object,
    sponsors: Array,
    destinations: Array,
    languages: Array,
    type: String
  },
  data() {
    return {
      //
    };
  },
  methods: {
    //
  },
};
</script>
