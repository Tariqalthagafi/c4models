<template>
  <div class="add-version-wrapper">

    <!-- زر إضافة إصدار -->
    <button class="add-btn" @click="togglePopup">+</button>

    <!-- البوب أب -->
    <div v-if="showPopup" class="popup">
      <h4>إصدار جديد</h4>

      <!-- التحكم في Major -->
      <div class="row">
        <span>Major</span>
        <button @click="major--" :disabled="major <= 0">-</button>
        <span class="num">{{ major }}</span>
        <button @click="major++">+</button>
      </div>

      <!-- التحكم في Minor -->
      <div class="row">
        <span>Minor</span>
        <button @click="minor--" :disabled="minor <= 0">-</button>
        <span class="num">{{ minor }}</span>
        <button @click="minor++">+</button>
      </div>

      <!-- زر اعتماد الإصدار -->
      <button class="apply-btn" @click="applyVersion">
        إنشاء الإصدار الجديد
      </button>
    </div>

  </div>
</template>

<script setup>
import { ref } from 'vue'

const emit = defineEmits(['create'])

const major = ref(1)
const minor = ref(0)

const showPopup = ref(false)

function togglePopup() {
  showPopup.value = !showPopup.value
}

function applyVersion() {
  emit('create', {
    major: major.value,
    minor: minor.value
  })
  showPopup.value = false
}
</script>

<style scoped>
.add-version-wrapper {
  position: relative;
}

/* زر + */
.add-btn {
  width: 32px;
  height: 32px;
  background: #fff;
  border: 1px solid #000;
  border-radius: 6px;
  cursor: pointer;
  font-size: 18px;
  font-weight: bold;
  transition: 0.2s;
}

.add-btn:hover {
  background: #000;
  color: #fff;
}

/* البوب أب */
.popup {
  position: absolute;
  top: 40px;
  left: 0;
  background: #fff;
  border: 1px solid #ddd;
  padding: 12px;
  border-radius: 8px;
  width: 180px;
  box-shadow: 0 4px 10px rgba(0,0,0,0.1);
}

.popup h4 {
  margin: 0 0 10px 0;
  font-size: 14px;
  font-weight: bold;
}

/* صف التحكم */
.row {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 8px;
}

.row span {
  font-size: 13px;
}

.row .num {
  width: 30px;
  text-align: center;
  font-weight: bold;
}

.row button {
  width: 26px;
  height: 26px;
  border: 1px solid #000;
  background: #fff;
  cursor: pointer;
  border-radius: 4px;
}

.row button:hover {
  background: #000;
  color: #fff;
}

/* زر اعتماد الإصدار */
.apply-btn {
  width: 100%;
  padding: 6px;
  background: #000;
  color: #fff;
  border-radius: 6px;
  cursor: pointer;
  margin-top: 10px;
}
</style>
