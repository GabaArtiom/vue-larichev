<script setup>
import { computed, inject } from "vue";
import { cityProvide } from "../constants";
import IconSun from "../icons/weather/IconSun.vue";
import IconCloud from "../icons/weather/IconCloud.vue";
import IconRain from "../icons/weather/IconRain.vue";

const { dayData } = defineProps({
  dayData: Object,
});

const city = inject(cityProvide);

const day = computed(() => {
  return new Date(dayData.date).toLocaleDateString("ru-RU", {
    weekday: "long",
  });
});
const date = computed(() => {
  return new Date(dayData.date).toLocaleDateString("ru-RU", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
});
const weatherCode = computed(() => {
  return dayData.day.condition.code;
});
</script>

<template>
  <div class="pane-left">
    <div>
      <div class="pane-left__day">
        {{ day }}
      </div>
      <div class="pane-left__date">
        {{ date }}
      </div>
      <div class="pi pi-map-marker pane-left__city">
        {{ city }}
      </div>
    </div>
    <div>
      <div class="pane-left__wether-icon">
        <IconSun v-if="weatherCode <= 1003" size="95" />
        <IconCloud v-if="weatherCode >= 1006 && weatherCode < 1063" size="95" />
        <IconRain v-if="weatherCode >= 1063" size="95" />
      </div>
      <div class="pane-left__temp">
        {{ dayData.day.avgtemp_c }}
      </div>
      <div class="pane-left__condition">
        {{ dayData.day.condition.text }}
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.pane-left {
  display: flex;
  flex-direction: column;
  padding: 48px 32px;
  justify-content: space-between;
  height: 100%;

  &__day {
    font-size: 37px;
    font-weight: 700;
    text-transform: capitalize;
    margin-bottom: 16px;
  }

  &__date {
    font-size: 22px;
    font-weight: 500;
    margin-bottom: 10px;
  }

  &__wether-icon {
    margin: 25px;
  }

  &__city {
    display: flex;
    gap: 8px;
    align-items: center;
  }

  &__temp {
    font-size: 50px;
    font-weight: 700;
    margin-bottom: 9px;
  }

  &__condition {
    font-size: 30px;
    font-weight: 700;
  }
}
</style>
