<template>
  <transition
    leave-active-class="transition-opacity ease-linear duration-300"
    leave-from-class="opacity-100"
    leave-to-class="opacity-100"
  >
    <div class="xl:hidden" v-show="isMenuOpen">
      <div class="fixed inset-0 flex z-40">
        <!--
          Off-canvas menu overlay, show/hide based on off-canvas menu state.

          Entering: "transition-opacity ease-linear duration-300"
            From: "opacity-0"
            To: "opacity-100"
          Leaving: "transition-opacity ease-linear duration-300"
            From: "opacity-100"
            To: "opacity-0"
        -->
        <transition
          enter-active-class="transition-opacity ease-linear duration-300"
          enter-from-class="opacity-0"
          enter-to-class="opacity-100"
          leave-active-class="transition-opacity ease-linear duration-300"
          leave-from-class="opacity-100"
          leave-to-class="opacity-0"
        >
          <div class="fixed inset-0" v-show="isMenuOpen" @click="closeMenu">
            <div class="absolute inset-0 bg-gray-600 opacity-75"></div>
          </div>
        </transition>
        <!--
          Off-canvas menu, show/hide based on off-canvas menu state.

          Entering: "transition ease-in-out duration-300 transform"
            From: "-translate-x-full"
            To: "translate-x-0"
          Leaving: "transition ease-in-out duration-300 transform"
            From: "translate-x-0"
            To: "-translate-x-full"
        -->
        <transition
          enter-active-class="transition ease-in-out duration-300 transform"
          enter-from-class="-translate-x-full"
          enter-to-class="translate-x-0"
          leave-active-class="transition ease-in-out duration-300 transform"
          leave-from-class="translate-x-0"
          leave-to-class="-translate-x-full"
        >
          <div
            class="relative flex-1 flex flex-col max-w-xs w-full pb-4 bg-gray-900"
            v-show="isMenuOpen"
          >
            <div class="absolute top-0 right-0 -mr-12 pt-2">
              <button
                @click="closeMenu"
                v-show="isMenuOpen"
                class="flex items-center justify-center h-10 w-10 rounded-full focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                aria-label="Close sidebar"
              >
                <svg
                  class="h-6 w-6 text-white"
                  stroke="currentColor"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
            <div
              class="flex-shrink-0 flex items-center px-4 h-16 border-b border-gray-500"
            >
              <!-- <span
                class="text-2xl font-bold text-white cursor-pointer"
                @click="goToLandingPage"
                >VURA:CLUB</span
              > -->
              <a href="/"><img class="h-11" src="/img/logo_2.jpg" alt="Sunčana vura"></a>
            </div>
            <div class="mt-5 flex-1 h-0 overflow-y-auto">
              <nav class="px-2 space-y-1">
                <template v-for="item in items" :key="item.label">
                  <NewMenuItem
                    v-if="
                      !item.superAdmin ||
                      (item.superAdmin && $page.props.authuser.superadmin)
                    "
                    :label="item.label"
                    :iconName="item.iconName"
                    :routeName="item.routeName"
                    :active="url === item.url"
                    :unreadMessages="item.unreadMessages"
                    @linkclicked="linkClicked"
                  />
                </template>
              </nav>
            </div>
          </div>
        </transition>
        <div class="flex-shrink-0 w-14">
          <!-- Dummy element to force sidebar to shrink to fit close icon -->
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
import NewMenuItem from "@/Menu/NewMenuItem";
import { Inertia } from "@inertiajs/inertia";
export default {
  emits: ["menuclosed"],
  components: {
    NewMenuItem,
  },
  props: {
    url: String,
    isMenuOpen: Boolean,
    items: Array,
  },
  methods: {
    closeMenu() {
      this.$emit("menuclosed");
    },
    linkClicked(routeName) {
      Inertia.visit(routeName, {
        onSuccess: (page) => this.$emit("menuclosed"),
      });
    },
    goToLandingPage() {
      window.location.href = this.route("naslovna");
    },
  },
};
</script>

<style>
</style>
