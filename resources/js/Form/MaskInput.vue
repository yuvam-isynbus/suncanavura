<template>
  <label
    v-if="label"
    :for="uuid"
    class="block text-sm font-medium text-gray-700"
  >
    {{ label }}
  </label>
  <div class="mt-1 relative rounded-md shadow-sm">
    <!-- class="block w-full pr-10 border-red-300 text-red-900 placeholder-red-300
    focus:outline-none focus:ring-red-500 focus:border-red-500 sm:text-sm rounded-md" -->
    <input
      class="block w-full pr-10 shadow-sm focus:ring-indigo-400 focus:border-indigo-500 sm:text-sm border-gray-300 rounded-md placeholder-gray-400"
      v-bind="{
        ...$attrs,
        onInput: updateValue,
      }"
      :id="uuid"
      :value="modelValue"
      v-maska="mask"
      :placeholder="placeholder"
      :aria-describedby="error ? `${uuid}-error` : null"
      :aria-invalid="error ? true : false"
      :class="error ? 'border-red-300 text-red-900 placeholder-red-300' : ''"
    />
    <div
      v-if="error"
      class="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none"
    >
      <!-- Heroicon name: exclamation-circle -->
      <svg
        class="h-5 w-5 text-red-500"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
        fill="currentColor"
        aria-hidden="true"
      >
        <path
          fill-rule="evenodd"
          d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z"
          clip-rule="evenodd"
        />
      </svg>
    </div>
  </div>
  <BaseErrorMessage v-if="error" :id="`${uuid}-error`">
    {{ error }}
  </BaseErrorMessage>
</template>

<script>
import SetupFormComponent from "./features/SetupFormComponent";
import UniqueID from "./features/UniqueID";
import BaseErrorMessage from "@/Form/BaseErrorMessage";
export default {
  emits: ["update:modelValue"],
  components: {
    BaseErrorMessage,
  },
  props: {
    label: {
      type: String,
      default: "",
    },
    mask: {
      type: [String, Object],
      required: true,
    },
    placeholder: {
      type: String,
      default: "",
    },
    error: {
      type: String,
      default: "",
    },
    modelValue: {
      type: [String, Number],
      default: "",
    },
  },
  setup(props, context) {
    const { updateValue } = SetupFormComponent(props, context);
    const uuid = UniqueID().getID();

    return {
      updateValue,
      uuid,
    };
  },
};
</script>
