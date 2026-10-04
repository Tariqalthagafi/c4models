<template>
  <!-- لو ما فيه مشروع مفتوح -->
  <div v-if="!editor.activeProject" class="empty-palette">
    لا يوجد مشروع مفتوح
  </div>

  <!-- لو فيه مشروع مفتوح -->
  <div v-else class="palette-wrapper">

    <!-- زر الفتح والإغلاق -->
    <button class="toggle-btn" @click="isOpen = !isOpen">
      {{ isOpen ? 'إخفاء الأدوات ⮝' : 'إظهار الأدوات ⮟' }}
    </button>

    <!-- الباليتة -->
    <div class="panel" :class="{ closed: !isOpen }">

      <!-- التابات -->
      <div class="tabs">
        <button
          :class="{ active: activeTab === 'shapes' }"
          @click="activeTab = 'shapes'"
        >
          العناصر
        </button>

        <button
          :class="{ active: activeTab === 'Tech' }"
          @click="activeTab = 'Tech'"
        >
          التقنيات
        </button>
      </div>

      <!-- المحتوى -->
      <div class="content">
        <Shapes v-if="activeTab === 'shapes'" />
        <Tech v-if="activeTab === 'Tech'" />
      </div>

    </div>

  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useEditorProjectsStore } from '@/core/stores/useEditorProjectsStore'

import Shapes from './Shapes.vue'
import Tech from './Tech.vue'

const editor = useEditorProjectsStore()

const activeTab = ref('shapes')
const isOpen = ref(true)
</script>

<style scoped>
.palette-wrapper {
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
}

/* شاشة فارغة */
.empty-palette {
  padding: 20px;
  text-align: center;
  color: #777;
  font-size: 16px;
}

/* زر الفتح والإغلاق */
.toggle-btn {
  background: #eee;
  border: 1px solid #ddd;
  padding: 8px 12px;
  border-radius: 0;
  cursor: pointer;
  font-size: 14px;
}

/* الباليتة */
.panel {
  background: #fff;
  border: 1px solid #ddd;
  border-radius: 0;
  padding: 10px;
  height: 100%;
  overflow-y: auto;
  transition: max-height 0.3s ease;
  max-height: 100%;
}

.panel.closed {
  height: 0;
  padding: 0;
  border: none;
}

/* التابات */
.tabs {
  display: flex;
  justify-content: center;
  gap: 10px;
  margin-bottom: 10px;
}

.tabs button {
  padding: 6px 14px;
  border-radius: 6px;
  border: none;
  cursor: pointer;
  background: #f0f0f0;
  font-weight: bold;
  transition: 0.2s;
}

.tabs button.active {
  background: #000;
  color: #fff;
}

/* المحتوى */
.content {
  width: 100%;
}
</style>
