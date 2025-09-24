<script setup>
import { ref } from "vue";
import Button from "./Button.vue";
import Input from "./Input.vue";

// const emit = defineEmits(['select-city'])
const emit = defineEmits({
  selectCity(payload) {
    console.log(`Validating payload: ${payload}`);
    return payload;
  },
});

const city = ref("Moscow");
const isEdited = ref(false);

function select() {
  isEdited.value = false;
  emit("selectCity", "New-York");
}

function edit() {
  isEdited.value = true;
}
</script>

<template>
  <div class="city-select">
    {{ city }}
    <div v-if="isEdited" class="city-input">
      <Input v-model="city" placeholder="Введите город" />
      <Button @click="select()">Сохранить</Button>
    </div>
    <Button v-else class="test" @click="edit()">
      <i class="pi pi-map-marker"></i>
      Изменить город
    </Button>
  </div>
</template>

<style scoped lang="scss">
.city-input {
  display: flex;
  gap: 12px;
}
.city-select {
  width: 420px;
}
</style>
