<script setup></script>

<template>
  <button class="button" type="button">
    <slot />
  </button>
</template>

<style scoped>
.button {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  font-family: var(--font);
  font-size: 20px;
  font-weight: 600;
  width: 100%;
  height: 53px;
  padding: 14px;
  border: none;
  border-radius: 10px;
  background: var(--gradient);
  color: var(--color-primary);
  transition: ease 0.3s;
  cursor: pointer;
}

.button:hover {
  background: var(--gradient-inverted);
}
</style>
