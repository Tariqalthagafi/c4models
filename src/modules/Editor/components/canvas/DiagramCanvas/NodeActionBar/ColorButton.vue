<template>
  <button class="action-btn" @click.stop="pickColor">
    <img src="/nodecontrols/textcolor.svg" alt="color" class="icon" />
  </button>

  <!-- نافذة اختيار اللون -->
  <input 
    v-if="showPicker"
    type="color"
    class="color-picker"
    v-model="color"
    @input="applyColor"
    @blur="closePicker"
  />
</template>

<script setup>
import { ref } from 'vue'


const props = defineProps({
  node: {
    type: Object,
    required: true
  }
})

const showPicker = ref(false)
const color = ref(props.node.color || '#4a90e2')

function pickColor() {
  showPicker.value = true
}

function applyColor() {
  store.changeNodeColor(props.node, color.value)
}

function closePicker() {
  showPicker.value = false
}
</script>

<style scoped>
.action-btn {
  border: none;
  background: #f0f0f0;
  padding: 6px;
  border-radius: 6px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
}

.action-btn:hover {
  background: #e0e0e0;
}

.icon {
  width: 18px;
  height: 18px;
  pointer-events: none;
}

.color-picker {
  position: absolute;
  margin-top: 4px;
  width: 32px;
  height: 32px;
  padding: 0;
  border: none;
  cursor: pointer;
}
</style>
