<template>
  <section class="p-8">
    <!-- <h1 class="text-2xl text-red-600">{{ selected }}</h1> -->
    <div class="max-w-3xl mx-auto">
  <autocomplete
    :search="search"
    placeholder="Search for a country"
    aria-label="Search for a country"
  >
    <template
      #default="{
        rootProps,
        inputProps,
        inputListeners,
        resultListProps,
        resultListListeners,
        results,
        resultProps
      }"
    >
      <div v-bind="rootProps">
        <custom-input
          v-bind="inputProps"
          v-on="inputListeners"
          :class="[
            'autocomplete-input',
            { 'autocomplete-input-no-results': noResults },
            { 'autocomplete-input-focused': focused }
          ]"
          @focus="handleFocus"
          @blur="handleBlur"
        ></custom-input>
        <ul
          v-if="noResults"
          class="autocomplete-result-list"
          style="position: absolute; z-index: 1; width: 100%; top: 100%;"
        >
          <li class="autocomplete-result">
            No results found
          </li>
        </ul>
        <ul v-bind="resultListProps" v-on="resultListListeners">
          <li
            v-for="(result, index) in results"
            :key="resultProps[index].id"
            v-bind="resultProps[index]"
          >
            {{ result }}
          </li>
        </ul>
      </div>
    </template>
  </autocomplete>
    </div>
  </section>
</template>

<script>
import Autocomplete from "@/Autocomplete/Autocomplete";
import CustomInput from "@/Autocomplete/CustomInput";
export default {
  components: {
    Autocomplete,
    CustomInput,
  },
  data() {
    return {
      focused: false,
      value: "",
      results: [],
    };
  },
  computed: {
    noResults() {
      return this.value && this.results.length === 0;
    },
  },
  methods: {
    search(input) {
      this.value = input;
      if (input.length < 1) {
        this.results = [];
      } else {
        this.results = countries.filter((country) => {
          return country.toLowerCase().startsWith(input.toLowerCase());
        });
      }
      return this.results;
    },

    handleFocus() {
      this.focused = true;
    },

    handleBlur() {
      this.focused = false;
    },
  },
};
const countries = [
  "Afghanistan",
  "Albania",
  "Algeria",
  "Andorra",
  "Angola",
  "Antigua & Barbuda",
  "Argentina",
  "Armenia",
  "Australia",
  "Austria",
  "Azerbaijan",
  "Bahamas",
  "Bahrain",
  "Bangladesh",
  "Barbados",
  "Belarus",
  "Belgium",
  "Belize",
  "Benin",
  "Bhutan",
  "Bolivia",
  "Bosnia & Herzegovina",
  "Botswana",
  "Brazil",
  "Brunei",
  "Bulgaria",
  "Burkina Faso",
  "Burundi",
  "Cambodia",
  "Cameroon",
  "Canada",
  "Cape Verde",
  "Central African Republic",
  "Chad",
  "Chile",
  "China",
  "Colombia",
  "Comoros",
  "Congo",
  "Congo Democratic Republic",
  "Costa Rica",
  "Cote D'Ivoire",
  "Croatia",
  "Cuba",
  "Cyprus",
  "Czech Republic",
  "Denmark",
  "Djibouti",
  "Dominica",
  "Dominican Republic",
  "East Timor",
  "Ecuador",
  "Egypt",
  "El Salvador",
  "Equatorial Guinea",
  "Eritrea",
  "Estonia",
  "Ethiopia",
  "Fiji",
];
</script>
