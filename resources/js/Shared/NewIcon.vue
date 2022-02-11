<template>
  <!-- Heroicon name: home -->
  <svg
    v-if="name === 'home'"
    class="group-hover:text-gray-300 mr-4 h-6 w-6"
    :class="[active ? 'text-gray-300' : 'text-gray-400']"
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
  >
    <path
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-width="2"
      d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
    />
  </svg>

  <!-- Heroicon name: shopping-bag -->
  <svg
    v-else-if="name === 'shopping-bag'"
    class="group-hover:text-gray-300 mr-4 h-6 w-6"
    :class="[active ? 'text-gray-300' : 'text-gray-400']"
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
  >
    <path
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-width="2"
      d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
    />
  </svg>
  <!-- Heroicon name: currency-euro -->
  <svg
    v-else-if="name === 'currency-euro'"
    class="group-hover:text-gray-300 mr-4 h-6 w-6"
    :class="[active ? 'text-gray-300' : 'text-gray-400']"
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
  >
    <path
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-width="2"
      d="M14.121 15.536c-1.171 1.952-3.07 1.952-4.242 0-1.172-1.953-1.172-5.119 0-7.072 1.171-1.952 3.07-1.952 4.242 0M8 10.5h4m-4 3h4m9-1.5a9 9 0 11-18 0 9 9 0 0118 0z"
    />
  </svg>
  <!-- Heroicon name: globe -->
  <svg
    v-else-if="name === 'globe'"
    :class="[active ? 'text-gray-300' : 'text-gray-400']"
    class="group-hover:text-gray-300 mr-4 h-6 w-6"
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
  >
    <path
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-width="2"
      d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
    />
  </svg>
  <!-- Heroicon name: user-circle -->
  <svg
    v-else-if="name === 'user-circle'"
    class="group-hover:text-gray-300 mr-4 h-6 w-6"
    :class="[active ? 'text-gray-300' : 'text-gray-400']"
    aria-hidden="true"
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
  >
    <path
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-width="2"
      d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z"
    />
  </svg>
  <!-- Heroicon name: key -->
  <svg
    v-else-if="name === 'key'"
    class="group-hover:text-gray-300 mr-4 h-6 w-6"
    :class="[active ? 'text-gray-300' : 'text-gray-400']"
    aria-hidden="true"
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
  >
    <path
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-width="2"
      d="M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z"
    />
  </svg>

  <!-- Heroicon name: cake -->
  <svg
    class="group-hover:text-gray-300 mr-4 h-6 w-6"
    :class="[active ? 'text-gray-300' : 'text-gray-400']"
    aria-hidden="true"
    v-else-if="name === 'cake'"
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
  >
    <path
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-width="2"
      d="M21 15.546c-.523 0-1.046.151-1.5.454a2.704 2.704 0 01-3 0 2.704 2.704 0 00-3 0 2.704 2.704 0 01-3 0 2.704 2.704 0 00-3 0 2.704 2.704 0 01-3 0 2.701 2.701 0 00-1.5-.454M9 6v2m3-2v2m3-2v2M9 3h.01M12 3h.01M15 3h.01M21 21v-7a2 2 0 00-2-2H5a2 2 0 00-2 2v7h18zm-3-9v-2a2 2 0 00-2-2H8a2 2 0 00-2 2v2h12z"
    />
  </svg>
  <!-- Heroicon name: cash -->
  <svg
    class="group-hover:text-gray-300 mr-4 h-6 w-6"
    :class="[active ? 'text-gray-300' : 'text-gray-400']"
    aria-hidden="true"
    v-else-if="name === 'cash'"
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
  >
    <path
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-width="2"
      d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z"
    />
  </svg>
  <!-- Heroicon name: color-swatch -->
  <svg
    class="group-hover:text-gray-300 mr-4 h-6 w-6"
    :class="[active ? 'text-gray-300' : 'text-gray-400']"
    aria-hidden="true"
    v-else-if="name === 'color-swatch'"
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
  >
    <path
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-width="2"
      d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01"
    />
  </svg>

  <!-- Heroicon name: emoji-happy -->
  <svg
    class="group-hover:text-gray-300 mr-4 h-6 w-6"
    :class="[active ? 'text-gray-300' : 'text-gray-400']"
    aria-hidden="true"
    v-else-if="name === 'emoji-happy'"
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
  >
    <path
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-width="2"
      d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
    />
  </svg>

  <!-- Heroicon name: inbox -->
  <svg
    class="group-hover:text-gray-300 mr-4 h-6 w-6"
    :class="[active ? 'text-gray-300' : 'text-gray-400']"
    aria-hidden="true"
    v-else-if="name === 'inbox'"
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
  >
    <path
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-width="2"
      d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4"
    />
  </svg>

  <!-- Heroicon name: bell -->
  <svg
    class="group-hover:text-gray-300 mr-4 h-6 w-6"
    :class="[active ? 'text-gray-300' : 'text-gray-400']"
    aria-hidden="true"
    v-else-if="name === 'bell'"
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
  >
    <path
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-width="2"
      d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
    />
  </svg>

  <!-- Heroicon name: information-circle -->
  <svg
    class="group-hover:text-gray-300 mr-4 h-6 w-6"
    :class="[active ? 'text-gray-300' : 'text-gray-400']"
    aria-hidden="true"
    v-else-if="name === 'information-circle'"
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
  >
    <path
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-width="2"
      d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
    />
  </svg>

  <!-- Heroicon name: table -->
  <svg
    class="group-hover:text-gray-300 mr-4 h-6 w-6"
    :class="[active ? 'text-gray-300' : 'text-gray-400']"
    aria-hidden="true"
    v-else-if="name === 'table'"
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
  >
    <path
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-width="2"
      d="M3 10h18M3 14h18m-9-4v8m-7 0h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"
    />
  </svg>

  <!-- Heroicon name: users -->
  <svg
    class="group-hover:text-gray-300 mr-4 h-6 w-6"
    v-bind="$attrs"
    :class="[active ? 'text-gray-300' : 'text-gray-400']"
    aria-hidden="true"
    v-else-if="name === 'users'"
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
  >
    <path
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-width="2"
      d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
    />
  </svg>

  <!-- Heroicon name: user-add -->
  <svg
    class="group-hover:text-gray-300 mr-4 h-6 w-6"
    v-bind="$attrs"
    :class="[active ? 'text-gray-300' : 'text-gray-400']"
    aria-hidden="true"
    v-else-if="name === 'user-add'"
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
  >
    <path
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-width="2"
      d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z"
    />
  </svg>

  <!-- Heroicon name: sparkles -->
  <svg
    class="group-hover:text-gray-300 mr-4 h-6 w-6"
    v-bind="$attrs"
    :class="[active ? 'text-gray-300' : 'text-gray-400']"
    aria-hidden="true"
    v-else-if="name === 'sparkles'"
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
  >
    <path
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-width="2"
      d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
    />
  </svg>

  <!-- Heroicon name: photograph -->
  <svg
    class="group-hover:text-gray-300 mr-4 h-6 w-6"
    :class="[active ? 'text-gray-300' : 'text-gray-400']"
    aria-hidden="true"
    v-else-if="name === 'photograph'"
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
  >
    <path
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-width="2"
      d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
    />
  </svg>

  <GlobeAltIcon v-else-if="name === 'globe-alt'" class="group-hover:text-gray-300 mr-4 h-6 w-6" :class="[active ? 'text-gray-300' : 'text-gray-400']"/>
  <LocationMarkerIcon v-else-if="name === 'location-marker'" class="group-hover:text-gray-300 mr-4 h-6 w-6" :class="[active ? 'text-gray-300' : 'text-gray-400']"/>
  <BriefcaseIcon v-else-if="name === 'briefcase'" class="group-hover:text-gray-300 mr-4 h-6 w-6" :class="[active ? 'text-gray-300' : 'text-gray-400']"/>
  <CreditCardIcon v-else-if="name === 'credit-card'" class="group-hover:text-gray-300 mr-4 h-6 w-6" :class="[active ? 'text-gray-300' : 'text-gray-400']"/>
  <PaperClipIcon v-else-if="name === 'paper-clip'" class="group-hover:text-gray-300 mr-4 h-6 w-6" :class="[active ? 'text-gray-300' : 'text-gray-400']"/>
  <DownloadIcon v-else-if="name === 'download'" class="group-hover:text-gray-300 mr-4 h-5 w-5" :class="[active ? 'text-gray-300' : 'text-gray-400']"/>
  <ArrowsExpandIcon v-else-if="name === 'arrows-expand'" class="group-hover:text-gray-300 mr-4 h-5 w-5" :class="[active ? 'text-gray-300' : 'text-gray-400']"/>
</template>

<script>
import { GlobeAltIcon, LocationMarkerIcon, BriefcaseIcon, CreditCardIcon, PaperClipIcon, DownloadIcon, ArrowsExpandIcon } from '@heroicons/vue/outline'
export default {
  props: {
    name: String,
    active: Boolean,
  },
  components: { GlobeAltIcon, LocationMarkerIcon, BriefcaseIcon, CreditCardIcon, PaperClipIcon, DownloadIcon, ArrowsExpandIcon }
};
</script>
