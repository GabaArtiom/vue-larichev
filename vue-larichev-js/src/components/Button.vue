<script setup></script>

<template>
  <button class="button" type="button">Кнопка</button>
</template>

<style scoped>
.button {
  font-family: var(--font);
  font-size: 20px;
  font-weight: 600;
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
