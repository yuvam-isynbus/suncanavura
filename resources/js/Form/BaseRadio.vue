<template>
  <input
    type="radio"
    class="focus:ring-gray-500 h-4 w-4 text-gray-600 cursor-pointer border-gray-300"
    v-bind="{ ...$attrs, onChange: updateValue }"
    :checked="modelValue === value"
    :id="uuid"
  />
  <label v-if="label" :for="uuid" class="ml-2">
    {{ label }}
  </label>
  <BaseErrorMessage v-if="error" :id="`${uuid}-error`">
    {{ error }}
  </BaseErrorMessage>
</template>

<script>
import UniqueID from "./features/UniqueID";
import SetupFormComponent from "./features/SetupFormComponent";
import BaseErrorMessage from "@/Form/BaseErrorMessage";
export default {
  components: {
    BaseErrorMessage,
  },
  props: {
    label: {
      type: String,
      default: "",
    },
    modelValue: {
      type: [String, Number],
    },
    value: {
      type: [String, Number],
    },
    error: {
      type: String,
      default: "",
    },
  },
  setup(props, context) {
    const uuid = UniqueID().getID();
    const { updateValue } = SetupFormComponent(props, context);

    return {
      updateValue,
      uuid,
    };
  },
};
</script>
