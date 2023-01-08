<template>
  <div class="grid rounded-lg bg-white shadow-2xl h-full w-full">
    <div class="tip-amount grid grid-cols-2 content-center h-full w-full pt-2">
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
      <div class="bill-amount">
        <div class="field">
          <input
            type="text"
            id="bill-amount"
            name="bill-amount"
            value="102.02"
          />
        </div>
        <div class="label">Bill Amount</div>
      </div>
      <div class="number-of-people">
        <div class="field">
          <input
            type="text"
            id="number-of-people"
            name="number-of-people"
            value="3"
          />
        </div>
        <div class="label">Number of People</div>
      </div>
    </div>

    <div class="tip-percentages grid grid-cols-4 bg-gray-200">
      <div>
        <input type="radio" name="tip" value="5%" id="five-percent" />
        <label for="five-percent"> 5% </label>
      </div>
      <div>
        <input type="radio" name="tip" value="10%" id="ten-percent" />
        <label for="ten-percent"> 10% </label>
      </div>
      <div>
        <input
          type="radio"
          name="tip"
          checked
          value="15%"
          id="fifteen-percent"
        />
        <label for="fifteen-percent"> 15% </label>
      </div>
      <div>
        <input type="radio" name="tip" value="20%" id="twenty-percent" />
        <label for="twenty-percent"> 20% </label>
      </div>
    </div>

    <div class="button-wrapper bg-gray-100">
      <button id="calculate">Calculate</button>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "TipCalculator",
  data() {
    return {};
  },
});
</script>

<style scoped>
@media (min-width: 1024px) {
}
</style>
