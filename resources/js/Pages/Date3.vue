<template>
  <div>
    <h1>Vue Date Dropdown</h1>
    <p>
      You selected: <strong>{{ selectedValue }}</strong>
    </p>

    <BaseSelect
        label="Select a category"
        :options="categories"
        v-model="selectedValue"
        placeholder="Dan"
      />

<!--     <date-dropdown
      min="1960"
      max="2020"
      v-model="selectedDate"
    >
    </date-dropdown> -->
  </div>
</template>

<script>
import DateDropdown from "@/Form/DateDropdown";
import BaseSelect from "@/Form/BaseSelect";
export default {
  components: {
    DateDropdown,
    BaseSelect,
  },
  data() {
    return {
        categories: [
        'sustainability',
        'nature',
        'housing',
      ],
      selectedValue: null,
    };
  },
};
</script>

<style>
</style>
