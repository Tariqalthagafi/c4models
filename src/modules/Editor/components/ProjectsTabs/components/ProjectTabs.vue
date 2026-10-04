<template>
  <div class="projects-tabs-container">
    <!-- شريط التابات -->
    <div class="project-tabs">

      <!-- التابات المفتوحة -->
      <div
        v-for="p in projects"
        :key="p.id"
        class="tab"
        :class="{ active: activeProject === p.id }"
      >
        <!-- تفعيل المشروع عند الضغط -->
        <span class="name" @click="activate(p.id)">
          {{ p.name }}
        </span>

        <!-- إغلاق التاب -->
        <span class="close" @click.stop="close(p.id)"> × </span>
      </div>

      <!-- زر إضافة مشروع -->
      <div class="tab add" @click="createNew">
        <img class="add-icon" src="../icons/add.svg" alt="add" />
      </div>

    </div>
  </div>
</template>

<script setup lang="ts">
import { useEditorProjectsStore } from '@/core/stores/useEditorProjectsStore'
import { useProjectCreationStore } from '@/core/stores/useProjectCreationStore'

const editor = useEditorProjectsStore()
const creator = useProjectCreationStore()

defineProps<{
  projects: any[]
  activeProject: string | null
}>()

/* تفعيل مشروع عند الضغط على التاب */
function activate(id: string) {
  editor.activateProject(id)
}

/* إغلاق مشروع */
function close(id: string) {
  editor.closeProject(id)
}

/* إنشاء مشروع جديد */
async function createNew() {
  await creator.createNewProject()
}
</script>

<style scoped>
.projects-tabs-container {
  position: relative;
}

/* شريط التابات */
.project-tabs {
  display: flex;
  gap: 8px;
  padding: 4px 10px 0px;
  background: #f7f7f7;
  border-top: 1px solid #ddd;
  position: sticky;
  bottom: 0;
  width: 100%;
}

/* التاب */
.tab {
  padding: 6px 12px;
  background: #e5e5e5;
  border-radius: 6px;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 6px;
  transition: 0.2s;
  color: #333;
}

/* التاب النشط */
.tab.active {
  background: #007bff;
  color: #fff;
}

/* زر الإغلاق */
.close {
  font-weight: bold;
  cursor: pointer;
  opacity: 0.7;
}
.close:hover {
  opacity: 1;
}

/* زر إضافة مشروع */
.tab.add {
  background: #e5e5e5;
  padding: 6px 10px;
}

.add-icon {
  width: 20px;
  height: 20px;
}
</style>
