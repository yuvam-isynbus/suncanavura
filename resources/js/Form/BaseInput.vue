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
      class="block w-full pr-10 shadow-sm focus:ring-indigo-400 focus:border-indigo-500 sm:text-sm border-gray-300 rounded-md"
      v-bind="{
        ...$attrs,
        onInput: updateValue,
      }"
      ref="input"
      :id="uuid"
      :value="modelValue"
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
    <!-- Heroicon name: eye class="h-5 w-5 text-red-500" -->
    <div
      v-if="passwordEyeVisibile()"
      @click="togglePassword"
      class="absolute inset-y-0 right-0 pr-3 flex items-center cursor-pointer"
    >
      <svg
        class="h-5 w-5 text-gray-400"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
        />
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
        />
      </svg>
    </div>
    <!-- Heroicon name: eye-off class="h-5 w-5 text-red-500" -->
    <div
      v-if="passwordEyeOffVisibile()"
      @click="togglePassword"
      class="absolute inset-y-0 right-0 pr-3 flex items-center cursor-pointer"
    >
      <svg
        class="h-5 w-5 text-gray-400"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21"
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
  components: {
    BaseErrorMessage,
  },
  props: {
    label: {
      type: String,
      default: "",
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
    toggle: {
      type: Boolean,
      default: false,
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
  data() {
    return {
      isPasswordVisibile: this.toggle,
    };
  },
  methods: {
    passwordEyeVisibile() {
      return this.isPasswordVisibile && this.error == ''
    },
    passwordEyeOffVisibile() {
      return this.toggle && !this.isPasswordVisibile && this.error == ''
    },
    togglePassword() {

      this.isPasswordVisibile = !this.isPasswordVisibile;
      this.$refs.input.type =
        this.$refs.input.type == "password" ? "text" : "password";
    },
  },
};
</script>
