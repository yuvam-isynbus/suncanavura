<template>
  <div class="bg-white rounded shadow overflow-hidden max-w-3xl mx-auto mt-8">
    <work-travel-form mode="create"></work-travel-form>
  </div>
</template>

<script>
import SuperAdminLayout from "@/Layout/SuperAdminLayout";
import WorkTravelForm from "@/Pages/Admin/WorkTravels/WorkTravelForm";
export default {
    layout: (h, page) => {
    return h(
      SuperAdminLayout,
      {
        resource: "W&T poslovi",
        indexRoute: "admin.worktravels.index",
      },
      () => [page]
    );
  },
  components: {
    WorkTravelForm, SuperAdminLayout
  },
  props: {
    // errors: Object,
  },
};
</script>
