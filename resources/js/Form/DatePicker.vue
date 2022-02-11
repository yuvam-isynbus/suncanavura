<template>
  <div class="space-y-1">
    <label
      v-if="label"
      :for="uuid"
      class="block text-sm font-medium leading-5 text-gray-700"
    >
      {{ label }}
    </label>
    <input
      :id="uuid"
      :value="modelValue"
      v-bind="$attrs"
      ref="datepick"
      :placeholder="placeholder"
      autocomplete="off"
    />
    <p v-if="error" class="mt-2 text-sm text-red-600" id="email-error">
      {{ error }}
    </p>
  </div>
</template>

<script>
import Pikaday from "pikaday";
import UniqueID from "./features/UniqueID";
export default {
  emits: ["update:modelValue"],
  inheritAttrs: false,
  props: {
    label: {
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
    format: { default: "YYYY-MM-DD" },
    placeholder: { default: "dd. mm. yyyy." },
    options: { default: {} },
  },
  data() {
    return {
      uuid: UniqueID().getID(),
    };
  },
  mounted() {
    const datePicker = new Pikaday({
      field: this.$refs.datepick,
      format: this.format,
      onSelect: () => {
        this.$emit("update:modelValue", datePicker.toString());
      },
      // ...this.options
      reposition: false,
      position: "bottom right",
      theme: "date-input",
      keyboardInput: false,
      i18n: {
        previousMonth: "Prev",
        nextMonth: "Next",
        months: [
          "Jan",
          "Feb",
          "Mar",
          "Apr",
          "May",
          "Jun",
          "Jul",
          "Aug",
          "Sep",
          "Oct",
          "Nov",
          "Dec",
        ],
        weekdays: [
          "Sunday",
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
        ],
        weekdaysShort: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"],
      },
    });
  },
};
</script>
