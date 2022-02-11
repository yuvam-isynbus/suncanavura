<template>
  <SwitchGroup as="div" class="flex items-center space-x-4">
    <Switch
      as="button"
      v-model="toggleValue"
      @update:modelValue="$emit('update:modelValue', $event)"
      class="relative inline-flex flex-shrink-0 h-6 transition-colors duration-200 ease-in-out border-2 border-transparent rounded-full cursor-pointer w-11 focus:outline-none focus:shadow-outline"
      :class="toggleValue ? 'bg-rose-600' : 'bg-gray-200'"
      v-slot="{ checked }"
    >
      <span
        class="inline-block w-5 h-5 transition duration-200 ease-in-out transform bg-white rounded-full"
        :class="{ 'translate-x-5': checked, 'translate-x-0': !checked }"
      />
    </Switch>
    <SwitchLabel>{{ label }}</SwitchLabel>
  </SwitchGroup>
</template>

<script>
import { ref } from "vue";
import { SwitchGroup, Switch, SwitchLabel } from "@headlessui/vue";

export default {
  emits: ["update:modelValue"],
  components: {
    SwitchGroup,
    Switch,
    SwitchLabel,
  },
  props: {
    modelValue: {
      type: Boolean,
      default: false,
    },
    label: {
      type: String,
      default: '',
    },
  },
  setup(props) {
    const toggleValue = ref(props.modelValue);
    return {
      toggleValue,
    };
  },
};
</script>
