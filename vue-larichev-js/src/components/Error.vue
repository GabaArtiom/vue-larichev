<script setup>
const props = defineProps({
  error: String,
});
</script>

<template>
  <div v-if="props.error" class="error">{{ props.error }}</div>
</template>

<style scoped lang="scss">
.error {
  font-size: 18px;
  padding: 15px;
  text-align: center;
  background: var(--color-bg-card);
  border-radius: 0 0 25px 25px;
  margin: -60px 0 60px;
}
</style>
