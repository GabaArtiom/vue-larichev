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

cosnt API_ENDPOINT

const savedCity = ref("Moscow");
const data = ref({
  humidity: 90,
  rain: 0,
  wind: 3,
});

const dataModified = computed(() => {
  return [
    {
      label: "Влажность",
      stat: data.value.humidity + "%",
    },
    {
      label: "Осадки",
      stat: data.value.rain + "%",
    },
    {
      label: "Ветер",
      stat: data.value.wind + "м/ч",
    },
  ];
});

async function getCity(city) {
}
</script>

<template>
  <!-- <ul> -->
  <!--   <li v-for="(item, index) in arr" :key="index">{{ index }}: {{ item }}</li> -->
  <!--   <li v-for="(value, key, index) in obj" :key="key">{{ index }}: {{ value }}, {{ key }}</li> -->
  <!-- </ul> -->
  <div class="card">
    <div class="card__right">
      <div id="city">{{ savedCity }}</div>
      <Stat v-for="(item, index) in dataModified" v-bind="item" :key="index" />
      <CitySellect @select-city="getCity" />
    </div>
  </div>
</template>

<style scoped lang="scss">
.card {
  &__right {
    padding: 60px 50px;
    border-radius: 25px;
    background: var(--color-bg-main);
  }
}
</style>
