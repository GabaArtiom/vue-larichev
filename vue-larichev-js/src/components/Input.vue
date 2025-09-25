<script setup>
const data = defineModel({ type: String, required: true });
</script>

<template>
  <input v-model="data" class="input" />
</template>

<style scoped lang="scss">
.input {
  color: var(--color-primary);
  font-size: 18px;
  padding: 15px 20px;
  max-width: 260px;
  height: 53px;
  border: none;
  border-radius: 10px;
  background: var(--color-bg-card);
  box-shadow: 1px 2px 4px 0px var(--color-bg-main);

  &::placeholder {
    color: var(--color-text-placeholder);
  }
}
</style>
