<template>
  <button class="open-btn" @click="openFile">
    فتح مشروع من الجهاز
  </button>
</template>

<script setup lang="ts">
const emit = defineEmits<{
  (e: 'load', project: any): void
  (e: 'error', message: string): void
}>()

function openFile() {
  const input = document.createElement('input')
  input.type = 'file'
  input.accept = 'application/json'

  input.onchange = async (e: any) => {
    const file = e.target.files[0]
    if (!file) return

    const text = await file.text()

    try {
      const json = JSON.parse(text)

      // التحقق من أن الملف V3
      if (!json.meta || json.meta.schemaVersion !== 3) {
        emit('error', '⚠️ الملف الذي قمت بفتحه ليس مشروعًا بصيغة V3')
        return
      }

      emit('load', json)
    } catch (err) {
      emit('error', '⚠️ الملف ليس JSON صالح')
    }
  }

  input.click()
}
</script>

<style scoped>
.open-btn {
  background: #fff;
  color: #000;
  border: 1px solid #000;
  padding: 6px 12px;
  font-size: 14px;
  cursor: pointer;
  border-radius: 4px;
  transition: 0.2s;
  width: fit-content;
}

.open-btn:hover {
  background: #000;
  color: #fff;
}
</style>
