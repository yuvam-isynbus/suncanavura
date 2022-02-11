<template>
  <span
    v-if="name == 'thumb-up'"
    :class="color"
    class="h-8 w-8 rounded-full flex items-center justify-center ring-8 ring-white"
  >
    <svg
      class="h-5 w-5 text-white"
      x-description="Heroicon name: thumb-up"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 20 20"
      fill="currentColor"
      aria-hidden="true"
    >
      <path
        d="M2 10.5a1.5 1.5 0 113 0v6a1.5 1.5 0 01-3 0v-6zM6 10.333v5.43a2 2 0 001.106 1.79l.05.025A4 4 0 008.943 18h5.416a2 2 0 001.962-1.608l1.2-6A2 2 0 0015.56 8H12V4a2 2 0 00-2-2 1 1 0 00-1 1v.667a4 4 0 01-.8 2.4L6.8 7.933a4 4 0 00-.8 2.4z"
      ></path>
    </svg>
  </span>

  <span
    v-else-if="name == 'refresh'"
    :class="color"
    class="h-8 w-8 rounded-full flex items-center justify-center ring-8 ring-white"
  >
    <svg
      class="h-5 w-5 text-white"
      x-description="Heroicon name: refresh"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 20 20"
      fill="currentColor"
    >
      <path
        fill-rule="evenodd"
        d="M4 2a1 1 0 011 1v2.101a7.002 7.002 0 0111.601 2.566 1 1 0 11-1.885.666A5.002 5.002 0 005.999 7H9a1 1 0 010 2H4a1 1 0 01-1-1V3a1 1 0 011-1zm.008 9.057a1 1 0 011.276.61A5.002 5.002 0 0014.001 13H11a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0v-2.101a7.002 7.002 0 01-11.601-2.566 1 1 0 01.61-1.276z"
        clip-rule="evenodd"
      />
    </svg>
  </span>

  <span
    v-else-if="name == 'check'"
    :class="color"
    class="h-8 w-8 rounded-full flex items-center justify-center ring-8 ring-white"
  >
    <svg
      class="h-5 w-5 text-white"
      x-description="Heroicon name: check"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 20 20"
      fill="currentColor"
    >
      <path
        fill-rule="evenodd"
        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
        clip-rule="evenodd"
      />
    </svg>
  </span>

  <span
    v-else-if="name == 'paper-clip'"
    :class="color"
    class="h-8 w-8 rounded-full flex items-center justify-center ring-8 ring-white"
  >
    <svg
      class="h-5 w-5 text-white"
      x-description="Heroicon name: paper-clip"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 20 20"
      fill="currentColor"
    >
      <path
        fill-rule="evenodd"
        d="M8 4a3 3 0 00-3 3v4a5 5 0 0010 0V7a1 1 0 112 0v4a7 7 0 11-14 0V7a5 5 0 0110 0v4a3 3 0 11-6 0V7a1 1 0 012 0v4a1 1 0 102 0V7a3 3 0 00-3-3z"
        clip-rule="evenodd"
      />
    </svg>
  </span>

  <span
    v-else-if="name == 'cash'"
    :class="color"
    class="h-8 w-8 rounded-full flex items-center justify-center ring-8 ring-white"
  >
    <svg
      class="h-5 w-5 text-white"
      x-description="Heroicon name: cash"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 20 20"
      fill="currentColor"
    >
      <path
        fill-rule="evenodd"
        d="M4 4a2 2 0 00-2 2v4a2 2 0 002 2V6h10a2 2 0 00-2-2H4zm2 6a2 2 0 012-2h8a2 2 0 012 2v4a2 2 0 01-2 2H8a2 2 0 01-2-2v-4zm6 4a2 2 0 100-4 2 2 0 000 4z"
        clip-rule="evenodd"
      />
    </svg>
  </span>
</template>

<script>
export default {
  props: {
    name: String,
    color: String,
  },
};
</script>
