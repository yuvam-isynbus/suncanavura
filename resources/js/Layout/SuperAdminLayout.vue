<template>
  <notifications></notifications>
  <div class="h-screen flex overflow-hidden">
    <!-- Off-canvas menu for mobile, show/hide based on off-canvas menu state. -->
    <MobileMenu
      :isMenuOpen="isMenuOpen"
      :url="url()"
      @menuclosed="menuClosed"
      :items="menuItems"
    />
    <!-- Static sidebar for desktop -->
    <div class="hidden xl:flex xl:flex-shrink-0">
      <div class="flex flex-col w-64">
        <!-- Sidebar component, swap this element with another sidebar if you like -->
        <DesktopMenu :url="url()" :items="menuItems" />
      </div>
    </div>
    <div
      id="main-modal"
      class="flex-1 overflow-auto focus:outline-none"
    >
      <div
        class="relative z-10 flex-shrink-0 flex h-16 bg-white border-b border-gray-200 lg:border-none"
      >
        <button
          @click="isMenuOpen = true"
          class="px-4 border-r border-gray-200 text-gray-400 focus:outline-none focus:bg-gray-100 focus:text-gray-600 xl:hidden"
          aria-label="Open sidebar"
        >
          <!-- Heroicon name: menu-alt-1 -->
          <svg
            class="h-6 w-6 transition ease-in-out duration-150"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M4 6h16M4 12h8m-8 6h16"
            />
          </svg>
        </button>
        <!-- Title bar -->
        <div
          class="flex-1 flex justify-between px-4 sm:px-6 lg:max-w-7xl lg:mx-auto lg:px-8 xl:max-w-screen-2xl border-b"
        >
          <div class="flex-1 flex">
            <h1 class="my-auto font-bold text-2xl">
              <span v-if="title">{{ title }}</span>
              <inertia-link
                v-if="resource"
                class="text-gray-600 hover:text-gray-700"
                :href="route(indexRoute)"
                >{{ resource }}</inertia-link
              >
              <span v-if="action" class="text-gray-900 font-medium"> / </span>
              <span v-if="action">{{ action }}</span>
            </h1>
          </div>
          <div class="ml-4 flex items-center md:ml-6">
            <!-- Profile dropdown -->
            <!-- max-w-xs flex items-center text-sm rounded-full focus:outline-none focus:bg-gray-100 lg:p-2 lg:rounded-md lg:hover:bg-gray-10 -->
            <div class="ml-3 relative" ref="dropdown">
              <div>
                <button
                  @click="isDropdownOpen = !isDropdownOpen"
                  class="flex items-center w-full rounded-md shadow-sm px-2 py-1 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-1 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-rose-400"
                  id="user-menu"
                  aria-label="User menu"
                  aria-haspopup="true"
                >
                  <img class="h-8 w-8 rounded-full" :src="userAvatar" alt="" />
                  <p
                    class="hidden ml-3 text-gray-700 text-sm leading-5 font-medium xl:block"
                  >
                    {{ userName }}
                  </p>
                  <!-- Heroicon name: chevron-down -->
                  <svg
                    class="hidden flex-shrink-0 ml-1 h-5 w-5 text-gray-400 xl:block"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                      clip-rule="evenodd"
                    />
                  </svg>
                </button>
              </div>
              <!--
              Profile dropdown panel, show/hide based on dropdown state.

              Entering: "transition ease-out duration-100"
                From: "transform opacity-0 scale-95"
                To: "transform opacity-100 scale-100"
              Leaving: "transition ease-in duration-75"
                From: "transform opacity-100 scale-100"
                To: "transform opacity-0 scale-95"
            -->
              <transition
                enter-active-class="transition ease-out duration-100 transform"
                enter-from-class="opacity-0 scale-95"
                enter-to-class="opacity-100 scale-100"
                leave-active-class="transition ease-in duration-75 transform"
                leave-from-class="opacity-100 scale-100"
                leave-to-class="opacity-0 scale-95"
              >
                <div
                  class="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5"
                  v-show="isDropdownOpen"
                >
                  <div
                    class="py-1 rounded-md bg-white shadow-xs"
                    role="menu"
                    aria-orientation="vertical"
                    aria-labelledby="user-menu"
                  >
                    <inertia-link
                      v-if="isAdmin && type !== 'profile'"
                      :href="route('user.profile.data')"
                      @click="isDropdownOpen = false"
                      class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 transition ease-in-out duration-150"
                      role="menuitem"
                      >Profile</inertia-link
                    >
                    <inertia-link
                      v-if="isAdmin && type === 'profile'"
                      :href="route('admin.dashboard')"
                      @click="isDropdownOpen = false"
                      class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 transition ease-in-out duration-150"
                      role="menuitem"
                      >Dashboard</inertia-link
                    >
                    <a
                      @click="logout"
                      class="cursor-pointer block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 transition ease-in-out duration-150"
                      role="menuitem"
                      >Logout</a
                    >
                  </div>
                </div>
              </transition>
            </div>
          </div>
        </div>
      </div>
      <main class="flex-1 relative pb-8 z-0 min-h-screen">
        <!-- Main slot -->
        <slot />
      </main>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";
import { Inertia } from "@inertiajs/inertia";
import axios from "axios";
// import FlashMessages from "@/Shared/FlashMessages";
import Notifications from "@/Shared/Notifications";
import NewMenuItem from "@/Menu/NewMenuItem";
import DesktopMenu from "@/Menu/DesktopMenu";
import MobileMenu from "@/Menu/MobileMenu";
import adminMenuItems from "@/Menu/adminmenu";
import userMenuItems from "@/Menu/usermenu";
export default {
  components: {
    Notifications,
    NewMenuItem,
    DesktopMenu,
    MobileMenu,
    // FlashMessages,
  },
  props: {
    title: String,
    resource: String,
    indexRoute: String,
    action: String,
    type: String,
  },
  setup() {
    const isMenuOpen = ref(false);
    const isDropdownOpen = ref(false);

    function menuClosed() {
      isMenuOpen.value = false;
    }

    return {
      isMenuOpen,
      isDropdownOpen,
      menuClosed,
    };
  },
  mounted() {
    document.addEventListener("click", (event) => {
      if (this.$refs.dropdown && !this.$refs.dropdown.contains(event.target)) {
        this.isDropdownOpen = false;
      }
    });
    const id = this.$page.props.authuser.id;
    window.Echo.private("App.Models.User." + id).notification(
      (notification) => {
          // console.log(notification)
        this.$inertia.reload();
        this.$notify(
          {
            group: "common",
            title: "Nova informacija!",
            type: "info",
            text: notification.notice,
          },
          2000
        );
      }
    );
    /* window.Echo.private("notifications").listen("Verified", (e) => {
      this.$inertia.reload();
      this.$notify(
            {
              group: "common",
              title: "Uspjeh!",
              type: "success",
              text: "Verificiran je novi korisnik",
            },
            2000
          );
    }); */
    /*     this.$notify(
            {
              group: "common",
              title: "Uspjeh!",
              type: "success",
              text: 'LA LA',
            },
            20000
          ); */
    const flash = this.$page.props.flash;
    if (flash.success || flash.status) {
      /* this.$toasted.show(flash.success ? flash.success : flash.status, {
        theme: "outline",
        position: "bottom-right",
        type: "success",
        duration: 3000,
      }); */
    }
  },
  methods: {
    url() {
      return location.pathname.substr(1);
    },
    logout() {
      axios
        .post(route("logout"), null, {
          headers: {
            "X-CSRF-TOKEN": this.$page.props.csrf.token,
          },
        })
        .then(() => (window.location.href = this.route("login")));
    },
  },
  computed: {
    menuItems() {
      const hasApplication = this.$page.props.authuser.has_application
      const hasAupair = this.$page.props.authuser.has_aupair
      const filteredUserMenuItems = userMenuItems.filter(item => {
          if (item.hasApplication === hasApplication) {
              return item
          }
          if (item.hasAupair === hasAupair) {
              return item
          }
        return !item.hasOwnProperty('hasApplication') && !item.hasOwnProperty('hasAupair')
      });
      return this.type && this.type === "user" ? filteredUserMenuItems : adminMenuItems;
    },
    userName() {
      return this.$page.props.authuser.name;
    },
    isAdmin() {
      return this.$page.props.authuser.role === "admin";
    },
    userAvatar() {
      return this.$page.props.authuser.profile_photo_url;
    },
  },
  watch: {
    "$page.props": {
      handler() {
        this.show = true;
        const flash = this.$page.props.flash;
         if (flash?.success || flash?.status) {
          /* this.$toasted.show(flash.success ? flash.success : flash.status, {
            theme: "outline",
            position: "bottom-right",
            type: "success",
            duration: 3000,
          }); */
          this.$notify(
            {
              group: "common",
              title: "Uspjeh!",
              type: "success",
              text: flash.success ? flash.success : flash.status,
            },
            2000
          );
        } else if (Object.keys(this.$page.props.errors).length > 0) {
          /* this.$toasted.show("There is a form error.", {
            theme: "outline",
            position: "bottom-right",
            type: "error",
            duration: 3000,
          }); */
          this.$notify(
            {
              group: "common",
              title: "Upsss!",
              type: "error",
              text: "Pogreška u ispunjavanju polja!",
            },
            2000
          );
        }
      },
      deep: true,
    },
  },
};
</script>

<style>
</style>
