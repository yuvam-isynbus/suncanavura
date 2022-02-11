<template>
  <img v-if="avatar" :src="avatar" class="rounded-full" />
  <div
    v-else
    class="text-blue-500 inline-flex justify-center items-center bg-blue-100 font-semibold rounded-full"
  >{{ caps }}</div>
</template>

<script>
export default {
  props: {
    name: String,
    avatar: {
      type: [String],
      required: false,
      default: null
    }
  },
  computed: {
    caps: function() {
      let initials = this.name.match(/\b\w/g) || [];
      initials = (
        (initials.shift() || "") + (initials.pop() || "")
      ).toUpperCase();
      return initials;
    }
  }
};
</script>
