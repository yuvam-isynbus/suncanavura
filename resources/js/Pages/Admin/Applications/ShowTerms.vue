<template>
  <dialog-modal :show="showModal" :big="true" @close="$emit('close')">
    <template #content>
      <div class="overflow-y-scroll" style="height: 80vh">
        <div class="py-3">
          <h3 class="text-lg leading-6 font-medium text-gray-900">
            UVJETI POSLOVANJA
          </h3>
        </div>
        <div class="border-t border-gray-200 py-5 sm:p-0">
        <component :is="computedProgram"></component>
<!--             <TabGroup >
                <TabList class="lg:max-w-7xl lg:mx-auto xl:max-w-screen-2xl border-b space-x-8 -mb-px">
                    <Tab v-slot="{ selected }" as="template">
                        <button
                        class="whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm focus:outline-none"
                        :class="[selected ? 'border-pink-500 text-gray-900 '
                            : 'border-transparent hover:border-gray-300 text-gray-500 hover:text-gray-700']"
                        >
                        Program Independent
                        </button>
                    </Tab>
                    <Tab v-slot="{ selected }" as="template">
                        <button
                        class="whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm focus:outline-none"
                        :class="[selected ? 'border-pink-500 text-gray-900 '
                            : 'border-transparent hover:border-gray-300 text-gray-500 hover:text-gray-700']"
                        >
                        Program Premium
                        </button>
                    </Tab>
                    <Tab v-slot="{ selected }" as="template">
                        <button
                        class="whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm focus:outline-none"
                        :class="[selected ? 'border-pink-500 text-gray-900 '
                            : 'border-transparent hover:border-gray-300 text-gray-500 hover:text-gray-700']"
                        >
                        Program Sierra
                        </button>
                    </Tab>
                </TabList>
                <TabPanels>
                    <TabPanel>
                        <Independent @neprihvacam="$emit('neprihvacam')" @prihvacam="$emit('prihvacam')" />
                    </TabPanel>
                    <TabPanel>
                        <Premium @neprihvacam="$emit('neprihvacam')" @prihvacam="$emit('prihvacam')"  />
                    </TabPanel>
                    <TabPanel>
                        <Sierra @neprihvacam="$emit('neprihvacam')" @prihvacam="$emit('prihvacam')"/>
                    </TabPanel>
                </TabPanels>
            </TabGroup> -->
            <div v-if="uvjeti && program != 'Destinacija nije unesena'" class="flex space-x-4 py-8">
                <button
                    type="button"
                    @click="$emit('prihvacam')"
                    class="inline-flex items-center px-4 py-2 border border-blue-500 text-base
                    leading-5 font-medium rounded-md text-blue-700 bg-white hover:text-blue-500
                    focus:outline-none focus:shadow-outline-blue focus:border-blue-300 active:text-blue-800
                    active:bg-blue-50 transition duration-150 ease-in-out"
                >
                    Prihvaćam uvjete
                </button>
                <button
                    type="button"
                    @click="$emit('neprihvacam')"
                    class="inline-flex items-center px-4 py-2 border border-blue-500 text-base
                    leading-5 font-medium rounded-md text-blue-700 bg-white hover:text-blue-500
                    focus:outline-none focus:shadow-outline-blue focus:border-blue-300 active:text-blue-800
                    active:bg-blue-50 transition duration-150 ease-in-out"
                >
                    Ne prihvaćam uvjete
                </button>
            </div>
        </div>
      </div>
    </template>
  </dialog-modal>
</template>

<script>
import { TabGroup, TabList, Tab, TabPanels, TabPanel } from '@headlessui/vue'
import Independent from "@/Pages/Admin/Applications/Independent.vue";
import Premium from "@/Pages/Admin/Applications/Premium.vue";
import Sierra from "@/Pages/Admin/Applications/Sierra.vue";
import SPAIN from "@/Pages/Admin/Applications/SPAIN.vue";
import GERMANY from "@/Pages/Admin/Applications/GERMANY.vue";
import USA from "@/Pages/Admin/Applications/USA.vue";
import NODESTINATION from "@/Pages/Admin/Applications/NODESTINATION.vue";
import OPCI from "@/Pages/Admin/Applications/OPCI.vue";
import DialogModal from "@/Shared/DialogModal";
export default {
  emits: ["close", "prihvacam", "neprihvacam"],
  components: {
    Independent,
    Premium,
    Sierra,
    SPAIN,
    GERMANY,
    USA,
    NODESTINATION,
    OPCI,
    DialogModal,
    TabGroup,
    TabList,
    Tab,
    TabPanels,
    TabPanel
  },
  props: {
    showModal: Boolean,
    type: String,
    uvjeti: {
      default: true,
    },
    program: String
  },
  data() {
    return {
      //
    };
  },
  computed: {
      computedProgram() {
/*           if (this.type == 'Work & travel' || this.type == 'worktravel') {
              return this.program
          } */
          if (this.program == "Destinacija nije unesena") {
              return 'NODESTINATION'
          }
          return this.program
      }
  },
  methods: {
    closeModal() {
      this.$emit("close");
    },
  },
};
</script>
