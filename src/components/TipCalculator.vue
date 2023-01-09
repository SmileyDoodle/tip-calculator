<template>
  <div class="grid rounded-lg bg-white shadow-2xl h-full w-full">
    <div
      class="tip-amount grid grid-cols-2 content-center h-full w-full pt-2 border-b-2 border-gray-100"
    >
      <div
        class="label font-bold text-right flex items-center justify-end pr-6"
      >
        Tip Amount
      </div>
      <div class="dollars font-bold">
        <sup class="text-4xl">$</sup
        ><span id="tip-amount" class="text-6xl">15.30</span>
      </div>
    </div>
    <div class="total-per-person grid grid-cols-2 content-center h-full w-full">
      <div
        class="label font-bold text-right flex items-center justify-end pr-6"
      >
        Total Per Person
      </div>
      <div class="dollars font-bold">
        <sup class="text-4xl">$</sup
        ><span id="total-per-person" class="text-6xl">39.11</span>
      </div>
    </div>

    <div class="input-fields grid grid-cols-2 bg-gray-100">
      <div class="bill-amount pt-8 border-r-2 border-gray-200">
        <div class="field flex items-baseline pl-6">
          <DollarIcon class="h-[25px] w-[25px]" />
          <input
            type="text"
            id="bill-amount"
            name="bill-amount"
            value="102.02"
            class="bg-gray-100 text-center mr-[10px] w-4/5 text-4xl rounded-none bg-transparent outline-0"
          />
        </div>
        <div class="label font-bold text-center pt-2">Bill Amount</div>
      </div>
      <div class="number-of-people pt-8">
        <div class="field flex items-baseline pl-6">
          <PeopleIcon class="h-[25px] w-[25px]" />
          <input
            type="text"
            id="number-of-people"
            name="number-of-people"
            value="3"
            class="bg-gray-100 text-center mr-[10px] w-4/5 text-4xl rounded-none bg-transparent outline-0"
          />
        </div>
        <div class="label font-bold text-center pt-2">Number of People</div>
      </div>
    </div>

    <div class="tip-percentages grid grid-cols-4 bg-gray-200">
      <div class="flex items-center justify-center">
        <input type="radio" name="tip" value="5%" id="five-percent" />
        <label
          for="five-percent"
          class="tip-percentages-btn rounded-lg px-8 py-2 bg-white"
        >
          5%
        </label>
      </div>
      <div class="flex items-center justify-center">
        <input type="radio" name="tip" value="10%" id="ten-percent" />
        <label
          for="ten-percent"
          class="tip-percentages-btn rounded-lg px-8 py-2 bg-white"
        >
          10%
        </label>
      </div>
      <div class="flex items-center justify-center">
        <input
          type="radio"
          name="tip"
          checked
          value="15%"
          id="fifteen-percent"
        />
        <label
          for="fifteen-percent"
          class="tip-percentages-btn rounded-lg px-8 py-2 bg-white"
        >
          15%
        </label>
      </div>
      <div class="flex items-center justify-center">
        <input type="radio" name="tip" value="20%" id="twenty-percent" />
        <label
          for="twenty-percent"
          class="tip-percentages-btn rounded-lg px-8 py-2 bg-white"
        >
          20%
        </label>
      </div>
    </div>

    <div class="button-wrapper bg-gray-100 flex items-center justify-end pr-7">
      <button
        id="calculate"
        class="bg-orange-600 rounded-lg px-4 py-2 text-white hover:bg-orange-700"
      >
        Calculate
      </button>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import DollarIcon from "../components/icons/DollarIcon.vue";
import PeopleIcon from "../components/icons/PeopleIcon.vue";

export default defineComponent({
  name: "TipCalculator",
  components: {
    DollarIcon,
    PeopleIcon,
  },
  data() {
    return {};
  },
});
</script>

<style scoped>
@media (min-width: 1024px) {
}
</style>
