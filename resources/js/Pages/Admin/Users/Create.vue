<template>
  <div class="bg-white rounded shadow overflow-hidden max-w-3xl mx-auto mt-8">
    <user-form :errors="errors" mode="create" :role="role"></user-form>
  </div>
</template>

<script>
import SuperAdminLayout from "@/Layout/SuperAdminLayout";
import UserForm from "@/Pages/Admin/Users/UserForm";
export default {
  layout: (h, page) =>
    h(
      SuperAdminLayout,
      {
        resource: "Users",
        indexRoute: "admin.users.index",
        action: "Create",
      },
      () => [page]
    ),
  components: {
    UserForm,
  },
  props: {
    errors: Object,
    role: String
  },
};
</script>
