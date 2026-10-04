<template>
  <div class="theme-icon" @click="toggle">
    {{ icon }}
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'

const mode = ref('light')

const icon = computed(() =>
  mode.value === 'light' ? '☀️' : '🌙'
)

function toggle() {
  mode.value = mode.value === 'light' ? 'dark' : 'light'
  console.log("Theme changed:", mode.value)
}
</script>

<style scoped>
.theme-icon {
  width: 40px;
  height: 40px;
  background: #f3f3f3;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  font-size: 22px;
  transition: 0.2s;
  border: 1px solid #ddd;
  user-select: none;
}

.theme-icon:hover {
  background: #e6e6e6;
  transform: scale(1.1);
}
</style>
