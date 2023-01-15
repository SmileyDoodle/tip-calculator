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
        ><span id="tip-amount" class="text-6xl">{{ tipAmount }}</span>
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
        ><span id="total-per-person" class="text-6xl">{{
          totalPerPerson
        }}</span>
      </div>
    </div>

    <div class="input-fields grid grid-cols-2 bg-gray-100">
      <div class="bill-amount pt-8 border-r-2 border-gray-200">
        <div class="field flex items-baseline pl-6">
          <DollarIcon class="h-[25px] w-[25px]" />
          <input
            type="number"
            min="0"
            placeholder="0"
            id="bill-amount"
            name="bill-amount"
            v-model="billAmount"
            ref="billamount"
            class="bg-gray-100 text-center mr-[10px] w-4/5 text-4xl rounded-none bg-transparent outline-0"
            data-cy="billamount"
          />
        </div>
        <div class="label font-bold text-center pt-2">Bill Amount</div>
      </div>
      <div class="number-of-people pt-8">
        <div class="field flex items-baseline pl-6">
          <PeopleIcon class="h-[25px] w-[25px]" />
          <input
            type="number"
            min="0"
            placeholder="0"
            id="number-of-people"
            name="number-of-people"
            v-model="numberOfPeople"
            ref="numberofpeople"
            class="bg-gray-100 text-center mr-[10px] w-4/5 text-4xl rounded-none bg-transparent outline-0"
            data-cy="numberofpeople"
          />
        </div>
        <div class="label font-bold text-center pt-2">Number of People</div>
      </div>
    </div>

    <div class="tip-percentages grid bg-gray-200">
      <div class="grid grid-cols-4 p-2">
        <div
          class="flex items-center justify-center"
          v-for="(percentage, index) in percentages"
          :key="index"
        >
          <input
            type="radio"
            name="tip"
            :value="percentage.value"
            :id="`${percentage.label}-percent`"
            @click="getPercentage(percentage.value)"
            :data-cy="`${percentage.label}-percent`"
          />
          <label
            :for="`${percentage.label}-percent`"
            class="tip-percentages-btn rounded-lg px-8 py-2 bg-white hover:bg-zinc-100"
          >
            {{ percentage.text }}
          </label>
        </div>
      </div>
    </div>

    <div class="button-wrapper bg-gray-100 flex items-center justify-end pr-7">
      <button
        id="calculate"
        class="bg-orange-600 rounded-lg px-4 py-2 text-white hover:bg-orange-700"
        :class="{
          'cursor-not-allowed disabled:opacity-50': !verificationFailed,
        }"
        :disabled="!verificationFailed"
        @click="calculate()"
        data-cy="calculate-btn"
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
    return {
      tipAmount: 0 as number,
      totalPerPerson: 0 as number,
      billAmount: (0 as number) || null,
      numberOfPeople: (0 as number) || null,
      percentages: [
        { value: 0.05, text: "5%", label: "five" },
        { value: 0.1, text: "10%", label: "ten" },
        { value: 0.15, text: "15%", label: "fifteen" },
        { value: 0.2, text: "20%", label: "twenty" },
      ],
      checked: 0 as number,
      percentageBill: 0 as number,
    };
  },
  computed: {
    verificationFailed(): boolean {
      if (this.numberOfPeople && this.billAmount && this.checked) {
        return true;
      }
      return false;
    },
  },
  mounted() {
    this.$refs.billamount.focus();
  },
  methods: {
    getPercentage(value: number) {
      this.checked = value;
    },
    calculate() {
      if (this.billAmount && this.numberOfPeople && this.checked) {
        this.percentageBill = this.billAmount * this.checked;

        this.tipAmountCalculation();
        this.totalPerPersonCalculation();
      }
    },
    tipAmountCalculation() {
      if (this.billAmount && this.numberOfPeople && this.checked) {
        this.tipAmount = Number(
          (this.percentageBill * this.numberOfPeople).toFixed(2)
        );
      }
    },
    totalPerPersonCalculation() {
      if (this.billAmount && this.numberOfPeople && this.checked) {
        const eachperson = this.billAmount / this.numberOfPeople;
        this.totalPerPerson = Number(
          (this.percentageBill + eachperson).toFixed(2)
        );
      }
    },
  },
});
</script>

<style scoped>
@media (min-width: 1024px) {
}
</style>
