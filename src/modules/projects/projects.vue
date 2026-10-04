<template>
  <MainLayout>
    <div class="page">

      <!-- فتح مشروع من الجهاز -->
      <Open @load="importExternalProject" @error="showError" />

      <!-- قائمة المشاريع -->
      <ModelsList
        :models="store.models"
        @open="editProject"
        @preview="previewProject"   
        @download="downloadModel"
        @delete="store.deleteModel"
      />

    </div>
  </MainLayout>
</template>

<script setup lang="ts">
import MainLayout from '../../layout/MainLayout.vue'
import ModelsList from './components/ModelsList.vue'
import Open from './components/open.vue'

import { useProjectsStore } from '../../core/stores/useProjectsStore.ts'
import { useEditorProjectsStore } from '@/core/stores/useEditorProjectsStore'
import { useRouter } from 'vue-router'
import type { ProjectSchemaV2 } from '@/core/schema/projectSchemaV2'

// ستور المشاريع
const store = useProjectsStore()
store.loadProjects()

// ستور المحرّر
const editor = useEditorProjectsStore()

// الراوتر
const router = useRouter()

/* فتح مشروع */
function importExternalProject(project: any) {
  store.addExternalProject(project)
}

/* إشعار الخطأ */
function showError(msg: string) {
  alert(msg)
}

/* تحرير المشروع */
function editProject(id: string) {
  editor.openProject(id)
  editor.activateProject(id)
  router.push('/workspace')
}

/* تحميل المشروع */
function downloadModel(project: ProjectSchemaV2) {
  const json = JSON.stringify(project, null, 2)
  const blob = new Blob([json], { type: "application/json" })
  const url = URL.createObjectURL(blob)
  const a = document.createElement("a")
  a.href = url
  a.download = `${project.name}.json`
  a.click()
  URL.revokeObjectURL(url)
}

function previewProject(id: string) {
  editor.openProject(id)
  editor.activateProject(id)
  router.push('/viewer')   // 👈 يفتح صفحة العرض
}

</script>

<style scoped>
.page {
  background: #fff;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  padding: 40px 20px;
  font-family: 'Tajawal', sans-serif;
}
</style>
