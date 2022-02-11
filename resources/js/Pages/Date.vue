<template>
  <div>
    <h1>{{ month }}</h1>
    <list-select v-model="month" :items="months"></list-select>
    <list-select v-model="day" :items="days()"></list-select>
  </div>
</template>

<script>
import { ref } from "vue";
import ListSelect from "@/Form/ListSelect";
export default {
  components: {
    ListSelect,
  },
  setup() {
    const months = {
      0: "January",
      1: "February",
      2: "March",
      3: "April",
      4: "May",
      5: "June",
      6: "July",
      7: "August",
      8: "September",
      9: "October",
      10: "November",
      11: "December",
    };

    const month = ref("Mjesec");
    const day = ref("Dan");

    function days() {
      let days = [];
      let daysNumberOfMonth = new Date(
        // this.selectedYear,
        2000,
        // this.selectedMonth + 1,
        1,
        0
      ).getDate();

      for (let i = 1; i < daysNumberOfMonth + 1; i++) days.push(i);

      return days

      /* return days.map((day) => {
        return { day, selected: days === this.selectedDay };
      }); */
    }

    return {
      month,
      months,
      day,
      days
    };
  },
};
</script>
