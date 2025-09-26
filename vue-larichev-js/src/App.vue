<script setup>
import { onMounted, provide, ref, watch } from "vue";
import PaneRight from "./components/PaneRight.vue";
import { API_ENDPOINT, cityProvide } from "./constants";
import PaneLeft from "./components/PaneLeft.vue";

const data = ref();
const error = ref();
const activeIndex = ref(0);

let city = ref("Москва");
provide(cityProvide, city);

watch(city, () => {
  getCity(city.value);
});

onMounted(() => {
  getCity(city.value);
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
  <div class="card">
    <div class="card__left">
      <PaneLeft
        v-if="data"
        :day-data="data.forecast.forecastday[activeIndex]"
      />
    </div>
    <div class="card__right">
      <PaneRight
        :data
        :error
        :active-index="activeIndex"
        @select-index="(index) => (activeIndex = index)"
      />
    </div>
  </div>
</template>

<style scoped lang="scss">
.card {
  display: flex;
  align-items: center;
  justify-content: center;

  &__left {
    width: 500px;
    height: 660px;
    border-radius: 30px;
    background-image: url(/bg.png);
    background-repeat: no-repeat;
    background-size: cover;
  }

  &__right {
    padding: 60px 50px;
    border-radius: 25px;
    background: var(--color-bg-main);
  }
}
</style>
