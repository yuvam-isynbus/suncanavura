<template>
  <input
    v-bind="{ ...$attrs, onChange: updateValue }"
    :checked="modelValue"
    :id="uuid"
    type="checkbox"
    class="focus:ring-rose-500 h-4 w-4 text-rose-600 border-2 border-rose-500 rounded"
  />
  <label class="ml-3"
    :for="uuid"
    v-if="label"
  >
    {{ label }}
  </label>
  <BaseErrorMessage
    v-if="error"
    :id="`${uuid}-error`"
  >
    {{ error }}
  </BaseErrorMessage>
</template>

<script>
import UniqueID from './features/UniqueID'
import SetupFormComponent from './features/SetupFormComponent'
import BaseErrorMessage from "@/Form/BaseErrorMessage";
export default {
  emits: ["update:modelValue"],
  components: {
    BaseErrorMessage
  },
  props: {
    label: {
      type: String,
      default: ''
    },
    modelValue: {
      type: Boolean
    },
    error: {
      type: String,
      default: ''
    }
  },
  setup (props, context) {
    const uuid = UniqueID().getID()
    const { updateValue } = SetupFormComponent(props, context)

    return {
      updateValue,
      uuid
    }
  }
}
</script>
