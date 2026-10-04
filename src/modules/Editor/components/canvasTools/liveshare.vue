<template>
  <div class="btn" @click="showTooltip">
    <img src="./icons/liveshare.svg" alt="live share" class="icon">

    <div v-if="tooltip" class="tooltip">
      الميزة غير مفعّلة
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const tooltip = ref(false)

function showTooltip() {
  tooltip.value = true
  setTimeout(() => {
    tooltip.value = false
  }, 2000)
}
</script>

<style scoped>
.btn {
  position: relative;
  width: 40px;
  height: 40px;
  background: #f3f3f3;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  border: 1px solid #ddd;
  transition: 0.2s;
  user-select: none;
}

.btn:hover {
  opacity: 0.7;
  transform: scale(1.05);
}

.icon {
  width: 22px;
  height: 22px;
  object-fit: contain;
  pointer-events: none;
}

/* Tooltip أسفل الزر */
.tooltip {
  position: absolute;
  bottom: -38px; /* 👈 أسفل الزر */
  left: 50%;
  transform: translateX(-50%);
  background: #000;
  color: #fff;
  padding: 6px 10px;
  font-size: 12px;
  border-radius: 6px;
  white-space: nowrap;
  opacity: 0.9;
}
</style>
