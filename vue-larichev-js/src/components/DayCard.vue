<script setup>
import IconRain from "../icons/weather/IconRain.vue";
import IconSun from "../icons/weather/IconSun.vue";
import IconCloud from "../icons/weather/IconCloud.vue";
import { computed } from "vue";
const { weatherCode, temp, date, isActive } = defineProps({
  weatherCode: Number,
  temp: Number,
  date: Date,
  isActive: Boolean,
});

const iconColor = computed(() => {
  return isActive ? "var(--color-primary-inverted)" : "var(--color-primary)";
});
</script>

<template>
  <button class="day-card" :class="{ active: isActive }">
    <IconSun v-if="weatherCode <= 1003" :color="iconColor" />
    <IconCloud
      v-if="weatherCode >= 1006 && weatherCode < 1063"
      :color="iconColor"
    />
    <IconRain v-if="weatherCode >= 1063" :color="iconColor" />
    <div class="day-card__date">
      {{ date.toLocaleDateString("ru-RU", { weekday: "short" }) }}
    </div>
    <div class="day-card__temp">{{ temp }} &deg;C</div>
  </button>
</template>

<style scoped lang="scss">
.day-card {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  gap: 15px;
  padding: 20px 24px;
  color: var(--color-primary);
  background: var(--color-bg-card);
  border-radius: 10px;
  border: none;
  box-shadow: 1px 2px 4px 0px var(--color-bg-main);
  cursor: pointer;

  &__date {
    font-size: 20px;
  }

  &__temp {
    font-size: 20px;
    font-weight: 700;
  }
}

.day-card:not(.active):hover {
  background: #3a434f;
}

.active {
  background-color: var(--color-primary);
  color: var(--color-primary-inverted);
}
</style>
