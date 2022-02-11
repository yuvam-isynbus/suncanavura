<template>
  <div class="px-4 sm:px-6 lg:max-w-7xl lg:mx-auto lg:px-8 xl:max-w-screen-2xl">
<!--     <application-form
      v-if="
        (!$page.props.authuser.has_application && type === 'Work & travel') ||
        (!$page.props.authuser.has_aupair && type === 'Au pair')
      "
      :languages="languages"
      :destinations="destinations"
      :type="type"
      mode="create"
    ></application-form> -->
    <application-form
      :languages="languages"
      :destinations="destinations"
      :type="type"
      mode="create"
    ></application-form>
<!--     <application-details
      v-else
      :application="application"
      class="mt-8"
    ></application-details> -->
  </div>
</template>

<script>
import moment from "moment";
import SuperAdminLayout from "@/Layout/SuperAdminLayout";
import NestedLayoutUserApplication from "@/Layout/NestedLayoutUserApplication";
import ApplicationForm from "@/Pages/Admin/Applications/ApplicationForm";
import ApplicationDetails from "@/Pages/User/Application/ApplicationDetails";
export default {
  components: {
    ApplicationDetails,
    ApplicationForm,
  },
  // layout: (h, page) => h( SiteLayout, { title: 'Hello' }, () => [page]),
  layout: (h, page) => {
    return h(
      SuperAdminLayout,
      {
        resource: "Prijava",
        indexRoute: "user.aupair.form",
        type: page.props.authuser.role,
      },
      () => [
        h(
          NestedLayoutUserApplication,
          {
            url: "application/form",
            uuid: null,
            type: page.props.type == 'Work & travel' ? 'worktravel' : 'aupair'
          },
          () => [page]
        ),
      ]
    );
  },
  props: {
    application: Object,
    type: String,
    languages: Array,
    destinations: Array,
  },
  data() {
    return {
      //
    };
  },
  methods: {
    moment(date) {
      return moment(date);
    },
  },
};
</script>
