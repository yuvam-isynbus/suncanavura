<template>
  <teleport to="body">
    <transition leave-active-class="duration-200">
      <div v-show="show" class="fixed z-10 inset-0 overflow-y-auto">
        <div
          class="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0"
        >
          <transition
            enter-active-class="ease-out duration-300"
            enter-class="opacity-0"
            enter-to-class="opacity-100"
            leave-active-class="ease-in duration-200"
            leave-class="opacity-100"
            leave-to-class="opacity-0"
          >
            <div
              v-show="show"
              class="fixed inset-0 transition-opacity"
              @click="close"
              aria-hidden="true"
            >
              <div class="absolute inset-0 bg-gray-500 opacity-75"></div>
            </div>
          </transition>

          <!-- This element is to trick the browser into centering the modal contents. -->
          <span
            class="hidden sm:inline-block sm:align-middle sm:h-screen"
            aria-hidden="true"
            >&#8203;</span
          >
          <transition
            enter-active-class="ease-out duration-300"
            enter-class="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            enter-to-class="opacity-100 translate-y-0 sm:scale-100"
            leave-active-class="ease-in duration-200"
            leave-class="opacity-100 translate-y-0 sm:scale-100"
            leave-to-class="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
          >
            <div
              v-show="show"
              :class="[big ? 'sm:max-w-4xl' : 'sm:max-w-lg']"
              class="inline-block align-bottom bg-white rounded-lg px-4 pt-5 pb-4 text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:w-full sm:p-6"
              role="dialog"
              aria-modal="true"
              aria-labelledby="modal-headline"
            >
              <div
              v-if="closeIcon"
              class="hidden sm:block absolute top-0 right-0 pt-4 pr-4">
                <button
                  type="button"
                  @click="close"
                  class="bg-white rounded-md text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                  <span class="sr-only">Close</span>
                  <!-- Heroicon name: x -->
                  <svg
                    class="h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
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
              <slot></slot>
            </div>
          </transition>
        </div>
      </div>
    </transition>
  </teleport>
</template>

<script>
export default {
  emits: ["close"],
  props: {
    show: {
      default: false,
    },
    closeable: {
      default: true,
    },
    closeIcon: {
      default: true,
    },
    big: {
      default: false,
    },
  },
  methods: {
    close() {
      if (this.closeable) {
        this.$emit("close");
      }
    },
    closeOnEscape(e) {
      if (e.key === "Escape" && this.show) {
        this.close();
      }
    },
  },
  watch: {
    show(val) {
      if (val) {
        this.$nextTick(
          () =>
            document.querySelector("input")?.focus() ||
            document.querySelector("textarea")?.focus()
        );
        document.body.style.overflow = "hidden";
      } else {
        document.body.style.overflow = null;
      }
    },
  },
  created() {
    document.addEventListener("keydown", this.closeOnEscape);
  },
  unmounted() {
    document.removeEventListener("keydown", this.closeOnEscape);
  },
};
</script>
