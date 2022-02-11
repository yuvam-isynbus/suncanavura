<template>
  <Listbox
    as="div"
    class="space-y-1"
    v-model="selectedItem"
    v-slot="{ open }"
    @update:modelValue="update"
  >
    <ListboxLabel class="block text-sm leading-5 font-medium text-gray-700">
      {{ label }}
    </ListboxLabel>
    <div class="relative">
      <span class="inline-block w-full rounded-md shadow-sm">
        <ListboxButton
          class="cursor-default relative w-full rounded-md border border-gray-300 bg-white pl-3 pr-10 py-2 text-left focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition ease-in-out duration-150 sm:text-sm sm:leading-5"
        >
          <span class="block truncate">
            {{ selectedItem.name ?? selectedItem}}
          </span>
          <span
            class="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none"
          >
            <svg
              class="h-5 w-5 text-gray-400"
              viewBox="0 0 20 20"
              fill="none"
              stroke="currentColor"
            >
              <path
                d="M7 7l3-3 3 3m0 6l-3 3-3-3"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </span>
        </ListboxButton>
      </span>

      <transition
        leave-active-class="transition ease-in duration-100"
        leave-from-class="opacity-100"
        leave-to-class="opacity-0"
      >
        <div
          v-if="open"
          class="absolute mt-1 w-full rounded-md bg-white shadow-lg z-10"
        >
          <ListboxOptions
            static
            class="max-h-60 rounded-md py-1 text-base leading-6 shadow-xs overflow-auto focus:outline-none sm:text-sm sm:leading-5"
          >
            <ListboxOption
              v-for="item in items"
              :key="item.id ?? item"
              :value="item"
              v-slot="{ selected, active }"
            >
              <div
                :class="`${
                  active ? 'text-white bg-blue-600' : 'text-gray-900'
                } cursor-default select-none relative py-2 pl-8 pr-4`"
              >
                <span
                  :class="`${
                    selected ? 'font-semibold' : 'font-normal'
                  } block truncate`"
                >
                  {{ item.name ?? item }}
                </span>
                <span
                  v-if="selected"
                  :class="`${
                    active ? 'text-white' : 'text-blue-600'
                  } absolute inset-y-0 left-0 flex items-center pl-1.5`"
                >
                  <svg
                    class="h-5 w-5"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clip-rule="evenodd"
                    />
                  </svg>
                </span>
              </div>
            </ListboxOption>
          </ListboxOptions>
        </div>
      </transition>
    </div>
  </Listbox>
</template>

<script>
import { ref, watch } from "vue";
import {
  Listbox,
  ListboxLabel,
  ListboxButton,
  ListboxOptions,
  ListboxOption,
} from "@headlessui/vue";

export default {
  emits: ["update:modelValue"],
  components: {
    Listbox,
    ListboxLabel,
    ListboxButton,
    ListboxOptions,
    ListboxOption,
  },
  props: {
    items: [Array, Object],
    modelValue: {
      type: [String, Object],
      default: null,
    },
    label: {
      type: String,
      default: "",
    },
  },
  setup(props, { emit }) {
    const selectedItem = ref(props.modelValue);
    function update(value) {
      emit("update:modelValue", value);
    }
    watch(() => props.modelValue, (val) => {
        selectedItem.value = val
    })
    return {
      selectedItem,
      // people,
      update,
    };
  },
};
</script>
