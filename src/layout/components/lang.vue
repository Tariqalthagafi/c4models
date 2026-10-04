<template>
  <div class="lang-icon" @click="toggle">
    {{ label }}
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'

const lang = ref('ar')   // اللغة الافتراضية

// النص حسب اللغة
const label = computed(() =>
  lang.value === 'ar' ? 'ع' : 'En'
)

// التبديل بين اللغتين
function toggle() {
  lang.value = lang.value === 'ar' ? 'en' : 'ar'
  console.log("Language changed:", lang.value)
}
</script>

<style scoped>
.lang-icon {
  width: 40px;
  height: 40px;
  background: #f3f3f3;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  font-size: 18px;
  font-weight: bold;
  transition: 0.2s;
  border: 1px solid #ddd;
  user-select: none;
}

.lang-icon:hover {
  background: #e6e6e6;
  transform: scale(1.1);
}
</style>
