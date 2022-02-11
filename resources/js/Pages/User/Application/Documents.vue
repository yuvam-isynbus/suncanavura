<template>
  <div
    class="mt-8 max-w-3xl mx-auto sm:px-6 lg:max-w-7xl xl:max-w-screen-2xl grid grid-cols-1 gap-6 xl:grid-flow-col-dense xl:grid-cols-2"
  >
    <div
      class="bg-white shadow overflow-hidden sm:rounded-md border border-gray-200"
    >
      <h3 class="px-4 py-4 sm:px-6 border-b border-gray-200">
        Dokumenti učitani od strane korisnika {{ application.user.name }}
      </h3>
      <document-upload-card
        label="Opći dokumenti"
        :application="application"
        :documents="user_documents"
      ></document-upload-card>
      <document-upload-card
        label="Dokumenti povezani s vizom"
        :application="application"
        :documents="user_visa_documents"
        collection="visa"
      ></document-upload-card>
      <document-upload-card
        label="Dokumenti povezani s poslom"
        :application="application"
        :documents="user_job_documents"
        collection="job"
      ></document-upload-card>
    </div>
    <div
      class="bg-white shadow overflow-hidden sm:rounded-md border border-gray-200"
    >
      <h3 class="px-4 py-4 sm:px-6 border-b border-gray-200">
        Dokumenti učitani od strane Sunčane vure
      </h3>
      <document-card
        label="Opći dokumenti"
        :application="application"
        :documents="admin_documents"
      ></document-card>
      <document-card
        label="Dokumenti povezani s vizom"
        :application="application"
        :documents="admin_visa_documents"
        collection="visa"
      ></document-card>
      <document-card
        label="Dokumenti povezani s poslom"
        :application="application"
        :documents="admin_job_documents"
        collection="job"
      ></document-card>
      <document-card
        label="Računi"
        :application="application"
        :documents="admin_invoice_documents"
        collection="invoice"
      ></document-card>
    </div>
  </div>
</template>

<script>
import SuperAdminLayout from "@/Layout/SuperAdminLayout";
import NestedLayoutUserApplication from "@/Layout/NestedLayoutUserApplication";
import DocumentUploadCard from "@/Shared/DocumentUploadCard";
import DocumentCard from "@/Shared/DocumentCard";
const defaultFilterForm = {
  color: [],
};
export default {
  inheritAttrs: false,
  layout: (h, page) =>
    h(
      SuperAdminLayout,
      {
        resource: "Prijava",
        indexRoute: "user.dashboard",
        type: page.props.authuser.role,
      },
      () => [
        h(
          NestedLayoutUserApplication,
          {
            url: "application/documents",
            // url: "admin/applications/documents",
            uuid: page.props.application.uuid,
            type: page.props.application.type == 'Work & travel' ? 'worktravel' : 'aupair'
          },
          () => [page]
        ),
      ]
    ),

  components: {
    DocumentUploadCard,
    DocumentCard,
  },
  props: {
    admin_documents: [Array, Object],
    admin_visa_documents: [Array, Object],
    admin_job_documents: [Array, Object],
    admin_invoice_documents: [Array, Object],
    user_documents: [Array, Object],
    user_visa_documents: [Array, Object],
    user_job_documents: [Array, Object],
    application: Object,
  },
  /*   mounted() {
    window.Echo.private("applications").listen("TimelineEvent", (e) => {
      this.$inertia.reload();
    });
  }, */
  data() {
    return {
      //
    };
  },
};
</script>
