<template>
  <label v-if="label" :for="uuid" >
    {{ label }}
  </label>
  <select
    :class="{'text-gray-500': modelValue == null}"
    class="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
    v-bind="{
      ...$attrs,
      onChange: updateValue,
    }"
    :value="modelValue"
    :id="uuid"
    :aria-describedby="error ? `${uuid}-error` : null"
    :aria-invalid="error ? true : false"
  >
    <template v-if="placeholder">
      <!-- <option v-if="modelValue == null" :value="null" disabled hidden> -->
      <option v-if="modelValue == null" :value="null" disabled hidden>
        {{ placeholder }}
      </option>
    </template>
    <option
      v-for="option in options"
      :value="option"
      :key="option"
      :selected="option === modelValue"
      class="text-gray-900"
    >
      {{ option }}
    </option>
  </select>
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
    options: {
      type: Array,
      required: true,
    },
    label: {
      type: String,
      default: "",
    },
    placeholder: {
      type: String,
    },
    error: {
      type: String,
      default: "",
    },
    modelValue: {
      type: [String, Number],
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

<style>
.select select option:disabled {
    cursor: not-allowed;
    opacity: .5;
}
</style>
