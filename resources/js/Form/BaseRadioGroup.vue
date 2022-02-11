<template>
  <div>
    <component
      v-for="opts in options"
      :key="opts.value"
      :is="vertical ? 'div' : 'span'"
      :style="vertical ? '' : 'margin-right: 20px;'"
      class="flex items-center"
    >
      <BaseRadio
        :name="name"
        :label="opts.label"
        :modelValue="modelValue"
        :value="opts.value"
        @update:modelValue="$emit('update:modelValue', $event)"
      />
    </component>
  </div>
</template>

<script>
import BaseRadio from "@/Form/BaseRadio";
export default {
  components: {
    BaseRadio
  },
  props: {
    vertical: {
      type: Boolean,
      default: false
    },
    modelValue: {
      type: [String, Number],
      required: true
    },
    options: {
      type: Array,
      required: true
    },
    name: {
      type: String,
      required: true
    }
  }
}
</script>
