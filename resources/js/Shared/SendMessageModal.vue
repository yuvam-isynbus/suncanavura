<template>
  <modal @modal-close="handleClose">
    <div class="mb-4 mx-auto p-4 bg-gray-300 rounded w-2/3">
      <textarea
        id="message"
        :value="value"
        @input="$emit('input', $event.target.value)"
        class="form-textarea"
        :class="{ error: errors.length}"
      />
      <div v-if="errors.length" class="form-error">{{ errors[0] }}</div>
      <div class="flex">
        <a
          class="block mt-2 mr-4 cursor-pointer text-blue-500 hover:text-orange font-semibold"
          @click="$emit('sendMessage')"
        >Send message</a>
        <a
          class="block mt-2 cursor-pointer text-blue-500 hover:text-orange font-semibold"
          @click="$emit('cancel')"
        >Cancel</a>
      </div>
    </div>
  </modal>
</template>

<script>
import Modal from "@/Shared/Modal";

import _ from "lodash";
export default {
  components: {
    Modal
  },
  props: {
    value: String,
    errors: {
      type: Array,
      default: () => []
    }
  },
  methods: {
    handleClose() {
      this.$emit("close");
    }

    /*     handleConfirm() {
      this.$emit("confirm");
    } */
  }
};
</script>
