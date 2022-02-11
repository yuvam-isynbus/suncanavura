<template>
  <p
    aria-live="assertive"
    class="mt-2 text-sm text-red-600"
    :id="id"
  >
    <slot />
  </p>
</template>

<script>
export default {
  props: {
    id: {
      type: [String, Number],
      required: true
    }
  }
}
</script>
