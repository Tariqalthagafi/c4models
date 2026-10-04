<template>
  <div class="viewer">

    <!-- الهيدر العلوي -->
    <div class="header">

      <button class="back-btn" @click="goBack">← رجوع</button>

      <div v-if="project" class="version-switcher">
        <label>الإصدار:</label>
        <select v-model="selectedVersionId">
          <option
            v-for="v in project.versions"
            :key="v.id"
            :value="v.id"
          >
            {{ v.title }}
          </option>
        </select>
      </div>

      <div v-if="project" class="view-modes">
        <button
          class="view-btn"
          :class="{ active: viewMode === 'cards' }"
          @click="viewMode = 'cards'"
        >
          البطاقات
        </button>

        <button
          class="view-btn"
          :class="{ active: viewMode === 'tree' }"
          @click="viewMode = 'tree'"
        >
          الشجرة
        </button>
      </div>

    

      <!-- زر عرض النماذج -->
<div class="models-wrapper">
  <button class="models-btn" @click="toggleModels">
    عرض النماذج ▼
  </button>

  <div v-if="showModels" class="models-dropdown">
    <div
      v-for="file in modelFiles"
      :key="file"
      class="model-item"
    >
      <span>{{ file }}</span>

      <div class="model-actions">
        <button @click="openModel(file)">عرض</button>
        <button @click="downloadModel(file)">تحميل</button>
      </div>
    </div>
  </div>
</div>

  <button class="open-btn" @click="openFile">فتح مشروع</button>
    </div>

    <!-- لا يوجد مشروع -->
    <div v-if="!project" class="empty">
      <p>لا يوجد مشروع مفتوح</p>
    </div>

    <!-- يوجد مشروع -->
    <div v-else>

      <h1 class="title">{{ project.name }}</h1>

      <!-- ⭐ نمط البطاقات -->
      <CardsView
        v-if="viewMode === 'cards'"
        :version="currentVersion"
      />


      <!-- ⭐ نمط الشجرة -->
      <TreeView v-if="viewMode === 'tree'" />

    </div>

  </div>
</template>


<script setup lang="ts">
import { ref, computed } from 'vue'
import { useRouter } from 'vue-router'

import CardsView from './focus/CardsView.vue'
import TreeView from './tree/TreeView.vue'

const router = useRouter()
function goBack() {
  router.back()
}

const project = ref<any>(null)
const viewMode = ref<"cards" | "graph" | "tree">("cards")
const selectedVersionId = ref<string | null>(null)

   const showModels = ref(false)

const modelFiles = [
  "thagafia.json",
  "test.json",
  "exam.json",
  "c4.json",
  "aqari.json"
]

function toggleModels() {
  showModels.value = !showModels.value
}

function openModel(file: string) {
  fetch(`/files/${file}`)
    .then(res => res.json())
    .then(json => {
      project.value = json
      selectedVersionId.value =
        json.currentVersionId || (json.versions?.[0]?.id ?? null)
    })
    .catch(() => alert("تعذر فتح النموذج"))
}

function downloadModel(file: string) {
  const link = document.createElement("a")
  link.href = `/files/${file}`
  link.download = file
  link.click()
}

const currentVersion = computed(() => {
  if (!project.value) return null
  const versions: any[] = project.value.versions || []
  if (!versions.length) return null
  const version = versions.find((v: any) => v.id === selectedVersionId.value)
  return version || versions[0] || null
})

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
      project.value = json
      selectedVersionId.value = json.currentVersionId || (json.versions?.[0]?.id ?? null)
    } catch (err) {
      alert('الملف ليس JSON صالح')
    }
  }

 
  input.click()
}
</script>


<style scoped>
.viewer {
  padding: 20px;
}

.header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 15px;

  background: #fff;
  border: 1px solid #ddd;
  border-radius: 12px;

  padding: 12px 18px;
  margin-bottom: 25px;

  box-shadow: 0 2px 6px rgba(0,0,0,0.06);
}

/* أزرار الشريط */
.back-btn,
.open-btn,
.view-btn {
  background: #fff;
  border: 1px solid #ccc;
  padding: 8px 14px;
  border-radius: 8px;
  cursor: pointer;
  transition: 0.2s;
}

.back-btn:hover,
.open-btn:hover,
.view-btn:hover {
  background: #000;
  color: #fff;
}

/* زر النمط النشط */
.view-btn.active {
  background: #000;
  color: #fff;
}

/* مجموعة الأنماط */
.view-modes {
  display: flex;
  gap: 10px;
}

/* صندوق اختيار الإصدار */
.version-switcher {
  display: flex;
  align-items: center;
  gap: 8px;
}

.version-switcher label {
  font-size: 14px;
  color: #444;
}

.version-switcher select {
  padding: 8px 12px;
  font-size: 14px;
  background: #fff;
  border: 1px solid #ccc;
  border-radius: 8px;
  cursor: pointer;
  transition: 0.2s;
}

.version-switcher select:hover {
  border-color: #000;
}

.models-wrapper {
  position: relative;
}

.models-btn {
  background: #fff;
  border: 1px solid #ccc;
  padding: 8px 14px;
  border-radius: 8px;
  cursor: pointer;
  transition: 0.2s;
}

.models-btn:hover {
  background: #000;
  color: #fff;
}

.models-dropdown {
  position: absolute;
  top: 45px;
  right: 0;
  background: #fff;
  border: 1px solid #ddd;
  border-radius: 10px;
  padding: 10px;
  width: 240px;
  box-shadow: 0 4px 12px rgba(0,0,0,0.1);
  z-index: 10;
}

.model-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 6px 0;
  border-bottom: 1px solid #eee;
}

.model-actions button {
  margin-left: 6px;
  padding: 4px 8px;
  font-size: 12px;
  border-radius: 6px;
  border: 1px solid #ccc;
  background: #fff;
  cursor: pointer;
}

.model-actions button:hover {
  background: #000;
  color: #fff;
}

</style>
