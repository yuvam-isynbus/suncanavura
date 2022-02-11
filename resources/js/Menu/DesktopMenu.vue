<template>
  <div class="flex flex-col h-0 flex-1">
    <div
      class="flex items-center h-16 flex-shrink-0 px-4 bg-gray-900 border-b border-gray-700"
    >
      <!-- <span
        class="text-2xl font-bold text-white cursor-pointer"
        @click="goToLandingPage"
        >VURA:CLUB</span
      > -->
      <a href="/"><img class="h-11" src="/img/logo_2.jpg" alt="Sunčana vura"></a>
    </div>

    <div class="flex-1 flex flex-col overflow-y-auto">
      <nav class="flex-1 px-2 py-4 bg-gray-800 space-y-1">
        <template v-for="item in items" :key="item.label">
          <NewMenuItem
            v-if="
              !item.superAdmin ||
              (item.superAdmin && $page.props.authuser.superadmin)
            "
            :label="item.label"
            :iconName="item.iconName"
            :routeName="item.routeName"
            :active="isActive(url, item.url)"
            :unreadMessages="item.unreadMessages"
            :unreadNotices="item.unreadNotices"
            @linkclicked="linkClicked"
          />
        </template>
      </nav>
    </div>
  </div>
</template>

<script>
// import Icon from "@/Shared/Icon";
import NewMenuItem from "@/Menu/NewMenuItem";
import { Inertia } from "@inertiajs/inertia";

export default {
  components: {
    // Icon,
    NewMenuItem,
  },
  props: {
    url: String,
    items: Array,
  },
  methods: {
    isActive(url1, url2) {
        // console.log(url1, url2)
      return (
        url1.split("/")[0] === url2.split("/")[0] &&
        url1.split("/")[1] === url2.split("/")[1]

      );
    },
    isUrl(...urls) {
      if (urls[0] === "") {
        return this.url === "";
      }
      return urls.filter((url) => this.url.startsWith(url)).length;
    },
    linkClicked(routeName) {
      Inertia.visit(routeName, {
        onSuccess: (page) => {},
      });
    },
    goToLandingPage() {
      window.location.href = this.route("naslovna");
    },
  },
  computed: {
    filteredItems() {
      return this.items.filter((item) => item.showItem === true);
    },
  },
};
</script>

<style>
</style>
