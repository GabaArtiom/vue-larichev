<script setup>
import { computed } from "vue";
import CitySellect from "./CitySellect.vue";
import DayCard from "./DayCard.vue";
import Error from "./Error.vue";
import Stat from "./Stat.vue";
import { errorMap } from "../constants";

const { error, data, activeIndex } = defineProps({
  error: Object,
  data: Object,
  activeIndex: Number,
});

const emit = defineEmits(["select-index", "select-city"]);

const statData = computed(() => {
  if (!data) {
    return [];
  }
  return [
    {
      label: "Влажность",
      stat: data.forecast.forecastday[activeIndex].day.avghumidity + " %",
    },
    {
      label: "Вероятность дождя",
      stat:
        data.forecast.forecastday[activeIndex].day.daily_chance_of_rain + " %",
    },
    {
      label: "Ветер",
      stat: data.forecast.forecastday[activeIndex].day.maxwind_mph + " м/ч",
    },
  ];
});

const errorDisplay = computed(() => {
  return errorMap.get(error?.error?.code);
});
</script>

<template>
  <Error v-if="error" :error="errorDisplay" />
  <div v-if="data" class="card__weather">
    <div class="card__stat">
      <Stat v-for="(item, index) in statData" v-bind="item" :key="index" />
    </div>
    <div class="card__day">
      <DayCard
        v-for="(item, index) in data.forecast.forecastday"
        :key="item.date"
        :weather-code="item.day.condition.code"
        :temp="item.day.avgtemp_c"
        :date="new Date(item.date)"
        :is-active="activeIndex == index"
        @click="() => emit('select-index', index)"
      />
    </div>
  </div>
  <CitySellect />
</template>

<style scoped lang="scss">
.card__weather {
  display: flex;
  flex-direction: column;
  gap: 80px;
  margin-bottom: 70px;
}

.card__stat {
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.card__day {
  display: flex;
  gap: 15px;
}
</style>
