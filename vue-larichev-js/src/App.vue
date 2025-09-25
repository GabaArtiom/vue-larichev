<script setup>
// // Есть unwrap
// const counter = reactive({
//   count: ref(0),
// });
// counter.count++;
//
// // Нет unwrap
// const map = reactive(new Map([["count", ref(0)]]));
// map.get("count").value;
//
// // Нет unwrap
// const arr = reactive([ref(0)]);
// arr[0].value;
//
// const obj = { id: ref(1) };
// const id = obj.id

// const arr = ref(["Max", "Anton", "Artiom"]);
// const obj = ref({
//   name: "Artiom",
//   age: 18,
// });

import Stat from "./components/Stat.vue";
import CitySellect from "./components/CitySellect.vue";
import { computed, ref } from "vue";
import Error from "./components/Error.vue";
import DayCard from "./components/DayCard.vue";

const API_ENDPOINT = "https://api.weatherapi.com/v1";

const errorMap = new Map([[1006, "Указанный город не найден"]]);

const data = ref();
const error = ref();
const errorDisplay = computed(() => {
  return errorMap.get(error.value?.error?.code);
});

const dataModified = computed(() => {
  if (!data.value) {
    return [];
  }
  return [
    {
      label: "Влажность",
      stat: data.value.current.humidity + " %",
    },
    {
      label: "Облачность",
      stat: data.value.current.cloud + " %",
    },
    {
      label: "Ветер",
      stat: data.value.current.wind_mph + " м/ч",
    },
  ];
});

async function getCity(city) {
  const params = new URLSearchParams({
    q: city,
    lang: "ru",
    key: "713d7447fb1943d19b971643252509",
    days: 3,
  });
  const res = await fetch(`${API_ENDPOINT}/forecast.json?${params.toString()}`);
  if (res.status != 200) {
    error.value = await res.json();
    data.value = null;
    return;
  }
  error.value = null;
  data.value = await res.json();
  console.log(data.value);
}
</script>

<template>
  <!-- <ul> -->
  <!--   <li v-for="(item, index) in arr" :key="index">{{ index }}: {{ item }}</li> -->
  <!--   <li v-for="(value, key, index) in obj" :key="key">{{ index }}: {{ value }}, {{ key }}</li> -->
  <!-- </ul> -->
  <div class="card">
    <div class="card__right">
      <Error :error="errorDisplay" />
      <!-- <IconRain /> -->
      <!-- <IconCloud /> -->
      <div v-if="data">
        <Stat v-for="(item, index) in dataModified" v-bind="item" :key="index" />
        <div>
          <DayCard
            v-for="item in data.forecast.forecastday"
            :key="item.date"
            :weather-code="item.day.condition.code"
            :temp="item.day.avgtemp_c"
            :date="new Date(item.date)" />
        </div>
      </div>
      <CitySellect @select-city="getCity" />
    </div>
  </div>
</template>

<div></div>

<style scoped lang="scss">
.card {
  &__right {
    padding: 60px 50px;
    border-radius: 25px;
    background: var(--color-bg-main);
  }
}
</style>
