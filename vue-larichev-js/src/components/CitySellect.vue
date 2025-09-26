<script setup>
import { inject, ref } from "vue";
import Button from "./Button.vue";
import Input from "./Input.vue";
import { cityProvide } from "../constants";

// const emit = defineEmits(['select-city'])
const emit = defineEmits({
  selectCity(payload) {
    return payload;
  },
});

const city = inject(cityProvide);
const inputValue = ref(city.value);

const isEdited = ref(false);

// onMounted(() => {
//   emit("selectCity", city.value);
// });

function select() {
  isEdited.value = false;
  city.value = inputValue.value;
}

function edit() {
  isEdited.value = true;
}
</script>

<template>
  <div class="city-select">
    <div v-if="isEdited" class="city-input">
      <Input
        v-model="inputValue"
        v-focus
        placeholder="Введите город"
        @keyup.enter="select()"
      />
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
