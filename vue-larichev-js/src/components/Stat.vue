<script setup>
// const props = defineProps(["label", "stat"]);
const {label = "Не задан", stat} = defineProps({
  label: String,
  stat: String,
});
</script>

<template>
  <div class="stat">
    <div class="stat__name">{{ label }}</div>
    <div class="stat__value">{{ stat }}</div>
  </div>
</template>

<style scoped lang="scss">
.stat {
  display: flex;
  justify-content: space-between;
  gap: 16px;
  font-size: 28px;

  &__name {
    font-weight: 700;
    text-transform: uppercase;
  }

  &__value {
    font-weight: 500;
  }
}
</style>
